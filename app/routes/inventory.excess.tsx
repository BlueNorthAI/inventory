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
import { json, type LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import taskData from '~/data/columndata/tasks.json'

import InvExcessDefict from '~/components/lowes/InvExcessDefict'
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
const skuList = [
  { title: 'SKU1' },
  { title: 'SKU2' },
  { title: 'SKU3' },
  { title: 'SKU4' },
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
            <div className="p-2">Excess-Deficit Inventory</div>

            <Icontooltip />
          </div>
        </div>
        <div>
          <InvExcessDefict />
        </div>
      </div>
    </>
  )
}
