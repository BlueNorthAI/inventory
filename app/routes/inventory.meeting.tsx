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

const filters = [
  {
    id: 'color',
    name: 'Color',

    options: [
      { value: 'white', label: 'White', checked: false, number: 6 },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

async function getTasks() {
  const data = await taskData
  return data
}

export const loader = async () => {
  const tasks = await getTasks()
  const invData = tasks.filter(
    (task) => task.label === 'Inventory'
      // && task.severity === 'High'
  )
  return json({ tasks, invData })
}

export default function TaskPage() {
  const { tasks, invData } = useLoaderData()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="m-2">
        <div className="w-100  my-2 flex  justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Nerve Center - List of Events
          </h2>

          <div className="flex items-center justify-end"></div>
        </div>
     
    
        <div className="m-4 bg-white rounded-lg">
          <DataTable data={invData} columns={columns} />
        </div>
      </div>

    </>
  )
}
