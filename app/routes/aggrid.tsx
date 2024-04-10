import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import gridCommStyles from "ag-grid-community/styles/ag-grid.css?url"; // Mandatory CSS required by the grid
import themeStyles from "ag-grid-community/styles/ag-theme-quartz.css?url"; // Optional Theme applied to the grid
import { useLoaderData } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: gridCommStyles },
  { rel: "stylesheet", href: themeStyles },
];

export const loader = async () => {
    return {
        rowData: [
            { make: "Tesla", model: "Model Y", price: 64950, electric: true },
            { make: "Ford", model: "F-Series", price: 33850, electric: false },
            { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        ] ,
        colDefs: [
          {
            valueGetter: p => p.data.make + '' + p.data.price,
            headerName: "Make & Price",
            // field: "make"
          },
            { field: "model" },
          {
            field: "price",
              
             },
            { field: "electric" },
        ] ,
    };
};

export default function GridReact() {
  const { rowData, colDefs } = useLoaderData<typeof loader>();
  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}
