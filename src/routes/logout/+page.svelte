<script>
    import { onMount } from 'svelte';

    onMount(async () => {
        const response = await fetch('?/logout', {
            method: 'POST',
            accept: 'application/json',
            body: new FormData()
        });

        window.location.href = '/login';
    });
</script>