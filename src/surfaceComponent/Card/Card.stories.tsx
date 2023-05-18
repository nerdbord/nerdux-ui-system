import { Card, CardImage, CardContent } from "./Card";
import * as React from "react";
import { Button } from "../../inputs";
import imageUrl from "../../assets/card/card.png";
import PropTypes, { InferProps } from "prop-types";

interface CardStoryProps {
  fullWidth?: boolean;
}

const Default: React.FC<InferProps<CardStoryProps>> = ({ fullWidth }) => {
  return (
    <Card fullWidth={fullWidth}>
      <CardImage url={imageUrl} />
      <CardContent>
        <h3>Card Name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          architecto, autem distinctio dolorem, dolores, esse facere incidunt
          odio officia quasi similique sunt totam unde ut veritatis. A, amet
          aperiam architecto assumenda aut autem commodi consequatur deleniti
          dolorem enim esse excepturi harum illum iure labore minus, modi
          molestiae natus nesciunt non recusandae rem saepe sapiente sint
          temporibus ut vero voluptate. Consequuntur ducimus eius et praesentium
          recusandae. Dolore eaque eius eum excepturi expedita in ipsum laborum
          maiores necessitatibus perspiciatis? Autem beatae, culpa delectus
          dignissimos, dolorem doloremque eaque hic nemo nobis omnis possimus
          quae sint, sit vel veniam! Dignissimos doloribus laudantium provident
          veritatis.
        </p>
        <Button
          onClick={() => {
            console.log("Primary button clicked");
          }}
          variant={"primary"}
        >
          Click!
        </Button>
        <Button
          onClick={() => {
            console.log("Secondary button clicked");
          }}
          variant={"secondary"}
        >
          DO NOT CLICK ME!
        </Button>
      </CardContent>
    </Card>
  );
};

Default.propTypes = {
  fullWidth: PropTypes.bool,
};

export { Default };
