// import * as React from 'react'
// import { getter } from '@progress/kendo-react-common'
// import { DataResult, process, State } from '@progress/kendo-data-query'
// import { Input } from '@progress/kendo-react-inputs'
// import { GridPDFExport } from '@progress/kendo-react-pdf'
// import { ExcelExport } from '@progress/kendo-react-excel-export'
// import { Button } from '@progress/kendo-react-buttons'
// import {
//   ColumnMenu,
//   CountryCell,
// } from '~/data/kendo/custom-cells'
// import {
//   Grid,
//   GridColumn as Column,
//   GridToolbar,
//   GridHeaderSelectionChangeEvent,
//   GridSelectionChangeEvent,
// } from '@progress/kendo-react-grid'
// import { setGroupIds, setExpandedState } from '@progress/kendo-react-data-tools'

// import { employees } from '~/data/kendo/employess'

// const DATA_ITEM_KEY = 'id'
// const SELECTED_FIELD = 'selected'

// const initialDataState: State = {
//   take: 20,
//   skip: 0,
//   group: [],
// }

// const processWithGroups = (data, dataState: State) => {
//   const newDataState = process(data, dataState)

//   setGroupIds({ data: newDataState.data, group: dataState.group })

//   return newDataState
// }
// export default function App() {
//   const idGetter = getter('id')

//   const [filterValue, setFilterValue] = React.useState()
//   const [filteredData, setFilteredData] = React.useState(employees)
//   const [currentSelectedState, setCurrentSelectedState] = React.useState<{
//     [id: string]: boolean | number[]
//   }>({})
//   const [dataState, setDataState] = React.useState<State>(initialDataState)
//   const [dataResult, setDataResult] = React.useState(
//     process(filteredData, dataState)
//   )

//   const [data, setData] = React.useState(filteredData)

//   const onFilterChange = (ev) => {
//     let value = ev.value
//     setFilterValue(ev.value)
//     let newData = employees.filter((item) => {
//       let match = false
//       for (const property in item) {
//         if (
//           item[property]
//             .toString()
//             .toLocaleLowerCase()
//             .indexOf(value.toLocaleLowerCase()) >= 0
//         ) {
//           match = true
//         }

//         if (
//           item[property].toLocaleDateString &&
//           item[property].toLocaleDateString().indexOf(value) >= 0
//         ) {
//           match = true
//         }
//       }
//       return match
//     })
//     setFilteredData(newData)
//     let clearedPagerDataState = { ...dataState, take: 8, skip: 0 }
//     let processedData = process(newData, clearedPagerDataState)
//     processedData.data = processedData.data.map((item) => ({
//       ...item,
//       selected: currentSelectedState[item[DATA_ITEM_KEY]],
//     }))
//     setDataResult(processedData)
//     setDataState(clearedPagerDataState)
//     setData(newData)
//   }

//   const [resultState, setResultState] = React.useState<DataResult>(
//     processWithGroups(
//       employees.map((item) => ({
//         ...item,
//         ['selected']: currentSelectedState[idGetter(item)],
//       })),
//       initialDataState
//     )
//   )

//   const dataStateChange = (event) => {
//     let processedData = process(filteredData, event.dataState)
//     processedData.data = processedData.data.map((item) => ({
//       ...item,
//       selected: currentSelectedState[item[DATA_ITEM_KEY]],
//     }))
//     setDataResult(processedData)
//     setDataState(event.dataState)
//   }

//   const onExpandChange = React.useCallback(
//     (event) => {
//       const newData = [...dataResult.data]
//       const item = event.dataItem
//       if (item.groupId) {
//         const targetGroup = newData.find((d) => d.groupId === item.groupId)
//         if (targetGroup) {
//           targetGroup.expanded = event.value
//           setDataResult({
//             ...dataResult,
//             data: newData,
//           })
//         }
//       } else {
//         item.expanded = event.value
//         setDataResult({
//           ...dataResult,
//           data: newData,
//         })
//       }
//     },
//     [dataResult]
//   )

