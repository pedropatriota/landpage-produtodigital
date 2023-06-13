import { useMemo } from "react";
import { WarnMessage } from "../warnMessage";
import { HeaderMessage } from "../headerMessage";
import { Spacer } from "../spacer";
import { Card } from "../Card";
import { List } from "../list";
import { About } from "../About";
import { CopyRights } from "../CopyRights";
import { Pricing } from "../pricing";

import styled from "styled-components";

const Container = styled.div`
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

const Discount = styled.span`
  color: red !important;
  text-decoration: line-through;
`;

const CurrentValue = styled.span`
  color: green !important;
  font-size: 18px !important;
`;

const Underline = styled.span`
  color: #565656 !important;
  text-decoration: underline;
`;

export const Template = () => {
  const description = useMemo(() => {
    return (      
        <strong>
        <span style={{textDecoration: "underline"}}>Tenha em suas mãos um calendário prático para você adaptar com sua especialidade,</span> com ele você vai conseguir:
        </strong>        
    );
  }, []);

  const descriptionHeader = useMemo(() => {
    return (
      <>
        <p>
          Médico, acesse agora o e-book “Guia de rotina fácil de postagens” em poucos minutos.
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
    { icon: "✅", text: "BÔNUS#1: Construa a Bio perfeita  para seu Instagram Médico"},
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

  return (
    <Container>
      <WarnMessage />
      {/* <HeaderImage urlDesktop={headerImage} urlMobile={headerImageMobile} /> */}
      <HeaderMessage
        hasLink={false}
        position="unset"
        title="NÃO PERCA MAIS TEMPO PENSANDO EM QUE TIPO DE CONTEÚDO PUBLICAR."
        description={descriptionHeader}
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
          hasLink={false}
          position="unset"
          description={description}
        />
      </div>
      <Spacer margin="20px 0" />
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
          buttonAddress="https://pay.kiwify.com.br/IZVNU1n"
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
                  R$ 197,00
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
                R$ 37,00
              </p>
            </div>
          }
        />
        <Pricing
          title="OFERTA BÁSICA"
          color={{ color: "#000" }}
          content={content}
          buttonTitle="QUERO ESTA OPÇÃO"
          buttonAddress="https://pay.kiwify.com.br/1QBqi6G"
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
                R$ 10,00
              </p>
            </div>
          }
        />
      </div>
      <Spacer margin="40px 0" />
      <About bgColor="#f6f6f6" />
      <Spacer margin="20px 0" />
      <CopyRights />
      <Spacer margin="20px 0" />
    </Container>
  );
};
