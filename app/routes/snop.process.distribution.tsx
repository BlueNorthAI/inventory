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
import { json, type LinksFunction } from '@remix-run/node'
import { columnsmeeting } from '~/components/datatable/columns-meeting'
import { DataTable } from '~/components/datatable/data-table-meeting'
import taskData from '~/data/columndata/tasks.json'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'

import { cn } from '~/lib/utils'
import { useLoaderData } from '@remix-run/react'
import ExecutiveOverview from '~/components/lowes/ExecutiveOverview'

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
);
}

async function getTasks() {
  const data = await taskData
  return data
}

export const loader = async () => {
  const tasks = await getTasks()
const distributionData = tasks.filter(
  (task) =>
    (task.label.includes('Logistics') || task.label.includes('Warehousing')) &&
    task.severity === 'High'
)

return json({ tasks, distributionData })
}


export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
]
function DemoContainer({
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

export default function DemandPlanning() {
    const { tasks, distributionData } = useLoaderData()
  return (
    <>
      <div className="m-4">
        <Tabs defaultValue="Meeting" className="tracking-normal">
          <div className="">
            {/* <h1 className="text-3xl font-bold">Distribution Meeting</h1> */}
            <TabsList className="">
              <TabsTrigger value="Meeting" className="relative">
                Meeting
              </TabsTrigger>
              <TabsTrigger value="Executive" className="relative">
                Executive Overview
              </TabsTrigger>
              <TabsTrigger className="" value="Operational">
                Operational Dashboard
              </TabsTrigger>
              <TabsTrigger className="" value="Scorecard">
                Scorecard
              </TabsTrigger>
              <TabsTrigger className="" value="Utilization">
                Utilization Dashboard
              </TabsTrigger>
              <TabsTrigger className="" value="Damage">
                Damage Rate Dashboard
              </TabsTrigger>
              <TabsTrigger className="" value="Ontime">
                Ontime Delivery Dashboard
              </TabsTrigger>
              <TabsTrigger className="" value="Overview">
                Overview of Top 20 Carriers
              </TabsTrigger>
              <TabsTrigger className="" value="Carrier">
                Carrier Scorecard
              </TabsTrigger>
            </TabsList>
          </div>
          <DemoContainer>
            <TabsContent value="Meeting">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-md p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Distribution Meeting</div>
                  <Icontooltip />
                </div>
              </div>
              <div className="">
                {' '}
                <DataTable data={distributionData} columns={columnsmeeting} />
              </div>
            </TabsContent>
            <TabsContent value="Executive">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-md p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Executive Overview - Monthly Performance</div>
                  <Icontooltip />
                </div>
              </div>
              <div className="">
             <ExecutiveOverview />
             
              </div>
            </TabsContent>
            <TabsContent value="Operational">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-md p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Operational Dashboard - Weekly Performance</div>
                  <Icontooltip />
                </div>
              </div>
              <div className="">
                {' '}
                <DataTable data={distributionData} columns={columnsmeeting} />
              </div>
            </TabsContent>
            <TabsContent value="Scorecard">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-md p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Prime Tender Acceptance Scorecard</div>
                  <Icontooltip />
                </div>
              </div>
              <div className="">
                {' '}
                <DataTable data={distributionData} columns={columnsmeeting} />
              </div>
            </TabsContent>
            <TabsContent value="Utilization">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-md p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Utilization Dashboard</div>
                  <Icontooltip />
                </div>
              </div>
              <div className="">
                {' '}
                <DataTable data={distributionData} columns={columnsmeeting} />
              </div>
            </TabsContent>
            <TabsContent value="Damage">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-md p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Damage Rate Dashboard</div>
                  <Icontooltip />
                </div>
              </div>
              <div className="">
                {' '}
                <DataTable data={distributionData} columns={columnsmeeting} />
              </div>
            </TabsContent>
            <TabsContent value="Ontime">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-md p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Ontime Delivery Dashboard</div>
                  <Icontooltip />
                </div>
              </div>
              <div className="">
                {' '}
                <DataTable data={distributionData} columns={columnsmeeting} />
              </div>
            </TabsContent>
            <TabsContent value="Overview">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-md p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Overview of Top 20 Carriers</div>
                  <Icontooltip />
                </div>
              </div>
              <div className="">
                {' '}
                <DataTable data={distributionData} columns={columnsmeeting} />
              </div>
            </TabsContent>
            <TabsContent value="Carrier">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-md p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Carrier Scorecard</div>
                  <Icontooltip />
                </div>
              </div>
              <div className="">
                {' '}
                <DataTable data={distributionData} columns={columnsmeeting} />
              </div>
            </TabsContent>
          </DemoContainer>
        </Tabs>
      </div>
    </>
  )
}
