import { useState, Fragment } from 'react'
import { AgChartsReact } from 'ag-charts-react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import 'ag-charts-enterprise'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import {
  Disclosure,
  Menu,
  Transition,
  Dialog,
  Popover,
} from '@headlessui/react'
import { Progress } from "~/components/ui/progress"

import {
  generatedDeficitData,
  generatedInventoryExcess,
} from '~/data/agGrid/snop/inventory/excessDeficit'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]
const filters = [
  {
    id: 'year',
    name: 'Year',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'all', label: 'All', checked: true },
    ],
  },
  {
    id: 'quarter',
    name: 'Quarter',
    options: [
      { value: 'all', label: 'All', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
    ],
  },
  {
    id: 'region',
    name: 'Region',
    options: [
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
    ],
  },
  {
    id: 'country',
    name: 'Country',
    options: [
      { value: 'all', label: 'All', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
    ],
  },
]


const activeFilters = [{ value: 'objects', label: 'Objects' }]
const inventory = [
  {
    materialId: 'Material2424',
    loactionId: 'Location080',
    container: '',
    value: 100,
  },
  {
    materialId: 'Material2386',
    loactionId: 'Location039',
    container: '',
    value: 50,
  },
  {
    materialId: 'Material2075',
    loactionId: 'Location2075',
    container: '',
    value: 75,
  },
]
const deficit = [
  {
    materialId: 'Material3544',
    loactionId: 'Location003',
    container: '',
    value: 80,
  },
  {
    materialId: 'Material3680',
    loactionId: 'Location094',
    container: '',
    value: 60,
  },
  {
    materialId: 'Material0372',
    loactionId: 'Location016',
    container: '',
    value: 55,
  },
]

const dataExcess = generatedInventoryExcess
const dataDeficit = generatedDeficitData

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ChartExample() {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState({
    data: dataExcess,
    series: [
      {
        type: 'treemap',
        labelKey: 'title',
        secondaryLabelKey: 'excess',
        sizeKey: 'percent',
        sizeName: 'Excess',
        fills: ['#43A047'],
        group: {
          label: {
            fontSize: 18,
            spacing: 2,
          },
          secondaryLabel: {
            formatter: (params) => `£${params.value.toFixed(1)}bn`,
          },
        },
      },
    ],
    title: {
      text: '',
    },
    subtitle: {
      text: '',
    },
  })
  const [options2, setOptions2] = useState({
    data: dataDeficit,
    series: [
      {
        type: 'treemap',
        labelKey: 'title',
        secondaryLabelKey: 'deficit',
        sizeKey: 'percent',
        sizeName: 'Deficit',
        strokes: ['#000'],
        fills: ['#FF5722'],
        group: {
          label: {
            fontSize: 18,
            spacing: 2,
          },
          secondaryLabel: {
            formatter: (params) => `£${params.value.toFixed(1)}bn`,
          },
        },
      },
    ],
    title: {
      text: '',
    },
    subtitle: {
      text: '',
    },
  })

  return (
    <div>

    
        <AgChartsReact options={options} />
   
    </div>
  )
}
