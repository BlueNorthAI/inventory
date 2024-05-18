import { Grid, GridColumn } from "@progress/kendo-react-grid";
import DemandData from "~/data/riskData/DemandData.json";


export default function DemandGrid() {
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
       
        data={DemandData}

        style={{ height: '440px' }}
        rowHeight={50}
        
        // groupable={true}
        size={'medium'}
      >
        <GridColumn
          field="customer"
          title="Customer"
          locked={true}
          filter="numeric"
          width="200px"
        />
        <GridColumn field="product" title="Product" width="200px" />
        <GridColumn field="demandType" title="Demand Type" width="200px" />
        <GridColumn
          field="orderInterval"
          title="Order Interval"
          width="200px"
        />
        <GridColumn field="quantity" title="Quantity" width="200px" />
        <GridColumn
          field="firstOccurrence"
          title="First Occurrence"
          width="200px"
        />
        <GridColumn field="timePeriod" title="Time Period" width="200px" />
        <GridColumn field="revenue" title="Revenue" width="200px" />
        <GridColumn field="currency" title="Currency" width="200px" />
        <GridColumn
          field="expectedLeadTime"
          title="Expected Lead Time"
          width="200px"
        />
        <GridColumn field="timeUnit" title="Time Unit" width="200px" />
        <GridColumn
          field="backorderPolicy"
          title="Backorder Policy"
          width="200px"
        />
        <GridColumn
          field="inclusionType"
          title="Inclusion Type"
          width="200px"
        />
      </Grid>
    </div>
  )
}
