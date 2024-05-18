import { Grid, GridColumn } from "@progress/kendo-react-grid";
import CustomerData from "~/data/riskData/CustomerData.json";

export default function CustomerGrid() {
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
        data={CustomerData}
        style={{ height: '600px',}}
        rowHeight={50}
        // groupable={true}
        size={'medium'}
      >
        <GridColumn
          field="Name"
          title="Name"
          locked={true}
          filter="numeric"
          width="200px"
        />
        <GridColumn field="Type" title="Type" width="200px" />
        <GridColumn field="Location" title="Location" width="200px" />
        <GridColumn
          field="InclusionType"
          title="Inclusion Type"
          width="200px"
        />
        <GridColumn
          field="AdditionalParameters"
          title="Additional Parameters"
          width="200px"
        />
      </Grid>
    </div>
  )
}
