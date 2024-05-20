import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Link } from '@remix-run/react'
import { ProgressBar } from '@progress/kendo-react-progressbars'
import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function CustomNode({ data }) {
    const emptyStyles = { background: '#ef4444' }
    const progressStyles = { background: '#22c55e' }
  return (
    <>
      <li
        key={data.name}
        className="p-4 w-72 h-full flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 "
      >
        <div className="relative flex flex-1 flex-col mb-4">
         
            <div>
              <h1 className="text-xl font-bold text-black text-center">{data.name}</h1>
            </div>
          
          <div className="mt-2 flex justify-center items-center ">
            <div
              className={classNames(
                data.bgColor,
                'flex rounded-full justify-center items-center w-24 h-24 '
              )}
            >
              <span className={classNames(data.textColor, 'font-bold text-lg')}>
                {data.icon && <data.icon className="h-14 w-14 " />}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2 flex divide-x divide-gray-200 bg-gray-50 h-10 ">
            <div className="flex w-0 flex-1  ">
              <Link
                to={data.Analyze}
                className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
              >
                <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                  <WrenchScrewdriverIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>

            <div className="-ml-px flex flex-1">
              <Link
                to="/demo/dashboard/salesExp"
                className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white"
              >
                <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                  <CircleStackIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            </div>
            <div className="-ml-px flex  flex-1">
              <Link
                to="/benchmark"
                className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
              >
                <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                  <LightBulbIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </li>
      <Handle type="source" position="right" className="w-1 bg-teal-500" />
      <Handle type="target" position="left" className="w-1 bg-teal-500" />
      {/* <div className="p-2 w-52 shadow-md rounded-md bg-sky-50 border-2 border-stone-400 ">
        <div className="flex justify-center items-center ">
          <div
            className={classNames(
              data.bgColor,
              'flex rounded-full justify-center items-center w-20 h-20'
            )}
          >
            <span className={classNames(data.textColor, 'font-bold text-lg')}>
              {data.icon && <data.icon className="h-14 w-14 " />}
            </span>
          </div>
        </div>
        <div className="mt-2 flex justify-center text-xl">{data.name}</div>
     
      </div> */}
    </>
  )
}

export default memo(CustomNode)

   {
     /* <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog> */
   }