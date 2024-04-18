/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CDrxoa1HDkO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Form } from "@remix-run/react";
// import { Console } from "console";

export default function ConstraintInput({ constraint }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getMonthName(monthNumber) {
    return monthNames[monthNumber - 1];
  }
  return (
    <div className="grid w-full  gap-4">
      <div className="grid grid-cols-2 items-center gap-1">
        <Label className="text-lg" htmlFor="labour">
          Labour hours
          <p className="text-gray-400 text-sm">per employee per unit</p>
        </Label>
        <Input
          id="labour"
          name="labor_hrs_pu"
          defaultValue={constraint["labor_hrs_pu"]}
          className="text-lg text-gray-500 text-center"
        />
      </div>
    </div>
  );
}
