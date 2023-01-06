import styled from "styled-components";
import React from "react";

type TTitle = {
  colorTitle?: Pick<React.CSSProperties, "color">;
};

type TSpan = {
  uppercase?: boolean;
  bold?: boolean;
};

export const Container = styled.div`
  padding: 40px;
  height: fit-content;
  text-align: center;
  width: 400px;
  border-radius: 5px;
  background-color: rgb(236, 236, 236);
`;

export const Title = styled.h3<TTitle>`
  font-size: 22px;
  color: ${({ colorTitle }) => (colorTitle ? colorTitle : "red")};
`;

export const SubTitle = styled.p`
  color: #565656;
  font-size: 18px;
  margin-bottom: 30px;
`;

export const SpanContent = styled.span<TSpan>`
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : undefined)};
  font-weight: ${({ bold }) => (bold ? "bold" : undefined)};
`;
