import { Grid, GridColumn } from "@progress/kendo-react-grid";
import InventoryData from "~/data/riskData/InventoryData.json";

export default function InventoryGrid() {
 

  return (
    <Grid
      rowHeight={50}
      // groupable={true}
      size={'medium'}
      data={InventoryData}
    >
      <GridColumn
        field="facility"
        title="Facility"
        className="text-lg"
        width="150px"
      />
      <GridColumn field="product" title="Product" className="text-lg" />
      <GridColumn
        field="policyType"
        title="Policy Type"
        width="200px"
        className="text-lg"
      />
      <GridColumn
        field="parameters"
        title="Parameters"
        width="200px"
        className="text-lg"
      />
      <GridColumn field="initial" title="Initial" className="text-lg" />
      <GridColumn
        field="onHandInventory"
        title="On Hand Inventory"
        className="text-lg"
      />
      <GridColumn
        field="periodicCheck"
        title="Periodic Check"
        className="text-lg"
      />
      <GridColumn field="period" title="Period" className="text-lg" />
      <GridColumn
        field="firstPeriodicCheck"
        title="First Periodic Check"
        className="text-lg"
      />
      <GridColumn
        field="policyBasis"
        title="Policy Basis"
        className="text-lg"
      />
      <GridColumn field="timeUnit" title="Time Unit" className="text-lg" />
      <GridColumn field="timePeriod" title="Time Period" className="text-lg" />
      <GridColumn
        field="inclusionType"
        title="Inclusion Type"
        className="text-lg"
      />
    </Grid>
  )
}
