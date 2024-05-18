import React from 'react'
import { Form, useNavigate, useParams } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import { FaTrainSubway, FaTruck } from 'react-icons/fa6'
import { RiShipFill } from 'react-icons/ri'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Checkbox } from '~/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

import { cn } from '~/lib/utils'
import { Input } from '~/components/ui/input'
import CountryBoarding from '~/components/inv/countryboard'
import CountryDestination from '~/components/inv/countrydestination'

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

export default function SnopInput() {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div className="m-2">
      <Form>
        <div className="bg-white mx-2 shadow-md rounded-b-lg">
          <div className="flex items-center  justify-between">
            <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Sales & Operations Planning Input
            </h2>
            <div className="flex items-center "></div>
          </div>
          <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-3">
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">Demand</CardTitle>
                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <CountryBoarding />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid  items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Material & Inventory Cost
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <CountryDestination />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Truck Only</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="items-center flex space-x-2">
                      <Checkbox id="terms1" />
                      <FaTruck className="h-5 w-5" />

                      <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Truck
                      </label>
                    </div>
                  </CardContent>

                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Parameters</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="items-top flex space-x-2">
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
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        % of Truck / Container load
                      </label>
                    </div>
                    <div className="ml-12 items-top flex items-center space-x-2">
                      <Input
                        className="mx-2 text-blue-900 w-[150px] "
                        name="customer"
                        defaultValue="0.00"
                      />
                      <label
                        htmlFor="terms2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Weight (kg)
                      </label>
                    </div>
                    <div className="ml-14 items-top flex items-center space-x-2">
                      <Select>
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="EUR" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eur">EUR</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                      <label
                        htmlFor="terms2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Currency
                      </label>
                    </div>
                    <div className="ml-12 items-top flex items-center space-x-2">
                      <Input
                        className="mx-2 text-blue-900 w-[150px] "
                        name="customer"
                        defaultValue="1"
                      />
                      <label htmlFor="terms2" className="text-sm font-medium ">
                        Number of results (per route. Transport mode and type of
                        goods)
                      </label>
                    </div>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <div className="p-4 flex justify-between">
                    <div className="text-2xl font-semibold leading-none tracking-tight">Multi Modal</div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="EUR" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eur">EUR</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mx-4 border-b" />
                  <CardContent className="grid grid-cols-3 gap-4 items-start">
                    <div className="flex  space-x-4">
                      <Select>
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="truck" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="truck">
                            {' '}
                            <div className="items-center flex space-x-2">
                              <FaTruck className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Truck
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="EUR" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eur">
                            <div className="items-center flex space-x-2 ">
                              <PiAirplaneTiltFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Air
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="dark">
                            {' '}
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
                          <SelectItem value="system">
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
                      <Select>
                        <SelectTrigger className="w-[500px]">
                          <SelectValue placeholder="EUR" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eur">
                            <div className="items-center flex space-x-2">
                              <FaTruck className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Truck
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Types of Goods</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4 space-y-4">
                    <div className="items-top flex space-x-2">
                      <Checkbox id="terms1" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Container/pallets Shipment
                        </label>
                      </div>
                    </div>
                    <div className="items-top flex space-x-2">
                      <Checkbox id="terms2" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Bulk Shipment
                        </label>
                      </div>
                    </div>
                    <div className="items-top flex space-x-2">
                      <Checkbox id="terms3" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Liquid Shipment
                        </label>
                      </div>
                    </div>
                    <div className="items-top flex space-x-2">
                      <Checkbox id="terms4" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms4"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Temperature Controlled Shipment
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>

          <div className="py-4 border-t flex justify-end space-x-2 mr-2">
            <Button className="bg-blue-500 hover:bg-blue-600">
              {params.scenId ? 'Update Scenario' : 'Create Scenario'}
            </Button>

            {params.scenId == null && (
              <Button variant="outline">Save Input</Button>
            )}
            <div className="mr-2">
              <Button
                onClick={() => navigate(-1)}
                type="button"
                className=""
                variant="default"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}
