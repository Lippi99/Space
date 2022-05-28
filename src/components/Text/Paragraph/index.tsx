import { TextProps } from "../interfaces";
import { Description } from "./styles";

export const Paragraph = ({ color, fontSize, text }: TextProps) => {
  return (
    <Description color={color} fontSize={fontSize}>
      {text}
    </Description>
  );
};
