import { Card, Stack, Spinner, TextStyle, Heading } from "@shopify/polaris";
import { SummaryTile } from "./SummaryTile";

export function GrowthRateCard({rate}) {
  return (
    <Card sectioned>
      <Heading>Growth Rate</Heading>
      <TextStyle variation="subdued">(index per week)</TextStyle>
      <Stack distribution="fillEvenly">
        <SummaryTile value={`${rate}`}/>
      </Stack>
    </Card>
  );

}