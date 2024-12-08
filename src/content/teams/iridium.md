
---
title: "Iridium"
logo: "iridium.jpg"
---

# Big title

## Contents

## Intro

This is my first post!

## Let's get started

Lorem ipsum dolor sit amet...

```js
import { error } from "@sveltejs/kit"
import type { ServerLoadEvent } from "@sveltejs/kit"

export const load = async ({ params }: ServerLoadEvent) => {
    try {
        const post = await import(`../../../posts/${params.slug}.md`)

        return {
            content: post.default,
            meta: post.metadata,
        }
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }
}
```
