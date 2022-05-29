import { Button } from "./styles";
interface ButtonProps {
  children: any;
}

export const ButtonCheck = ({ children }: ButtonProps) => {
  return <Button>{children}</Button>;
};
