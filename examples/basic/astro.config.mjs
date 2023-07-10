import { defineConfig } from 'astro/config'
import run from 'astro-run';

// https://astro.build/config
export default defineConfig({
    integrations: [
        run({
            async prebuild({ $, command, isRestart }) {
                if (isRestart) return;
                await $`echo ${command}`;
            },
            async postbuild({ $ }) {
                await $`echo ${"done"}`
            }
        })
    ]
});
