import styled from "styled-components";

type TList = {
  content: { icon: string; text: string }[];
  color?: string;
};

const Container = styled.ul`
  list-style: none;
  padding: 0;
  li {
    color: ${({ color }) => (color ? color : "rgb(189, 189, 189)")};
    text-align: left;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: flex-start;

    &:hover {
      .icon {
        transition: 0.5s;
        color: #4fc4c9;
      }
    }

    div {
      max-width: 20px;
      max-height: 20px;
      min-width: 20px;

      .icon {
        font-size: 20px;
      }
    }

    p {
      margin-left: 10px;
      font-size: 18px;
    }
  }
`;

export const List = ({ content, color }: TList) => {
  return (
    <Container color={color}>
      {content.map(({ icon, text }) => (
        <li>
          <div>{icon}</div>
          <p>{text}</p>
        </li>
      ))}
    </Container>
  );
};
