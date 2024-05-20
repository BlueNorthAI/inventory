import { Grid, GridColumn } from "@progress/kendo-react-grid";
import ProcessData from "~/data/riskData/ProcessData.json";

export default function ProcessGrid() {
 

  return (
    <Grid
      rowHeight={50}
      // groupable={true}
      size={'medium'}
      data={ProcessData}
    >
      <GridColumn field="facility" title="Facility" />
      <GridColumn field="product" title="Product" />
      <GridColumn field="type" title="type" />
      <GridColumn field="units" title="Units" />
      <GridColumn field="cost" title="Cost" />
      <GridColumn field="currency" title="Currency" />
      <GridColumn field="time" title="Time" />
    </Grid>
  )
}
