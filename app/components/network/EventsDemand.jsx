import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState, Fragment } from 'react'
import { columns } from '~/components/datatable/columns-inci'
import { DataTable } from '~/components/datatable/data-table-inci'
import taskData from '~/data/columndata/tasks.json'
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/20/solid'
import { Dialog, Transition, Disclosure } from '@headlessui/react'
import { number } from 'zod'

async function getTasks() {
  const data = await taskData
  return data
}

export const loader = async () => {
  const tasks = await getTasks()
  return json({ tasks })
}

export default function TaskPage() {
  const { tasks } = useLoaderData()
  return (
    <>
      <div className="m-2">
        <div className="flex items-center  justify-between">
          <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Nerve Center - List of Exception
          </h2>
        </div>

        <div className="m-4 bg-white rounded-lg">
          <DataTable data={tasks} columns={columns} />
        </div>
      </div>
    </>
  )
}
