<div>
    <div class="textContainer">
        <h1>Welcome To aCardGame</h1>
        <h2>Login or register an account to get started</h2>
        <h3>shown below is a user obtainable card</h3>
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
        padding-top: 50px;
        display: flex;
        flex-direction: column;
    }

    .textContainer {
        padding-top: 50px;
        padding-left: 50px;
        padding-right: 50px;
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

        h3 {
            font-family: 'Roboto';
            font-size: 20px;
            color: #fff;
        }
    }

    .card2D {
        width: 100%;
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        justify-content: center;
    }
</style>