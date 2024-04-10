import { DarkMode, Gradient, LightMode } from '../blue/Icon'


export function ImpactIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 12 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 16 7)"
        />
      </defs>
      <LightMode>
        <circle cx={12} cy={12} r={15} fill={`url(#${id}-gradient)`} />
       
        {/* Add the text element to display "7%" */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          fontSize="12"
        >
          7%
        </text>
      </LightMode>
      <DarkMode>
        <circle cx={15} cy={12} r={15} fill={`url(#${id}-gradient)`} />
     
        <text
          x="50%"
          y="50%"
          stroke={`url(#${id}-gradient-dark)`}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          fontSize="12"
        >
          7%
        </text>
      </DarkMode>
    </>
  )
}
// ;<svg
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke-width="1.5"
//   stroke="currentColor"
//   class="h-6 w-6"
// >
//   <path
//     stroke-linecap="round"
//     stroke-linejoin="round"
//     d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
//   />
// </svg>

