import { Text } from "./styles";
import { TextProps } from "../interfaces";

export const Title = ({ children, color, fontSize }: TextProps) => {
  return (
    <Text color={color} fontSize={fontSize}>
      {children}
    </Text>
  );
};
