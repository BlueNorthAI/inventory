import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import DcChart from '~/components/ss/DcChart'
import SafetyProducts from '~/components/ss/SafetyProducts'
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
export default function SsDC() {
  return (
    <div className="m-4">
      <DemoContainer>
        <Tabs defaultValue="Customers" className="">
          <TabsList className="">
            <TabsTrigger value="Customers" className="relative ">
              Customers
            </TabsTrigger>
            <TabsTrigger className="" value="DC">
              DC
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Customers">
            <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                <div className="p-2">Customers</div>
              </div>
            </div>

            <div>
              <SafetyProducts />
            </div>
          </TabsContent>
          <TabsContent value="DC">
            <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
                <div className="p-2">DC</div>
              </div>
            </div>
            <div>
              <DcChart />
            </div>
          </TabsContent>
        </Tabs>
      </DemoContainer>
    </div>
  )
}
