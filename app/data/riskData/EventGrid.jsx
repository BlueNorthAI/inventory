import { Grid, GridColumn } from "@progress/kendo-react-grid";
import EventData from "~/data/riskData/EventData.json";


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
        data={EventData}
        style={{ height: '440px' }}
        rowHeight={50}
        // groupable={true}
        size={'medium'}
      >
        <GridColumn
          field="Name"
          title="Customer"
          locked={true}
          filter="numeric"
          width="200px"
        />
        <GridColumn field="EventType" title="Event Type" width="200px" />
        <GridColumn field="Parameters" title="Parameters" width="200px" />
        <GridColumn
          field="OccurrenceType"
          title="OccurrenceType"
          width="200px"
        />
        <GridColumn field="OccurrenceTime" title="Occurrence Time" width="200px" />
        <GridColumn field="Trigger" title="Trigger" width="200px" />
        <GridColumn field="Probability" title="Probability" width="200px" />
       
      </Grid>
    </div>
  )
}
