import { Grid, GridColumn } from '@progress/kendo-react-grid'
// import EventData from "~/data/riskData/EventData.json";

const EventData = [
  {
    Name: 'Raining Season',
    EventType: 'Path State',
    Parameters: 'path: Path Supplier DC Berlin,new state:Temporarily closed',
    OccurrenceType: 'Random',
    OccurrenceTime: '2023-10-19',
    Trigger: '',
    Probability: 0.5,
  },
  {
    Name: 'End of Raining Season',
    EventType: 'Path State',
    Parameters: 'Path: Path Supplier DC Berlin,new state:Open',
    OccurrenceType: 'Date',
    OccurrenceTime: '2023-10-19',
    Trigger: 'Raining season',
    Probability: 1,
  },
  {
    Name: 'Increase in Demand',
    EventType: 'Demand coefficient',
    Parameters: 'Customer:[Customers],coefficient:1.1',
    OccurrenceType: 'Random',
    OccurrenceTime: '2023-10-19',
    Trigger: '',
    Probability: 0.8,
  },
  {
    Name: 'Decrease in Demand',
    EventType: 'Demand coefficient',
    Parameters: 'Customer:[Customers],coefficient:0.7',
    OccurrenceType: 'Random',
    OccurrenceTime: '2023-10-19',
    Trigger: '',
    Probability: 0.9,
  },
  {
    Name: 'Supplier failure',
    EventType: 'Facility State',
    Parameters: 'Site: Supplier DC Berlin,new state:Temporarily closed',
    OccurrenceType: 'Random',
    OccurrenceTime: '2023-10-19',
    Trigger: '',
    Probability: 0.5,
  },
  {
    Name: 'Supplier Recovery',
    EventType: 'Facility State',
    Parameters: 'Site: Supplier DC Berlin,new state:Open',
    OccurrenceType: 'Delay (days)',
    OccurrenceTime: '2023-10-19',
    Trigger: '',
    Probability: 1,
  },
  // {
  //   Name: 'Event_1',
  //   EventType: 'Facility State',
  //   Parameters: 'DC Berlin',
  //   OccurrenceType: 'Date',
  //   OccurrenceTime: '2023-10-19',
  //   Trigger: '',
  //   Probability: 1,
  // },
  // {
  //   Name: 'Event_2',
  //   EventType: 'Weather',
  //   Parameters: 'Facility State',
  //   OccurrenceType: 'Delay (days)',
  //   OccurrenceTime: '60',
  //   Trigger: 'Events',
  //   Probability: 1,
  // },
]
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
          width="250px"
          className="text-lg"
        />
        <GridColumn
          field="EventType"
          title="Event Type"
          width="200px"
          className="text-lg"
        />
        <GridColumn
          field="Parameters"
          title="Parameters"
          width="530px"
          className="text-lg"
        />
        <GridColumn
          field="OccurrenceType"
          title="OccurrenceType"
          width="200px"
          className="text-lg"
        />
        <GridColumn
          field="OccurrenceTime"
          title="Occurrence Time"
          width="200px"
          className="text-lg"
        />
        <GridColumn
          field="Trigger"
          title="Trigger"
          width="200px"
          className="text-lg"
        />
        <GridColumn
          field="Probability"
          title="Probability"
          width="190px"
          className="text-lg"
        />
      </Grid>
    </div>
  )
}
