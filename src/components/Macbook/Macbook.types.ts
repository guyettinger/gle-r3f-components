import { ReactNode } from "react";
import { Mesh, MeshStandardMaterial } from "three";

export interface MacbookMeshProps {
    meshPath?: string
    children: ReactNode
}

export interface MacbookProps {
    meshPath?: string
    children: ReactNode
}

export interface DreiGLTF {
    nodes: Record<string, Mesh>
    materials: Record<string, MeshStandardMaterial>
}