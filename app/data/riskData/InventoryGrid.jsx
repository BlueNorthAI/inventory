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
      <GridColumn field="facility" title="Facility" />
      <GridColumn field="product" title="Product" />
      <GridColumn field="policyType" title="Policy Type" />
      <GridColumn field="parameters" title="Parameters" />
      <GridColumn field="initial" title="Initial" />
      <GridColumn field="onHandInventory" title="On Hand Inventory" />
      <GridColumn field="periodicCheck" title="Periodic Check" />
      <GridColumn field="period" title="Period" />
      <GridColumn field="firstPeriodicCheck" title="First Periodic Check" />
      <GridColumn field="policyBasis" title="Policy Basis" />
      <GridColumn field="timeUnit" title="Time Unit" />
      <GridColumn field="timePeriod" title="Time Period" />
      <GridColumn field="inclusionType" title="Inclusion Type" />
    </Grid>
  )
}
