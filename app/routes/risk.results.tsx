/* eslint-disable react/prop-types */
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
import type { LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import customAgStyles from '~/styles/custom-grid-styles.css?url'
import LevelMaster from '~/components/lowes/LevelMaster'
import { cn } from '~/lib/utils'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
  { rel: 'stylesheet', href: customAgStyles },
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
export default function MasterData() {
  return (
    <>
      <div className="m-4">
        <DemoContainer>
          <Tabs defaultValue="Target" className="">
            <TabsList className="">
              <TabsTrigger value="Target" className="relative">
                Target Service Level
              </TabsTrigger>
              <TabsTrigger className="" value="Events">
                Events and Recovery
              </TabsTrigger>
              <TabsTrigger className="" value="Cost">
                Total Cost
              </TabsTrigger>
              <TabsTrigger className="" value="Revenue">
                Revenue
              </TabsTrigger>
              <TabsTrigger className="" value="Profit">
                Profit
              </TabsTrigger>
              <TabsTrigger className="" value="Fullfillments">
                Fullfillments Received (Products) by Customer
              </TabsTrigger>
              <TabsTrigger className="" value="Received">
                Demand Received (Dropped Products)
              </TabsTrigger>
              <TabsTrigger className="" value="Placed">
                Demand Placed (Dropped Products) by Customer
              </TabsTrigger>
              <TabsTrigger className="" value="Received">
                Fulfillment Received (Products On-time)
              </TabsTrigger>
              <TabsTrigger className="" value="Late">
                Fulfillment (Late Products)
              </TabsTrigger>
              <TabsTrigger className="" value="Mean">
                Mean Lead Time
              </TabsTrigger>
              <TabsTrigger className="" value="Max">
                Max Lead Time
              </TabsTrigger>
              <TabsTrigger className="" value="Bullwhip">
                Bullwhip Effect by Product
              </TabsTrigger>
            </TabsList>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>

            <TabsContent value="Types">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Dimension Master</div>
                  <Icontooltip />
                </div>
              </div>
              <div>
                <LevelMaster />
              </div>
            </TabsContent>
          </Tabs>
        </DemoContainer>
      </div>
    </>
  )
}
