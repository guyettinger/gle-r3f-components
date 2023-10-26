import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { CanvasBackgroundProps } from "./CanvasBackground.types";

const BackgroundCanvas = styled(Canvas)`
  position: fixed !important;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #000000, #013062);
`

export const CanvasBackground = ({children}: CanvasBackgroundProps) => {
    return (
        <BackgroundCanvas
            className="gle-background-canvas"
            camera={{position: [0, 0, 1]}}>
            {children}
        </BackgroundCanvas>
    )
}