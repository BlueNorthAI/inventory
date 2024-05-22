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
      <GridColumn field="facility" title="Facility" className="text-lg" />
      <GridColumn field="product" title="Product" className="text-lg" />
      <GridColumn field="type" title="type" className="text-lg" />
      <GridColumn field="units" title="Units" className="text-lg" />
      <GridColumn field="cost" title="Cost" className="text-lg" />
      <GridColumn field="currency" title="Currency" className="text-lg" />
      <GridColumn field="time" title="Time" className="text-lg" />
    </Grid>
  )
}
