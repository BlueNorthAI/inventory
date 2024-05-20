import {
  TruckIcon,
  MapIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline'
import { useParams, Form } from '@remix-run/react'
import { Check, ChevronsUpDown } from 'lucide-react'
import React, { useState } from 'react'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import { FaTrainSubway, FaTruck } from 'react-icons/fa6'
import { RiShipFill } from 'react-icons/ri'
import AdminInput from '~/components/snop/admin-form'
import TruckInput from '~/components/snop/truck-form'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Command, CommandGroup, CommandItem } from '~/components/ui/command'
import { Checkbox } from '~/components/ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { kpiService_m } from '~/data/truckData'
import { cn } from '~/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import LaneMap from '../network/LaneMap'
const stats = [
  { name: 'Cost per Unit (USD/Unit)', stat: '2,279' },
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
const parmeters = [{ id: 1, name: 'Region', value: 'Asia Pacific' }]
const origin = [
  {
    id: 1,
    name: 'United States',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
  {
    id: 2,
    name: 'Canada',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
  },
  {
    id: 3,
    name: 'United Kingdom',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  },
  {
    id: 4,
    name: 'Australia',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
  },
  {
    id: 5,
    name: 'Germany',
    svg: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
  },
  {
    id: 6,
    name: 'France',
    svg: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
  },
  {
    id: 7,
    name: 'Italy',
    svg: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
  },
  {
    id: 8,
    name: 'Spain',
    svg: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
  },
  {
    id: 9,
    name: 'Japan',
    svg: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
  },
  {
    id: 10,
    name: 'Brazil',
    svg: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
  },
  {
    id: 11,
    name: 'South Korea',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
  },
  {
    id: 12,
    name: 'Russia',
    svg: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
  },
  {
    id: 13,
    name: 'India',
    svg: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
  },
  {
    id: 14,
    name: 'China',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
  },
  {
    id: 15,
    name: 'Mexico',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
  },
  {
    id: 16,
    name: 'Argentina',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
  },
  {
    id: 17,
    name: 'Netherlands',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
  },
  {
    id: 18,
    name: 'Switzerland',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
  },
  {
    id: 19,
    name: 'Sweden',
    svg: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
  },
  {
    id: 20,
    name: 'Norway',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
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

export default function TruckForm({ truckData }) {
  const params = useParams()
  const [tyopen, settyOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [selectedAccount, setSelectedAccount] = useState(origin[0].name)
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className="m-2">
      <Form method="post">
        <Tabs defaultValue="Overall" className=" m-4 space-y-4">
          <TabsList className="">
            <TabsTrigger value="Overall">Overall</TabsTrigger>
            <TabsTrigger value="Parameters">Parameters</TabsTrigger>
            <TabsTrigger value="Ocean">Ocean</TabsTrigger>
            <TabsTrigger value="Last">Last Mile</TabsTrigger>
          </TabsList>
          <TabsContent value="Overall" className="w-full">
            <div className="border rounded-lg flex">
              <div className="m-4">
                <CardTitle className="space-y-1 flex items-center text-blue-900">
                  <span className="text-xl ">Origin</span>
                </CardTitle>
                <div className="border-b" />
                <div className=" mt-2 flex items-center space-x-6">
                  <div className="flex items-center space-x-4">
                    <Select
                      defaultValue={selectedAccount}
                      onValueChange={setSelectedAccount}
                    >
                      <SelectTrigger
                        className={cn(
                          'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[180px]',
                          isCollapsed &&
                            'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
                        )}
                        aria-label="Select account"
                      >
                        <SelectValue placeholder="Select an account">
                          <img
                            src={
                              origin.find(
                                (account) => account.name === selectedAccount
                              )?.svg
                            }
                            width="30"
                            height="16"
                            alt="Flag"
                          />
                          <span className={cn('ml-2', isCollapsed && 'hidden')}>
                            {
                              origin.find(
                                (account) => account.name === selectedAccount
                              )?.name
                            }
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {origin.map((account) => (
                          <SelectItem key={account.name} value={account.name}>
                            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                              <img
                                src={account.svg}
                                width="30"
                                height="16"
                                alt="Flag"
                              />
                              {/* {account.svg} */}
                              {account.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Select>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Air">
                          {' '}
                          <div className="items-center flex space-x-2">
                            <PiAirplaneTiltFill className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Air
                            </label>
                          </div>
                        </SelectItem>
                        <SelectItem value="Rail">
                          <div className="items-center flex space-x-2">
                            <FaTrainSubway className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Rail
                            </label>
                          </div>
                        </SelectItem>
                        <SelectItem value="Ship">
                          <div className="items-center flex space-x-2">
                            <RiShipFill className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Ship
                            </label>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Port" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Air">
                          {' '}
                          <div className="items-center flex space-x-2">
                            <PiAirplaneTiltFill className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Air
                            </label>
                          </div>
                        </SelectItem>
                        <SelectItem value="Rail">
                          <div className="items-center flex space-x-2">
                            <FaTrainSubway className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Rail
                            </label>
                          </div>
                        </SelectItem>
                        <SelectItem value="Ship">
                          <div className="items-center flex space-x-2">
                            <RiShipFill className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Ship
                            </label>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <span className="border-l my-4" />
              <div className="m-4">
                <CardTitle className="space-y-1 flex items-center text-blue-900">
                  {/* <TruckIcon className="h-8 w-8 mr-2" /> */}
                  <span className="text-xl ">Destination</span>
                </CardTitle>
                <div className="border-b" />

                <div className="mt-2 flex items-center space-x-6">
                  <div className="flex items-center space-x-4">
                    <Select
                      defaultValue={selectedAccount}
                      onValueChange={setSelectedAccount}
                    >
                      <SelectTrigger
                        className={cn(
                          'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[180px]',
                          isCollapsed &&
                            'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
                        )}
                        aria-label="Select account"
                      >
                        <SelectValue placeholder="Select an account">
                          <img
                            src={
                              origin.find(
                                (account) => account.name === selectedAccount
                              )?.svg
                            }
                            width="30"
                            height="16"
                            alt="Flag"
                          />
                          <span className={cn('ml-2', isCollapsed && 'hidden')}>
                            {
                              origin.find(
                                (account) => account.name === selectedAccount
                              )?.name
                            }
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {origin.map((account) => (
                          <SelectItem key={account.name} value={account.name}>
                            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                              <img
                                src={account.svg}
                                width="30"
                                height="16"
                                alt="Flag"
                              />
                              {/* {account.svg} */}
                              {account.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Secondary" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Air">
                          {' '}
                          <div className="items-center flex space-x-2">
                            <PiAirplaneTiltFill className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Air
                            </label>
                          </div>
                        </SelectItem>
                        <SelectItem value="Rail">
                          <div className="items-center flex space-x-2">
                            <FaTrainSubway className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Rail
                            </label>
                          </div>
                        </SelectItem>
                        <SelectItem value="Ship">
                          <div className="items-center flex space-x-2">
                            <RiShipFill className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Ship
                            </label>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Secondary" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Air">
                          {' '}
                          <div className="items-center flex space-x-2">
                            <PiAirplaneTiltFill className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Air
                            </label>
                          </div>
                        </SelectItem>
                        <SelectItem value="Rail">
                          <div className="items-center flex space-x-2">
                            <FaTrainSubway className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Rail
                            </label>
                          </div>
                        </SelectItem>
                        <SelectItem value="Ship">
                          <div className="items-center flex space-x-2">
                            <RiShipFill className="h-5 w-5" />

                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Ship
                            </label>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <span className="border-l my-4" />
              <div className="m-4">
                <CardTitle className="space-y-1 flex items-center text-blue-900">
                  {/* <TruckIcon className="h-8 w-8 mr-2" /> */}
                  <span className="text-xl ">Types of Goods</span>
                </CardTitle>
                <div className="border-b" />

                <div className="mt-2 flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Select>
                      <SelectTrigger className="w-[260px]">
                        <SelectValue placeholder="Container / Pallets Shipment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Container">
                          Container / Pallets Shipment
                        </SelectItem>
                        <SelectItem value="Bulk">Bulk Shipment</SelectItem>
                        <SelectItem value="Liquid">Liquid Shipment</SelectItem>
                        <SelectItem value="Temperature">
                          Temperature Controlled Shipment
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <span className="border-l my-4" />
              <div className="m-4">
                <CardTitle className="space-y-1 flex items-center text-blue-900">
                  {/* <TruckIcon className="h-8 w-8 mr-2" /> */}
                  <span className="text-xl ">Parameters</span>
                </CardTitle>
                <div className="border-b" />

                <div className="mt-2 flex items-center space-x-6">
                  <div className=" items-center flex space-x-2">
                    <Checkbox id="terms1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        FTL
                      </label>
                    </div>
                  </div>
                  <div className="items-top flex items-center space-x-2">
                    <Checkbox id="terms2" />

                    <label
                      htmlFor="terms2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      LTL
                    </label>
                    <Input
                      className="mx-2 text-blue-900 w-[150px] "
                      name="customer"
                      defaultValue="0.00"
                    />
                    <label
                      htmlFor="terms2"
                      className="text-sm text-blue-900 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      % of Truck / Container load
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 py-4">
              <div >
                <LaneMap  />
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
          </TabsContent>
          <TabsContent value="Parameters" className="w-full">
            <div className="items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-2">
              <div className="border rounded-lg">
                <div className=" m-4 flex space-x-4">
                  <CardTitle className="space-y-1 flex items-center text-blue-900">
                    <span className="text-xl ">Origin</span>
                  </CardTitle>
                  <div className=" mt-2 flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                      <Select
                        defaultValue={selectedAccount}
                        onValueChange={setSelectedAccount}
                      >
                        <SelectTrigger
                          className={cn(
                            'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[180px]',
                            isCollapsed &&
                              'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
                          )}
                          aria-label="Select account"
                        >
                          <SelectValue placeholder="Select an account">
                            <img
                              src={
                                origin.find(
                                  (account) => account.name === selectedAccount
                                )?.svg
                              }
                              width="30"
                              height="16"
                              alt="Flag"
                            />
                            <span
                              className={cn('ml-2', isCollapsed && 'hidden')}
                            >
                              {
                                origin.find(
                                  (account) => account.name === selectedAccount
                                )?.name
                              }
                            </span>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {origin.map((account) => (
                            <SelectItem key={account.name} value={account.name}>
                              <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                                <img
                                  src={account.svg}
                                  width="30"
                                  height="16"
                                  alt="Flag"
                                />
                                {/* {account.svg} */}
                                {account.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Air">
                            {' '}
                            <div className="items-center flex space-x-2">
                              <PiAirplaneTiltFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Air
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Rail">
                            <div className="items-center flex space-x-2">
                              <FaTrainSubway className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Rail
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Ship">
                            <div className="items-center flex space-x-2">
                              <RiShipFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Ship
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Port" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Air">
                            {' '}
                            <div className="items-center flex space-x-2">
                              <PiAirplaneTiltFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Air
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Rail">
                            <div className="items-center flex space-x-2">
                              <FaTrainSubway className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Rail
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Ship">
                            <div className="items-center flex space-x-2">
                              <RiShipFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Ship
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="mx-4 border-b" />
                <div className="items-start justify-center  grid grid-cols-1 lg:grid-cols-2 ">
                  <DemoContainer className="text-blue-900">
                    <CardContent className="mt-4 grid gap-6">
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Region
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="Asia_Pacific"
                          name="Asia_Pacific"
                          defaultValue={'Asia Pacific'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Currency
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Select>
                          <SelectTrigger className="w-[185px]">
                            <SelectValue placeholder="Container / Pallets Shipment" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Container">
                              Container / Pallets Shipment
                            </SelectItem>
                            <SelectItem value="Bulk">Bulk Shipment</SelectItem>
                            <SelectItem value="Liquid">
                              Liquid Shipment
                            </SelectItem>
                            <SelectItem value="Temperature">
                              Temperature Controlled Shipment
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance measure
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="km"
                          defaultValue={'km'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Road toll
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'0.5'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Toll proportion
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'20%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance to hub (pickup)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance to hub (delivery)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Loading/unloading base duration
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Loading/unloading ramp duration
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Backhaul (% of main haul distance)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                    </CardContent>
                  </DemoContainer>
                  <DemoContainer className="text-blue-900">
                    <CardContent className="mt-4 grid gap-6">
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Min. backhaul distance
                        </Label>
                        <Input
                          id="Asia_Pacific"
                          name="Asia_Pacific"
                          defaultValue={'30%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>

                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Max. backhaul distance
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="km"
                          defaultValue={'30%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Truck utilization on line haul in LTL
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Max backhaul discount
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Labor cost
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'150000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Fuel price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'9.14'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Semi-trailer purchasing price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'2,50,000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Refrigerator truck purchasing price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'2,50,000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Maximum speed
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'65'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Average speed
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'55'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                    </CardContent>
                  </DemoContainer>
                </div>
              </div>

              <div className="border rounded-lg">
                <div className=" m-4 flex space-x-4">
                  <CardTitle className="space-y-1 flex items-center text-blue-900">
                    <span className="text-xl ">Destination</span>
                  </CardTitle>
                  <div className=" mt-2 flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                      <Select
                        defaultValue={selectedAccount}
                        onValueChange={setSelectedAccount}
                      >
                        <SelectTrigger
                          className={cn(
                            'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[180px]',
                            isCollapsed &&
                              'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
                          )}
                          aria-label="Select account"
                        >
                          <SelectValue placeholder="Select an account">
                            <img
                              src={
                                origin.find(
                                  (account) => account.name === selectedAccount
                                )?.svg
                              }
                              width="30"
                              height="16"
                              alt="Flag"
                            />
                            <span
                              className={cn('ml-2', isCollapsed && 'hidden')}
                            >
                              {
                                origin.find(
                                  (account) => account.name === selectedAccount
                                )?.name
                              }
                            </span>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {origin.map((account) => (
                            <SelectItem key={account.name} value={account.name}>
                              <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                                <img
                                  src={account.svg}
                                  width="30"
                                  height="16"
                                  alt="Flag"
                                />
                                {/* {account.svg} */}
                                {account.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Air">
                            {' '}
                            <div className="items-center flex space-x-2">
                              <PiAirplaneTiltFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Air
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Rail">
                            <div className="items-center flex space-x-2">
                              <FaTrainSubway className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Rail
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Ship">
                            <div className="items-center flex space-x-2">
                              <RiShipFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Ship
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Port" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Air">
                            {' '}
                            <div className="items-center flex space-x-2">
                              <PiAirplaneTiltFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Air
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Rail">
                            <div className="items-center flex space-x-2">
                              <FaTrainSubway className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Rail
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Ship">
                            <div className="items-center flex space-x-2">
                              <RiShipFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Ship
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="mx-4 border-b" />
                <div className="items-start justify-center  grid grid-cols-1 lg:grid-cols-2 ">
                  <DemoContainer className="text-blue-900">
                    <CardContent className="mt-4 grid gap-6">
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Region
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="Asia_Pacific"
                          name="Asia_Pacific"
                          defaultValue={'Asia Pacific'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Currency
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Select>
                          <SelectTrigger className="w-[185px]">
                            <SelectValue placeholder="Container / Pallets Shipment" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Container">
                              Container / Pallets Shipment
                            </SelectItem>
                            <SelectItem value="Bulk">Bulk Shipment</SelectItem>
                            <SelectItem value="Liquid">
                              Liquid Shipment
                            </SelectItem>
                            <SelectItem value="Temperature">
                              Temperature Controlled Shipment
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance measure
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="km"
                          defaultValue={'km'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Road toll
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'0.5'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Toll proportion
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'20%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance to hub (pickup)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance to hub (delivery)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Loading/unloading base duration
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Loading/unloading ramp duration
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Backhaul (% of main haul distance)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                    </CardContent>
                  </DemoContainer>
                  <DemoContainer className="text-blue-900">
                    <CardContent className="mt-4 grid gap-6">
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Min. backhaul distance
                        </Label>
                        <Input
                          id="Asia_Pacific"
                          name="Asia_Pacific"
                          defaultValue={'30%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>

                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Max. backhaul distance
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="km"
                          defaultValue={'30%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Truck utilization on line haul in LTL
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Max backhaul discount
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Labor cost
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'150000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Fuel price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'9.14'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Semi-trailer purchasing price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'2,50,000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Refrigerator truck purchasing price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'2,50,000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Maximum speed
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'65'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Average speed
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'55'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                    </CardContent>
                  </DemoContainer>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Ocean" className="w-full">
            <div className="items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <div className="items-start justify-center gap-6 grid grid-cols-1 lg:grid-cols-2">
                  <DemoContainer>
                    <Card className="  text-blue-900">
                      <CardHeader className="space-y-1 ">
                        <CardTitle className="flex items-center">
                          <TruckIcon className="h-8 w-8 mr-2" />
                          <span className="text-2xl">Truck Parameters</span>
                        </CardTitle>

                        <div className="border-b" />
                      </CardHeader>

                      <CardContent className="grid gap-10 mb-2">
                        <div className="grid grid-cols-2 items-center gap-1">
                          <div className="text-xl text-blue-900 font-semibold ">
                            Truck Type
                          </div>
                          <div>
                            <Popover open={tyopen} onOpenChange={settyOpen}>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={tyopen}
                                  className=" w-[155px] justify-between text-xl "
                                >
                                  {value
                                    ? frameworks.find(
                                        (framework) => framework.value === value
                                      )?.label
                                    : 'Kolkata'}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[200px] p-0">
                                <Command>
                                  <CommandGroup>
                                    {frameworks.map((framework) => (
                                      <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                          setValue(
                                            currentValue === value
                                              ? ''
                                              : currentValue
                                          )
                                          settyOpen(false)
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            'mr-2 h-4 w-4',
                                            value === framework.value
                                              ? 'opacity-100'
                                              : 'opacity-0'
                                          )}
                                        />
                                        {framework.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>

                        <TruckInput truck={truckData} />
                      </CardContent>
                    </Card>
                  </DemoContainer>
                  <DemoContainer>
                    <Card className=" text-blue-900">
                      <CardHeader className="space-y-1">
                        <CardTitle className="flex items-center">
                          <MapIcon className="h-8 w-8 mr-2" />
                          <span className="text-2xl">
                            {' '}
                            Route Admin Expenses
                          </span>
                        </CardTitle>

                        <div className="border-b" />
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <AdminInput admin={truckData} />
                      </CardContent>
                    </Card>
                  </DemoContainer>
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
          </TabsContent>
          <TabsContent value="Last" className="w-full">
            <div className="items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <div className="items-start justify-center gap-6 grid grid-cols-1 lg:grid-cols-2">
                  <DemoContainer>
                    <Card className="  text-blue-900">
                      <CardHeader className="space-y-1 ">
                        <CardTitle className="flex items-center">
                          <TruckIcon className="h-8 w-8 mr-2" />
                          <span className="text-2xl">Truck Parameters</span>
                        </CardTitle>

                        <div className="border-b" />
                      </CardHeader>

                      <CardContent className="grid gap-10 mb-2">
                        <div className="grid grid-cols-2 items-center gap-1">
                          <div className="text-xl text-blue-900 font-semibold ">
                            Truck Type
                          </div>
                          <div>
                            <Popover open={tyopen} onOpenChange={settyOpen}>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={tyopen}
                                  className=" w-[155px] justify-between text-xl "
                                >
                                  {value
                                    ? frameworks.find(
                                        (framework) => framework.value === value
                                      )?.label
                                    : 'Multi-Axle'}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[200px] p-0">
                                <Command>
                                  <CommandGroup>
                                    {frameworks.map((framework) => (
                                      <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                          setValue(
                                            currentValue === value
                                              ? ''
                                              : currentValue
                                          )
                                          settyOpen(false)
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            'mr-2 h-4 w-4',
                                            value === framework.value
                                              ? 'opacity-100'
                                              : 'opacity-0'
                                          )}
                                        />
                                        {framework.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>

                        <TruckInput truck={truckData} />
                      </CardContent>
                    </Card>
                  </DemoContainer>
                  <DemoContainer>
                    <Card className=" text-blue-900">
                      <CardHeader className="space-y-1">
                        <CardTitle className="flex items-center">
                          <MapIcon className="h-8 w-8 mr-2" />
                          <span className="text-2xl">
                            {' '}
                            Route Admin Expenses
                          </span>
                        </CardTitle>

                        <div className="border-b" />
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <AdminInput admin={truckData} />
                      </CardContent>
                    </Card>
                  </DemoContainer>
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
          </TabsContent>
        </Tabs>
      </Form>
    </div>
  )
}
