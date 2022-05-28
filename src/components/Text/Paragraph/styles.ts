import styled from "styled-components";
import { TextProps } from "../interfaces";



export const Description = styled.p<TextProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`