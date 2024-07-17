import React, { useState, useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { cn } from '~/lib/utils'

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
    name: 'india',
    svg:'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg', 
    statesdes: [
      {
        name: 'Punjab',
        citiesdes: [
          { name: 'Abohar', latitude: 30.1424, longitude: 74.1999 },
          { name: 'Amritsar', latitude: 31.583, longitude: 74.883 },
        ],
      },
      {
        name: 'Maharashtra',
        citiesdes: [
          { name: 'Achalpur', latitude: 21.264, longitude: 77.511 },
          { name: 'Ahmednagar', latitude: 19.0946, longitude: 74.745 },
          { name: 'Akola', latitude: 25.267, longitude: 74.883 },
          { name: 'Amravati', latitude: 20.933, longitude: 77.75 },
        ],
      },
      {
        name: 'Gujarat',
        citiesdes: [
          { name: 'Achhod', latitude: 21.961, longitude: 72.8317 },
          { name: 'Ahmedabad', latitude: 23.033, longitude: 72.617 },
          { name: 'Amreli', latitude: 21.5991, longitude: 71.2157 },
          { name: 'Anand', latitude: 22.5569, longitude: 72.9492 },
        ],
      },
      {
        name: 'Tripura',
        citiesdes: [{ name: 'Agartala', latitude: 23.82, longitude: 91.28 }],
      },
      {
        name: 'Uttar Pradesh',
        citiesdes: [
          { name: 'Agra', latitude: 27.183, longitude: 78.017 },
          { name: 'Aligarh', latitude: 27.8922, longitude: 78.072 },
          { name: 'Allahabad', latitude: 25.4512, longitude: 81.8265 },
          { name: 'Amethi', latitude: 26.7565, longitude: 81.1569 },
        ],
      },
      {
        name: 'Mizoram',
        citiesdes: [{ name: 'Aizwal', latitude: 23.7339, longitude: 92.7168 }],
      },
      {
        name: 'Rajasthan',
        citiesdes: [
          { name: 'Ajmer', latitude: 26.4565, longitude: 74.6377 },
          { name: 'Alwar', latitude: 27.5618, longitude: 76.6119 },
        ],
      },
      {
        name: 'Haryana',
        citiesdes: [{ name: 'Ambala', latitude: 30.35, longitude: 76.833 }],
      },
    ],
  },
]
// const destination = [
 
//   {
//     name: 'India',
//     statesdes: [
//       {
//         name: 'Punjab',
//         citiesdes: [
//           { name: 'Abohar', latitude: 30.1424, longitude: 74.1999 },
//           { name: 'Amritsar', latitude: 31.583, longitude: 74.883 },
//         ],
//       },
//       {
//         name: 'Maharashtra',
//         citiesdes: [
//           { name: 'Achalpur', latitude: 21.264, longitude: 77.511 },
//           { name: 'Ahmednagar', latitude: 19.0946, longitude: 74.745 },
//           { name: 'Akola', latitude: 25.267, longitude: 74.883 },
//           { name: 'Amravati', latitude: 20.933, longitude: 77.75 },
//         ],
//       },
//       {
//         name: 'Gujarat',
//         citiesdes: [
//           { name: 'Achhod', latitude: 21.961, longitude: 72.8317 },
//           { name: 'Ahmedabad', latitude: 23.033, longitude: 72.617 },
//           { name: 'Amreli', latitude: 21.5991, longitude: 71.2157 },
//           { name: 'Anand', latitude: 22.5569, longitude: 72.9492 },
//         ],
//       },
//       {
//         name: 'Tripura',
//         citiesdes: [{ name: 'Agartala', latitude: 23.82, longitude: 91.28 }],
//       },
//       {
//         name: 'Uttar Pradesh',
//         citiesdes: [
//           { name: 'Agra', latitude: 27.183, longitude: 78.017 },
//           { name: 'Aligarh', latitude: 27.8922, longitude: 78.072 },
//           { name: 'Allahabad', latitude: 25.4512, longitude: 81.8265 },
//           { name: 'Amethi', latitude: 26.7565, longitude: 81.1569 },
//         ],
//       },
//       {
//         name: 'Mizoram',
//         citiesdes: [{ name: 'Aizwal', latitude: 23.7339, longitude: 92.7168 }],
//       },
//       {
//         name: 'Rajasthan',
//         citiesdes: [
//           { name: 'Ajmer', latitude: 26.4565, longitude: 74.6377 },
//           { name: 'Alwar', latitude: 27.5618, longitude: 76.6119 },
//         ],
//       },
//       {
//         name: 'Haryana',
//         citiesdes: [{ name: 'Ambala', latitude: 30.35, longitude: 76.833 }],
//       },
//     ],
//   },


export default function App() {
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

  return (
    <div>
      <Select
        value={selectedCountrydes}
        defaultValue={selectedCountrydes}
        onValueChange={handleCountryChangedes}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select a country">
            <img
              src={
                destination.find((country) => country.name === selectedCountrydes)
                  ?.svg
              }
              width="30"
              height="16"
              alt="Flag"
            />
            <span className={cn('ml-2', isCollapseddes && 'hidden')}>
              {selectedCountrydes || 'Select a country'}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {destination.map((country) => (
            <SelectItem key={country.name} value={country.name}>
              <div className="flex items-center gap-3">
                <img src={country.svg} width="30" height="16" alt="Flag" />
                {country.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedStatedes} onValueChange={handleStateChangedes}>
        <SelectTrigger className="w-[120px] mt-2">
          <SelectValue>{selectedStatedes || 'State'}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {statesdes.map((state) => (
            <SelectItem key={state.name} value={state.name}>
              {state.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedCitydes} onValueChange={handleCityChangedes}>
        <SelectTrigger className="w-[120px] mt-2">
          <SelectValue>{selectedCitydes || 'City'}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {citiesdes.map((city, index) => (
            <SelectItem key={index} value={city.name}>
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
