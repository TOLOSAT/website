import type { ServerLoadEvent } from '@sveltejs/kit'

interface Team {
	title: string
	logo: string
	slug: string
}

export async function load({ fetch }: ServerLoadEvent) {
	const response = await fetch('/api/teams')
	const teams: Team[] = await response.json()
	return { teams }
}

