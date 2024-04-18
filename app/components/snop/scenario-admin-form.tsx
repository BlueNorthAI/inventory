import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Form } from "@remix-run/react";

export default function ScenarioAdminInput({ admin }) {
 
  return (
    <div className="grid w-full  gap-10">
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
          Region 1
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
            Region 2
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
          Region 3
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
             Region 4
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
          Region 5
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
         Region 6
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
          Region 7
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
            Region 8
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
          Region 9
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
         Region 10
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="pc">
           Region 11
        </Label>
        <Input
          id="NorthAmerica"
          name="NorthAmerica"
          defaultValue="10"
          className="text-lg text-gray-500 text-center"
        />
      </div>
    </div>
  )
}
