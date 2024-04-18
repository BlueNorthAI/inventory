import React from 'react'
import { Form, useNavigate, useParams } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import DemandInput from '~/components/snop/demand-form'
import CostInput from '~/components/snop/cost-form'
import EmpInput from '~/components/snop/empcost-form'
import OutsourcingInput from '~/components/snop/outcost-form'
import ConstraintInput from '~/components/snop/constraint-form'
import EmpConstraintInput from '~/components/snop/empconstraint-form'
import ProductConstraintInput from '~/components/snop/proconstraint-form'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

import { cn } from '~/lib/utils'

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

export default function SnopForm({ inputData }) {
  const [date, setDate] = React.useState<Date>(new Date())
  const navigate = useNavigate()
  const params = useParams()

  return (
    <Form method="post">
      <div className="bg-white shadow-md rounded-b-lg">
        <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-4">
          <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1 ">
                  <CardTitle className="text-2xl flex">Demand</CardTitle>
                  <p className="text-gray-400 text-sm">Units per month</p>
                  <div className="border-b" />
                </CardHeader>

                <CardContent className="grid gap-4">
                  <DemandInput demands={inputData} />
                </CardContent>
              </Card>
            </DemoContainer>
          </div>

          <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">
                    Material & Inventory Cost
                  </CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <CostInput cost={inputData} />
                </CardContent>
              </Card>
            </DemoContainer>
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Employee Cost</CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <EmpInput cost={inputData} />
                </CardContent>
              </Card>
            </DemoContainer>
          </div>

          <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Outsourcing Cost</CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <OutsourcingInput cost={inputData} />
                </CardContent>
              </Card>
            </DemoContainer>
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">
                    Inventory Constraint
                  </CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <ConstraintInput constraint={inputData} />
                </CardContent>
              </Card>
            </DemoContainer>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">
                    Employee Constraint
                  </CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <EmpConstraintInput constraint={inputData} />
                </CardContent>
              </Card>
            </DemoContainer>
            <DemoContainer>
              <Card className="shadow-lg text-blue-900">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Product Constraint</CardTitle>
                  <div className="border-b" />
                </CardHeader>
                <CardContent className="grid gap-4">
                  <ProductConstraintInput constraint={inputData} />
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
  )
}
