import { error } from '@sveltejs/kit'
import type { ServerLoadEvent } from '@sveltejs/kit'

export const load = async ({ params }: ServerLoadEvent) => {
	try {
		const team = await import(`../../../content/teams/${params.slug}.md`)

		return {
			content: team.default,
			meta: team.metadata,
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}

