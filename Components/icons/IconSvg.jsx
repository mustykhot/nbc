import styled from "styled-components";

export const IconSvg = styled.svg`
  ${(props) => props.iconHeight && `height: ${props.iconHeight}`};
  ${(props) => props.iconWidth && `width: ${props.iconWidth}`};
`;
