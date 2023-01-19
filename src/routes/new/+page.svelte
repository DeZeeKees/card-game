<div class="canvas">
    <Canvas>
        <T.PerspectiveCamera makeDefault position={[0, 0, 25]} fov={50} ></T.PerspectiveCamera>
        <T.AmbientLight intensity={0.2} />
        <T.SpotLight position.x={100} position.y={50} position.z={50} intensity={1} />

        {#if card != false}
            <T.Group scale={$scale} position.y={2} rotation.y={cardRotationY}>

                <!-- main card body -->
                <T.Mesh position.z={-0.05} position.y={-2.5}>

                    <T.BoxGeometry args={[9, 14, 0.1]} />
                    <T.MeshStandardMaterial color={card.color.background} />

                </T.Mesh>

                <!-- border-right -->
                <T.Mesh position.z={-0.05} position.y={-2.5} position.x={4.40}>
                    <T.BoxGeometry args={[0.3, 14.2, 0.2]} />
                    <T.MeshStandardMaterial color={card.color.border} />
                </T.Mesh>

                <!-- border-left -->
                <T.Mesh position.z={-0.05} position.y={-2.5} position.x={-4.40}>
                    <T.BoxGeometry args={[0.3, 14.2, 0.2]} />
                    <T.MeshStandardMaterial color={card.color.border} />
                </T.Mesh>

                <!-- border-top -->
                <T.Mesh position.z={-0.05} position.y={4.45} position.x={0}>
                    <T.BoxGeometry args={[9, 0.3, 0.2]} />
                    <T.MeshStandardMaterial color={card.color.border} />
                </T.Mesh>

                <!-- border-bottom -->
                <T.Mesh position.z={-0.05} position.y={-9.45} position.x={0}>
                    <T.BoxGeometry args={[9, 0.3, 0.2]} />
                    <T.MeshStandardMaterial color={card.color.border} />
                </T.Mesh>

                <!-- card photo -->
                <HTML transform occlude position={{ y: 0.5, z: 0.05 }}>
                    <img class="cardImage" src={cardTexture} alt="cardphoto">
                </HTML>

                <!-- card text -->
                <HTML transform occlude position={{ y: -6, z: 0.05 }}>
                    <div class="cardText">
                        <h1 class={`${card.color.text} h1`}>{card.name}</h1>
                        <p class={`${card.color.text} descTitle`}>Description:</p>
                        <p class={`${card.color.text} p1`}>{card.description}</p>
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
                </HTML>

            </T.Group>
        {:else}
            <T.Mesh
                geometry={new BoxGeometry(boxSize, boxSize, boxSize)}
                material={new MeshStandardMaterial({ color: "red" })}
                position={[0, 0, 0]}
                rotation={[0, rotationY, 0]}
                scale={$scale}
            />
        {/if}

    </Canvas>
    <h2 class="cardMessage">
        {data.message}
    </h2>
    <Button onClick={goAgain} Style="position: absolute; bottom: 30px; left: 50%; transform: translate(-50%);" id="newCard">
        Go Again
    </Button>
</div>

<script>
    import { Canvas, T } from "@threlte/core";
    import { HTML } from "@threlte/extras";
    import { onMount } from "svelte";
    import { spring } from "svelte/motion";
    import { BoxGeometry, MeshStandardMaterial } from "three";
    import Button from "$lib/components/Button.svelte";
    import { invalidate } from '$app/navigation'
    export let data;
    let card;
    $: card = data.cardData;
    let cardTexture;
    $: cardTexture = card == false ? "" : `http://localhost:8090/api/files/cards/${card.id}/${card.image}`
    const scale = spring(0)
    let rotationY = 0;
    let boxSize = 0;

    let cardRotationY = 0;
    let rotationSpeed = 0.01;

    let newCardButton;

    //animation loop
    const tick = () => {
        rotationY += 0.01;
        if(boxSize < 5)  boxSize += 0.01;

        if(rotationSpeed > 0.01)
            rotationSpeed -= 0.0001;

        cardRotationY += rotationSpeed;

        if($scale < 1)
            $scale += 0.02
           
        window.requestAnimationFrame(tick);
    }

    //start animation loop
    onMount(() => {
        tick();
        newCardButton = document.getElementById("newCard")
    });

    //reset page
    async function goAgain() {
        newCardButton.disabled = true;
        newCardButton.style.filter = "brightness(0.5)";
        $scale = 0;
        await invalidate("getcard:load");
        card = data.cardData;
        cardTexture = card == false ? "" : `http://localhost:8090/api/files/cards/${card.id}/${card.image}`
        boxSize = 0;   
        rotationSpeed = 0.1; 
        new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
            newCardButton.disabled = false;
            newCardButton.style.filter = "brightness(1)";
        });
    }

</script>

<style>
    .canvas {
        width: 100%;
        height: calc(100vh - 50px);
        position: relative;
    }

    .cardMessage {
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Roboto';
        color: #fff;
        font-size: 30px;
    }

    /* card styles */
    .cardImage {
        width: 300px;
        height: 250px;
        object-fit: cover;
        user-select: none;
        pointer-events: none;
    }

    .cardText {
        width: 300px;
        height: 240px;
        user-select: none;
        pointer-events: none;
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:
            "gridItem1 gridItem2"
            "gridItem1 gridItem2"
            "gridItem1 gridItem2";
    }
</style>