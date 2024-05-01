import React from 'react'
import { Button } from '~/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
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
import { columnsmeeting } from '~/components/datatable/columns-meeting'
import { DataTable } from '~/components/datatable/data-table-meeting'
import taskData from '~/data/columndata/tasks.json'
import { cn } from '~/lib/utils'
import { useLoaderData } from '@remix-run/react'
import InventoryOnHand from '~/components/lowes/InventoryOnHand'
import InvExcessDefict from '~/components/lowes/InvExcessDefict'
import InventoryProjection from '~/components/lowes/InventoryProjection'
import SimulationChart from '~/components/lowes/SimulationChart'
import Redeploy from '~/components/lowes/Redeploy'
import InventoryOpportunity from '~/components/lowes/InventoryOpportunity'
import Recommendations from '~/components/lowes/Recommendations'
import NetworkInventory from '~/components/lowes/NetworkInventory'

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

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
]

function DemoContainer({
  // eslint-disable-next-line react/prop-types
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  )
}

export default function InventoryIndex() {
  const { tasks, invData } = useLoaderData()

  return (
    <>
      <div className="m-4">
        <div className="w-100 m-2 flex  justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Slow Moving Inventory Optimizer
          </h2>

          <div className="flex items-center justify-end"></div>
        </div>

        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Current Network Inventory</div>
            <Icontooltip />
          </div>
        </div>
        <div>
          <NetworkInventory />
        </div>
      </div>
    </>
  )
}
