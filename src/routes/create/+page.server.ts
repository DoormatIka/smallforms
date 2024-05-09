
import type { Actions } from './$types';
import {redirect} from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		// submitting the form to database. how would i even mock the database here?
		const data = await request.formData();
		const id = data.get("id");
		if (id) {
			redirect(303, `/view/${id}/`);
		}
	},
} satisfies Actions;
