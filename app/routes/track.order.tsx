import React, { useState, Fragment } from 'react'
import UsMap from '../data/agMap/usmap/Map'
import { Button } from '~/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { columns } from '~/components/datatable/columns-trace-overall'
import { DataTable } from '~/components/datatable/data-table-trace-overall'
import taskData from '~/data/network/traceOverall/tasks.json'
import { cn } from '~/lib/utils'
import OrderMangement from '~/components/network/OrderMangement'

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
async function getTasks() {
  const data = await taskData
  return data
}

export const loader = async () => {
  const tasks = await getTasks()
  const demandData = tasks.filter(
    (task) => task.label === 'Demand Planning' && task.severity === 'High'
  )
  // console.log('demandData', demandData)
  return json({ tasks, demandData })
}
export default function Agmap() {
  const [position, setPosition] = React.useState('bottom')
  const { tasks } = useLoaderData()
  return (
    <div>
      <div className="m-4">
        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Track & Trace Order</div>
            <div className="m-2 space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Timeline</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-28">
                  <DropdownMenuLabel>View Type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="top">
                      Weekly
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Monthly
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      Quarterly
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Plan</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-28">
                  <DropdownMenuLabel>Plan Type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="top">
                      Jan'24
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Feb 2024
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      Mar 2024
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="m-2">
          <div className=" bg-white rounded-lg">
            <DataTable data={tasks} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  )
}
