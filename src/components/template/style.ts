import styled from "styled-components";

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
  color: green !important;
  font-size: 18px !important;
`;

export const Underline = styled.span`
  color: #565656 !important;
  text-decoration: underline;
`;
export const ImageContainerHeader = styled.div`
  padding: 0;
  width: 100%;  
  display: flex;
  justify-content: center;
  background: linear-gradient(
      358deg,
      rgb(2 204 255 / 57%) 100%,
      rgb(27 145 47 / 40%) 100%
    ),
    url(https://wallpapercave.com/wp/wp2386912.jpg), no-repeat;
    padding: 50px 0 50px;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;


export const ContainerOfCards = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  

`