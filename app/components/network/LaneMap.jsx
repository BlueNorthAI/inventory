import { AgChartsReact } from 'ag-charts-react'

// import { topology } from './topology'
import {
  islandTopology,
  flightTopology,
  ferryTopology,
  backgroundTopology,
  capitals,
} from '~/data/network/mapData/laneData/topology'

import CardLayout from '~/components/snop/CardLayout'
import 'ag-charts-enterprise' // Import AgCharts Enterprise if needed

import { ProgressBar } from '@progress/kendo-react-progressbars'
import { Link } from '@remix-run/react'

const flightData = [
  { name: 'SHA-FL', duration: 20 },
  // { name: 'ATH-AXD', duration: 57 },
  // { name: 'ATH-CHQ', duration: 49 },
  // { name: 'ATH-HER', duration: 52 },
  // { name: 'ATH-JIK', duration: 45 },
  // { name: 'ATH-JKH', duration: 44 },
  // { name: 'ATH-JKL', duration: 51 },
  // { name: 'ATH-JMK', duration: 40 },
  // { name: 'ATH-JNX', duration: 41 },
  // { name: 'ATH-JSH', duration: 56 },
  // { name: 'ATH-JSI', duration: 40 },
  // { name: 'ATH-JSY', duration: 37 },
  // { name: 'ATH-JTR', duration: 46 },
  // { name: 'ATH-JTY', duration: 49 },
  // { name: 'ATH-KGS', duration: 52 },
  // { name: 'ATH-KIT', duration: 45 },
  // { name: 'ATH-KVA', duration: 54 },
  // { name: 'ATH-LRS', duration: 49 },
  // { name: 'ATH-LXS', duration: 48 },
  // { name: 'ATH-MJT', duration: 49 },
  // { name: 'ATH-MLO', duration: 40 },
  // { name: 'ATH-PAS', duration: 40 },
  // { name: 'ATH-RHO', duration: 60 },
  // { name: 'ATH-SKU', duration: 39 },
  // { name: 'ATH-SMI', duration: 49 },
]

const islandData = [
  { name: 'Shanghai', population: 3138 },
  { name: 'Andros', population: 8826 },
  { name: 'Astypalaia', population: 1300 },
  { name: 'Chios', population: 50361 },
  { name: 'Crete', population: 636504 },
  { name: 'Icaria', population: 8843 },
  { name: 'Ithaca', population: 2862 },
  { name: 'Ios', population: 2024 },
  { name: 'Kalymnos', population: 17752 },
  { name: 'Karpathos', population: 6567 },
  { name: 'Kea', population: 2335 },
  { name: 'Kythira', population: 3644 },
  { name: 'Kythnos', population: 1456 },
  { name: 'Lemnos', population: 16411 },
  { name: 'Lesbos', population: 83755 },
  { name: 'Milos', population: 5302 },
  { name: 'Mykonos', population: 10704 },
  { name: 'Naxos', population: 20578 },
  { name: 'Paros', population: 14520 },
  { name: 'Rhodes', population: 125113 },
  { name: 'Salamis', population: 37220 },
  { name: 'Samos', population: 32642 },
  { name: 'Samothrace', population: 2596 },
  { name: 'Santorini', population: 15480 },
  { name: 'Serifos', population: 1400 },
  { name: 'Sifnos', population: 2777 },
  { name: 'Skopelos', population: 4518 },
  { name: 'Skyros', population: 3052 },
  { name: 'Syros', population: 21507 },
  { name: 'Thasos', population: 13104 },
  { name: 'Tinos', population: 8934 },
]

