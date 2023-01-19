<div class="canvas">
    <Card3D card={card} />
</div>

<script>
    import Card3D from "$lib/components/Card3D.svelte";
    export let data
    let card = data.cardData

</script>

<style lang="less">
    .canvas {
        width: 100%;
        height: ~"calc(100vh - 50px)";
    }
</style>