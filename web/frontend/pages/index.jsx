import {
  Page,
  Layout
} from "@shopify/polaris";
import { useEffect, useState } from "react";
import { DataTable, CompareButton } from "../components";
import { useAppQuery } from "../hooks";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function HomePage() {

  const {
    data: sales,
    isLoading: isLoadingSales,
    isError: salesError,
  } = useAppQuery({ url: "/api/v1/analytics/sales?groupby=week&period=2022"});


  const {
    data: test,
  } = useAppQuery({ url: "/api/v1/analytics/sales?groupby=week&period=2022&period=2022"});

  console.log(test);

  useEffect(() => {
    if(sales != undefined){
      setTable(sales.analytics.table);
    }
  }, [sales]);

  const [table, setTable] = useState([])

  const columns = React.useMemo(
    () => [
      {
        Header: "Week",
        accessor: "week",
      },
      {
        Header: "Total Sales",
        accessor: "total_sales",
      },
      {
        Header: "Rate",
        accessor: "rate",
      },
    ],
    []
  );

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
            <CompareButton/>
        </Layout.Section>
        
        <Layout.Section>
          <div style={{}}>
            <CssBaseline />   
            <DataTable columns={columns} data={table} />    
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
