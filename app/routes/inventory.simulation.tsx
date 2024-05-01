import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { json, type LinksFunction } from '@remix-run/node'
import gridCommStyles from 'ag-grid-community/styles/ag-grid.css?url' // Mandatory CSS required by the grid
import themeStyles from 'ag-grid-community/styles/ag-theme-quartz.css?url'
import taskData from '~/data/columndata/tasks.json'
import SimulationChart from '~/components/lowes/SimulationChart'
async function getTasks() {
  const data = await taskData
  return data
}

export const loader = async () => {
  const tasks = await getTasks()
  const invData = tasks.filter(
    (task) => task.label === 'Inventory' && task.severity === 'High'
  )
  return json({ tasks, invData })
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: gridCommStyles },
  { rel: 'stylesheet', href: themeStyles },
]
const skuList = [
  { title: 'SKU1' },
  { title: 'SKU2' },
  { title: 'SKU3' },
  { title: 'SKU4' },
]


export default function InventoryIndex() {

  return (
    <>
      <div className="m-4">
        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Inventory Simulation for SKU</div>
            <div className="flex items-center space-x-4">
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="SKU" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Scenario</SelectLabel>
                    {skuList.map((sku) => (
                      <SelectItem key={sku.title} value={sku.title}>
                        {sku.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="">
          <SimulationChart />
        </div>
      </div>
    </>
  )
}
