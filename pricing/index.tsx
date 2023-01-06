import * as Style from "./styles";
import { List } from "../list";
import { Link } from "../Button";

type TPricing = {
  title: string;
  color?: Pick<React.CSSProperties, "color">;
  subtitle?: string;
  span?: string;
  content: { icon: string; text: string }[];
  uppercase?: boolean;
  bold?: boolean;
  buttonTitle: string;
  buttonAddress: string;
  bottomMessage?: JSX.Element;
  transparent?: boolean;
  ButtonFontColor?: string;
  callToAction?: JSX.Element;
};

export const Pricing = ({
  title,
  ButtonFontColor,
  subtitle,
  span,
  content,
  uppercase,
  bold,
  buttonTitle,
  buttonAddress,
  bottomMessage,
  transparent,
  color,
  callToAction,
}: TPricing) => {
  return (
    <Style.Container>
      <Style.Title colorTitle={color}>{title}</Style.Title>
      <Style.SubTitle>
        {subtitle}{" "}
        <Style.SpanContent uppercase={uppercase} bold={bold}>
          {span}
        </Style.SpanContent>
      </Style.SubTitle>
      <List content={content} color={"#000"} />
      <div>{callToAction}</div>
      <Link
        title={buttonTitle}
        address={buttonAddress}
        width="100%"
        height={80}
        font={20}
        transparent={transparent}
        color={ButtonFontColor}
      />
      <div>{bottomMessage}</div>
    </Style.Container>
  );
};
