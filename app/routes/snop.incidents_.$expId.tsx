import { ChevronDownIcon } from '@heroicons/react/20/solid'
import taskData from '~/data/columndata/tasks.json'
import { json } from '@remix-run/node'
import { useLoaderData, Link, useParams } from '@remix-run/react'
import { labels, priorities, statuses, dot } from '~/data/columndata/data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { cn } from '~/lib/utils'
import CardLayout from '~/components/snop/CardLayout'
import { Button, buttonVariants } from '~/components/ui/button'
import { ScrollArea, ScrollBar } from '~/components/ui/scroll-area'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { ProgressBar } from '@progress/kendo-react-progressbars'

const cardData = [
  {
    Name: 'Forecast Accuracy',
    Value: '320%',
    TargetAch: 85,
    status: 'Above Target',
    container: 'Maricpoa Country Customers purchased more',
    Analyze: '/demo/dashboard/salesExp',
  },
  {
    Name: 'Forecast Bias',
    Value: '5%',
    TargetAch: 5,
    status: 'Above Target',
    container: 'Forecast Bias',
    Analyze: '/demo/dashboard/salesExp',
  },
  {
    Name: 'Forecast Error',
    Value: '5%',
    TargetAch: 5,
    status: 'Above Target',
    container: 'Forecast Error',
    Analyze: '/demo/dashboard/salesExp',
  },
  {
    Name: 'Forecast Value',
    Value: '5%',
    TargetAch: 5,
    status: 'Below Target',
    container: 'Forecast Value',
    Analyze: '/demo/dashboard/salesExp',
  },
]
const option = ['Price drop', 'Rebate', 'Tv ad']
async function getTasks() {
  const data = await taskData
  return data
}

export const loader = async () => {
  const tasks = await getTasks()
  return json({ tasks })
}

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

