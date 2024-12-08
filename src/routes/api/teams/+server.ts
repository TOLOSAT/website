import { json } from '@sveltejs/kit'

interface Team {
	title: string
	logo: string
	slug: string
}

async function getTeams() {
	let teams: Team[] = []

	const paths = import.meta.glob('/src/content/teams/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Team, 'slug'>
			const team = { ...metadata, slug } satisfies Team
			teams.push(team)
		}
	}

	return teams
}

export async function GET() {
	const teams = await getTeams()
	return json(teams)
}

export const prerender = true

