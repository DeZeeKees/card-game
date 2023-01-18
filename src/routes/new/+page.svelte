<div class="canvas">
    <Canvas>
        <T.PerspectiveCamera makeDefault position={[0, 0, 25]} fov={50} ></T.PerspectiveCamera>
        <T.SpotLight position.x={100} position.y={50} position.z={50} intensity={1.2} />

        <T.Mesh>
            <T.BoxGeometry args={[5, 5, 5]} />
            <T.MeshStandardMaterial color="grey" />
        </T.Mesh>
    </Canvas>
</div>

<script>
    import { Canvas, T, useFrame } from "@threlte/core";
    import { spring } from "svelte/motion";
    //export let data;
    const scale = spring(1)
    let rotationX = 0;

    useFrame(()=> {
        rotationX += 0.01;
    })

</script>

<style>
    .canvas {
        width: 100%;
        height: calc(100vh - 50px);
    }
</style>