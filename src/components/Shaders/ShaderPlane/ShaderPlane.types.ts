import { ShaderMaterial } from "three";
import { PlaneGeometryProps, RenderCallback } from "@react-three/fiber";

export interface ShaderPlaneProps extends PlaneGeometryProps {
    shaderMaterial: ShaderMaterial
    renderCallback: RenderCallback
}