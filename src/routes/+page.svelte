{#if data.user?.username}
    <LoggedIn {data}/>
{:else}
    <LoggedOut {data}/>
{/if}


<script>
    import LoggedIn from "$lib/components/home/LoggedIn.svelte";
    import LoggedOut from "$lib/components/home/LoggedOut.svelte";
    export let data
</script>

<style lang="less">



</style>