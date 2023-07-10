# astro-run 🏃

This **[Astro integration](https://docs.astro.build/en/guides/integrations-guide/)** exposes user-friendly hooks into the `astro` build process using [`zx`](https://github.com/google/zx).

- <strong>[Installation](#installation)</strong>
- <strong>[Usage](#usage)</strong>

## Installation

### Quick Install

The `astro add` command-line tool automates the installation for you. Run one of the following commands in a new terminal window. (If you aren't sure which package manager you're using, run the first command.) Then, follow the prompts, and type "y" in the terminal (meaning "yes") for each one.

```sh
# Using NPM
npx astro add astro-run
# Using Yarn
yarn astro add astro-run
# Using PNPM
pnpm astro add astro-run
```

If you run into any issues, [feel free to report them to us on GitHub](https://github.com/natemoo-re/astro-run/issues) and try the manual installation steps below.

### Manual Install

First, install the `astro-run` package using your package manager. If you're using npm or aren't sure, run this in the terminal:

```sh
npm install astro-run
```

Then, apply this integration to your `astro.config.*` file using the `integrations` property:

```js ins={3} "run"
// astro.config.mjs
import { defineConfig } from 'astro/config';
import run from 'astro-run';

export default defineConfig({
  // ...
  integrations: [run()],
});
```

## Usage

With the Astro Run integration, you can start writing powerful `prebuild` and `postbuild` hooks using [`zx`](https://github.com/google/zx).

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import run from 'astro-run';

export default defineConfig({
  integrations: [
    run({
      async prebuild({ $, command, isRestart }) {
        // $ is powered by `zx`
        // See https://github.com/google/zx#command-
        await $`echo "${command}"`;
      },
      async postbuild({ $ }) {
        await $`echo "done!"`;
      },
    }),
  ],
});
```
