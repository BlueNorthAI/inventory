import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import gridCommStyles from "ag-grid-community/styles/ag-grid.css?url"; // Mandatory CSS required by the grid
import themeStyles from "ag-grid-community/styles/ag-theme-quartz.css?url"; // Optional Theme applied to the grid
import { useLoaderData } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import React, { useState, useEffect, useMemo } from 'react'
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: gridCommStyles },
  { rel: "stylesheet", href: themeStyles },
];
const CompanyLogoRenderer = ({ value }) => (
  <span
    style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    }}
  >
    {value && (
      <img
        alt={`${value} Flag`}
        src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
        style={{
          display: 'block',
          width: '25px',
          height: 'auto',
          maxHeight: '50%',
          marginRight: '12px',
          filter: 'brightness(1.1)',
        }}
      />
    )}
    <p
      style={{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {value}
    </p>
  </span>
)

/* Custom Cell Renderer (Display tick / cross in 'Successful' column) */
const MissionResultRenderer = ({ value }) => (
  <span
    style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
    }}
  >
    {
      <img
        alt={`${value}`}
        src={`https://www.ag-grid.com/example-assets/icons/${value ? 'tick-in-circle' : 'cross-in-circle'}.png`}
        style={{ width: 'auto', height: 'auto' }}
      />
    }
  </span>
)

/* Format Date Cells */
const dateFormatter = (params) => {
  return new Date(params.value).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
export const loader = async () => {
    return {
      rowData: [
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
      ],
      colDefs: [
        {
          field: 'mission',
          width: 150,
          checkboxSelection: true,
        },
        {
          field: 'company',
          width: 130,
          cellRenderer: CompanyLogoRenderer,
        },
        {
          field: 'location',
          width: 225,
        },
        {
          field: 'date',
          valueFormatter: dateFormatter,
        },
        {
          field: 'price',
          width: 130,
          valueFormatter: (params) => {
            return '£' + params.value.toLocaleString()
          },
        },
        {
          field: 'successful',
          width: 120,
          cellRenderer: MissionResultRenderer,
        },
        { field: 'rocket' },
      ],
    }
};
 const defaultColDef = {
   filter: true,
   editable: true,
 }
export default function GridReact() {
  const { colDefs } = useLoaderData<typeof loader>();
  const [rowData, setRowData] = useState([])
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData))
  }, [])

  // Apply settings across all columns
 
  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} 
    >
       <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        rowSelection="multiple"
        onSelectionChanged={(event) => console.log("Row Selected!")}
        onCellValueChanged={(event) =>
          console.log(`New Cell Value: ${event.value}`)
        }
      />
    </div>
  );
}
