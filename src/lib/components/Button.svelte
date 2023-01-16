{#if type === 'button'}
    <button class="button" style={Style} on:click={onClick}>
        <slot />
    </button>
{:else if type === 'link'}
    <a class="button" style={Style} href={href || '#'} on:click={onClick}>
        <slot />
    </a>
{:else if type === 'link-nobg'}
    <a class="link" style={Style} href={href || '#'} on:click={onClick}>
        <slot />
    </a>
{:else if type === 'submit'}
    <button class="button" style={Style} type="submit" on:click={onClick}>
        <slot />
    </button>
{/if}

<script>
    export let type = 'button';
    export let href = null;
    export let onClick = null;
    export let Style = null;
</script>

<style lang="less">
    .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: var(--paper-color);
        color: #fff;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;
        font-family: 'Roboto';
        font-weight: 400;
        text-decoration: none;
        border: none;
    }

    .button:hover {
        background-color: var(--primary-color);
    }

    .button:active {
        background-color: var(--primary-color);
        filter: brightness(0.6);
    }

    .link {
        display: inline-block;
        padding: 10px 20px;
        background-color: transparent;
        color: #fff;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;
        font-family: 'Roboto';
        font-weight: 400;
        text-decoration: none;
    }

    .link:hover {
        color: var(--primary-color);
        filter: brightness(1.5);
    }

    .link:active {
        color: var(--primary-color);
        filter: brightness(0.6);
    }
</style>