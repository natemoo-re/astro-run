import type { AstroIntegration, RouteData } from 'astro';
import { $ } from 'zx/core';

export interface Options {
    prebuild?: (info: { $: typeof $, command: 'dev' | 'build', isRestart: boolean }) => void | Promise<void>;
    postbuild?: (args: { $: typeof $, dir: URL, routes: RouteData[] }) => void | Promise<void>;
}

async function noop() {}

export default function run({ prebuild = noop, postbuild = noop }: Options): AstroIntegration {
    return {
        name: 'astro-run',
        hooks: {
            async 'astro:config:setup'({ command, isRestart }) {
                if (command !== 'dev' && command !== 'build') return;
                await prebuild({ $, command, isRestart });
            },
            async 'astro:build:done'({ dir, routes }) {
                await postbuild({ $, dir, routes });
            }
        }
    }
}
