import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import DcChart from '~/components/ss/DcChart'
import SafetyProducts from '~/components/ss/SafetyProducts'
import { cn } from '~/lib/utils'
import {
  Comparsion1,
Comparsion2,
Comparsion3,
Comparsion4,
Comparsion5,
Comparsion6,
Comparsion7
} from '~/components/ss/Comparison'

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
export const kpi = [
  {
    Name: 'Financial distribution center performance',
    Value: '$128M',
    Trend: 'up',
    TargetAch: 100,
    container: <Comparsion1 />,
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/proeffAnalysis',
  },
  {
    Name: 'Customer Performance',
    Value: '$128M',
    Trend: 'up',
    TargetAch: 100,
    container: <Comparsion2 />,
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/proeffAnalysis',
  },
 
]
export const Tab2 = [
  {
    Name: 'Operational Performance',
    Value: '$128M',
    Trend: 'up',
    TargetAch: 100,
    container: <Comparsion3 />,
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/proeffAnalysis',
  },
  {
    Name: 'Customer Performance',
    Value: '$128M',
    Trend: 'up',
    TargetAch: 100,
    container: <Comparsion4 />,
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/proeffAnalysis',
  },
]
export const Tab3 = [
  {
    Name: 'Operational Performance',
    Value: '$128M',
    Trend: 'up',
    TargetAch: 100,
    container: <Comparsion5 />,
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/proeffAnalysis',
  },
  {
    Name: 'Customer Performance',
    Value: '$128M',
    Trend: 'up',
    TargetAch: 100,
    container: <Comparsion6 />,
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/proeffAnalysis',
  },
]
export const Tab4 = [
  {
    Name: 'Operational Performance',
    Value: '$128M',
    Trend: 'up',
    TargetAch: 100,
    container: <Comparsion7 />,
    status: 'Below Target',
    Analyze: '/snop/dashboard/analysis/proeffAnalysis',
  },

]
export default function SsComparison() {
  return (
    <div className=" m-4">
      <DemoContainer>
        <Tabs defaultValue="Tab1" className="">
          <TabsList className="">
            <TabsTrigger value="Tab1" className="relative ">
              Tab 1
            </TabsTrigger>
            <TabsTrigger className="" value="Tab2">
             Tab 2
            </TabsTrigger>
            <TabsTrigger className="" value="Tab3">
              Tab 3
            </TabsTrigger>
            <TabsTrigger className="" value="Tab4">
              Tab 4
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Tab1">
            <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                <div className="p-2">Customers</div>
              </div>
            </div>

            <div className="bg-white border">
              <ul className="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                {kpi.map((kpi) => (
                  <li
                    key={kpi.Name}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 "
                  >
                    <div className="relative flex flex-1 flex-col p-2">
                      <div className="my-2 flex items-baseline justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-medium text-gray-900">
                            {kpi.Name}
                          </h3>
                        </div>
                      </div>
                      <div>{kpi.container}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="Tab2">
            <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                <div className="p-2">DC</div>
              </div>
            </div>
            <div className="bg-white border">
              <ul className="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                {Tab2.map((kpi) => (
                  <li
                    key={kpi.Name}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 "
                  >
                    <div className="relative flex flex-1 flex-col p-2">
                      <div className="my-2 flex items-baseline justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-medium text-gray-900">
                            {kpi.Name}
                          </h3>
                        </div>
                      </div>
                      <div>{kpi.container}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="Tab3">
            <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                <div className="p-2">DC</div>
              </div>
            </div>
            <div className="bg-white border">
              <ul className="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                {Tab3.map((kpi) => (
                  <li
                    key={kpi.Name}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 "
                  >
                    <div className="relative flex flex-1 flex-col p-2">
                      <div className="my-2 flex items-baseline justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-medium text-gray-900">
                            {kpi.Name}
                          </h3>
                        </div>
                      </div>
                      <div>{kpi.container}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="Tab4">
            <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                <div className="p-2">DC</div>
              </div>
            </div>
            <div className="bg-white border rounded-b-lg">
              <ul className="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                {Tab4.map((kpi) => (
                  <li
                    key={kpi.Name}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 "
                  >
                    <div className="relative flex flex-1 flex-col p-2">
                      <div className="my-2 flex items-baseline justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-medium text-gray-900">
                            {kpi.Name}
                          </h3>
                        </div>
                      </div>
                      <div>{kpi.container}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </DemoContainer>
    </div>
  )
}
