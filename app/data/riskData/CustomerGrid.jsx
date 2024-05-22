import { Grid, GridColumn } from "@progress/kendo-react-grid";
import CustomerData from "~/data/riskData/CustomerData.json";

export default function CustomerGrid() {

  return (
    <div>
      <Grid
        data={CustomerData}
        style={{ height: '700px' }}
        rowHeight={50}
        // groupable={true}
        // size={'medium'}
        className="text-lg min-w-full"
      >
        <GridColumn
          className="text-lg"
          field="Name"
          title="Name"
          locked={true}
          filter="numeric"
         
        />
        <GridColumn
          className="text-lg"
          field="Type"
          title="Type"
          
        />
        <GridColumn
          className="text-lg"
          field="Location"
          title="Location"
        
        />
        <GridColumn
          className="text-lg"
          field="Include"
          title="Inclusion Type"
          
        />
        <GridColumn
          className="text-lg"
          field="AdditionalParameter"
          title="Additional Parameters"
         
        />
      </Grid>
    </div>
  )
}
