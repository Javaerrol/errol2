import { Card, Stack, Heading, TextStyle, Spinner } from "@shopify/polaris";
import { SummaryTile } from "./SummaryTile";

export function TotalSalesCard({total}) {
  
  return (
    <Card sectioned>
      <Heading>Total Sales</Heading>
      <TextStyle variation="subdued">(index per week)</TextStyle>
      <Stack distribution="fillEvenly">
        <SummaryTile value={`${total}`}/>
      </Stack>
    </Card>
  ); 
}