import styled from "styled-components";

export interface WrapperProps {
  position?:
    | "static"
    | "relative"
    | "absolute"
    | "fixed"
    | "sticky"
    | "inherit";
  display?: string;

  flex?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch"
    | "space-between"
    | "space-around";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  padding?: string;
  margin?: string;

  width?: string;
  maxWidth?: string;
  minWidth?: string;

  height?: string;
  maxHeight?: string;
  minHeight?: string;
  background?: string;
  overflow?: "visible" | "hidden" | "scroll" | "auto" | "inherit";
  border?: string;
  radius?: string;

  shadow?: string;
  zIndex?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  ${(props) => props.position && `position: ${props.position}`};
  ${(props) => props.display && `display: ${props.display}`};

  ${(props) => props.flex && `flex: ${props.flex}`};
  ${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
  ${(props) => props.direction && `flex-direction: ${props.direction}`};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};

  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.margin && `margin: ${props.margin}`};

  ${(props) => props.background && `background: ${props.background}`};

  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${(props) => props.minWidth && `min-width: ${props.minWidth}`};

  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.maxHeight && `max-height: ${props.maxHeight}`};
  ${(props) => props.minHeight && `min-height: ${props.minHeight}`};

  ${(props) => props.overflow && `overflow: ${props.overflow}`};
  ${(props) => props.border && `border: ${props.border}`};
  ${(props) => props.radius && `border-radius: ${props.radius};`}

  ${(props) => props.shadow && `box-shadow: ${props.shadow};`}
  ${(props) => props.zIndex && `z-index: ${props.zIndex};`}
`;

export type FlexProps = Omit<WrapperProps, "display">;

export const Flex = styled(Wrapper)<FlexProps>`
  display: flex;
`;

export type RowContainerProps = Omit<FlexProps, "direction">;

export const RowContainer = styled(Flex)`
  flex-direction: row;
`;

export type ColumnContainerProps = Omit<FlexProps, "direction">;

export const ColumnContainer = styled(Flex)`
  flex-direction: column;
`;
