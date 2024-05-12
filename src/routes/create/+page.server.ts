
import type { Actions } from './$types';
import {redirect} from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import {nanoid} from 'nanoid';
import Pocketbase from "pocketbase";

export const actions = {
	default: async ({ request }) => {
		// submitting the form to database. how would i even mock the database here?
		const data = await request.formData();
		let title = "";
		let password = "";
		const questions: { id: string, data: string }[] = [];

		for (const [id, formdata] of data.entries()) {
			if (id === "title") {
				title = formdata.toString();
			} else if (id === "password") {
				password = formdata.toString();
			} else {
				questions.push({id: id, data: formdata.toString()});
			}
			if (formdata.toString().length <= 0) {
				return fail(422, { error: "An empty field in one of the questions!" })
			}
		}

		const pb = new Pocketbase("http://127.0.0.1:8090");

		const survey_id = nanoid(15);

		try {
			const question_ids: string[] = [];
			for (const question of questions) {
				const model = await pb
					.collection("questions")
					.create({id: question.id, question: question.data});
				question_ids.push(model.id)
			}
			await pb
				.collection("surveys")
				.create({
					id: survey_id,
					title: title,
					password: password,
					"questions+": question_ids,
				});
		} catch (error) {
			return fail(422, { error: `${error}` });
		}

		redirect(300, `/view/${survey_id}`);
	},
} satisfies Actions;


