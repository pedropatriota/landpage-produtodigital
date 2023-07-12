import { useMemo } from "react";
import { WarnMessage } from "../warnMessage";
import { HeaderMessage } from "../headerMessage";
import { Spacer } from "../spacer";
import { Card } from "../Card";
import { List } from "../list";
import { About } from "../About";
import { CopyRights } from "../CopyRights";
import { Pricing } from "../pricing";
import { GraphUp, Megaphone } from "@styled-icons/bootstrap";
import { Profile, Enlarge } from "@styled-icons/icomoon";

import {
  Container,
  ContainerOfCards,
  CurrentValue,
  Discount,
  ImageContainerHeader,
  Underline,
} from "./style";
import { Card2 } from "../Card2";
import useWindowSize from "../../hooks/useWindowSize";

export const Template = () => {
  const description = useMemo(() => {
    return (
      <strong>
        <span style={{ textDecoration: "underline" }}>
          Tenha em suas mãos um calendário prático para você adaptar com sua
          especialidade,
        </span>{" "}
        com ele você vai conseguir:
      </strong>
    );
  }, []);

  const descriptionHeader = useMemo(() => {
    return (
      <>
        <p>
          Médico, acesse agora o e-book “Guia de rotina fácil de postagens” em
          poucos minutos.
        </p>
        <p>
          De <Discount>R$50,00</Discount> por apenas{" "}
          <CurrentValue>R$10,00</CurrentValue>
        </p>
        <p>
          Saiba o que você pode ganhar investindo{" "}
          <Underline>apenas 10 reais</Underline>, hoje:
        </p>
      </>
    );
  }, []);

  const contentBonus = [
    {
      icon: "✅",
      text: "Guia de rotina fácil de postagenss + 6 Bônus",
    },
    {
      icon: "✅",
      text: "BÔNUS#1: Construa a Bio perfeita  para seu Instagram Médico",
    },
    { icon: "✅", text: "BÔNUS#2: Guia de como patrocinar conteúdos no Reels" },
    { icon: "✅", text: "BÔNUS#3: Humanize seus stories de forma fácil" },
    { icon: "✅", text: "BÔNUS#4: Postagens que fidelizam seguidores" },
    { icon: "✅", text: "BÔNUS#5: 7 dias de Stories para gerar engajamento" },
    {
      icon: "✅",
      text: "BÔNUS#6: Calendário para profissionais da saúde",
    },
    { icon: "✅", text: "1 ANO DE ACESSO" },
  ];

  const content = [
    {
      icon: "✅",
      text: "Guia de rotina fácil de postagens",
    },
    {
      icon: "✅",
      text: "1 ANO DE ACESSO",
    },
  ];

  const cards2Array = [
    {
      background: "#3AA8EA",
      icon: <GraphUp />,
      title: "Eficiência",
      description:
        "Você vai economizar tempo, mantendo uma presença online consistente",
    },
    {
      background: "#088ED9",
      icon: <Megaphone />,
      title: "Consistência na comunicação",
      description:
        "Seguir um cronograma de postagens estabelecido mantém você em contato regular com seu público, fortalecendo relacionamentos.",
    },
    {
      background: "#1D77CA",
      icon: <Profile />,
      title: "Credibilidade profissional",
      description:
        "Esse produto vai ajudar a fortalecer a confiança dos pacientes, destacando sua experiência e conhecimento por meio de conteúdos relevantes.",
    },
    {
      background: "#1362AD",
      icon: <Enlarge />,
      title: "Alcance ampliado",
      description:
        "Com um calendário estratégico de postagens, você aumenta sua visibilidade e atrai novos pacientes por meio de plataformas digitais populares.",
    },
  ];

  const { width } = useWindowSize();
  const isMobile = width && width < 500;

  return (
    <Container>
      <WarnMessage />
      <ImageContainerHeader isMobile={isMobile}>
        <HeaderMessage
          changeColor="#232e6f"
          hasImage
          hasLink={false}
          position="absolute"
          title="NÃO PERCA MAIS TEMPO PENSANDO EM QUE TIPO DE CONTEÚDO PUBLICAR."
          description={descriptionHeader}
        />
      </ImageContainerHeader>
      <div
        style={{
          width: "100%",
          background: "#f6f6f6",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HeaderMessage
          hasLink={false}
          position="unset"
          description={description}
        />
      </div>
      <Spacer margin="20px 0" />

      <ContainerOfCards>
        {cards2Array.map(({ title, icon, description, background }, idx) => (
          <Card2
            key={idx}
            title={title}
            icon={icon}
            description={description}
            background={background}
          />
        ))}
      </ContainerOfCards>

      <HeaderMessage
        topMobile="-20px"
        hasLink={false}
        position="unset"
        title="Principais erros cometidos:"
        description={
          <List
            content={[
              {
                icon: "🚫",
                text: "Não saber o que postar diariamente;",
              },
              {
                icon: "🚫",
                text: "Falta de engajamento em conteúdos postados;",
              },
              {
                icon: "🚫",
                text: "Posts que não trazem pacientes;",
              },
              {
                icon: "🚫",
                text: "Falta de frequência de postagens;",
              },
              {
                icon: "🚫",
                text: "Não aguenta mais ficar postando de última hora.",
              },
            ]}
          />
        }
      />
      <Spacer margin="20px 0" />
      <div
        style={{
          width: "100%",
          background: "#f6f6f6",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HeaderMessage
          topMobile="-20px"
          hasLink={false}
          position="unset"
          title="Esse conteúdo é ideal para:"
          description={
            <List
              content={[
                {
                  icon: "👊",
                  text: "Médicos e profissionais da área da saúde que buscam gerir seu perfil;",
                },
                {
                  icon: "👊",
                  text: "Médicos que querem se precaver para não prejudicarem a sua imagem profissional;",
                },
                {
                  icon: "👊",
                  text: "Profissionais que desejam construir autoridade em sua especialidade(s);",
                },
                {
                  icon: "👊",
                  text: "Médicos que desejam transformar seguidores em pacientes.",
                },
              ]}
            />
          }
        />
      </div>
      <Spacer margin="20px 0" />
      <HeaderMessage
        hasLink={false}
        position="unset"
        title="Por que este ebook vai te ajudar?"
      />
      <Card />
      <Spacer margin="40px 0" />
      <HeaderMessage
        hasLink={false}
        position="unset"
        title="Escolha a melhor oferta"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        <Pricing
          title="SUPER OFERTA"
          subtitle="Jornada Marketing médico"
          span="+ 6 bônus"
          uppercase
          bold
          content={contentBonus}
          buttonTitle="QUERO APROVEITAR A SUPER OFERTA"
          buttonAddress="https://pay.kiwify.com.br/fDN5SCy"
          bottomMessage={
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                APROVEITE AGORA:
              </p>
              <p>É a última vez que você vai ver esse preço.</p>
            </div>
          }
          callToAction={
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                VALOR TOTAL ={" "}
                <span style={{ textDecoration: "line-through" }}>
                  150,00 EUR
                </span>
              </p>
              <p>Somomente hoje, apenas:</p>
              <p
                style={{
                  color: "#00C762",
                  fontWeight: "bold",
                  fontSize: "65px",
                }}
              >
                37,00 EUR
              </p>
            </div>
          }
        />
        <Pricing
          title="OFERTA BÁSICA"
          color={{ color: "#000" }}
          content={content}
          buttonTitle="QUERO ESTA OPÇÃO"
          buttonAddress="https://pay.kiwify.com.br/lCzo77n"
          transparent
          ButtonFontColor="#000000"
          callToAction={
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#00C762",
                  fontWeight: "bold",
                  fontSize: "65px",
                }}
              >
                10,00 EUR
              </p>
            </div>
          }
        />
      </div>
      <Spacer margin="20px 0" />
      <About bgColor="#f6f6f6" />
      <Spacer margin="20px 0" />
      <CopyRights />
      <Spacer margin="10px 0" />
    </Container>
  );
};
