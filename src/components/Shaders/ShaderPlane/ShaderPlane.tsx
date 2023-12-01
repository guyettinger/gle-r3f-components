import { useFrame, useThree } from "@react-three/fiber";
import { ShaderPlaneProps } from "./ShaderPlane.types";

export const ShaderPlane = ({shaderMaterial, renderCallback, ...planeGeometryProps}: ShaderPlaneProps) => {

    const {viewport} = useThree()

    useFrame(renderCallback)

    return (
        <mesh material={shaderMaterial}>
            <planeGeometry attach="geometry" args={[viewport.width, viewport.height]} {...planeGeometryProps} />
        </mesh>
    )
};