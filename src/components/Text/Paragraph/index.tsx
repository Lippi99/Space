import { TextProps } from "../interfaces";
import { Description } from "./styles";

export const Paragraph = ({ color, fontSize, children }: TextProps) => {
  return (
    <Description color={color} fontSize={fontSize}>
      {children}
    </Description>
  );
};
