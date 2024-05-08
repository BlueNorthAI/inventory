import { ChevronDownIcon } from '@heroicons/react/20/solid'
import taskData from '~/data/network/traceOverall/tasks.json'
import linkData from '~/data/linkdata/link.json'
import { json } from '@remix-run/node'
import { useLoaderData, Link, useParams } from '@remix-run/react'
import {
  labels,
  priorities,
  statuses,
  dot,
} from '~/data/network/traceOverall/data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { cn } from '~/lib/utils'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { ProgressBar } from '@progress/kendo-react-progressbars'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { columns } from '~/components/datatable/columns-link'
import { DataTable } from '~/components/datatable/data-table-link'
import {
  ProductTable,
  CustomerTable,
  InventoryTable,
  ExcessTable,
} from '~/components/network/ProductTable'
import WrapperDonutChart from '~/kendo/charts/donut/WrapperDonutChart'
import WrapperMultiStackColChart from '~/kendo/charts/stackcol/WrapperStackColChart'
import WrapperMultiColumnChart from '~/kendo/charts/column/WrapperColumnChart'
import WrapperMultiBarChart from '~/kendo/charts/bar/WrapperBarChart'
import WrapperPieChart from '~/kendo/charts/pie/WrapperPieChart'
import WrapperMultiAreaChart from '~/kendo/charts/area/WrapperAreaChart'
import WrapperMultiLineChart from '~/kendo/charts/line/WrapperLineChart'
import {
  leadData_m,
  campaignCategories_m,
  campaignSeries_m,
  pipelineCategories_m,
  pipelineSeries_m,
  openCategories_m,
  openSeries_m,
} from '~/kendo/rawData/dashboard/salesDashboard'
import {
  handbalance_m,
  avgInventoryCategories_m,
  avgInventorySeries_m,
  materialCategories_m,
  materialSeries_m,
  turnsCategories_m,
  turnsSeries_m,
} from '~/kendo/rawData/dashboard/inventoryDashboard'
import {
  shipmentsData_m,
  cancelCategories_m,
  cancelSeries_m,
  mapeCategories_m,
  mapeSeries_m,
  locationCategories_m,
  locationSeries_m,
  lateCategories_m,
  lateSeries_m,
  ontimeCategories_m,
  ontimeSeries_m,
  perfectCategories_m,
  perfectFirstSeries_m,
  invoiceCategories_m,
  invoiceSeries_m,
} from '~/kendo/rawData/dashboard/demandDashboard'

export const reviewTabs = [
  { name: 'Month', href: '#', current: true },
  { name: 'Quarter', href: '#', current: false },
  { name: 'Year', href: '#', current: false },
]

export const meetingTabs = [
  { name: 'Daily', href: '#', current: true },
  { name: 'Weekly', href: '#', current: false },
]

export const kpicust_m = [
  {
    Name: 'Lead Conversion Rate',
    Value: '14.91',
    Trend: 'up',
    TargetAch: '83',
    container: <WrapperDonutChart series={leadData_m} />,
    status: 'Above Target',
    Analyze: '/snop/dashboard/analysis/pipelineAnalysis',
  },
  {
    Name: 'Campaign ROI',
    Value: '4.33',
    Trend: 'up',
    TargetAch: '$291.96',
    container: (
      <WrapperMultiBarChart
        category={campaignCategories_m}
        series={campaignSeries_m}
      />
    ),
    status: 'Above Target',
    Analyze: '/snop/dashboard/analysis/pipelineAnalysis',
  },
  {
    Name: 'Campaign Attributed Pipeline',
    Value: '7.49M',
    Trend: 'down',
    TargetAch: 0,
    container: (
      <WrapperMultiStackColChart
        category={pipelineCategories_m}
        series={pipelineSeries_m}
      />
    ),
    status: 'On Track',
    Analyze: '/snop/dashboard/analysis/pipelineAnalysis',
  },
  {
    Name: 'Open Pipeline',
    Value: '$10.02M',
    Trend: 'down',
    TargetAch: '$47.13k',
    container: (
      <WrapperMultiColumnChart
        category={openCategories_m}
        series={openSeries_m}
      />
    ),
    status: 'Above Target',
    Analyze: '/snop/dashboard/analysis/pipelineAnalysis',
  },
]

