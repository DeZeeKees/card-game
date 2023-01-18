<div>
    <Button onClick={handleFullscreen} Style="position: absolute; top:0 ; right: 0;">
            Fullscreen
    </Button>
    <Canvas >

        <T.PerspectiveCamera makeDefault position={[0, 0, 25]} fov={50} >
            <OrbitControls />
        </T.PerspectiveCamera>

        <T.SpotLight position.x={100} position.y={50} position.z={50} intensity={1.2} />
        <T.SpotLight position.x={-100} position.y={10} position.z={-50} intensity={0.6} />

        <!-- card group -->
        <T.Group scale={$scale} position.y={2}>

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

        <!-- floor group -->
        <T.Group position.y={-10} rotation.x={Math.PI / -2}>
            <T.Mesh >
                <T.CircleGeometry args={[100, 100]} />
                <T.MeshStandardMaterial color={PlaneColor}/>
            </T.Mesh>
        </T.Group>

    </Canvas>
</div>

<script>
    import { Canvas, OrbitControls, T } from '@threlte/core'
    import { HTML } from '@threlte/extras'
    import { spring } from 'svelte/motion'
    import Button from '$lib/components/Button.svelte'

    const scale = spring(1)

    let PlaneColor = '#343434'

    export let card

    let cardTexture = `http://localhost:8090/api/files/cards/${card.id}/${card.image}`

    function handleFullscreen(e) {
        //check if e.target.parentElement is fullscreen
        if (document.fullscreenElement) {
            document.exitFullscreen()
            e.target.innerText = 'Fullscreen'
        } else {
            e.target.parentElement.requestFullscreen()
            e.target.innerText = 'Exit Fullscreen'
        }
    }
</script>

<style>
    div {
        width: 100%;
        height: 100%;
        position: relative;
        cursor: grab;
    }

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