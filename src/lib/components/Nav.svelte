<nav>

    <div class="left">
        <h1>
            <a href="/">
                <img src="/assets/logo.png" alt="logo" />
            </a>
        </h1>
    </div>

    <div class="right">
        {#if Data?.user && Data?.user.username}
        <Button type="link" href="/new">New</Button>
        <Button type="link" href="/dashboard">Dashboard</Button>
            <Button type="link" href="/logout">Logout</Button>
        {:else}
            <Button type="link" href="/login">Login</Button>
            <Button type="link" href="/register">Register</Button>
        {/if}
    </div>

</nav>

<script>
    import Button from '$lib/components/Button.svelte'
    export let Data

    async function handleLogout() {

        const response = await fetch('/logout', {
            method: 'POST',
            accept: 'application/json',
        });

        return {
            logout: true
        }

    }
</script>

<style lang="less">

    nav {
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;

        .left {
            display: flex;
            align-items: center;
            padding-left: 20px;

            img {
                height: 30px;
                width: auto;
            }
        }

        .right {
            display: flex;
            align-items: center;
            padding-right: 20px;
            gap: 10px;
        }
    }

</style>