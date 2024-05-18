import { json, redirect } from '@remix-run/node'
import {  useLoaderData } from '@remix-run/react'

import {
  getScenarioItems,
  updateScenario,
  deleteScenarioById,
  duplicateScenario,
  archiveSenario,
} from '~/models/scenario.server'

import { columns } from '~/components/datatable/columns'
import { DataTable } from '~/components/datatable/data-table'

export const loader = async () => {
  const scenarioList = await getScenarioItems()
  // console.log(scenarioList);

  return json({ scenarioList })
}

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const intent = formData.get('intent')
  const scenarioId = formData.get('scenario_id')
  // console.log('Intent-->', intent)
  // console.log('scenario id-->', scenarioId)
  // console.log('Intent-->', intent)
  // console.log('scenario id-->', scenarioId)
  if (intent === 'optimize') {
    await updateScenario(scenarioId, 'Submitted')
  }
  if (intent === 'delete') {
    await deleteScenarioById(scenarioId)
  }
  if (intent === 'duplicate') {
    await duplicateScenario(scenarioId)
  }
  if (intent === 'archive') {
    await updateScenario(scenarioId, 'Archived')
    await archiveSenario(scenarioId)
  }

  return redirect('.')
  // if (intent === 'optimize'){
  //   await updateScenario()
  // }
}

export default function TaskPage() {
  const { scenarioList } = useLoaderData<typeof loader>()
  return (
    <>
      <div className="m-2">
        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">List of Scenarios</div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-b-lg p-2 border">
          <DataTable data={scenarioList} columns={columns} />
        </div>
      </div>
    </>
  )
}
