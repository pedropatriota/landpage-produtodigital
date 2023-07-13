import styled from "styled-components";
import header from "../../images/header.jpeg";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: "#fff";
  background-image: none;
  background-position: 53.6627% 7.2121%;
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: scroll;
`;

export const Discount = styled.span`
  color: red !important;
  text-decoration: line-through;
`;

export const CurrentValue = styled.span`
  color: #3f51b5 !important;
  font-size: 20px !important;
`;

export const Underline = styled.span`
  color: #3f51b5 !important;
  text-decoration: underline;
`;
export const ImageContainerHeader = styled.div<{
  isMobile?: boolean | number;
}>`
  position: relative;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${header});
  padding: 50px 0 50px;
  flex-direction: column;
  align-items: center;
  height: 500px;
  background-position: ${({ isMobile }) => (isMobile ? "right" : "center")};
  background-repeat: no-repeat;
`;

export const ContainerOfCards = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
