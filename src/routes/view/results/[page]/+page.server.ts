
import type {Answer, Question, Survey} from '$lib';
import {error, fail} from '@sveltejs/kit';
import type { Actions, PageLoad, PageServerLoad } from './$types';
import Pocketbase, {type RecordModel} from "pocketbase";

export const actions = {
	see_answers: async ({ request, params }) => {
		const data = await request.formData();
		const password = data.get("password");
		const pb = new Pocketbase("http://127.0.0.1:8090");

		const survey: Survey = await pb.collection("surveys").getOne(params.page);
		if (survey.password === password) {
			try {
				const questions: { id: string, question: string, answers: string[] }[] = []

				for (const question of survey.questions) {
					const q: Question = await pb.collection("questions").getOne(question);
					const answers: string[] = [];

					for (const answer_id of q.answers) {
						const a: Answer = await pb.collection("answers").getOne(answer_id);
						answers.push(a.answer);
					}

					questions.push({ 
						id: q.id, 
						question: q.question, 
						answers: answers 
					});
				}

				return { questions: questions };
			} catch (err: any) {
				return fail(422, { err: err.toString() });
			}
		} else {
			return fail(422, { err: "Incorrect password." });
		}
	}
} satisfies Actions;

export async function load({ params }) {
	const pb = new Pocketbase("http://127.0.0.1:8090");
	try {
		await pb.collection("surveys").getOne(params.page);
	} catch (err) {
		throw error(404, "Cannot find your form here.");
	}
}
