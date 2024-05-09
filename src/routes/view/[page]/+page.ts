import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
		post: {
			title: `Title for ID ${params.page} goes here`,
			content: `Content for ID ${params.page} goes here`,
		},
	};
};
