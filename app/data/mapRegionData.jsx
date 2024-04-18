import WrapperWaterfallChart from "~/kendo/charts/waterfall/WrapperWaterfallChart";

import { tripData, bikeData } from "~/kendo/rawData/mapRegionData";

export const reviewTabs = [
  { name: "Month", href: "#", current: true },
  { name: "Quarter", href: "#", current: false },
  { name: "Year", href: "#", current: false },
];

export const meetingTabs = [
  { name: "Daily", href: "#", current: true },
  { name: "Weekly", href: "#", current: false },
];

export const kpiService_m = [
  {
    Name: "Cost per Trip",
    container: <WrapperWaterfallChart data={tripData} />,
  },
  {
    Name: "Cost per Unit",
    container: <WrapperWaterfallChart data={bikeData} />,
  },
];
