import styled from "styled-components";

type TContainer = {
  width: number | string;
  height: number;
  font: number;
  transparent?: boolean;
  color?: string;
};

interface ILink extends TContainer {
  title: string;
  address: string;
}

const LinkContainer = styled.div<TContainer>`
  margin-top: 50px;
  width: ${({ width }) => width};
  height: ${({ height }) => height}px;
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#00C762"};
  font-size: ${({ font }) => font}px;
  border-radius: 30px;
  display: flex;
  border: 2px #00c762 solid;
  align-items: center;
  justify-content: center;
  transition: 0.3s linear;
  cursor: pointer;

  :hover {
    background-color: #02b059;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    color: ${({ color }) => (color ? color : "#fff")};
    font-weight: 500;
    padding: 10px 10px;
  }
`;

export const Link = ({
  title,
  address,
  width,
  height,
  font,
  transparent,
  color,
}: ILink) => {
  return (
    <LinkContainer
      width={width}
      height={height}
      font={font}
      color={color}
      transparent={transparent}
    >
      <a href={address} target="_blank" rel="noreferrer">
        {title}
      </a>
    </LinkContainer>
  );
};
