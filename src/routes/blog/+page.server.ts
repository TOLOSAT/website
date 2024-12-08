import type { ServerLoadEvent } from "@sveltejs/kit"


interface Post {
    title: string
    slug: string
    description: string
    image?: string
    date: string
    categories: string[]
    published: boolean
}

export async function load({ fetch }: ServerLoadEvent) {
    const response = await fetch("/api/posts")
    const posts: Post[] = await response.json()
    return { posts }
}