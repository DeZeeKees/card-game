<div>
    <Button onClick={handleFullscreen} Style="position: absolute; top:0 ; right: 0;">
            Fullscreen
    </Button>
    <Canvas>

        <T.PerspectiveCamera makeDefault position={[0, 0, 25]} fov={50} >
            <OrbitControls />
        </T.PerspectiveCamera>

        <T.AmbientLight intensity={0.05} />
        <T.DirectionalLight position={[10, 10, 5]} intensity={1} />

        <T.Group scale={$scale}>
            <T.Mesh>

                <T.BoxGeometry args={[9, 16, 0.1]} />
                <T.MeshStandardMaterial color="red" />

            </T.Mesh>
        </T.Group>

    </Canvas>
</div>

<script>
    import { Canvas, OrbitControls, T } from '@threlte/core'
    import { spring } from 'svelte/motion'
    import Button from '$lib/components/Button.svelte'

    const scale = spring(1)

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
    }
</style>