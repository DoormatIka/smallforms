
import type {Question, Survey} from '$lib';
import type { Actions, PageLoad, PageServerLoad } from './$types';
import {redirect} from '@sveltejs/kit';
import { fail, error } from '@sveltejs/kit';
import Pocketbase, {type RecordModel} from "pocketbase";

export const actions = {
	send_answers: async ({ request }) => {
		const pb = new Pocketbase("http://127.0.0.1:8090");
		const question_data = await request.formData();

		for (const [id, formdata] of question_data.entries()) {
			if (formdata.toString().length <= 0) {
				return fail(422, { error: "An empty field in one of the questions!" })
			}
			try {
				const answer = await pb.collection("answers").create({ answer: formdata.toString() });
				const question = await pb.collection("questions").update(id, { "answers+": answer.id })
			} catch (error: any) {
				console.log(error);
				return fail(422, {error: error.toString()});
			}
		}
		
		redirect(300, "/");
	},
} satisfies Actions;


export const load: PageServerLoad = async ({ params }) => {
	const pb = new Pocketbase("http://127.0.0.1:8090");

	try {
		const survey: Survey = await pb.collection("surveys").getOne(params.page);
		const questions: { id: string, q: string }[] = [];

		for (const question_id of survey.questions) {
			const q: Question = await pb.collection("questions").getOne(question_id);
			questions.push({ id: q.id, q: q.question });
		}

		return {
			title: survey.title,
			questions: questions,
		};
	} catch (err) {
		throw error(404, "Cannot find your form here.");
	}
};


