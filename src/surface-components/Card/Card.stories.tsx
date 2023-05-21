import { Card, CardImage, CardContent } from "./Card";
import * as React from "react";
import { Button } from "../../inputs";
import imageUrl from "../../assets/card/card.png";
import PropTypes, { InferProps } from "prop-types";
import { Meta } from "@storybook/react";

export default {
  component: Card,
} as Meta;

interface CardStoryProps {
  fullWidth?: boolean;
}

export const Default: React.FC<InferProps<CardStoryProps>> = ({
  fullWidth,
}) => {
  return (
    <Card fullWidth={fullWidth}>
      <CardImage url={imageUrl} alt={"default alt"} />
      <CardContent>
        <h3>Card Name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aspernatur autem culpa est expedita hic libero provident quis sequi
          vitae!
        </p>
        <div>
          <Button
            onClick={() => {
              console.log("Primary button clicked");
            }}
            variant={"primary"}
          >
            Primary button
          </Button>
          <Button
            onClick={() => {
              console.log("Secondary button clicked");
            }}
            variant={"secondary"}
          >
            Secondary button
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

Default.propTypes = {
  fullWidth: PropTypes.bool,
};
