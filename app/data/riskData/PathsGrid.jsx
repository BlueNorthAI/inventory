import { Grid, GridColumn } from "@progress/kendo-react-grid";
import PathData from "~/data/riskData/PathsData.json";

export default function PathsGrid() {
 

  return (
    <Grid
      rowHeight={50}
      // groupable={true}
      size={'medium'}
      data={PathData}
    >
      <GridColumn field="from" title="From" className="text-lg" />
      <GridColumn field="to" title="To" className="text-lg" />
      <GridColumn field="cost" title="Cost Calculation" className="text-lg" />
      <GridColumn
        field="costCalculation"
        title="Cost Calculation Product"
        width="220px"
        className="text-lg"
      />
      <GridColumn
        field="co2Calculation"
        title="CO2 Calculation"
        className="text-lg"
      />
      <GridColumn field="currency" title="Currency" className="text-lg" />
      <GridColumn field="distance" title="Distance" className="text-lg" />
      <GridColumn
        field="distanceUnit"
        title="Distance Unit"
        className="text-lg"
      />
      <GridColumn field="transport" title="Transport" className="text-lg" />
    </Grid>
  )
}
