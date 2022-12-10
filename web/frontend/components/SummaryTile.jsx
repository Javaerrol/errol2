import { Card, DisplayText, TextStyle, Subheading } from "@shopify/polaris";
import PropTypes from "prop-types";

export function SummaryTile(props) {
  return (
    <Card.Section>
      <Subheading element="h3">{props.title}</Subheading>
      <DisplayText size="large">{props.value}</DisplayText>
      <TextStyle variation="subdued"> {props.period}</TextStyle>
    </Card.Section>
  );
}

SummaryTile.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  period: PropTypes.string,
};
