import styled from "styled-components";
import { breakpoints } from "../../global";
import { Dimension } from "./dimension";

export const Image = styled.img<{ $dimensions: Dimension }>`
  height: ${props => props.$dimensions.mobile.height};
  width: ${props => props.$dimensions.mobile.width};
  min-width: ${props => props.$dimensions.mobile.minWidth ? props.$dimensions.mobile.minWidth : "none"};
  min-height: ${props => props.$dimensions.mobile.minHeight ? props.$dimensions.mobile.minHeight : "none"};
  border-radius: ${props => props.$dimensions.mobile.borderRadius ? props.$dimensions.mobile.borderRadius : "0"};
  @media(min-width: ${breakpoints.desktop}){
    height: ${props => props.$dimensions.desktop.height};
    width: ${props => props.$dimensions.desktop.width};
    min-width: ${props => props.$dimensions.desktop.minWidth ? props.$dimensions.desktop.minWidth : "none"};
    min-height: ${props => props.$dimensions.desktop.minHeight ? props.$dimensions.desktop.minHeight : "none"};
    border-radius: ${props => props.$dimensions.desktop.borderRadius ? props.$dimensions.desktop.borderRadius : "0"};

  }
`