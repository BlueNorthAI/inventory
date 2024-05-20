import { Grid, GridColumn } from "@progress/kendo-react-grid";
import ProcessData from "~/data/riskData/SourcingData.json";

export default function SourcingGrid() {
 

  return (
    <Grid
      rowHeight={50}
      // groupable={true}
      size={'medium'}
      data={ProcessData}
    >
      <GridColumn field="delivery" title="Delivery Destination" />
      <GridColumn field="product" title="Product" />
      <GridColumn field="type" title="Type" />
      <GridColumn field="parameter" title="Parameter Type" />
      <GridColumn field="sources" title="Sources" />
      <GridColumn field="timePeriod" title="Time Period" />
      <GridColumn field="inculusionType" title="Inculusion Type" />
    
    </Grid>
  )
}
