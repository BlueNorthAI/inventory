import { Grid, GridColumn } from "@progress/kendo-react-grid";
import CustomerData from "~/data/riskData/CustomerData.json";
import FacilityData from "~/data/riskData/FacilityData.json";

export default function FacilityGrid() {
  // const [dataState, setDataState] = React.useState({
  //   skip: 0,
  //   take: 20,
  //   sort: [
  //     {
  //       field: "orderDate",
  //       dir: "desc",
  //     },
  //   ],
  //   group: [
  //     {
  //       field: "Customer",
  //     },
  //   ],
  // });

  return (
    <div>
      <Grid
        data={FacilityData}
        style={{ height: '440px' }}
        rowHeight={50}
        size={'medium'}
      >
        <GridColumn field="facility" title="Facility" width="200px" />
        <GridColumn field="expenseType" title="Expense Type" width="200px" />
        <GridColumn field="value" title="Value" width="200px" />
        <GridColumn field="currency" title="Currency" width="200px" />
        <GridColumn field="timeUnit" title="Time Unit" width="200px" />
        <GridColumn field="productUnit" title="Product Unit" width="200px" />
        <GridColumn field="timePeriod" title="Time Period" width="200px" />
      </Grid>
    </div>
  )
}