//   const setSelectedValue = (data: any[]) => {
//     let newData = data.map((item) => {
//       if (item.items) {
//         return {
//           ...item,
//           items: setSelectedValue(item.items),
//         }
//       } else {
//         return {
//           ...item,
//           ['selected']: currentSelectedState[idGetter(item)],
//         }
//       }
//     })
//     return newData
//   }

//   const newData = setExpandedState({
//     data: setSelectedValue(resultState.data),
//     collapsedIds: [],
//   })

//   const onHeaderSelectionChange = React.useCallback(
//     (event: GridHeaderSelectionChangeEvent) => {
//       const checkboxElement: any = event.syntheticEvent.target
//       const checked = checkboxElement.checked

//       const newSelectedState = {}
//       data.forEach((item) => {
//         newSelectedState[idGetter(item)] = checked
//       })

//       setCurrentSelectedState(newSelectedState)

//       const newData = data.map((item) => ({
//         ...item,
//         [SELECTED_FIELD]: checked,
//       }))

//       const newDataResult = processWithGroups(newData, dataState)
//       setDataResult(newDataResult)
//     },
//     [data, dataState]
//   )

//   const onSelectionChange = (event: GridSelectionChangeEvent) => {
//     const selectedProductId = event.dataItem.id
//     const newSelectedState = {
//       ...currentSelectedState,
//       [selectedProductId]: !currentSelectedState[selectedProductId],
//     }
//     setCurrentSelectedState(newSelectedState)

//     const newData = data.map((item) => {
//       return { ...item, selected: newSelectedState[idGetter(item)] }
//     })
//     const newDataResult = processWithGroups(newData, dataState)
//     setDataResult(newDataResult)
//   }

//   const getNumberOfItems = (data: any[]) => {
//     let count = 0
//     data.forEach((item) => {
//       if (item.items) {
//         count = count + getNumberOfItems(item.items)
//       } else {
//         count++
//       }
//     })
//     return count
//   }

//   const getNumberOfSelectedItems = (data: any[]) => {
//     let count = 0
//     data.forEach((item) => {
//       if (item.items) {
//         count = count + getNumberOfSelectedItems(item.items)
//       } else {
//         count = count + (item.selected == true ? 1 : 0)
//       }
//     })
//     return count
//   }
//   const checkHeaderSelectionValue = () => {
//     let selectedItems = getNumberOfSelectedItems(newData)
//     return newData.length > 0 && selectedItems == getNumberOfItems(newData)
//   }

 

//   return (
//     <div>
   
//         <Grid
//           style={{ height: '700px', width: '20%' }}
//         //   pageable={{ pageSizes: true }}
//           data={dataResult}
//           sortable={true}
//           rowHeight={50}
//           total={resultState.total}
//           onDataStateChange={dataStateChange}
//           {...dataState}
//           onExpandChange={onExpandChange}
//           expandField="expanded"
//           dataItemKey={DATA_ITEM_KEY}
//           selectedField={SELECTED_FIELD}
//           onHeaderSelectionChange={onHeaderSelectionChange}
//           onSelectionChange={onSelectionChange}
//           groupable={true}
//           size={'small'}
//         >
//           <GridToolbar>
//             <Input
//               value={filterValue}
//               onChange={onFilterChange}
//               style={{
//                 border: '2px solid #ccc',
//                 boxShadow: 'inset 0px 0px 0.5px 0px rgba(0,0,0,0.0.1)',
//                 width: '170px',
//                 height: '30px',
//                 marginRight: '10px',
//               }}
//               placeholder="Search in all columns..."
//             />
         
//           </GridToolbar>
//           <Column
//             filterable={false}
//             field={SELECTED_FIELD}
//             width={50}
//             headerSelectionValue={checkHeaderSelectionValue()}
//           />

//           <Column
//             field="country"
//             title="Country"
//             cells={{
//               data: CountryCell,
//             }}
//             columnMenu={ColumnMenu}
//             width="200px"
//           />
//         </Grid>
   
   
       

//     </div>
//   )
// }
