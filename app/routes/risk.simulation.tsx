/* eslint-disable react/prop-types */
import { columns } from '~/components/risk/columns'
import { DataTable } from '~/components/risk/data-table'
import taskData from '~/data/riskData/simulation/tasks.json'

export default function RiskSimulation() {
  
  return (
    <div className="m-2">

      <div className="bg-white shadow-md rounded-b-lg p-2 border">
        <DataTable data={taskData} columns={columns} />
      </div>
    </div>
  )
}