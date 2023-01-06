import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    color: #565656;
  }
`;

export const CopyRights = () => {
  return (
    <Container>
      <span>
        AVISO LEGAL - Nenhuma informação contida neste produto deve ser
        interpretada como uma afirmação da obtenção de resultados. Qualquer
        referência ao desempenho passado ou potencial de uma estratégia abordada
        no conteúdo não é, e não deve ser interpretada como uma recomendação ou
        como garantia de qualquer resultado específico.
      </span>
    </Container>
  );
};
