<div>
    <div class="textContainer">
        <h1>Welcome {data?.user.username}</h1>
        <h2>Here is one of your cards</h2>
    </div>
    {#if card?.id}
        <div class="cardContainer">
            <div class="canvasDiv">
                <Card3D card={card} />
            </div>
        </div>
    {/if}
    
</div>

<script>
    import Card3D from '$lib/components/Card3D.svelte'

    export let data
    const card = data.cardData
</script>

<style lang="less">
    .canvasDiv {
        width: 80%;
        height: 1000px;
        margin: 0 auto;
    }

    .cardContainer {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
    }

    .textContainer {
        padding-top: 50px;
        text-align: center;

        h1 {
            font-family: 'Roboto';
            font-size: 50px;
            color: #fff;
        }

        h2 {
            font-family: 'Roboto';
            font-size: 30px;
            color: #fff;
        }
    }
</style>