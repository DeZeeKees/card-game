<div>
    {#if card?.id}
        <div class="">
            <div>



            </div>
            <div class="canvasDiv">
                <Card3D />
            </div>
        </div>
    {/if}
    
</div>

<script>
    import Card from "$lib/classes/Card.js"
    import Card3D from '$lib/components/Card3D.svelte'

    export let data
    const cardData = data.cardData
    const card = new Card(cardData)

</script>

<style lang="less">
    .canvasDiv {
        width: 50%;
        height: 500px;
        float: right;
    }
</style>