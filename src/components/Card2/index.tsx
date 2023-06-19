import { Container } from "./style";

export interface CardTwo {
  icon: any;
  title: string;
  description: string;
  background: string;
}

export const Card2 = ({ icon, title, description, background }: CardTwo) => {
  return (
    <Container background={background}>
      <header>
        {icon}
        <p>{title}</p>
      </header>
      <p>{description}</p>
    </Container>
  );
};