export default function Example() {
  const { tasks } = useLoaderData()
  const params = useParams()
  const emptyStyles = { background: '#ef4444' }
  const progressStyles = { background: '#22c55e' }

  const exp = tasks.filter((task) => task.id === params.expId)[0]
  console.log(exp)
  const status = statuses.find((status) => status.value === exp.status)
  if (!status) {
    return null
  }
  const dots = dot.find((d) => d.value === exp.severity)

  if (!dots) {
    return null
  }

  return (
    <>
      {/* Comments*/}

      <div className="bg-white  w-full rounded-lg border m-2">
        <div className="divide-y divide-gray-200">
          <div className="p-4 flex items-center justify-between">
            <div className="min-w-0 ">
              <h1 className="text-xl font-semibold text-gray-900">
                Exception Summary - {exp.sku}
              </h1>
              <h2 className="mt-1 text-base text-gray-600">{exp.title}</h2>
              <div className="mt-1 flex flex-row flex-wrap space-x-4 sm:mt-0">
                <div className="mt-2 flex items-center text-sm text-green-700">
                  <div className={`flex items-center ${status.textClr}`}>
                    {status.icon ? (
                      <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    ) : null}
                    <span className="text-base font-semibold">
                      {status.label}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <div className="flex w-[80px] items-center">
                    {dots && (
                      <svg
                        className={`${dots.fill} mr-2 h-2 w-2`}
                        viewBox="0 0 6 6"
                        aria-hidden="true"
                      >
                        <circle cx={3} cy={3} r={3} />
                      </svg>
                    )}
                    {dots && dots.label ? <span>{dots.label}</span> : null}
                  </div>
                </div>

                <div className="mt-2 flex items-center">
                  <img
                    className="h-5 w-5 rounded-full"
                    src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    alt=""
                  />

                  <div className="ml-2 text-sm text-gray-500">{exp.owner}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2">
          <Tabs defaultValue="Resolution" className="tracking-normal">
            <TabsList className="">
              <TabsTrigger value="Resolution" className="relative">
                Resolution
              </TabsTrigger>
              <TabsTrigger className="" value="S&OP">
                Link to S&OP
              </TabsTrigger>
            </TabsList>

            <DemoContainer>
              <TabsContent value="Resolution">
                <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                  <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                    <div className="p-2"> Resolution Options</div>
                  </div>
                </div>
                <div>
                  <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div className="h-0 flex-1 overflow-y-auto">
                     

                      <div className="px-4 py-2">
                        <span className="text-md block font-medium leading-6 text-gray-900">
                          Site
                        </span>
                        <div className="mt-2">
                          <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                            <p>Dallas</p>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-2">
                        <span className="text-md block font-medium leading-6 text-gray-900">
                          Customer
                        </span>
                        <div className="mt-2">
                          <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                            <p>Best Buy</p>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-2">
                        <span className="text-md block font-medium leading-6 text-gray-900">
                          Item
                        </span>
                        <div className="mt-2">
                          <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                            <p>GS25-227-2.5G</p>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-2">
                        <span className="text-md block font-medium leading-6 text-gray-900">
                          Week
                        </span>
                        <div className="mt-2">
                          <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                            <p>08W14-Apr07</p>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-2">
                        <span className="text-md block font-medium leading-6 text-gray-900">
                          Resolution
                        </span>

                        <div className="text-md mt-2">
                          <DropDownList
                            style={{
                              width: '420px',
                              height: '40px',
                            }}
                            data={option}
                            defaultValue="Price drop"
                          />
                        </div>
                      </div>

                      <div className="px-4 py-2">
                        <label
                          htmlFor="value"
                          className="text-md block font-medium leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-2">
                          <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                            <p>Initiate Price drop</p>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-2">
                        <label
                          htmlFor="value"
                          className="text-md block font-medium leading-6 text-gray-900"
                        >
                          Count
                        </label>
                        <div className="mt-2">
                          <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                            <p>2</p>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <label
                          htmlFor="value"
                          className="text-md block font-medium leading-6 text-gray-900"
                        >
                          Measure
                        </label>
                        <div className="mt-2">
                          <div className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                            <p>Consensus Forecast</p>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-2">
                        <label
                          htmlFor="value"
                          className="text-md block font-medium leading-6 text-gray-900"
                        >
                          Value
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="value-name"
                            id="value-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                      <div className="px-4 py-2">
                        <label
                          htmlFor="description"
                          className="text-md block font-medium leading-6 text-gray-900"
                        >
                          Notes
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="description"
                            name="description"
                            rows={4}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-shrink-0 justify-center px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-600"
                        onClick={() => setOpenRes(false)}
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-600"
                      >
                        Resolve Exception
                      </button>
                    </div>
                  </form>
                </div>
                <div className="w-full  overflow-x-auto">
                  <ul className="mx-4 my-4 grid grid-cols-4 gap-6">
                    {cardData.map((kpi) => (
                      <li
                        key={kpi.Name}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 "
                      >
                        <div className="relative flex flex-1 flex-col py-2 pl-3">
                          <span
                            className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                              kpi.status === 'Above Target'
                                ? `bg-green-500`
                                : kpi.status === 'Below Target'
                                  ? `bg-red-500`
                                  : ''
                            }`}
                          ></span>
                          <div className="my-2 flex items-baseline gap-2">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                {kpi.Name}
                              </h3>
                              <h1 className="text-4xl font-bold text-black">
                                {kpi.Value}
                              </h1>
                            </div>
                            <div className="ml-auto overflow-x-hidden px-2  text-center text-base font-medium text-gray-700">
                              <ProgressBar
                                value={kpi.TargetAch}
                                style={{ width: 100, height: 12 }}
                                labelVisible={true}
                                labelPlacement={'start'}
                                emptyStyle={emptyStyles}
                                progressStyle={progressStyles}
                              />
                            </div>
                          </div>
                          <div className="text-base ">{kpi.container}</div>
                        </div>
                        <div>
                          <div className="-mt-px flex divide-x divide-gray-200 bg-gray-50 h-10 ">
                            <div className="flex w-0 flex-1  ">
                              <Link
                                to={kpi.Analyze}
                                className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                              >
                                <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                                  <WrenchScrewdriverIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  Analyze
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="S&OP">
                <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
                  <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                    <div className="p-2">New Product Review</div>
                  </div>
                </div>

                <div>New Product Review</div>
              </TabsContent>
            </DemoContainer>
          </Tabs>
        </div>
      </div>
    </>
  )
}
