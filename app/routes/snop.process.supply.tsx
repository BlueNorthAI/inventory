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
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import { columnsmeeting } from '~/components/datatable/columns-meeting'
import { DataTable } from '~/components/datatable/data-table-inci'
import taskData from '~/data/columndata/tasks.json'
import { cn } from '~/lib/utils'
import { useLoaderData } from '@remix-run/react'


async function getTasks() {
  const data = await taskData
  return data
}

export const loader = async () => {
  const tasks = await getTasks()
  const invData = tasks.filter((task) => task.label === 'Inventory' && task.severity === 'High')
  return json({ tasks, invData })
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

export default function InventoryIndex() {
  const { tasks, invData } = useLoaderData()

  return (
    <>
      <div className="m-4">
        <Tabs defaultValue="Dimensions" className="tracking-normal">
          <div className="flex ">
            {/* <h1 className="text-3xl font-bold">Inventory Review</h1> */}
            <TabsList className="">
              <TabsTrigger value="Meeting" className="Meeting">
                Meeting
              </TabsTrigger>
              <TabsTrigger value="Demand" className="relative">
                Procurement Plan
              </TabsTrigger>
              <TabsTrigger className="" value="New">
                Distribution Plan
              </TabsTrigger>
              <TabsTrigger className="" value="Supply">
                Demand Consensus
              </TabsTrigger>
              <TabsTrigger className="" value="DemandSupply">
                Demand Plan
              </TabsTrigger>
            </TabsList>
          </div>
          <DemoContainer>
            <TabsContent value="Meeting">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Inventory Review</div>
                </div>
              </div>

              <div className="m-4 bg-white rounded-lg">
                <DataTable data={invData} columns={columnsmeeting} />
              </div>
            </TabsContent>
            <TabsContent value="Demand">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Inventory Review</div>
                </div>
              </div>

              <div>Demand Review</div>
            </TabsContent>
            <TabsContent value="New">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">New Product Review</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>

              <div>New Product Review</div>
            </TabsContent>
            <TabsContent value="Supply">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Supply Review</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              <div>Supply Review</div>
            </TabsContent>
            <TabsContent value="DemandSupply">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Demand Supply Balancing</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              <div>Demand Supply Balancing</div>
            </TabsContent>

            <TabsContent value="Financial">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Financial Planning</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              <div>Financial Planning</div>
            </TabsContent>

            <TabsContent value="Executive">
              <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                  <div className="p-2">Executive Meeting</div>

                  <div className="m-2 space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-indigo-100 "
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-purple-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-red-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-yellow-100"
                          >
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-green-100"
                          >
                            <DownloadIcon className="text-green-700 w-6 h-6 " />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Download</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              <div>Executive Meeting</div>
            </TabsContent>
          </DemoContainer>
        </Tabs>
      </div>
    </>
  )
}
