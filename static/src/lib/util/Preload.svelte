<script lang="ts">
    export let assetsToPreload: Record<string, string[]>;
</script>

<main>
    {#each Object.entries(assetsToPreload) as [type, toPreload]}
        {#each toPreload as href}
            <link rel="preload" as={type} {href}>
        {/each}
    {/each}
</main>