export const kpiinv = [
  {
    Name: 'On Hand Balance',
    Value: '$8.46B',
    Trend: 'up',
    TargetAch: 83,
    container: <WrapperPieChart series={handbalance_m} />,
    status: 'Above Target',
    Analyze: '/snop/dashboard/analysis/inventoryAnalysis',
  },
  {
    Name: 'Avg Inventory Valuation',
    Value: '$233.57M',
    Trend: 'up',
    TargetAch: 80,
    container: (
      <WrapperMultiBarChart
        category={avgInventoryCategories_m}
        series={avgInventorySeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/inventoryAnalysis',
  },
  {
    Name: 'Material Cost',
    Value: '$4.17B',
    Trend: 'up',
    TargetAch: 77,
    container: (
      <WrapperMultiBarChart
        category={materialCategories_m}
        series={materialSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/invcostAnalysis',
  },
  {
    Name: 'Inventory Turns',
    Value: '7',
    Trend: 'up',
    TargetAch: 95,
    container: (
      <WrapperMultiBarChart
        category={turnsCategories_m}
        series={turnsSeries_m}
      />
    ),
    status: 'Above Target',
    Analyze: '/snop/dashboard/analysis/inventoryAnalysis',
  },
]

export const kpiprod = [

  {
    Name: 'Late Shipments',
    Value: '$361.89M',
    Trend: 'up',
    TargetAch: 90,
    container: (
      <WrapperMultiColumnChart
        category={lateCategories_m}
        series={lateSeries_m}
      />
    ),
    status: 'On Track',
    Analyze: '/snop/dashboard/analysis/orderAnalysis',
  },
  {
    Name: 'On Time Shipment %',
    Value: '73.8%',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <WrapperMultiAreaChart
        category={ontimeCategories_m}
        series={ontimeSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/demandAnalysis',
  },
  {
    Name: 'Perfect Order %',
    Value: '$300M',
    Trend: 'up',
    TargetAch: 77,
    container: (
      <WrapperMultiBarChart
        category={perfectCategories_m}
        series={perfectFirstSeries_m}
      />
    ),
    status: 'On Track',
    Analyze: '/snop/dashboard/analysis/orderAnalysis',
  },
  {
    Name: 'Order to Invoice Cycle Time',
    Value: '75',
    Trend: 'up',
    TargetAch: 95,
    container: (
      <WrapperMultiLineChart
        category={invoiceCategories_m}
        series={invoiceSeries_m}
      />
    ),
    status: 'Above Target',
    Analyze: '/snop/dashboard/analysis/orderAnalysis',
  },
]

const plans = [
  {
    name: 'Price drop',
    priceMonthly: 2,
    priceYearly: 290,
    limit: 'Initiate Price drop',
    measure: 'Consensus Forecast',
  },
  {
    name: 'Rebate',
    priceMonthly: 1,
    priceYearly: 990,
    limit: 'Introduce Mail In Rebate',
    measure: 'Consensus Forecast',
  },
  {
    name: 'Tv ad',
    priceMonthly: 1,
    priceYearly: 2490,
    limit: 'Introduce Promotion',
    measure: 'Consensus Forecast',
  },
]
const cardData = [
  {
    Name: 'Forecast Accuracy',
    Value: '320%',
    TargetAch: 85,
    status: 'Above Target',
    container: 'Maricpoa Country Customers purchased more',
    Analyze: '/demo/dashboard/salesExp',
  },
  {
    Name: 'Forecast Bias',
    Value: '5%',
    TargetAch: 5,
    status: 'Above Target',
    container: 'Forecast Bias',
    Analyze: '/demo/dashboard/salesExp',
  },
  {
    Name: 'Forecast Error',
    Value: '5%',
    TargetAch: 5,
    status: 'Above Target',
    container: 'Forecast Error',
    Analyze: '/demo/dashboard/salesExp',
  },
  {
    Name: 'Forecast Value',
    Value: '5%',
    TargetAch: 5,
    status: 'Below Target',
    container: 'Forecast Value',
    Analyze: '/demo/dashboard/salesExp',
  },
]
async function getTasks() {
  const data = await taskData
  return data
}

export const loader = async () => {
  const tasks = await getTasks()
  return json({ tasks })
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { tasks } = useLoaderData()
  const params = useParams()
  const emptyStyles = { background: '#ef4444' }
  const progressStyles = { background: '#22c55e' }
  const [selected, setSelected] = useState(plans[0])

  const exp = tasks.filter((task) => task.orderId === params.orderId)[0]
  // console.log(`exp`, exp)
  const status = statuses.find((status) => status.value === exp.orderStatus)
  if (!status) {
    return null
  }
  // const dots = dot.find((d) => d.value === exp.severity)

  // if (!dots) {
  //   return null
  // }

  return (
    <>
      {/* Comments*/}

      <div className="bg-white rounded-lg border m-4">
        <div className="flex items-center justify-center rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2"> Order Summary - {exp.orderId}</div>
          </div>
        </div>

        <div className="flex justify-center">
          <ul className="timeline">
            <li>
              <div className="timeline-middle text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">Ordered</div>

              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box ">
                Supplier Dispatched
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">DC Dispatched</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box ">Store Received</div>
            </li>
          </ul>
        </div>

        <div className="m-2">
          <Tabs defaultValue="Product" className="tracking-normal">
            <TabsList className="">
              <TabsTrigger value="Product" className="relative">
                Product
              </TabsTrigger>
              <TabsTrigger className="" value="Customer">
                Customer
              </TabsTrigger>
              <TabsTrigger className="" value="Inventory">
                Inventory
              </TabsTrigger>
              <TabsTrigger className="" value="Service">
                Service Levels
              </TabsTrigger>
              <TabsTrigger className="" value="Supplier">
                Supplier
              </TabsTrigger>
              <TabsTrigger className="" value="Transporter">
                Transporter
              </TabsTrigger>
              <TabsTrigger className="" value="DC">
                DC
              </TabsTrigger>
              <TabsTrigger className="" value="Store">
                Store
              </TabsTrigger>
            </TabsList>

            <TabsContent value="Product">
              <div className="py-2 grid grid-cols-2 ">
                <div>
                  <ProductTable />
                </div>
                <div className="">
                  {' '}
                  <ul className="mx-4  grid grid-cols-2 gap-6">
                    {kpicust_m.map((kpi) => (
                      <li
                        key={kpi.Name}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 border"
                      >
                        <div className="relative flex flex-1 flex-col py-2 pl-3">
                          <span
                            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                              kpi.status === 'Above Target'
                                ? `bg-green-500`
                                : kpi.status === 'Below Target'
                                  ? `bg-red-500`
                                  : ''
                            }`}
                          ></span>
                          <div className="my-2 flex items-baseline gap-2">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                {kpi.Name}
                              </h3>
                              {/* <h1 className="text-4xl font-bold text-black">
                                {kpi.Value}
                              </h1> */}
                            </div>
                          </div>
                          <div className="">{kpi.container}</div>
                        </div>
                        {/* <div>
                          <div className="-mt-px flex divide-x divide-gray-200 bg-gray-50 h-10 ">
                            <div className="flex w-0 flex-1  ">
                              <Link
                                to={kpi.Analyze}
                                className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                              >
                                <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                                  <WrenchScrewdriverIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Analyze
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="Customer">
              <div className="py-2 grid grid-cols-2 ">
                <div>
                  <CustomerTable />
                </div>
                <div className="">
                  {' '}
                  <ul className="mx-4 grid grid-cols-2 gap-6">
                    {kpiprod.map((kpi) => (
                      <li
                        key={kpi.Name}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 border"
                      >
                        <div className="relative flex flex-1 flex-col py-2 pl-3">
                          <span
                            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                              kpi.status === 'Above Target'
                                ? `bg-green-500`
                                : kpi.status === 'Below Target'
                                  ? `bg-red-500`
                                  : ''
                            }`}
                          ></span>
                          <div className="my-2 flex items-baseline gap-2">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                {kpi.Name}
                              </h3>
                              {/* <h1 className="text-4xl font-bold text-black">
                                {kpi.Value}
                              </h1> */}
                            </div>
                          </div>
                          <div className="">{kpi.container}</div>
                        </div>
                        {/* <div>
                          <div className="-mt-px flex divide-x divide-gray-200 bg-gray-50 h-10 ">
                            <div className="flex w-0 flex-1  ">
                              <Link
                                to={kpi.Analyze}
                                className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                              >
                                <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                                  <WrenchScrewdriverIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Analyze
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Inventory">
              <div className="py-2 grid grid-cols-2 ">
                <div>
                  <div className="mb-2">
                    <InventoryTable />
                  </div>
                  <ExcessTable />
                </div>
                <div className="">
                  {' '}
                  <ul className="mx-4 grid grid-cols-2 gap-6">
                    {kpiinv.map((kpi) => (
                      <li
                        key={kpi.Name}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 border"
                      >
                        <div className="relative flex flex-1 flex-col py-2 pl-3">
                          <span
                            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                              kpi.status === 'Above Target'
                                ? `bg-green-500`
                                : kpi.status === 'Below Target'
                                  ? `bg-red-500`
                                  : ''
                            }`}
                          ></span>
                          <div className="my-2 flex items-baseline gap-2">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                {kpi.Name}
                              </h3>
                              {/* <h1 className="text-4xl font-bold text-black">
                                {kpi.Value}
                              </h1> */}
                            </div>
                          </div>
                          <div className="">{kpi.container}</div>
                        </div>
                        {/* <div>
                          <div className="-mt-px flex divide-x divide-gray-200 bg-gray-50 h-10 ">
                            <div className="flex w-0 flex-1  ">
                              <Link
                                to={kpi.Analyze}
                                className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                              >
                                <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                                  <WrenchScrewdriverIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Analyze
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
