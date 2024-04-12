import { Fragment, useState } from 'react'
import { Menu, Popover, Transition, Listbox } from '@headlessui/react'
import {
  CheckIcon,
  HandThumbUpIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  CalendarIcon,
  LinkIcon,
  PencilIcon,
  ChartBarIcon,
  ChevronDownIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
  EnvelopeIcon,
  TagIcon,
} from '@heroicons/react/20/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import taskData from '~/data/columndata/tasks.json'
import { json } from '@remix-run/node'
import { useLoaderData, Link, useParams } from '@remix-run/react'
import { labels, priorities, statuses, dot } from '~/data/columndata/data'
const items = [
  { name: 'Save and schedule', href: '#' },
  { name: 'Save and publish', href: '#' },
  { name: 'Export PDF', href: '#' },
]



async function getTasks() {
  const data = await taskData
  return data
}

export const loader = async () => {
  const tasks = await getTasks()
  return json({ tasks })
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { tasks } = useLoaderData()
  const params = useParams()
  console.log(params)
  const exp = tasks.filter((task) => task.id === params.expId)[0]
  console.log(exp)
  const status = statuses.find(
    (status) => status.value === exp.status
  )
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
          <div className="p-4 ">
            <div className="flex items-center justify-between">
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

                    <div className="ml-2 text-sm text-gray-500">
                      {exp.owner}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex rounded-md shadow-sm">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-l-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-blue-600 focus:z-10"
                  >
                    Advance to offer
                  </button>
                  <Menu as="div" className="relative -ml-px ">
                    <Menu.Button className="relative inline-flex items-center rounded-r-md bg-blue-500 px-2 py-2 text-white ring-1 ring-inset ring-gray-300 hover:bg-blue-600 focus:z-10">
                      <span className="sr-only">Open options</span>
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {items.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
