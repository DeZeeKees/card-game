<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" />
</svelte:head>

<Nav Data={data} />

<slot />

<script>
    import Nav from '$lib/components/Nav.svelte'
    export let data
</script>

<style lang="less">

    :global(body) {
        margin: 0;
        padding: 0;
        background-color: var(--background-color);
    }

    :global(:root) {
        --background-color: #141617;
        --paper-color: #343434;

        --primary-color: #404258;
    }

</style>