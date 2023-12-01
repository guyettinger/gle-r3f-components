import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { RootState } from "@react-three/fiber";
import { ShaderCanvas } from "./ShaderCanvas";
import { PortalMaterial } from "../PortalMaterial";

const meta: Meta<typeof ShaderCanvas> = {
    component: ShaderCanvas,
    title: "gle-r3f-components/ShaderCanvas",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ShaderCanvas>;

const ShaderCanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const PortalShader: Story = (args: any) => {
    const shaderMaterial = new PortalMaterial()
    const renderCallback = (state: RootState, delta: number) => {
        shaderMaterial.uniforms.uTime.value += delta
    }

    return (
        <ShaderCanvasContainer>
            <ShaderCanvas shaderMaterial={shaderMaterial} renderCallback={renderCallback}/>
        </ShaderCanvasContainer>
    );
}

PortalShader.args = {};