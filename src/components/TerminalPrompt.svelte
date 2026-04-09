<script lang="ts">
    export let commands: string[] = [];

    let displayed = '';
    let commandIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const TYPE_SPEED = 60;
    const DELETE_SPEED = 30;
    const PAUSE_AFTER_TYPE = 2000;
    const PAUSE_AFTER_DELETE = 400;

    function tick() {
        const current = commands[commandIndex] ?? '';

        if (!deleting) {
            if (charIndex < current.length) {
                displayed = current.slice(0, charIndex + 1);
                charIndex++;
                setTimeout(tick, TYPE_SPEED + Math.random() * 40);
            } else {
                setTimeout(() => {
                    deleting = true;
                    tick();
                }, PAUSE_AFTER_TYPE);
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                displayed = current.slice(0, charIndex);
                setTimeout(tick, DELETE_SPEED);
            } else {
                deleting = false;
                commandIndex = (commandIndex + 1) % commands.length;
                setTimeout(tick, PAUSE_AFTER_DELETE);
            }
        }
    }

    import { onMount } from 'svelte';
    onMount(() => {
        if (commands.length > 0) tick();
    });
</script>

<div class="font-mono text-sm text-subtle flex items-center gap-1 mb-2 tracking-tight">
    <span class="text-iris select-none">~/dev</span>
    <span class="text-muted select-none">$</span>
    <span class="text-foam">{displayed}</span>
    <span class="inline-block w-2 h-4 bg-foam align-middle animate-blink"></span>
</div>

<style>
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    .animate-blink {
        animation: blink 1s step-end infinite;
    }
</style>
