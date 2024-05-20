import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react' // AG Grid Component
import { Form, useFetcher } from '@remix-run/react'
// Optional Theme applied to the grid
import 'ag-grid-enterprise' // Required for AG Grid Enterprise features

export default function MeasureMaster() {
  //   const demand = useFetcher();
  const fetcher = useFetcher()
  const [rowData, setRowData] = useState([])
  const [gridApi, setGridApi] = useState(null)
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), [])

  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), [])

  const defaultColDef = {
    sortable: true,
    filter: true,
    // floatingFilter: true,
    resizable: true,
    editable: true,
    flex: 2,
    minWidth: 100,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    initialWidth: 200,
    // enableRowGroup: true,
    // headerCheckboxSelection: true,
  }

  const columnDefs = [
  
    {
      field: 'level_id',
      headerName: 'Level ID',
      filter: 'agNumberColumnFilter',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      pinned: true,
      // rowGroup: true,
    },
    {
      field: 'level_code',
      headerName: 'Level Code',
      filter: 'agTextColumnFilter',
      // rowGroup: true,
    },
    {
      field: 'level_description',
      headerName: 'Level Description',
      filter: 'agTextColumnFilter',
      // rowGroup: true,
    },
    {
      field: 'dimension_id',
      headerName: 'Dimension ID',
      filter: 'agTextColumnFilter',
      // rowGroup: true,
    },
  ]

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
    console.log(params.api)
    setGridApi(params.api)
    loadData()
  }, [])

  // Function to load data
  const loadData = useCallback(() => {
    fetcher.load('/rLevelMaster?page=1&limit=100') // Adjust endpoint as necessary
  }, [fetcher])

  // Effect to update row data when fetcher data changes
  useEffect(() => {
    if (fetcher.data) {
      setRowData(fetcher.data.data)
    }
  }, [fetcher.data])

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={'ag-theme-quartz'}>
        <Form method="post">
          <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
            onGridReady={onGridReady}
            pagination={true}
            paginationPageSize={20}
            suppressPaginationPanel={false}
            domLayout="autoHeight"
            sideBar={true}
            enableCharts={true}
            // onCellValueChanged={onCellValueChanged}
            // rowGroupPanelShow="always"
            rowSelection="multiple"
            enableRangeSelection={true}
            floatingFilter={true}
          />
        </Form>
      </div>
    </div>
  )
}
