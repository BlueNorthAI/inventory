import React, { useCallback, useEffect, useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import { Form, useFetcher } from "@remix-run/react";
// Optional Theme applied to the grid
import "ag-grid-enterprise"; // Required for AG Grid Enterprise features




export default function LevelMaster() {
  //   const demand = useFetcher();
  const fetcher = useFetcher();
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);

  const defaultColDef = {
    sortable: true,
    // filter: true,
    resizable: true,
    editable: true,
    flex: 1,
    minWidth: 100,
    enableRowGroup: true,
  };

  const columnDefs = [
    {
      field: "level_id",
      filter: "agNumberColumnFilter",
      // rowGroup: true,
    },
    {
      field: "level_code",
      filter: "agTextColumnFilter",
      flex: 2
      // rowGroup: true,
    },
    {
      field: "column_name",
      filter: "agTextColumnFilter",
      // rowGroup: true,
    },
    {
      field: "level_description",
      filter: "agTextColumnFilter",
    },
    {
      field: "dimension_id",
      filter: "agNumberColumnFilter",
    },


  ];

  // const onCellValueChanged = useCallback(
  //   (event) => {
  //     if (!event.newValue || event.newValue === event.oldValue) {
  //       return; // Do nothing if the value hasn't changed
  //     }
  //     console.log("Cell value changed:", event);

  //     const formData = new FormData();
  //     formData.append("customer", event.data.customer);
  //     formData.append("sku", event.data.sku);
  //     formData.append("site", event.data.site);
  //     formData.append("bucket", event.data.bucket);
  //     formData.append("field", event.colDef.field);
  //     formData.append("newValue", event.newValue);

  //     // Use fetcher to submit the changes to your Remix action
  //     fetcher.submit(formData, {
  //       method: "post",
  //       action: "/demandPage",
  //       // encType: "application/json",
  //     });
  //   },
  //   [fetcher]
  // ); // Include `fetcher` in the dependency array

  // Load data when the grid is ready
  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
    loadData();
  }, []);

  // Function to load data
  const loadData = useCallback(() => {
    fetcher.load("/rLevelMaster?page=1&limit=100"); // Adjust endpoint as necessary
  }, [fetcher]);

  // Effect to update row data when fetcher data changes
  useEffect(() => {
    if (fetcher.data) {
      console.log(fetcher.data.data)
      setRowData(fetcher.data.data);
    }
  }, [fetcher.data]);

  return (
    <div
      className="ag-theme-quartz"
      style={{ height: "100%", width: "100%" }}
    >
      <Form method="post">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
          suppressPaginationPanel={false}
          domLayout="autoHeight"
          // onCellValueChanged={onCellValueChanged}
          rowGroupPanelShow="always"
        />
      </Form>
    </div>
  );
}
