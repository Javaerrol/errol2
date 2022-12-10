import { Card, Stack, Heading, TextStyle, Spinner } from "@shopify/polaris";
import { SummaryTile } from "./SummaryTile";

export function AverageSalesCard({average}) {

  return (
    <Card sectioned>
      <Heading>Average Total Sales</Heading>
      <TextStyle variation="subdued">(index per week)</TextStyle>
      <Stack distribution="fillEvenly">
        <SummaryTile value={`${average}`}/>
      </Stack>
    </Card>
  ); 
}