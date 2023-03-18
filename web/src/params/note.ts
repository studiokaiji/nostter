import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	return /^note1[a-z0-9]+$/.test(param);
}) satisfies ParamMatcher;
