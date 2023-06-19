import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import header from "../../images/header.jpeg";
import { Link } from "../Button";

type TLink = {
  width: number | string;
  height: number;
  font: number;
};

type TStylePosition = {
  position?: string;
  align?: "center" | "left" | "right" | "justify";
  isAbout?: boolean;
  bgColor?: Pick<React.CSSProperties, "background"> | string;
  hasImage?: boolean;
  changeColor?: string;
};

type TMessage = {
  hasLink?: boolean;
  title?: string;
  description?: React.ReactNode;
  topMobile?: string;
} & TStylePosition;

const ContainerMobile = styled.div<TMessage>`
  width: 359.551px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  position: ${({ position }) => (position ? position : "absolute")};
  left: 5%;
  top: ${({ hasImage }) => hasImage ? '50%' : '180px'};
  transform: ${({ hasImage }) => hasImage && 'translateY(-50%)'};
  gap: 10px;

  h2 {
    color: #000;
    margin-top: ${({ topMobile }) => (topMobile ? topMobile : "10px")};
    margin-bottom: 25px;
    font-size: 24px;
  }
  p {
    color: #000;
    margin-bottom: 16px;
    line-height: 20px;
    text-align: left;
    font-weight: 500;

    span {
      font-weight: bold;
      color: #000;
    }
  }
`;

const ContainerDesktop = styled.div<TStylePosition>`
  display: flex;
  color: ${({ changeColor }) => (changeColor ? changeColor : "#000")};
  font-size: 30px;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  position: ${({ position }) => (position ? position : "absolute")};
  left: 5%;
  top: ${({ hasImage }) => hasImage ? '50%' : '180px'};
  transform: ${({ hasImage }) => hasImage && 'translateY(-50%)'};
  text-align: ${({ align }) => (align ? align : "center")};
  background-color: ${({ bgColor }) => bgColor};
 
    ${({ isAbout }) =>
      isAbout &&
      `
      z-index: 1;
    `}
    
  p {
    color: #000;
    margin-bottom: 18px;
    line-height: 25px;
    font-weight: 500;
    font-size: 20px;

    ${({ isAbout }) =>
      isAbout &&
      `
      text-align: left;
    `}

    span {
      font-weight: bold;
      color: #000;
    }
  }
`;

const Content = styled.div<{isMobile: boolean | 0 | undefined}>`
  h2 {
    color: #000;
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: min(5vw, 35px);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    font-weight: ${({isMobile})=> isMobile && 500};
  }
 
`;

const SmallContent = styled.div<{isMobile: boolean | 0 | undefined}>`
    background: ${({isMobile})=> isMobile ? 'rgba(255,255,255,0.7)' : 'transparent' };
    padding: 15px;
    border-radius: 5px;

   p {
    color: #000;
    margin-bottom: 18px;
    line-height: 25px;
    font-weight: 500;
    font-size:min(5vw, 18px);
  }
`

export const HeaderMessage = ({
  title,
  description,
  hasLink = true,
  position,
  align,
  topMobile,
  isAbout,
  bgColor,
  hasImage,
  changeColor,
}: TMessage) => {
  const { width } = useWindowSize();

  const [linkStyle, setLinkStyle] = useState<TLink>({
    width: 359.551,
    height: 53,
    font: 16,
  });

  useEffect(() => {
    if (width && width <= 768) {
      setLinkStyle({ width: 359.551, height: 53, font: 16 });
    } else {
      setLinkStyle({ width: 500, height: 74, font: 18 });
    }
  }, [width, position]);

  const isMobile = width && width < 600

  const content = useMemo(() => {
    return (
      <Content isMobile={isMobile}>
        <h2>{title}</h2>
        <SmallContent isMobile={isMobile}>          
        <p>{description}</p>
        {hasLink && (
          <Link
            title="QUERO AGENDAR MINHA SESSÃO GRATUITA"
            {...linkStyle}
            address="https://docs.google.com/forms/d/e/1FAIpQLSd-lnYKXqSarbQAJk4wTK2kgH5YSufAw7wLZtbYxRbnKd2rXg/viewform?vc=0&c=0&w=1&flr=0"
          />
        )}
        </SmallContent>
      </Content>
    );
  }, [title, description, linkStyle, hasLink]);

  if (width && width <= 768) {
    return <ContainerMobile topMobile={topMobile} hasImage={hasImage} position={position}>{content}</ContainerMobile>;
  }
  return (
    <ContainerDesktop
      hasImage={hasImage}
      position={position}
      align={align}
      isAbout={isAbout}
      bgColor={bgColor}
      changeColor={changeColor}
    >
      {content}
    </ContainerDesktop>
  );
};
