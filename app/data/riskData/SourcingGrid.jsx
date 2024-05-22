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
      <GridColumn
        field="delivery"
        title="Delivery Destination"
        className="text-lg"
      />
      <GridColumn field="product" title="Product" className="text-lg" />
      <GridColumn field="type" title="Type" className="text-lg" />
      <GridColumn
        field="parameter"
        title="Parameter Type"
        className="text-lg"
      />
      <GridColumn field="sources" title="Sources" className="text-lg" />
      <GridColumn field="timePeriod" title="Time Period" className="text-lg" />
      <GridColumn
        field="inculusionType"
        title="Inculusion Type"
        className="text-lg"
      />
    </Grid>
  )
}
