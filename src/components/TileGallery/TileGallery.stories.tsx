import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { TileGallery } from "./TileGallery";
import { TileGalleryProps } from "./TileGallery.types";

const meta: Meta<typeof TileGallery> = {
    component: TileGallery,
    title: "gle-r3f-components/TileGallery",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TileGallery>;

const TileGalleryContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const StoryTemplate = (args: TileGalleryProps) => {
    return (
        <TileGalleryContainer>
            <TileGallery urls={args.urls}/>
        </TileGalleryContainer>
    )
};

export const Default: Story = (args: TileGalleryProps) => (
    <StoryTemplate {...args}/>
);

Default.args = {
    urls: [
        './images/inmanperkcoffee/gainesville/Chalkboard.png',
        './images/inmanperkcoffee/gainesville/Seating1.png',
        './images/inmanperkcoffee/inmanpark/Rosetta.png',
        './images/inmanperkcoffee/inmanpark/Seating1.png',
        './images/inmanperkcoffee/inmanpark/Seating2.png'
    ]
};