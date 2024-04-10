import React from 'react'
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "~/components/ui/button"
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
import type { LinksFunction } from "@remix-run/node";
// import Dimension from "~/components/lowes/Dimension"
import gridCommStyles from "ag-grid-community/styles/ag-grid.css?url"; // Mandatory CSS required by the grid
import themeStyles from "ag-grid-community/styles/ag-theme-quartz.css?url";
import LevelMaster from '~/components/lowes/LevelMaster'
import MeasureMaster from '~/components/lowes/MeasureMaster'
import AttributeMaster from '~/components/lowes/AttributeMaster'
import { cn } from '~/lib/utils'

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: gridCommStyles },
  { rel: "stylesheet", href: themeStyles },
];
function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className,
      )}
      {...props}
    />
  );
}

export default function MasterData() {
  return (
    <>
      <div className='m-4'>
        <DemoContainer>

          <Tabs defaultValue="Dimensions" className="w-[400px] tracking-normal text-xl">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="Dimensions" className="relative">
                  Dimensions
                </TabsTrigger>
                <TabsTrigger value="Metrics">Metrics</TabsTrigger>
                <TabsTrigger value="Attributes">
                  Attributes
                </TabsTrigger>
              </TabsList>

            </div>

            <TabsContent value='Dimensions'>
              <Card className="shadow-lg bg-gray-100">
                <div className='flex flex-col'>
              <div className='px-6 pt-6'>
                  <CardTitle className=" text-xl text-white font-semibold">
                     <span className='bg-blue-900 p-2 border rounded-t-lg'>Dimension Master</span>
                  </CardTitle>
                </div>
              </div>
                <CardContent>
                 
                  {/* <Dimension /> */}
                  <LevelMaster />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="Metrics" className="">

              <div className="">
                <MeasureMaster />
              </div>
            </TabsContent>
            <TabsContent value="Attributes" className="">

              <div className="">
                <AttributeMaster />
              </div>
            </TabsContent>
          </Tabs>

        </DemoContainer> {/* Adjust 48px based on your header/nav height */}

      </div>
    </>

  )
}
