import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { columns } from '~/components/datatable/columns-inci'
import { DataTable } from '~/components/datatable/data-table-inci'
import taskData from '~/data/columndata/tasks.json'

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

export default function TaskPage() {
  const { tasks, invData } = useLoaderData()
  return (
    <>
      <div className="m-2">
        <div className="flex items-center  justify-between">
          <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Nerve Center - List of Events
          </h2>
        </div>

        <div className="m-4 bg-white rounded-lg">
          <DataTable data={invData} columns={columns} />
        </div>
      </div>
    </>
  )
}
