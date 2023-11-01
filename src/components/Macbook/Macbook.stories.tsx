import { Meta, StoryObj } from "@storybook/react";
import { Macbook } from "./Macbook";
import { MacbookProps } from "./Macbook.types";
import styled from "styled-components";

const meta: Meta<typeof Macbook> = {
    component: Macbook,
    title: "gle-r3f-components/Macbook",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Macbook>;

const MacbookContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Default: Story = (args: MacbookProps) => {
    return (
        <MacbookContainer>
            <Macbook meshPath={args.meshPath}>
                <h2>Hello World!</h2>
            </Macbook>
        </MacbookContainer>
    );
}

Default.args = {
    meshPath: './meshes/macbook/mac-draco.glb'
};