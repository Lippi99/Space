import styled from "styled-components";
import { TextProps } from "../interfaces";


export const Text =  styled.h1<TextProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: 'Poppins', sans-serif;
  font-weight:  ${props => props.fontWeight};
`;