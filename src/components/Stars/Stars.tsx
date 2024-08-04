import { PointMaterial, Points } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as random from 'maath/random'
import { StarsProps } from "./Stars.types";

export const Stars = ({pointColor = "#013062"}: StarsProps) => {
    const ref = useRef(null)
    const [sphere] = useState<Float32Array>(() => random.inSphere(new Float32Array(5000), {radius: 1.5}) as Float32Array)
    useFrame((state, delta) => {
        const points = ref?.current as any
        if (!points) return
        points.rotation.x -= delta / 10
        points.rotation.y -= delta / 15
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial transparent color={pointColor} size={0.005} sizeAttenuation={true} depthWrite={false}/>
            </Points>
        </group>
    )
}