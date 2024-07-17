/* eslint-disable jsx-a11y/iframe-has-title */
// import React from 'react'
import Iframe from '../components/trans/BlueNorthSc'

import React, { useState, useEffect } from 'react'
import { useParams, Form } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import {
  TruckIcon,
  MapIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { cn } from '~/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Checkbox } from '~/components/ui/checkbox'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import LaneMap from '~/components/network/LaneMap'
import { kpiService_m } from '~/components/trans/outputData'
export interface SidebarProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

const stats = [
  { name: 'Pixels per kilometer', stat: '0.39' },
  { name: 'Scaling Factor', stat: '10000' },
  { name:'Number of iterations', stat: '10' },
  { name: 'Number of replications', stat: '3' },
]


const countries = [
  {
    name: 'Afghanistan',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg',

    states: [
      {
        name: 'Herat',

        cities: [
          { name: 'Air', latitude: 34.333, longitude: 62.2 },
          { name: 'Rail', latitude: 34.517, longitude: 69.183 },
          { name: 'Ship', latitude: 36.7, longitude: 67.1 },
        ],
      },
      {
        name: 'Kabul',
        cities: [
          { name: 'Ship', latitude: 34.333, longitude: 62.2 },
          { name: 'Rail', latitude: 34.517, longitude: 69.183 },
          { name: 'Air', latitude: 36.7, longitude: 67.1 },
        ],
      },
      {
        name: 'Mazar-e Sharif',

        cities: [
          { name: 'Herat', latitude: 34.333, longitude: 62.2 },
          { name: 'Kabul', latitude: 34.517, longitude: 69.183 },
          { name: 'Mazar-e Sharif', latitude: 36.7, longitude: 67.1 },
        ],
      },
    ],
  },
  {
    name: 'india',
    svg: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    states: [
      {
        name: 'Punjab',
        cities: [
          { name: 'Abohar', latitude: 30.1424, longitude: 74.1999 },
          { name: 'Amritsar', latitude: 31.583, longitude: 74.883 },
        ],
      },
      {
        name: 'Maharashtra',
        cities: [
          { name: 'Achalpur', latitude: 21.264, longitude: 77.511 },
          { name: 'Ahmednagar', latitude: 19.0946, longitude: 74.745 },
          { name: 'Akola', latitude: 25.267, longitude: 74.883 },
          { name: 'Amravati', latitude: 20.933, longitude: 77.75 },
        ],
      },
      {
        name: 'Gujarat',
        cities: [
          { name: 'Achhod', latitude: 21.961, longitude: 72.8317 },
          { name: 'Ahmedabad', latitude: 23.033, longitude: 72.617 },
          { name: 'Amreli', latitude: 21.5991, longitude: 71.2157 },
          { name: 'Anand', latitude: 22.5569, longitude: 72.9492 },
        ],
      },
      {
        name: 'Tripura',
        cities: [{ name: 'Agartala', latitude: 23.82, longitude: 91.28 }],
      },
      {
        name: 'Uttar Pradesh',
        cities: [
          { name: 'Agra', latitude: 27.183, longitude: 78.017 },
          { name: 'Aligarh', latitude: 27.8922, longitude: 78.072 },
          { name: 'Allahabad', latitude: 25.4512, longitude: 81.8265 },
          { name: 'Amethi', latitude: 26.7565, longitude: 81.1569 },
        ],
      },
      {
        name: 'Mizoram',
        cities: [{ name: 'Aizwal', latitude: 23.7339, longitude: 92.7168 }],
      },
      {
        name: 'Rajasthan',
        cities: [
          { name: 'Ajmer', latitude: 26.4565, longitude: 74.6377 },
          { name: 'Alwar', latitude: 27.5618, longitude: 76.6119 },
        ],
      },
      {
        name: 'Haryana',
        cities: [{ name: 'Ambala', latitude: 30.35, longitude: 76.833 }],
      },
    ],
  },
  {
    name: 'China',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    statesdes: [
      {
        name: 'Chaoyang',
        citiesdes: [
          { name: 'Air', latitude: 23.283, longitude: 116.583 },
          { name: 'Rail', latitude: 23.283, longitude: 116.583 },
          { name: 'Ship', latitude: 23.283, longitude: 116.583 },
        ],
      },
      {
        name: 'Chengde',
        citiesdes: [
          { name: 'Air', latitude: 40.758, longitude: 118.156 },
          { name: 'Rail', latitude: 40.758, longitude: 118.156 },
          { name: 'Ship', latitude: 40.758, longitude: 118.156 },
        ],
      },
      {
        name: 'Chengdu',
        citiesdes: [
          { name: 'Air', latitude: 30.667, longitude: 104.067 },
          { name: 'Rail', latitude: 30.667, longitude: 104.067 },
          { name: 'Ship', latitude: 30.667, longitude: 104.067 },
        ],
      },
      {
        name: 'Chenzhou',
        citiesdes: [
          { name: 'Air', latitude: 25.8, longitude: 113.033 },
          { name: 'Rail', latitude: 25.8, longitude: 113.033 },
          { name: 'Ship', latitude: 25.8, longitude: 113.033 },
        ],
      },
      {
        name: 'Chifeng',
        citiesdes: [
          { name: 'Air', latitude: 42.268, longitude: 118.964 },
          { name: 'Rail', latitude: 42.268, longitude: 118.964 },
          { name: 'Ship', latitude: 42.268, longitude: 118.964 },
        ],
      },
      {
        name: 'Chongqing',
        citiesdes: [
          { name: 'Air', latitude: 29.55, longitude: 106.532 },
          { name: 'Rail', latitude: 29.55, longitude: 106.532 },
          { name: 'Ship', latitude: 29.55, longitude: 106.532 },
        ],
      },
      {
        name: 'Chuxiong',
        citiesdes: [
          { name: 'Air', latitude: 25.033, longitude: 101.55 },
          { name: 'Rail', latitude: 25.033, longitude: 101.55 },
          { name: 'Ship', latitude: 25.033, longitude: 101.55 },
        ],
      },
      {
        name: 'Dali',
        citiesdes: [
          { name: 'Air', latitude: 29.428, longitude: 121.313 },
          { name: 'Rail', latitude: 29.428, longitude: 121.313 },
          { name: 'Ship', latitude: 29.428, longitude: 121.313 },
        ],
      },
      {
        name: 'Dalian',
        citiesdes: [
          { name: 'Air', latitude: 38.917, longitude: 121.65 },
          { name: 'Rail', latitude: 38.917, longitude: 121.65 },
          { name: 'Ship', latitude: 38.917, longitude: 121.65 },
        ],
      },
      {
        name: 'Dandong',
        citiesdes: [
          { name: 'Air', latitude: 26.979, longitude: 108.909 },
          { name: 'Rail', latitude: 26.979, longitude: 108.909 },
          { name: 'Ship', latitude: 26.979, longitude: 108.909 },
        ],
      },
      {
        name: 'Danxian',
        citiesdes: [
          { name: 'Air', latitude: 19.517, longitude: 109.55 },
          { name: 'Rail', latitude: 19.517, longitude: 109.55 },
          { name: 'Ship', latitude: 19.517, longitude: 109.55 },
        ],
      },
      {
        name: 'Daqing',
        citiesdes: [
          { name: 'Air', latitude: 46.583, longitude: 125 },
          { name: 'Rail', latitude: 46.583, longitude: 125 },
          { name: 'Ship', latitude: 46.583, longitude: 125 },
        ],
      },
      {
        name: 'Darlag',
        citiesdes: [
          { name: 'Air', latitude: 33.8, longitude: 99.867 },
          { name: 'Rail', latitude: 33.8, longitude: 99.867 },
          { name: 'Ship', latitude: 33.8, longitude: 99.867 },
        ],
      },
      {
        name: 'Dawu',
        citiesdes: [
          { name: 'Air', latitude: 31, longitude: 101.15 },
          { name: 'Rail', latitude: 31, longitude: 101.15 },
          { name: 'Ship', latitude: 31, longitude: 101.15 },
        ],
      },
      {
        name: 'Delingha',
        citiesdes: [
          { name: 'Air', latitude: 37.383, longitude: 97.383 },
          { name: 'Rail', latitude: 37.383, longitude: 97.383 },
          { name: 'Ship', latitude: 37.383, longitude: 97.383 },
        ],
      },
      {
        name: 'Dengqen',
        citiesdes: [
          { name: 'Air', latitude: 31.533, longitude: 95.433 },
          { name: 'Rail', latitude: 31.533, longitude: 95.433 },
          { name: 'Ship', latitude: 31.533, longitude: 95.433 },
        ],
      },
    ],
  },
]

const destination = [
  {
    name: 'Afghanistan',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg',

    statesdes: [
      {
        name: 'Herat',

        citiesdes: [
          { name: 'Air', latitude: 34.333, longitude: 62.2 },
          { name: 'Rail', latitude: 34.517, longitude: 69.183 },
          { name: 'Ship', latitude: 36.7, longitude: 67.1 },
        ],
      },
      {
        name: 'Kabul',
        citiesdes: [
          { name: 'Ship', latitude: 34.333, longitude: 62.2 },
          { name: 'Rail', latitude: 34.517, longitude: 69.183 },
          { name: 'Air', latitude: 36.7, longitude: 67.1 },
        ],
      },
      {
        name: 'Mazar-e Sharif',

        citiesdes: [
          { name: 'Herat', latitude: 34.333, longitude: 62.2 },
          { name: 'Kabul', latitude: 34.517, longitude: 69.183 },
          { name: 'Mazar-e Sharif', latitude: 36.7, longitude: 67.1 },
        ],
      },
    ],
  },
  {
    name: 'India',
    svg: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    statesdes: [
      {
        name: 'Guwahati',
        citiesdes: [
          { name: 'Air', latitude: 26.1805, longitude: 91.7577 },
          { name: 'Rail', latitude: 26.1805, longitude: 91.7577 },
          { name: 'Ship', latitude: 26.1805, longitude: 91.7577 },
        ],
      },
      {
        name: 'Gwalior',
        citiesdes: [
          { name: 'Air', latitude: 26.2163, longitude: 78.1772 },
          { name: 'Rail', latitude: 26.2163, longitude: 78.1772 },
          { name: 'Ship', latitude: 26.2163, longitude: 78.1772 },
        ],
      },
      {
        name: 'Haldia',
        citiesdes: [
          { name: 'Air', latitude: 22.0331, longitude: 88.0603 },
          { name: 'Rail', latitude: 22.0331, longitude: 88.0603 },
          { name: 'Ship', latitude: 22.0331, longitude: 88.0603 },
        ],
      },
      {
        name: 'Haldwani',
        citiesdes: [
          { name: 'Air', latitude: 29.223, longitude: 79.511 },
          { name: 'Rail', latitude: 29.223, longitude: 79.511 },
          { name: 'Ship', latitude: 29.223, longitude: 79.511 },
        ],
      },
      {
        name: 'Halisahar',
        citiesdes: [
          { name: 'Air', latitude: 22.9489, longitude: 88.4171 },
          { name: 'Rail', latitude: 22.9489, longitude: 88.4171 },
          { name: 'Ship', latitude: 22.9489, longitude: 88.4171 },
        ],
      },
      {
        name: 'Hamirpur',
        citiesdes: [
          { name: 'Air', latitude: 31.6845, longitude: 76.5229 },
          { name: 'Rail', latitude: 31.6845, longitude: 76.5229 },
          { name: 'Ship', latitude: 31.6845, longitude: 76.5229 },
        ],
      },
      {
        name: 'Hansi',
        citiesdes: [
          { name: 'Air', latitude: 29.098, longitude: 75.9646 },
          { name: 'Rail', latitude: 29.098, longitude: 75.9646 },
          { name: 'Ship', latitude: 29.098, longitude: 75.9646 },
        ],
      },
      {
        name: 'Hanumangarh',
        citiesdes: [
          { name: 'Air', latitude: 29.623, longitude: 74.2919 },
          { name: 'Rail', latitude: 29.623, longitude: 74.2919 },
          { name: 'Ship', latitude: 29.623, longitude: 74.2919 },
        ],
      },
      {
        name: 'Harda',
        citiesdes: [
          { name: 'Air', latitude: 22.3409, longitude: 77.0922 },
          { name: 'Rail', latitude: 22.3409, longitude: 77.0922 },
          { name: 'Ship', latitude: 22.3409, longitude: 77.0922 },
        ],
      },
      {
        name: 'Hardoi',
        citiesdes: [
          { name: 'Air', latitude: 27.3954, longitude: 80.1267 },
          { name: 'Rail', latitude: 27.3954, longitude: 80.1267 },
          { name: 'Ship', latitude: 27.3954, longitude: 80.1267 },
        ],
      },
    ],
  },
  {
    name: 'China',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    statesdes: [
      {
        name: 'Chaoyang',
        citiesdes: [
          { name: 'Air', latitude: 23.283, longitude: 116.583 },
          { name: 'Rail', latitude: 23.283, longitude: 116.583 },
          { name: 'Ship', latitude: 23.283, longitude: 116.583 },
        ],
      },
      {
        name: 'Chengde',
        citiesdes: [
          { name: 'Air', latitude: 40.758, longitude: 118.156 },
          { name: 'Rail', latitude: 40.758, longitude: 118.156 },
          { name: 'Ship', latitude: 40.758, longitude: 118.156 },
        ],
      },
      {
        name: 'Chengdu',
        citiesdes: [
          { name: 'Air', latitude: 30.667, longitude: 104.067 },
          { name: 'Rail', latitude: 30.667, longitude: 104.067 },
          { name: 'Ship', latitude: 30.667, longitude: 104.067 },
        ],
      },
      {
        name: 'Chenzhou',
        citiesdes: [
          { name: 'Air', latitude: 25.8, longitude: 113.033 },
          { name: 'Rail', latitude: 25.8, longitude: 113.033 },
          { name: 'Ship', latitude: 25.8, longitude: 113.033 },
        ],
      },
      {
        name: 'Chifeng',
        citiesdes: [
          { name: 'Air', latitude: 42.268, longitude: 118.964 },
          { name: 'Rail', latitude: 42.268, longitude: 118.964 },
          { name: 'Ship', latitude: 42.268, longitude: 118.964 },
        ],
      },
      {
        name: 'Chongqing',
        citiesdes: [
          { name: 'Air', latitude: 29.55, longitude: 106.532 },
          { name: 'Rail', latitude: 29.55, longitude: 106.532 },
          { name: 'Ship', latitude: 29.55, longitude: 106.532 },
        ],
      },
      {
        name: 'Chuxiong',
        citiesdes: [
          { name: 'Air', latitude: 25.033, longitude: 101.55 },
          { name: 'Rail', latitude: 25.033, longitude: 101.55 },
          { name: 'Ship', latitude: 25.033, longitude: 101.55 },
        ],
      },
      {
        name: 'Dali',
        citiesdes: [
          { name: 'Air', latitude: 29.428, longitude: 121.313 },
          { name: 'Rail', latitude: 29.428, longitude: 121.313 },
          { name: 'Ship', latitude: 29.428, longitude: 121.313 },
        ],
      },
      {
        name: 'Dalian',
        citiesdes: [
          { name: 'Air', latitude: 38.917, longitude: 121.65 },
          { name: 'Rail', latitude: 38.917, longitude: 121.65 },
          { name: 'Ship', latitude: 38.917, longitude: 121.65 },
        ],
      },
      {
        name: 'Dandong',
        citiesdes: [
          { name: 'Air', latitude: 26.979, longitude: 108.909 },
          { name: 'Rail', latitude: 26.979, longitude: 108.909 },
          { name: 'Ship', latitude: 26.979, longitude: 108.909 },
        ],
      },
      {
        name: 'Danxian',
        citiesdes: [
          { name: 'Air', latitude: 19.517, longitude: 109.55 },
          { name: 'Rail', latitude: 19.517, longitude: 109.55 },
          { name: 'Ship', latitude: 19.517, longitude: 109.55 },
        ],
      },
      {
        name: 'Daqing',
        citiesdes: [
          { name: 'Air', latitude: 46.583, longitude: 125 },
          { name: 'Rail', latitude: 46.583, longitude: 125 },
          { name: 'Ship', latitude: 46.583, longitude: 125 },
        ],
      },
      {
        name: 'Darlag',
        citiesdes: [
          { name: 'Air', latitude: 33.8, longitude: 99.867 },
          { name: 'Rail', latitude: 33.8, longitude: 99.867 },
          { name: 'Ship', latitude: 33.8, longitude: 99.867 },
        ],
      },
      {
        name: 'Dawu',
        citiesdes: [
          { name: 'Air', latitude: 31, longitude: 101.15 },
          { name: 'Rail', latitude: 31, longitude: 101.15 },
          { name: 'Ship', latitude: 31, longitude: 101.15 },
        ],
      },
      {
        name: 'Delingha',
        citiesdes: [
          { name: 'Air', latitude: 37.383, longitude: 97.383 },
          { name: 'Rail', latitude: 37.383, longitude: 97.383 },
          { name: 'Ship', latitude: 37.383, longitude: 97.383 },
        ],
      },
      {
        name: 'Dengqen',
        citiesdes: [
          { name: 'Air', latitude: 31.533, longitude: 95.433 },
          { name: 'Rail', latitude: 31.533, longitude: 95.433 },
          { name: 'Ship', latitude: 31.533, longitude: 95.433 },
        ],
      },
    ],
  },
  {
    name: 'Japan',
    svg: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    statesdes: [
      {
        name: 'Choshi',
        citiesdes: [
          { name: 'Air', latitude: 35.733, longitude: 140.833 },
          { name: 'Rail', latitude: 35.733, longitude: 140.833 },
          { name: 'Ship', latitude: 35.733, longitude: 140.833 },
        ],
      },
      {
        name: 'Ebetsu',
        citiesdes: [
          { name: 'Air', latitude: 43.117, longitude: 141.567 },
          { name: 'Rail', latitude: 43.117, longitude: 141.567 },
          { name: 'Ship', latitude: 43.117, longitude: 141.567 },
        ],
      },
      {
        name: 'Fuji',
        citiesdes: [
          { name: 'Air', latitude: 43.817, longitude: 144.783 },
          { name: 'Rail', latitude: 43.817, longitude: 144.783 },
          { name: 'Ship', latitude: 43.817, longitude: 144.783 },
        ],
      },
      {
        name: 'Fujinomiya',
        citiesdes: [
          { name: 'Air', latitude: 35.217, longitude: 138.617 },
          { name: 'Rail', latitude: 35.217, longitude: 138.617 },
          { name: 'Ship', latitude: 35.217, longitude: 138.617 },
        ],
      },
      {
        name: 'Fujisawa',
        citiesdes: [
          { name: 'Air', latitude: 35.35, longitude: 139.483 },
          { name: 'Rail', latitude: 35.35, longitude: 139.483 },
          { name: 'Ship', latitude: 35.35, longitude: 139.483 },
        ],
      },
    ],
  },
]
const origin = [
  {
    id: 1,
    name: 'United States',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
  {
    id: 2,
    name: 'Canada',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
  },
  {
    id: 3,
    name: 'United Kingdom',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  },
  {
    id: 4,
    name: 'Australia',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
  },
  {
    id: 5,
    name: 'Germany',
    svg: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
  },
  // {
  //   id: 6,
  //   name: 'France',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
  // },
  // {
  //   id: 7,
  //   name: 'Italy',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
  // },
  // {
  //   id: 8,
  //   name: 'Spain',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
  // },
  // {
  //   id: 9,
  //   name: 'Japan',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
  // },
  // {
  //   id: 10,
  //   name: 'Brazil',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
  // },
  // {
  //   id: 11,
  //   name: 'South Korea',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
  // },
  // {
  //   id: 12,
  //   name: 'Russia',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
  // },
  // {
  //   id: 13,
  //   name: 'India',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
  // },
  {
    id: 14,
    name: 'China',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
  },
  // {
  //   id: 15,
  //   name: 'Mexico',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
  // },
  // {
  //   id: 16,
  //   name: 'Argentina',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
  // },
  // {
  //   id: 17,
  //   name: 'Netherlands',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
  // },
  // {
  //   id: 18,
  //   name: 'Switzerland',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
  // },
  // {
  //   id: 19,
  //   name: 'Sweden',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
  // },
  // {
  //   id: 20,
  //   name: 'Norway',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
  // },
]

const des = [
  {
    id: 1,
    name: 'United States',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
  {
    id: 2,
    name: 'Canada',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
  },
  {
    id: 3,
    name: 'United Kingdom',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  },
  {
    id: 4,
    name: 'Australia',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
  },
  {
    id: 5,
    name: 'Germany',
    svg: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
  },
  // {
  //   id: 6,
  //   name: 'France',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
  // },
  // {
  //   id: 7,
  //   name: 'Italy',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
  // },
  // {
  //   id: 8,
  //   name: 'Spain',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
  // },
  // {
  //   id: 9,
  //   name: 'Japan',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
  // },
  // {
  //   id: 10,
  //   name: 'Brazil',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
  // },
  // {
  //   id: 11,
  //   name: 'South Korea',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
  // },
  // {
  //   id: 12,
  //   name: 'Russia',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
  // },
  {
    id: 13,
    name: 'India',
    svg: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
  },
  {
    id: 14,
    name: 'China',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
  },
  // {
  //   id: 15,
  //   name: 'Mexico',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
  // },
  // {
  //   id: 16,
  //   name: 'Argentina',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
  // },
  // {
  //   id: 17,
  //   name: 'Netherlands',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
  // },
  // {
  //   id: 18,
  //   name: 'Switzerland',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
  // },
  // {
  //   id: 19,
  //   name: 'Sweden',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
  // },
  // {
  //   id: 20,
  //   name: 'Norway',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
  // },
]
function DemoContainer({
  // eslint-disable-next-line react/prop-types
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


export default function Agmap() {
   const params = useParams()
   const [tyopen, settyOpen] = React.useState(false)
   const [value, setValue] = React.useState('')
   const [selectedAccount, setSelectedAccount] = useState(origin[0].name)
   const [selectedAccountdes, setSelectedAccountdes] = useState(des[0].name)

   const [selectedCountry, setSelectedCountry] = useState(countries[0].name)
   const [selectedState, setSelectedState] = useState('')
   const [selectedCity, setSelectedCity] = useState('')
   const [states, setStates] = useState([])
   const [cities, setCities] = useState([])
   const [isCollapsed, setIsCollapsed] = useState(false)
   useEffect(() => {
     // Set initial default values
     const defaultCountryName = 'India'
     const defaultCountry = countries.find(
       (country) => country.name === defaultCountryName
     )

     if (defaultCountry) {
       setSelectedCountry(defaultCountry.name)
       setStates(defaultCountry.states)
       if (defaultCountry.states.length > 0) {
         setSelectedState(defaultCountry.states[0].name)
         setCities(defaultCountry.states[0].cities)
         if (defaultCountry.states[0].cities.length > 0) {
           setSelectedCity(defaultCountry.states[0].cities[0].name)
         }
       }
     }
   }, [])

   const handleCountryChange = (value) => {
     setSelectedCountry(value)
     const country = countries.find((country) => country.name === value)
     if (country) {
       setStates(country.states)
       if (country.states.length > 0) {
         setSelectedState(country.states[0].name)
         setCities(country.states[0].cities)
         if (country.states[0].cities.length > 0) {
           setSelectedCity(country.states[0].cities[0].name)
         }
       } else {
         setSelectedState('')
         setCities([])
         setSelectedCity('')
       }
     } else {
       setStates([])
       setSelectedState('')
       setCities([])
       setSelectedCity('')
     }
   }

   const handleStateChange = (value) => {
     setSelectedState(value)
     const state = states.find((state) => state.name === value)
     if (state) {
       setCities(state.cities)
       if (state.cities.length > 0) {
         setSelectedCity(state.cities[0].name)
       } else {
         setSelectedCity('')
       }
     } else {
       setCities([])
       setSelectedCity('')
     }
   }

   const handleCityChange = (value) => {
     setSelectedCity(value)
   }

   const [selectedCountrydes, setselectedCountrydes] = useState('')
   const [selectedStatedes, setselectedStatedes] = useState('')
   const [selectedCitydes, setselectedCitydes] = useState('')
   const [statesdes, setstatesdes] = useState([])
   const [citiesdes, setcitiesdes] = useState([])
   const [isCollapseddes, setisCollapseddes] = useState(false)
   useEffect(() => {
     // Set initial default values
     const defaultCountryName = 'India'
     const defaultCountry = destination.find(
       (country) => country.name === defaultCountryName
     )

     if (defaultCountry) {
       setselectedCountrydes(defaultCountry.name)
       setstatesdes(defaultCountry.statesdes)
       if (defaultCountry.statesdes.length > 0) {
         setselectedStatedes(defaultCountry.statesdes[0].name)
         setcitiesdes(defaultCountry.statesdes[0].citiesdes)
         if (defaultCountry.statesdes[0].citiesdes.length > 0) {
           setselectedCitydes(defaultCountry.statesdes[0].citiesdes[0].name)
         }
       }
     }
   }, [])

   const handleCountryChangedes = (value) => {
     setselectedCountrydes(value)
     const country = destination.find((country) => country.name === value)
     if (country) {
       setstatesdes(country.statesdes)
       if (country.statesdes.length > 0) {
         setselectedStatedes(country.statesdes[0].name)
         setcitiesdes(country.statesdes[0].citiesdes)
         if (country.statesdes[0].citiesdes.length > 0) {
           setselectedCitydes(country.statesdes[0].citiesdes[0].name)
         }
       } else {
         setselectedStatedes('')
         setcitiesdes([])
         setselectedCitydes('')
       }
     } else {
       setstatesdes([])
       setselectedStatedes('')
       setcitiesdes([])
       setselectedCitydes('')
     }
   }

   const handleStateChangedes = (value) => {
     setselectedStatedes(value)
     const state = statesdes.find((state) => state.name === value)
     if (state) {
       setcitiesdes(state.citiesdes)
       if (state.citiesdes.length > 0) {
         setselectedCitydes(state.citiesdes[0].name)
       } else {
         setselectedCitydes('')
       }
     } else {
       setcitiesdes([])
       setselectedCitydes('')
     }
   }

   const handleCityChangedes = (value) => {
     setselectedCitydes(value)
   }
  const [position, setPosition] = React.useState('bottom')

  return (
    <div>
      <div className="flex h-full ">
        {/* <SidebarDemo sidebarMenu={menus} /> */}
        <div className="flex flex-1 flex-col overflow-y-auto bg-slate-50">
          <div className="m-4">
            <DemoContainer>
              <Tabs defaultValue="Adaptive" className="">
                <TabsList className="">
                  <TabsTrigger value="Adaptive">
                    Adaptive Supply Chain
                  </TabsTrigger>
                  <TabsTrigger value="DC">DC</TabsTrigger>
                  <TabsTrigger value="Inventory">Inventory Control</TabsTrigger>
                </TabsList>
                <TabsContent value="Adaptive" className="w-full">
                  <div className="grid grid-cols-2 gap-6 py-2">
                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">Simulation</span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <Iframe />
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                    {/* <div className="p-2 bg-white shadow-lg border rounded-lg">
                      <LaneMap />
                    </div> */}

                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">
                                Parameters & Statistics
                              </span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                              {stats.map((item) => (
                                <div
                                  key={item.name}
                                  className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                                >
                                  <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                                    {item.stat}
                                  </dd>
                                  <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                                    {item.name}
                                  </dt>
                                </div>
                              ))}
                            </dl>

                            <ul className="grid grid-cols-2 gap-2 mt-2">
                              {kpiService_m.map((kpi) => (
                                <li
                                  key={kpi.Name}
                                  className="col-span-1 flex flex-col divide-y divide-white"
                                >
                                  <div className="relative flex flex-1 flex-col p-2">
                                    <div className="flex items-baseline gap-2">
                                      <h3 className="text-base font-medium text-gray-900">
                                        {kpi.Name}
                                      </h3>
                                    </div>
                                    <div className="mt-2">{kpi.container}</div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="DC" className="w-full">
                  <div className="grid grid-cols-2 gap-6 py-2">
                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">Simulation</span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <iframe
                              width="1000"
                              height="650"
                              allow="fullscreen"
                              src="https://cloud.anylogic.com/assets/embed?modelId=34bf8dad-8ee0-496c-a6d9-a62a0b14ea99"
                            ></iframe>
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                    {/* <div className="p-2 bg-white shadow-lg border rounded-lg">
                      <LaneMap />
                    </div> */}

                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">
                                Parameters & Statistics
                              </span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                              {stats.map((item) => (
                                <div
                                  key={item.name}
                                  className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                                >
                                  <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                                    {item.stat}
                                  </dd>
                                  <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                                    {item.name}
                                  </dt>
                                </div>
                              ))}
                            </dl>

                            <ul className="grid grid-cols-2 gap-2 mt-2">
                              {kpiService_m.map((kpi) => (
                                <li
                                  key={kpi.Name}
                                  className="col-span-1 flex flex-col divide-y divide-white"
                                >
                                  <div className="relative flex flex-1 flex-col p-2">
                                    <div className="flex items-baseline gap-2">
                                      <h3 className="text-base font-medium text-gray-900">
                                        {kpi.Name}
                                      </h3>
                                    </div>
                                    <div className="mt-2">{kpi.container}</div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="Inventory" className="w-full">
                  <div className="grid grid-cols-2 gap-6 py-2">
                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">
                                Cleansheet Summary
                              </span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <Iframe />
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                    {/* <div className="p-2 bg-white shadow-lg border rounded-lg">
                      <LaneMap />
                    </div> */}

                    <div>
                      <DemoContainer>
                        <Card className="shadow-lg text-blue-900">
                          <CardHeader className="space-y-1">
                            <CardTitle className="flex items-center">
                              <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                              <span className="text-2xl">
                                Cleansheet Summary
                              </span>
                            </CardTitle>

                            <div className="border-b" />
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-4">
                              {stats.map((item) => (
                                <div
                                  key={item.name}
                                  className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                                >
                                  <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                                    {item.stat}
                                  </dd>
                                  <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                                    {item.name}
                                  </dt>
                                </div>
                              ))}
                            </dl>

                            <ul className="grid grid-cols-2 gap-2 mt-2">
                              {kpiService_m.map((kpi) => (
                                <li
                                  key={kpi.Name}
                                  className="col-span-1 flex flex-col divide-y divide-white"
                                >
                                  <div className="relative flex flex-1 flex-col p-2">
                                    <div className="flex items-baseline gap-2">
                                      <h3 className="text-base font-medium text-gray-900">
                                        {kpi.Name}
                                      </h3>
                                    </div>
                                    <div className="mt-2">{kpi.container}</div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </DemoContainer>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </DemoContainer>
          </div>
        </div>
      </div>
    </div>
  )
}


