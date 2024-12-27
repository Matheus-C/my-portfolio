import styled from "styled-components";
import { breakpoints } from "../../global";
import { Dimension } from "../../global/dimension";

export const Image = styled.img<{ $dimensions: Dimension }>`
  height: ${props => props.$dimensions.mobile.height};
  width: ${props => props.$dimensions.mobile.width};
  @media(min-width: ${breakpoints.desktop}){
    height: ${props => props.$dimensions.desktop.height};
    width: ${props => props.$dimensions.desktop.width};
  }
`