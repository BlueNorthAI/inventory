import { Grid, GridColumn } from "@progress/kendo-react-grid";
import ProcessData from "~/data/riskData/ProductData.json";

export default function ProcessGrid() {
 

  return (
    <Grid
      rowHeight={50}
      // groupable={true}
      size={'medium'}
      data={ProcessData}
    >
      <GridColumn field="from" title="From" />
      <GridColumn field="to" title="To" />
      <GridColumn field="cost" title="Cost Calculation" />
      <GridColumn field="costCalculation" title="Cost Calculation Product" />
      <GridColumn field="co2Calculation" title="CO2 Calculation" />
      <GridColumn field="currency" title="Currency" />
      <GridColumn field="distance" title="Distance" />
      <GridColumn field="distanceUnit" title="Distance Unit" />
      <GridColumn field="transport" title="Transport" />
    </Grid>
  )
}
