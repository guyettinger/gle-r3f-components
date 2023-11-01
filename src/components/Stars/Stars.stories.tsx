import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { StarsProps } from "./Stars.types";
import { Stars } from "./Stars";
import { CanvasBackground } from "../CanvasBackground";

const meta: Meta<typeof Stars> = {
    component: Stars,
    title: "gle-r3f-components/Stars",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Stars>;

const StarsContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Default: Story = (args: StarsProps) => {
    return (
        <StarsContainer>
            <CanvasBackground>
                <Stars/>
            </CanvasBackground>
        </StarsContainer>
    )
}

Default.args = {};