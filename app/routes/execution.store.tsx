import React from 'react'
import { Button } from '~/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

import ExecutionStore from '~/components/network/ExecutionStore'

export interface SidebarProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export default function Agmap() {
  const [position, setPosition] = React.useState('bottom')

  return (
    <div className="m-4">
      <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
        <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
          <div className="p-2">Store Review</div>
          <div className="m-2 space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Timeline</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-28">
                <DropdownMenuLabel>View Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    Daily
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Weekly
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Monthly
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Quarterly
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Plan</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-28">
                <DropdownMenuLabel>Plan Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    Jan 2024
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Feb 2024
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Mar 2024
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div>
        <ExecutionStore />
      </div>
    </div>
  )
}
