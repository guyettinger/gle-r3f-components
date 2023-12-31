import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import { Group, MathUtils } from "three";
import styled from "styled-components";
import { DreiGLTF, MacbookMeshProps, MacbookProps } from "./Macbook.types";

const MacbookModel = ({meshPath = '/meshes/macbook/mac-draco.glb', children}: MacbookMeshProps) => {
    const groupRef = useRef<Group>(null)
    // Load model
    const gltf = useGLTF(meshPath, true)
    console.log("GLTF", gltf)
    let {nodes, materials} = (gltf as any) as DreiGLTF
    // Make it float
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        const group = groupRef.current
        if (!group) return

        group.rotation.x = MathUtils.lerp(group.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
        group.rotation.y = MathUtils.lerp(group.rotation.y, Math.sin(t / 4) / 20, 0.1)
        group.rotation.z = MathUtils.lerp(group.rotation.z, Math.sin(t / 8) / 20, 0.1)
        group.position.y = MathUtils.lerp(group.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
    })
    // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
    return (
        <group ref={groupRef} dispose={null}>
            <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry}/>
                    <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry}/>
                    <mesh geometry={nodes['Cube008_2'].geometry}>
                        <Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform
                              occlude>
                            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                                {children}
                            </div>
                        </Html>
                    </mesh>
                </group>
            </group>
            <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]}/>
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry}/>
                <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry}/>
            </group>
            <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]}/>
        </group>
    )
}

const MacbookContainer = styled.div`
  width: 100%;
  height: 100%;

  .content {
    margin-top: 27px;
    width: 334px;
    height: 216px;
    border-radius: 3px;
    overflow-y: auto;
    padding: 0;
  }

  .wrapper {
    padding: 10px;
    width: 668px;
    height: 432px;
    transform: scale(0.5);
    transform-origin: top left;
  }
`

export const Macbook = ({meshPath = '/meshes/macbook/mac-draco.glb', children}: MacbookProps) => {
    return (
        <MacbookContainer>
            <Canvas camera={{position: [-5, 0, -15], fov: 55}}>
                <pointLight position={[10, 10, 10]} intensity={1.5}/>
                <Suspense fallback={null}>
                    <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
                        <MacbookModel meshPath={meshPath}>{children}</MacbookModel>
                    </group>
                    <Environment preset="city"/>
                </Suspense>
                <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5}/>
                <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2}
                               maxPolarAngle={Math.PI / 2.2}/>
            </Canvas>
        </MacbookContainer>
    )
}