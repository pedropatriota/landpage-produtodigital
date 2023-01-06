import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  background-color: #ffb300;

  p {
    font-weight: 700;
    font-size: 18px;
    color: #000;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    padding: 20px;
    font-size: 24px;
  }
`;
