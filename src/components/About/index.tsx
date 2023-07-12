import React, { CSSProperties } from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import { HeaderImage } from "../headerLogo";
import { HeaderMessage } from "../headerMessage";
import aboutImage from "../../images/aboutImage.jpeg";
import { Spacer } from "../spacer";

type TAbout = {
  bgColor?: Pick<CSSProperties, "background"> | string;
};

const AboutDesktop = styled.div<TAbout>`
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 15px;
  justify-content: center;
  background: ${({ bgColor }) => bgColor};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const About = ({ bgColor }: TAbout) => {
  const { width } = useWindowSize();

  const description2 = React.useMemo(() => {
    return (
      <>
        <p>
          <span>Publicitária</span> de formação, atuando há mais 6 anos gestora
          de <span>Marketing Médico</span> através de sua agência, Ampliamed.
        </p>
        <p>Especializações:</p>
        <ul>
          <li>
            Monitoramento de Mídias Sociais: Planejamento, Estratégia e
            Resultados - ESPM;
          </li>
          <li>Cursos em Marketing digital na área da Saúde;</li>
          <li>Pós-graduação em marketing digital - IPAM/Porto em Portugal.</li>
        </ul>
        <Spacer margin="20px 0" />
        <p>
          Dentre todas as experiências, conhecimentos e da atuação no nicho da
          saúde há tantos anos, hoje carrego títulos, especializações e
          conhecimentos para não ser apenas uma especialista em marketing
          médico, e sim, <span>MENTORA</span> em minha área de atuação.
        </p>
      </>
    );
  }, []);

  return (
    <>
      {width && width <= 768 ? (
        <AboutDesktop bgColor={bgColor}>
          <HeaderImage
            isAboutMobile
            width="200px"
            height="200px"
            widthMobile="200px"
            heightMobile="200px"
            urlDesktop=""
            urlMobile={aboutImage}
          />
          <HeaderMessage
            topMobile="20px"
            hasLink={false}
            position="unset"
            title="Sobre Camilla Gomes"
            description={description2}
          />
        </AboutDesktop>
      ) : (
        <AboutDesktop bgColor={bgColor}>
          <HeaderMessage
            isAbout
            topMobile="20px"
            hasLink={false}
            position="unset"
            title="Sobre Camilla Gomes"
            description={description2}
          />
          <Spacer margin="20px 0" />
          <HeaderImage
            width="340px"
            height="auto"
            widthMobile=""
            heightMobile=""
            urlDesktop={aboutImage}
            urlMobile=""
          />
        </AboutDesktop>
      )}
    </>
  );
};
