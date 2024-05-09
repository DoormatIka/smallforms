
import type { Actions, LayoutServerData } from './$types';
import {redirect} from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("id");
		if (id) {
			redirect(303, `/view/${id}/`);
		}
	},
} satisfies Actions;
