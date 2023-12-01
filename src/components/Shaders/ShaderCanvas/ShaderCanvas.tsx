import { Canvas } from "@react-three/fiber";
import { ShaderCanvasProps } from "./ShaderCanvas.types";
import { ShaderPlane } from "../ShaderPlane";

export const ShaderCanvas = ({renderCallback, ...shaderPlaneProps}: ShaderCanvasProps) => {
    return (
        <Canvas>
            <ShaderPlane renderCallback={renderCallback} {...shaderPlaneProps}/>
        </Canvas>
    )
};