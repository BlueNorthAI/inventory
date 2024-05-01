import { Button } from '~/components/ui/button'
import { PrinterIcon } from '@heroicons/react/24/outline'
import {
  FilePlusIcon,
  Pencil2Icon,
  TrashIcon,
  DownloadIcon,
} from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'
import { kpiService_m, kpiInv_m } from '~/data/analysis/underData'
import { json, type LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import taskData from '~/data/columndata/tasks.json'

async function getTasks() {
  const data = await taskData
  return data
}
export const loader = async () => {
  const tasks = await getTasks()
  const invData = tasks.filter(
    (task) => task.label === 'Inventory' && task.severity === 'High'
  )
  return json({ tasks, invData })
}

const stats = [
  { name: 'Understand/decrease demand', stat: '+66K' },
  { name: 'Redeploy stock', stat: '-1.0%' },
  { name: 'Increase Supply', stat: '-2.0%' },
  { name: 'Total Change to last', stat: '+1.5M' },
]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
]
export function Icontooltip() {
  return (
    <div className="m-2 space-x-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-indigo-100 ">
              <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>New</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-purple-100">
              <Pencil2Icon className="text-purple-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-red-100">
              <TrashIcon className="text-red-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-yellow-100">
              <PrinterIcon className="text-yellow-800 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Print</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-green-100">
              <DownloadIcon className="text-green-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default function InventoryIndex() {
  return (
    <>
      <div className="m-4">
        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Demand Shaping</div>

            <Icontooltip />
          </div>
        </div>
        <div>
          <div>
            <div>
              <dl className=" my-2 grid grid-cols-1 gap-6  lg:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.name}
                    className="items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
                  >
                    <dt className="truncate text-center text-lg font-medium text-gray-500">
                      {item.name}
                    </dt>
                    <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
                      {item.stat}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="mx-4 w-full border-t border-gray-200" />
                </div>
              </div>
            </div>

            <ul className="mx-4 my-4 p-1 grid grid-cols-1 md:grid-cols-1 rounded-lg bg-white shadow-xl shadow-slate-900/10">
              {kpiService_m.map((kpi) => (
                <li
                  key={kpi.Name}
                  className="col-span-1 flex flex-col divide-y divide-white"
                >
                  <div className="relative flex flex-1 flex-col py-2 pl-3">
                    <div className="flex items-baseline gap-2">
                      <div>
                        <h3 className="text-lg m-2 font-medium text-gray-900">
                          {kpi.Name}
                        </h3>
                        {/* <h1 className="font-display  mb-3 text-4xl font-bold text-black">
                              {kpi.Value}
                            </h1> */}
                      </div>
                    </div>
                    <div>{kpi.container}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* charts */}

            <ul className="mx-4 my-4 p-1 grid grid-cols-1 md:grid-cols-1 rounded-lg bg-white shadow-xl shadow-slate-900/10">
              {kpiInv_m.map((kpi) => (
                <li
                  key={kpi.Name}
                  className="col-span-1 flex flex-col divide-y divide-white"
                >
                  <div className="relative flex flex-1 flex-col py-2 pl-3">
                    <div className="flex items-baseline gap-2">
                      <div>
                        <h3 className="text-lg m-2 font-medium text-gray-900">
                          {kpi.Name}
                        </h3>
                        {/* <h1 className="font-display  mb-3 text-4xl font-bold text-black">
                              {kpi.Value}
                            </h1> */}
                      </div>
                    </div>
                    <div>{kpi.container}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
