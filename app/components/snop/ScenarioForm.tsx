import {
  TruckIcon,
  MapIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline'
import { useParams, Form } from '@remix-run/react'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import ScenarioAdminInput from '~/components/snop/scenario-admin-form'
import ScenarioTruckInput from '~/components/snop/scenario-truck-form'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Command, CommandGroup, CommandItem } from '~/components/ui/command'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { kpiService_m } from '~/data/mapRegionData'
import { cn } from '~/lib/utils'
import { Label } from '../ui/label'

const stats = [
  { name: 'Cost per Unit (INR/Unit)', stat: '2,279' },
  { name: 'Cost per Trip Margin', stat: '136,744' },
  { name: 'Cost per km', stat: '41' },
]

const frameworks = [
  {
    value: 'next.js',
    label: 'Kolkata',
  },
  {
    value: 'sveltekit',
    label: 'Chennai',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
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

// eslint-disable-next-line react/prop-types
export default function ScenarioForm({ truckData }) {
  const params = useParams()
  const [tyopen, settyOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  return (
    <div className="m-2">
      <Form method="post">
        <div className="bg-white mx-2 shadow-md rounded-b-lg">
          <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
            <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
              <div className="p-2">Truck Parameters</div>
            </div>
          </div>
          <div className="mt-2 items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <div className="grid grid-cols-2 items-center gap-4 justify-center">
                <Label
                  className="text-lg rounded border border-sky-500 p-1 text-center bg-sky-50 text-blue-900"
                  htmlFor="pc"
                >
                  Select Sales for Scenario Demand
                </Label>
                <Select>
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Last Month Demand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="no">Last Month Demand</SelectItem>
                      <SelectItem value="yes">Avg Monthly Demand</SelectItem>
                      <SelectItem value="no">3 Month Moving Avg</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-4 items-start justify-center gap-6 grid grid-cols-1 ">
                <DemoContainer>
                  <Card className="  text-blue-900">
                    <CardHeader className="space-y-1 ">
                      <CardTitle className="grid grid-cols-4 items-center gap-1 text-xl text-center">
                        <h1>Region</h1>
                        <h1>DC Available</h1>
                        <h1>Capacity Multiplier</h1>
                        <h1>Demand Multiplier</h1>
                      </CardTitle>

                      <div className="border-b" />
                    </CardHeader>

                    <CardContent className="grid gap-10 mb-2">
                      <ScenarioTruckInput truck={truckData} />
                    </CardContent>
                  </Card>
                </DemoContainer>
                {/* <DemoContainer>
                  <Card className=" text-blue-900">
                    <CardHeader className="space-y-1">
                      <CardTitle className="flex items-center">
                        <MapIcon className="h-8 w-8 mr-2" />
                        <span className="text-2xl"> Route Admin Expenses</span>
                      </CardTitle>

                      <div className="border-b" />
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <ScenarioAdminInput admin={truckData} />
                    </CardContent>
                  </Card>
                </DemoContainer> */}
              </div>
              <div className="flex justify-end  pt-6 rounded-lg">
                <Button className="bg-blue-900 hover:bg-blue-800 text-lg">
                  {params.bkt ? 'Submitting' : 'Submit'}
                </Button>
              </div>
            </div>

            <div>
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center">
                      <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                      <span className="text-2xl">Cleansheet Summary</span>
                    </CardTitle>

                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                      {stats.map((item) => (
                        <div
                          key={item.name}
                          className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                        >
                          <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                            {item.stat}
                          </dd>
                          <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                            {item.name}
                          </dt>
                        </div>
                      ))}
                    </dl>

                    <ul className="grid grid-cols-1 gap-2 mt-2">
                      {kpiService_m.map((kpi) => (
                        <li
                          key={kpi.Name}
                          className="col-span-1 flex flex-col divide-y divide-white"
                        >
                          <div className="relative flex flex-1 flex-col p-2">
                            <div className="flex items-baseline gap-2">
                              <h3 className="text-base font-medium text-gray-900">
                                {kpi.Name}
                              </h3>
                            </div>
                            <div className="mt-2">{kpi.container}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}
