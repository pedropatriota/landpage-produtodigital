import React from "react";
import styled from "styled-components";

import { FaStethoscope } from "react-icons/fa";

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
  gap: 20px;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fdecd0;
  border-radius: 3px;
  max-width: 200px;
  min-height: 250px;
  overflow: hidden;
  transition: 0.2s linear;

  &:hover {
    scale: 1.1;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 1.3;
    text-align: left;
    letter-spacing: 0px;

    span {
      font-weight: bold;
      color: #20797c;
    }
  }
`;

export const Card = () => {
  return (
    <Container>
      <CardContainer>
        <FaStethoscope size="50" color="#20797C" />
        <p>Criar conteúdo relevante e útil nas redes sociais que ressoe com seu público.</p>
      </CardContainer>
      <CardContainer>
        <FaStethoscope size="50" color="#20797C" />
        <p>Conquistar mais pacientes através do marketing digital.</p>
      </CardContainer>
      <CardContainer>
        <FaStethoscope size="50" color="#20797C" />
        <p>Aumenter a fidelização de pacientes.</p>
      </CardContainer>
    </Container>
  );
};
