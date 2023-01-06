import styled from "styled-components";

type TImage = {
  urlMobile: string;
  urlDesktop: string;
  width?: number | string;
  height?: number | string;
  widthMobile?: number | string;
  heightMobile?: number | string;
  isAbout?: boolean;
  isAboutMobile?: boolean;
};

const ImgContainer = styled.div<TImage>`
  height: ${({ height }) => (height ? height : "798.867px")};
  width: ${({ width }) => (width ? width : "100%")};
  background-image: url(${({ urlDesktop }) => urlDesktop});
  background-position: 53.6627% 7.2121%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  border-radius: 10px;
  margin: 20px 0 0 50px;

  @media (min-width: 768px) {
    mask-image: linear-gradient(to bottom, #7d7979 90%, #00000003 100%);
  }

  ${({ isAbout }) =>
    isAbout &&
    `
      position:absolute;
      bottom: 60px;
      right: 0;
      z-index:0;
      opacity:0.7;
    `}

  @media (max-width: 768px) {
    background-image: url(${({ urlMobile }) => urlMobile});
    height: ${({ heightMobile }) =>
      heightMobile ? heightMobile : "378.926px"};
    width: ${({ widthMobile }) => (widthMobile ? widthMobile : "359.551px")};

    ${({ isAboutMobile }) =>
      isAboutMobile &&
      `
      mask-image: linear-gradient(to bottom, #7d7979 90%, #00000003 100%);
    `}
  }
`;

export const HeaderImage = ({
  height,
  width,
  widthMobile,
  heightMobile,
  urlMobile,
  urlDesktop,
  isAbout,
  isAboutMobile,
}: TImage) => (
  <ImgContainer
    height={height}
    width={width}
    urlMobile={urlMobile}
    urlDesktop={urlDesktop}
    widthMobile={widthMobile}
    heightMobile={heightMobile}
    isAbout={isAbout}
    isAboutMobile={isAboutMobile}
  />
);
