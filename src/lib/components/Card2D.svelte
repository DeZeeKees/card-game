<div style={`width: ${width}px; height: ${(width / 9 * 14)}px;`}>
    <div class="card" style={`border: 5px solid ${card.color.border}; background-color: ${card.color.background};`}>
        <img class="cardImage" src={cardImage} alt="cardImage2d" />
        <div class="textDivTop">
            <h1 class={`${card.color.text} h1`}>{card.name}</h1>
            <p class={`${card.color.text} descTitle`}>Description:</p>
            <p class={`${card.color.text} p1`}>{card.description}</p>
        </div>
        <div class="grid">
            <div class="gridItem1">
                <p class={`${card.color.text} p2`}>Types:</p>
                {#each card.types as type}
                    <p class={`${card.color.text} p2`}>{type}</p>
                {/each}
            </div>
            <div class="gridItem2">
                <p class={`${card.color.text} p2`}>Cost: {card.cost}</p>
                <p class={`${card.color.text} p2`}>Attack: {card.attack}</p>
                <p class={`${card.color.text} p2`}>Health: {card.health}</p>
                <p class={`${card.color.text} p2`}>Rarity: {card.rarity}</p>
            </div>
        </div>
    </div>
</div>

<script>
    export let card
    export let width

    let cardImage = `http://localhost:8090/api/files/cards/${card.id}/${card.image}`
</script>

<style lang="less">

    .card {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 30px;
        user-select: none;
        height: fit-content;
    }
    
    .cardImage {
        aspect-ratio: 6/5;
        width: 100%;
        object-fit: cover;
    }

    .textDivTop {
        width: 100%;
    }

    .text { 
        font-family: 'Roboto';
        color: #fff;
    }

    .textBlack {
        font-family: 'Roboto';
        color: #000;
    }

    .h1 {
        margin: 0;
        padding-left: 15px;
    }

    .descTitle {
        margin: 0;
        padding-left: 15px;
        padding-top: 5px;
    }

    .p1 {
        margin: 0;
        height: 40px;
        padding-left: 15px;
        padding-top: 5px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .p2 {
        margin: 0;
        padding-left: 15px;
        padding-top: 5px;
    }

    .grid {
        max-height: 100px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:
            "gridItem1 gridItem2"
            "gridItem1 gridItem2"
            "gridItem1 gridItem2";
    }

</style>