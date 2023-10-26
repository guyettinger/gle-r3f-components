import { Vector3Tuple } from "three";

export interface TileGalleryState {
    focusedIndex: number | null,
    focusedImage: any | null,
    urls: string[]
}

export interface TileProps {
    index: number,
    position: Vector3Tuple,
    scale: Vector3Tuple,
    url: string,
    onTileClick: (index: number, image: any) => void
    tileGalleryState: TileGalleryState
}

export interface TileListProps {
    w?: number,
    gap?: number,
    onTileClick: (index: number, image: any) => void
    tileGalleryState: TileGalleryState
}

export interface TileGalleryProps {
    urls?: string[]
}