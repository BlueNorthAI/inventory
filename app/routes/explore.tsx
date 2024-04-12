import React, { useState, Fragment } from 'react'
import {
  Dialog,
  Transition,
  Tab,
  RadioGroup,
  Disclosure,
} from '@headlessui/react'
import {
  CheckCircleIcon,
  PlusSmallIcon,
  MinusSmallIcon,
  AdjustmentsHorizontalIcon,
  DocumentArrowDownIcon,
  ShareIcon,
  ClipboardDocumentCheckIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { WrapperTreeView } from '~/kendo/grid/treeview/WrapperTree'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '~/components/ui/bluetabs'

import {
  TreeView,
  TreeViewExpandChangeEvent,
  TreeViewCheckChangeEvent,
  TreeViewItemClickEvent,
  TreeViewCheckDescriptor,
  TreeViewOperationDescriptor,
  TreeViewCheckChangeSettings,
  processTreeViewItems,
  handleTreeViewCheckChange,
} from '@progress/kendo-react-treeview'

import ListBox from '~/components/Listbox'

type TreeViewDataItem = {
  text: string
  expanded?: boolean
  checked?: boolean
  selected?: boolean
  items?: TreeViewDataItem[]
}

const tree: TreeViewDataItem[] = [
  {
    text: 'Furniture',
    items: [
      { text: 'Tables & Chairs' },
      { text: 'Sofas' },
      { text: 'Occasional Furniture' },
    ],
  },
  {
    text: 'Decor',
    items: [
      { text: 'Bed Linen' },
      { text: 'Curtains & Blinds' },
      { text: 'Carpets' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ExploreFiltersRoute() {
  const [check, setCheck] = React.useState<string[] | TreeViewCheckDescriptor>(
    []
  )
  const [expand, setExpand] = React.useState<TreeViewOperationDescriptor>({
    ids: ['Item2'],
    idField: 'text',
  })
  const [select, setSelect] = React.useState<string[]>([''])

  const onItemClick = (event: TreeViewItemClickEvent) => {
    setSelect([event.itemHierarchicalIndex])
  }

  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    const ids: string[] = expand.ids ? expand.ids.slice() : []
    const index: number = ids.indexOf(event.item.text)

    index === -1 ? ids.push(event.item.text) : ids.splice(index, 1)
    setExpand({ ids, idField: 'text' })
  }

  const onCheckChange = (event: TreeViewCheckChangeEvent) => {
    const settings: TreeViewCheckChangeSettings = {
      singleMode: false,
      checkChildren: false,
      checkParents: false,
    }
    setCheck(handleTreeViewCheckChange(event, check, tree, settings))
  }

  let [businessTab] = useState({
    businessFunc: [
      { name: 'Dashboard' },
      { name: 'Financial Plan' },
      { name: 'Income Statement' },
    ],
    reports: [
      { name: 'Distribution Plan' },
      { name: 'Inventory Plan' },
      { name: 'Demand Plan' },
    ],
  })

  let [sellerTab] = useState({
    seller: [
      {
        tree: (
          <div>
            <WrapperTreeView />
          </div>
        ),
      },
    ],
    site: [
      {
        tree: <div></div>,
      },
    ],
    Product: [
      {
        tree: <div></div>,
      },
    ],
  })

  let [timeTab] = useState({
    timeline: [
      { name: 'Type:' },
      { name: 'View:' },
      { name: 'Plan:' },
      { name: 'From:' },
      { name: 'To:' },
    ],
    options: [
      { name: 'Units Revenue:' },
      { name: 'Plan Type:' },
      { name: 'Currency:' },
    ],
  })

  const type = [{ name: 'Fiscal' }, { name: 'Calender' }]
  const view = [{ name: 'Monthly' }, { name: 'Quaterly' }, { name: 'Year' }]
  const plan = [
    { name: 'April 2023' },
    { name: 'May 2023' },
    { name: 'June 2023' },
    { name: 'July 2023' },
  ]

  const from = [
    { name: 'Partial Week-13' },
    { name: 'Partial Week-13' },
    { name: 'Partial Week-13' },
    { name: 'Partial Week-13' },
  ]

  const to = [
    { name: 'April 2023' },
    { name: 'May 2023' },
    { name: 'June 2023' },
    { name: 'July 2023' },
  ]

  const centericon = [
    { name: 'Download as PDF', icon: DocumentArrowDownIcon },
    { name: 'Email KPIs', icon: ShareIcon },
    { name: 'Copy as Image', icon: ClipboardDocumentCheckIcon },
  ]
  const plans = Object.values(businessTab)
  const [selected, setSelected] = useState(plans[0])
  const seller = Object.values(sellerTab)
  const [open, setOpen] = useState(true)

  return (
    <>
      <div className="w-full bg-sky-500">
        <div className="ml-4 flex h-16 items-center justify-start">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="text-3xl font-bold text-white">
                Sales Explorer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-3">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="ml-4 mr-4 w-full border-t border-gray-300 " />
        </div>
        <div className="relative">
          <div className="ml-24 flex justify-center rounded-md">
            {centericon.map((icons) => (
              <>
                <div className="isolate inline-flex -space-x-px ring-1 ring-inset ring-gray-300 ">
                  <button
                    type="button"
                    className="relative inline-flex items-center border-x bg-white px-3  py-2 text-gray-400 focus:z-10 "
                  >
                    <span className="sr-only">{icons.name}</span>
                    <icons.icon
                      className="h-5 w-5 hover:text-rose-500"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="top-15 fixed right-0 flex cursor-pointer items-center 
                rounded-l-lg border bg-white px-2 py-4 text-sm font-semibold text-gray-900 shadow-xl hover:bg-rose-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        onClick={() => setOpen(!open)}
      >
        <AdjustmentsHorizontalIcon
          className="h-5 w-5 items-center"
          aria-hidden="true"
        />
      </button>

      <div className="mt-4 bg-gray-100">
        <div className="h-min  px-4">
          <div className="mr-10 rounded-lg  bg-white p-2 shadow-xl shadow-slate-900/10">
            {/* sales grid */}

            <div className=" m-2 rounded-lg  bg-white">
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <div className="rounded-lg border bg-slate-600 md:flex md:items-center md:justify-between">
                      <div className=" flex-1 px-2">
                        <h1 className="text-2xl font-medium leading-6 text-white ">
                          Sales Grid Details
                        </h1>
                      </div>

                      <Disclosure.Button className="inline-flex items-center text-white ">
                        <div className="m-2">
                          {open ? (
                            <MinusSmallIcon
                              className="h-8 w-8"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-8 w-8"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      </Disclosure.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Disclosure.Panel className="pt-4">
                        <div className="grid grid-cols-1">
                          <div className="rounded-lg border p-1"></div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          <div className="mr-10 mt-4 h-min bg-gray-100">
            <div className="rounded-lg  bg-white p-2 shadow-xl shadow-slate-900/10 ">
              <div className="relative m-2 rounded-lg  bg-white">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div className="rounded-lg border bg-slate-600 md:flex md:items-center md:justify-between">
                        <div className="min-w-0 flex-1 px-2">
                          <h1 className="text-2xl font-medium leading-6 text-white ">
                            Sales Grid Summary
                          </h1>
                        </div>

                        <Disclosure.Button className="inline-flex items-center text-white ">
                          <div className="m-2">
                            {open ? (
                              <MinusSmallIcon
                                className="h-8 w-8"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-8 w-8"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                        </Disclosure.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Disclosure.Panel className="pt-2">
                          <div className="grid grid-cols-1">
                            <div className="rounded-lg border p-1"></div>
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-blue-900 px-4 py-4">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="py-1 text-base font-semibold leading-6 text-white">
                              Grid Filter
                            </Dialog.Title>

                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md bg-blue-900 text-indigo-200 hover:text-white"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Slide over */}
                        <div className="relative mt-1 flex-1 bg-white px-2 ">
                          {/* Your content */}

                          <>
                            <div className="pt-1">
                              <Tab.Group>
                                <Tab.List className="isolate flex divide-x rounded-lg ">
                                  {Object.keys(businessTab).map((category) => (
                                    <Tab
                                      key={category}
                                      className={({ selected }) =>
                                        classNames(
                                          'group relative min-w-0 flex-1 rounded-md border-2 bg-white px-2 py-2 text-center text-sm font-semibold shadow hover:bg-gray-100 focus:z-10',
                                          selected
                                            ? 'border-b-blue-900  text-blue-900'
                                            : 'bg-gray-100 text-blue-700 hover:text-blue-900'
                                        )
                                      }
                                    >
                                      {category === 'businessFunc'
                                        ? 'Business Functions'
                                        : 'Reports'}
                                    </Tab>
                                  ))}
                                </Tab.List>

                                <Tab.Panels className="my-1">
                                  {plans.map((plan, idx) => (
                                    <Tab.Panel
                                      key={idx}
                                      className={classNames(
                                        'rounded-xl pb-2 pt-1 '
                                      )}
                                    >
                                      <RadioGroup
                                        value={selected}
                                        onChange={setSelected}
                                      >
                                        <div className="space-y-2">
                                          {plan.map((each) => (
                                            <RadioGroup.Option
                                              key={each.name}
                                              value={each}
                                              className={({
                                                active,
                                                checked,
                                              }) =>
                                                `${active ? ' ' : ''}
                                                   ${
                                                     checked
                                                       ? 'bg-blue-900  text-white'
                                                       : 'bg-gray-100'
                                                   }
                                                       relative my-1 flex  cursor-pointer rounded-md px-4 py-3 shadow-md focus:outline-none`
                                              }
                                            >
                                              {({ checked }) => (
                                                <>
                                                  <div className="flex w-full items-center justify-between">
                                                    <div className="flex items-center">
                                                      <div className="text-sm">
                                                        <RadioGroup.Label
                                                          as="p"
                                                          className={`font-medium  ${
                                                            checked
                                                              ? 'text-white'
                                                              : 'text-gray-900'
                                                          }`}
                                                        >
                                                          {each.name}
                                                        </RadioGroup.Label>
                                                      </div>
                                                    </div>
                                                    {checked && (
                                                      <div className="shrink-0 text-white">
                                                        <CheckCircleIcon className="h-5 w-5 " />
                                                      </div>
                                                    )}
                                                  </div>
                                                </>
                                              )}
                                            </RadioGroup.Option>
                                          ))}
                                        </div>
                                      </RadioGroup>
                                    </Tab.Panel>
                                  ))}
                                </Tab.Panels>
                              </Tab.Group>
                            </div>
                          </>
                          <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="account">Account</TabsTrigger>
                              <TabsTrigger value="password">
                                Password
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                              <Card>
                                <CardHeader>
                                  <CardTitle>Account</CardTitle>
                                  <CardDescription>
                                    Make changes to your account here. Click
                                    save when you're done.
                                  </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                      id="name"
                                      defaultValue="Pedro Duarte"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                      id="username"
                                      defaultValue="@peduarte"
                                    />
                                  </div>
                                </CardContent>
                                <CardFooter>
                                  <Button>Save changes</Button>
                                </CardFooter>
                              </Card>
                            </TabsContent>
                            <TabsContent value="password">
                              <Card>
                                <CardHeader>
                                  <CardTitle>Password</CardTitle>
                                  <CardDescription>
                                    Change your password here. After saving,
                                    you'll be logged out.
                                  </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  <div className="space-y-1">
                                    <Label htmlFor="current">
                                      Current password
                                    </Label>
                                    <Input id="current" type="password" />
                                  </div>
                                  <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                  </div>
                                </CardContent>
                                <CardFooter>
                                  <Button>Save password</Button>
                                </CardFooter>
                              </Card>
                            </TabsContent>
                          </Tabs>

                          <TreeView
                            data={processTreeViewItems(tree, {
                              select: select,
                              check: check,
                              expand: expand,
                            })}
                            expandIcons={true}
                            onExpandChange={onExpandChange}
                            aria-multiselectable={true}
                            onItemClick={onItemClick}
                            checkboxes={true}
                            onCheckChange={onCheckChange}
                          />
                          {/* Site Tab */}
                          <div className="mt-1 pb-2">
                            <Tab.Group>
                              <Tab.List className="isolate flex divide-x rounded-lg border bg-white ">
                                {Object.keys(sellerTab).map((category) => (
                                  <Tab
                                    key={category}
                                    className={({ selected }) =>
                                      classNames(
                                        'group relative min-w-0 flex-1 rounded-md  border-2 border-gray-100 bg-white px-2 py-2 text-center text-sm font-medium shadow hover:bg-gray-100 focus:z-10',
                                        selected
                                          ? ' border-b-blue-900  text-blue-900'
                                          : 'bg-gray-100 text-blue-700 hover:text-blue-900'
                                      )
                                    }
                                  >
                                    {category === 'seller'
                                      ? 'Seller'
                                      : category === 'site'
                                        ? 'Site'
                                        : 'Products'}
                                  </Tab>
                                ))}
                              </Tab.List>
                              <Tab.Panels className="h-64 overflow-y-scroll">
                                {seller.map((sell, idx) => (
                                  <Tab.Panel
                                    key={idx}
                                    className={classNames('rounded-xl  py-3')}
                                  >
                                    <RadioGroup>
                                      <div className="space-y-2">
                                        {sell.map((each) => (
                                          <RadioGroup.Option
                                            key={each.name}
                                            value={each}
                                            className={({ active, checked }) =>
                                              `${active ? '' : ''}
                                                   ${
                                                     checked
                                                       ? ' bg-opacity-75 text-black'
                                                       : 'bg-gray-100'
                                                   }
                                                       relative flex cursor-pointer rounded-md px-5 py-4 shadow-md focus:outline-none `
                                            }
                                          >
                                            {() => (
                                              <>
                                                <div className="flex w-full items-center justify-between">
                                                  <div className="flex items-center">
                                                    <div className="text-sm">
                                                      <span>{each.name}</span>

                                                      <span className="text-sm">
                                                        {each.tree}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </>
                                            )}
                                          </RadioGroup.Option>
                                        ))}
                                      </div>
                                    </RadioGroup>
                                  </Tab.Panel>
                                ))}
                              </Tab.Panels>
                            </Tab.Group>
                          </div>

                          {/* Time Tab */}
                          <div className="pt-2">
                            <Tab.Group>
                              <Tab.List className="isolate flex divide-x rounded-lg border bg-white">
                                {Object.keys(timeTab).map((category) => (
                                  <Tab
                                    key={category}
                                    className={({ selected }) =>
                                      classNames(
                                        'group relative min-w-0 flex-1 rounded-md border-2 border-gray-100 bg-white px-2 py-2 text-center text-sm font-medium shadow hover:bg-gray-100 focus:z-10',
                                        selected
                                          ? ' border-b-blue-900  text-blue-900'
                                          : 'bg-gray-100 text-blue-700 hover:text-blue-900'
                                      )
                                    }
                                  >
                                    {category === 'timeline'
                                      ? 'Timeline'
                                      : 'Options'}
                                  </Tab>
                                ))}
                              </Tab.List>
                              <Tab.Panels className="mt-1 overflow-y-auto">
                                <div>
                                  <div className="w-full">
                                    <ListBox data={type} />
                                  </div>

                                  <div className="w-full">
                                    <ListBox data={view} />
                                  </div>

                                  <div className="w-full">
                                    <ListBox data={plan} />
                                  </div>

                                  <div className="w-full">
                                    <ListBox data={from} />
                                  </div>

                                  <div className="w-full">
                                    <ListBox data={to} />
                                  </div>
                                </div>
                              </Tab.Panels>
                              {/* <div className="w-full">
                                            <ListBox data={unit}/>
                                            </div>
                                          
                                            <div className="w-full">
                                            <ListBox data={planType}/>
                                            </div>

                                            <div className="w-full">
                                            <ListBox data={currency}/>
                                            </div> */}
                            </Tab.Group>
                          </div>

                          {/* dropdown */}
                        </div>
                      </div>

                      <div className="flex justify-center  py-2">
                        <button
                          type="button"
                          className="text-md rounded-md border bg-indigo-600 px-8 py-2 font-semibold text-white shadow-sm"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="text-md ml-4 inline-flex justify-center rounded-md bg-rose-500 px-8 py-2 font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
