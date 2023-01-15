{#if type === 'textarea'}
    <textarea {name} placeholder={placeholder} />
{:else}
    <input {name} type={type} placeholder={placeholder} />
{/if}

<script>
    export let type;
    export let placeholder;
    export let name;
</script>

<style lang="less">

    input {
        display: inline-block;
        padding: 10px 20px;
        background-color: var(--paper-color);
        color: #fff;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;
        font-family: 'Roboto';
        font-weight: 400;
    }

    input:hover {
        background-color: var(--primary-color);
    }

    input:active {
        background-color: var(--primary-color);
        filter: brightness(0.6);
    }

</style>