const ferryData = [
  {
    '@id': 'way/30603364',
    duration: 75,
    foot: 'yes',
    int_name: 'Chíos - Oinoússes',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Χίος - Οινούσσες',
    'name:en': 'Chios - Oinousses',
    operator: 'Σύλλογος «Φίλοι Οινουσσών»',
    route: 'ferry',
  },
  {
    '@id': 'way/59804720',
    bicycle: 'yes',
    duration: 45,
    fee: 'yes',
    foot: 'yes',
    hgv: 'yes',
    int_name: 'Keramotí - Thásos (Liménas)',
    motorcar: 'yes',
    name: 'Κεραμωτή - Θάσος (Λιμένας)',
    'name:bg': 'Керамоти - Лименас',
    'name:en': 'Keramoti - Thassos (Limenas)',
    'name:mk': 'Керемидли - Боровец',
    'name:sr': 'Керамоти - Лименас',
    'public_transport:version': '2',
    reservation: 'no',
    route: 'ferry',
    tourist_bus: 'yes',
  },
  {
    '@id': 'way/118108544',
    bicycle: 'yes',
    duration: 70,
    foot: 'yes',
    from: 'Anafi',
    int_name: 'Santoríni (Athínios) - Anáfi',
    motor_vehicle: 'yes',
    name: 'Σαντορίνη (Αθήνιος) - Ανάφη',
    'name:en': 'Santorini (Athinios) - Anafi',
    operator: 'Blue Star',
    route: 'ferry',
    source: 'https://github.com/osmlab/appledata/issues/161',
    to: 'Santorini',
  },
  {
    '@id': 'way/118642741',
    access: 'yes',
    duration: 45,
    foot: 'yes',
    int_name: 'Folégandros - Síkinos',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Φολέγανδρος - Σίκινος',
    'name:el': 'Φολέγανδρος - Σίκινος',
    'name:en': 'Folegandros - Sikinos',
    route: 'ferry',
  },
  {
    '@id': 'way/186819688',
    bicycle: 'yes',
    description: 'Segment of Blue Star ferry from Rhodos to Piraeus',
    duration: 70,
    foot: 'yes',
    int_name: 'Kásos - Kárpathos',
    motor_vehicle: 'yes',
    name: 'Κάσος - Κάρπαθος',
    'name:en': 'Kasos - Karpathos',
    route: 'ferry',
    source: 'https://github.com/osmlab/appledata/issues/161',
  },
  {
    '@id': 'way/203708770',
    duration: 90,
    foot: 'yes',
    int_name: 'Kýthnos - Sérifos',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Κύθνος - Σέριφος',
    'name:en': 'Kythnos - Serifos',
    note: 'Many direct connections from Kythnos to Serifos and vice versa, during the summer',
    route: 'ferry',
  },
  {
    '@id': 'way/254841508',
    duration: 35,
    foot: 'yes',
    int_name: 'Ýdra - Spétses',
    motor_vehicle: 'no',
    name: 'Ύδρα - Σπέτσες',
    'name:en': 'Hydra - Spetses',
    note: 'Some Flying Dolphin services may skip Ermioni.',
    route: 'ferry',
    waterway: 'seaway',
  },
  {
    '@id': 'way/255883210',
    duration: 285,
    ferry: 'tertiary',
    foot: 'yes',
    hgv: 'yes',
    int_name: 'Peiraiás - Sýros',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Πειραιάς - Σύρος',
    'name:en': 'Piraeus - Syros',
    route: 'ferry',
    website: 'http://www.bluestarferries.gr/',
  },
  {
    '@id': 'way/277123252',
    bicycle: 'yes',
    duration: 120,
    ferry: 'secondary',
    foot: 'yes',
    int_name: 'Kýthira - Antikýthira',
    motor_vehicle: 'yes',
    name: 'Κύθηρα - Αντικύθηρα',
    'name:en': 'Kythira - Antikythira',
    operator: 'ANEN',
    route: 'ferry',
  },
  {
    '@id': 'way/277123253',
    bicycle: 'yes',
    duration: 150,
    foot: 'yes',
    int_name: 'Kýthira - Gýtheio',
    motor_vehicle: 'yes',
    name: 'Κύθηρα - Γύθειο',
    'name:en': 'Kythira - Gythio',
    operator: 'ANEN',
    route: 'ferry',
  },
  {
    '@id': 'way/289406731',
    duration: 30,
    foot: 'yes',
    int_name: 'Síkinos - Íos',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Σίκινος - Ίος',
    'name:en': 'Sikinos - Ios',
    route: 'ferry',
  },
  {
    '@id': 'way/289406736',
    access: 'yes',
    duration: 55,
    foot: 'yes',
    hgv: 'yes',
    int_name: 'Mílos - Kímolos',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Μήλος - Κίμωλος',
    'name:en': 'Milos - Kimolos',
    note: 'As of May 2015, there are a few direct connections from Milos to Kimolos and vice versa.',
    route: 'ferry',
  },
  {
    '@id': 'way/300407598',
    duration: 440,
    ferry: 'tertiary',
    foot: 'yes',
    hgv: 'yes',
    int_name: 'Peiraiás - Chíos',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Πειραιάς - Χίος',
    'name:el': 'Πειραιάς - Χίος',
    'name:en': 'Piraeus - Chios',
    route: 'ferry',
  },
  {
    '@id': 'way/302589937',
    duration: 150,
    foot: 'yes',
    int_name: 'Alexandroúpoli - Samothráki',
    name: 'Αλεξανδρούπολη - Σαμοθράκη',
    'name:el': 'Αλεξανδρούπολη - Σαμοθράκη',
    'name:en': 'Alexandroupolis - Samothrace',
    'name:es': 'Alejandrópolis - Samotracia',
    'name:lt': 'Aleksandrupolis - Samotrakė',
    'name:mk': 'Дедеагач - Самотракија',
    operator: 'SAOS FERRIES',
    route: 'ferry',
    vehicle: 'yes',
    website: 'https://www.saos.gr/',
  },
  {
    '@id': 'way/344649665',
    duration: 30,
    foot: 'yes',
    hgv: 'no',
    int_name: 'Pollónia - Psáthi',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Πολλώνια - Ψάθη',
    'name:en': 'Pollonia - Psathi',
    note: 'A few daily direct connections from Pollonia (Milos) to Psathi (Kimolos) with a small ferry boat - able to carry a few (small) vehicles.',
    route: 'ferry',
    source: 'survey',
  },
  {
    '@id': 'way/344649666',
    access: 'yes',
    duration: 135,
    foot: 'yes',
    int_name: 'Mílos - Folégandros',
    motor_vehicle: 'yes',
    name: 'Μήλος - Φολέγανδρος',
    'name:el': 'Μήλος - Φολέγανδρος',
    'name:en': 'Milos - Folegandros',
    note: 'As of May 2015, there are various direct connections from Milos to Folegandros and vice versa.',
    route: 'ferry',
    source: 'survey',
  },
  {
    '@id': 'way/344870260',
    duration: 160,
    ferry: 'tertiary',
    foot: 'yes',
    hgv: 'yes',
    int_name: 'Peiraiás - Sérifos',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Πειραιάς - Σέριφος',
    'name:en': 'Piraeus - Serifos',
    route: 'ferry',
    waterway: 'seaway',
  },
  {
    '@id': 'way/345734628',
    duration: 190,
    ferry: 'tertiary',
    foot: 'yes',
    hgv: 'yes',
    int_name: 'Peiraiás - Kýthnos',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Πειραιάς - Κύθνος',
    'name:en': 'Piraeus - Kythnos',
    route: 'ferry',
  },
  {
    '@id': 'way/345834457',
    duration: 85,
    foot: 'yes',
    hgv: 'yes',
    int_name: 'Kímolos - Folégandros',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Κίμωλος - Φολέγανδρος',
    'name:en': 'Kimolos - Folegandros',
    note: 'As of May 2015, F/B Adamantios Korais goes directly from Kimolos to Folegandros and vice versa a few times per week.',
    route: 'ferry',
  },
  {
    '@id': 'way/394511845',
    bicycle: 'yes',
    duration: 285,
    ferry: 'tertiary',
    foot: 'yes',
    from: 'Piraeus',
    hgv: 'yes',
    int_name: 'Peiraiás - Mílos',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Πειραιάς - Μήλος',
    'name:el': 'Πειραιάς - Μήλος',
    'name:en': 'Piraeus - Milos',
    operator: 'Blue Star',
    route: 'ferry',
    to: 'Milos',
  },
  {
    '@id': 'way/455579568',
    duration: 110,
    foot: 'yes',
    hgv: 'yes',
    int_name: 'Skýros - Kými',
    motor_vehicle: 'yes',
    motorcar: 'yes',
    name: 'Σκύρος - Κύμη',
    'name:en': 'Skyros - Kymi',
    note: 'route not accurate',
    route: 'ferry',
  },
  {
    '@id': 'way/500480451',
    duration: 45,
    foot: 'yes',
    hgv: 'no',
    int_name: 'Peiraiás - Kamateró',
    motor_vehicle: 'no',
    motorcar: 'no',
    name: 'Πειραιάς - Καματερό',
    'name:en': 'Piraeus - Kamatero',
    route: 'ferry',
    source: 'https://github.com/osmlab/appledata/issues/161',
  },
  {
    '@id': 'way/579134996',
    duration: 245,
    foot: 'yes',
    from: 'Ρέθυμνο',
    int_name: 'Réthymno - Santoríni',
    motor_vehicle: 'yes',
    name: 'Ρέθυμνο - Σαντορίνη',
    'name:en': 'Rethymno - Santorini',
    operator: 'SeaSpeed Lines',
    route: 'ferry',
    to: 'Σαντορίνη',
    website: 'https://www.seaspeedferries.gr/',
  },
  {
    '@id': 'way/692382996',
    duration: 45,
    fee: 'yes',
    foot: 'yes',
    from: 'Ρέθυμνο',
    horse: 'no',
    int_name: 'Réthymno - Irákleio',
    motor_vehicle: 'yes',
    name: 'Ρέθυμνο - Ηράκλειο',
    'name:en': 'Rethymno - Heraklion',
    operator: 'Seajets',
    route: 'ferry',
    source:
      'https://static.seajets.gr/seajets-files/docs/default-source/schedule/itinerary-heraklio-rethymno-thira-ios-naxos-paros-mykonos-2019-gr.pdf?sfvrsn=7564fd4c_26',
    to: 'Ηράκλειο',
  },
  {
    '@id': 'way/971711318',
    bicycle: 'yes',
    duration: 215,
    foot: 'yes',
    from: 'Santorini',
    int_name: 'Mílos - Santoríni (Athínios)',
    motor_vehicle: 'yes',
    name: 'Μήλος - Σαντορίνη (Αθήνιος)',
    'name:en': 'Milos - Santorini (Athinios)',
    operator: 'Blue Star',
    route: 'ferry',
    source: 'https://github.com/osmlab/appledata/issues/161',
    to: 'Milos',
  },
  {
    '@id': 'way/974838594',
    bicycle: 'yes',
    duration: 45,
    foot: 'yes',
    from: 'Karpathos',
    int_name: 'Kárpathos - Kárpathos (Diafáni)',
    motor_vehicle: 'yes',
    name: 'Κάρπαθος - Κάρπαθος (Διαφάνι)',
    'name:en': 'Karpathos - Karpathos (Diafani)',
    operator: 'Blue Star',
    route: 'ferry',
    source: 'https://github.com/osmlab/appledata/issues/161',
    to: 'Karpathos (Diafani)',
  },
  {
    '@id': 'way/974840158',
    bicycle: 'yes',
    duration: 90,
    foot: 'yes',
    from: 'Karpathos (Diafani)',
    int_name: 'Kárpathos (Diafáni) - Chálki',
    motor_vehicle: 'yes',
    name: 'Κάρπαθος (Διαφάνι) - Χάλκη',
    'name:en': 'Karpathos (Diafani) - Chalki',
    operator: 'Blue Star',
    route: 'ferry',
    source: 'https://github.com/osmlab/appledata/issues/161',
    to: 'Chalki',
  },
  {
    '@id': 'way/975717239',
    bicycle: 'yes',
    duration: 95,
    foot: 'yes',
    from: 'Rhodes',
    int_name: 'Ródos - Chálki',
    motor_vehicle: 'yes',
    name: 'Ρόδος - Χάλκη',
    'name:en': 'Rhodes - Chalki',
    operator: 'Blue Star',
    route: 'ferry',
    source: 'https://github.com/osmlab/appledata/issues/161',
    to: 'Chalki',
  },
  {
    '@id': 'way/1011917984',
    bicycle: 'yes',
    description: 'Segment of Blue Star ferry from Rhodos to Piraeus',
    duration: 170,
    foot: 'yes',
    from: 'Sitia',
    int_name: 'Siteía - Irákleio',
    motor_vehicle: 'yes',
    name: 'Σητεία - Ηράκλειο',
    'name:en': 'Sitia - Heraklion',
    operator: 'Blue Star',
    route: 'ferry',
    to: 'Heraklion',
  },
  {
    '@id': 'way/1011917986',
    bicycle: 'yes',
    description: 'Segment of Blue Star ferry from Rhodos to Piraeus',
    duration: 215,
    foot: 'yes',
    from: 'Heraklion',
    int_name: 'Irákleio - Anáfi',
    motor_vehicle: 'yes',
    name: 'Ηράκλειο - Ανάφη',
    'name:en': 'Heraklion - Anafi',
    operator: 'Blue Star',
    route: 'ferry',
    to: 'Anafi',
  },
  {
    '@id': 'way/1070034091',
    duration: 45,
    fee: 'yes',
    foot: 'yes',
    from: 'Ρέθυμνο',
    horse: 'no',
    int_name: 'Réthymno - Irákleio',
    motor_vehicle: 'yes',
    name: 'Ρέθυμνο - Ηράκλειο',
    'name:en': 'Rethymno - Heraklion',
    operator: 'Seajets',
    route: 'ferry',
    source:
      'https://static.seajets.gr/seajets-files/docs/default-source/schedule/itinerary-heraklio-rethymno-thira-ios-naxos-paros-mykonos-2019-gr.pdf?sfvrsn=7564fd4c_26',
    to: 'Ηράκλειο',
  },
]
const stats = [
  {
    Name: 'Logistics Cost',
    Value: '$2.2B',
    TargetAch: '75',
    status: 'Above Target',
  },
  {
    Name: 'Loading Cost',
    Value: '75%',
    TargetAch: '90',
    status: 'Below Target',
  },
  {
    Name: 'Unloading Cost',
    Value: '80%',
    TargetAch: '90',
    status: 'Above Target',
  },
  // {
  //   Name: 'Backlog',
  //   Value: '$1.2M',
  //   TargetAch: '50',
  //   status: 'Below Target',
  // },
  // {
  //   Name: 'Cost of Goods',
  //   Value: '$1.2B',
  //   TargetAch: '90',
  //   status: '',
  // },
  // {
  //   Name: 'Inventory',
  //   Value: '$600M',
  //   TargetAch: '50',
  //   status: 'Below Target',
  // },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const sizeDomain = [500, 0]

const options = {
  series: [
    {
      type: 'map-shape-background',
      topology: backgroundTopology,
    },
    {
      type: 'map-marker',
      title: 'Islands',
      data: islandData,
      topology: islandTopology,
      idKey: 'name',
      sizeKey: 'population',
      shape: 'pin',
      size: 8,
      maxSize: 32,
    },
    {
      type: 'map-marker',
      topology: capitals,
      data: capitals.features.map((t) => {
        return { name: t.properties.name }
      }),

      idKey: 'name',
      shape: 'pin',
      size: 10,
      fill: '#15803d',
      fillOpacity: 1,
      strokeWidth: 0,
      tooltip: {
        renderer: (
          params
        ) => `<div class="ag-chart-tooltip-title" style="background-color: #15803d">
      DC Location
    </div>
    <div class="ag-chart-tooltip-content">
      <a href="/execution/dc">${params.datum.name} <br> Shipment Volume: 806 <br> D+X: 958 <br> Open items: 1,098 <br> Cost per Shipment: 238</a>
    </div>`,

        interaction: {
          enabled: true,
        },
      },
    },
    // {
    //   type: 'map-line',
    //   title: 'Ferries',
    //   legendItemName: 'Ferries',
    //   data: ferryData,
    //   topology: ferryTopology,
    //   idKey: '@id',
    //   topologyIdKey: '@id',
    //   sizeKey: 'duration',
    //   sizeName: 'Duration',
    //   sizeDomain,
    //   tooltip: {
    //     renderer: ({ datum }) => ({
    //       content: `${datum.int_name}<br>Duration: ${datum.duration}`,
    //     }),
    //   },
    // },
    {
      type: 'map-line',
      title: 'Flights',
      legendItemName: 'Flights',
      data: flightData,
      topology: flightTopology,
      idKey: 'name',
      sizeKey: 'duration',
      sizeName: 'Duration',
      sizeDomain,
      lineDash: [1, 4],
    },
  ],
  legend: {
    enabled: true,
  },
}
export default function LaneMap() {
    const emptyStyles = { background: '#ef4444' }
    const progressStyles = { background: '#22c55e' }
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <ul className="p-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        {stats.map((kpi) => (
          <li
            key={kpi.Name}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white border shadow-md"
          >
            <div className="relative flex flex-1 flex-col py-2 pl-3">
              <span
                className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                  kpi.status === 'Above Target'
                    ? `bg-green-500`
                    : kpi.status === 'Below Target'
                      ? `bg-red-500`
                      : ''
                }`}
              ></span>
              <div className="my-2 flex items-baseline gap-2">
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    {kpi.Name}
                  </h3>
                  <h1 className="text-4xl font-bold text-black">{kpi.Value}</h1>
                </div>
                <div className="ml-auto overflow-x-hidden px-2  text-center text-base font-medium text-gray-700">
                  <ProgressBar
                    value={kpi.TargetAch}
                    style={{ width: 100, height: 12 }}
                    labelVisible={true}
                    labelPlacement={'start'}
                    emptyStyle={emptyStyles}
                    progressStyle={progressStyles}
                  />
                </div>
              </div>
          
            </div>
        
          </li>
        ))}
      </ul>

      <div className="w-full h-[700px] ">
        <AgChartsReact options={options} />
      </div>
    </div>
  )
}
