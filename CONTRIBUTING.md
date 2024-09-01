# Tolosat Website Contribution Guide

## ⚡ Getting Started

### ⚙️ Requirements

First, you need to install the requirements. You need to install the latest
Node.js version and npm to run the website. You can download both
[here](https://nodejs.org/en/download/package-manager).

Then I recommend using [VSCode](https://code.visualstudio.com/). You can get
autocompletion and others improvements by installing **workspace recommended
extensions**.

### ⚒️ Run the project

Open your terminal in the folder of your choice and enter the following lines:

1. Clone or download the repository on your machine

        git clone <repository-link>

2. Once in the repository folder install all the dependencies

        npm install

3. Run locally the website in your browser

        npm run dev -- --open

You should have the website opening in your default browser 👍.

> [!IMPORTANT]
> If you use **pnpm** (which I recommend), just replace `npm` with
> `pnpm`. For example: `pnpm install`.

### 📖 Useful resources

If you are new to Git and Github, I recommend watching this
[video](https://www.youtube.com/watch?v=RGOj5yH7evk).

To learn how to write markdown use this
[guide](https://www.markdownguide.org/cheat-sheet/).

If you are new to web development, you need to learn HTML, CSS and Javascript.
There is a lot of resources but I recommend this
[video](https://www.youtube.com/watch?v=zJSY8tbf_ys&t=71834s).

## 🔧 Sveltekit Framework

SvelteKit is a very popular framework with a growing community. It is quite easy
to understand and very fast compared to **React**.

If you are new to Sveltekit, you can refer to their documentation and their very
well-made tutorial [here](https://kit.svelte.dev/).

## 📐 Commit Convention

The commits follow this convention:

    <type>[optional scope]: <description>

<!-- prettier-ignore -->
| Type | Description |
| --- | --- |
| feat | A new feature is introduced with the changes |
| fix | A bug fix has occurred |
| chore | Changes that do not relate to a fix or feature and don't modify src files (for example updating dependencies) |
| refactor | Refactored code that neither fixes a bug nor adds a feature |
| docs | Updates to documentation such as a the README or other markdown files |
| style | Changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on. |

> [!TIP]
> You can also add in parenthesis the scope of the commit just after the
> type.

I strongly recommend
[better-commits](https://github.com/Everduin94/better-commits), a CLI tool to
automate GitHub commits.

> [!WARNING]
> The commit should be all lowercase with a succinct descriptions.

### Exemples

- `fix: prevent screen flickering on theme change`
- `feat(lang): add french language`
- `docs: correct spelling of TOLOSAT`
