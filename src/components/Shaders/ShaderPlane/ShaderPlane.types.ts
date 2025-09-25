import { ShaderMaterial, Vector3 } from "three";
import { RenderCallback } from "@react-three/fiber";

export interface ShaderPlaneProps {
    shaderMaterial: ShaderMaterial
    renderCallback: RenderCallback,
  vertices?: Vector3[];
}