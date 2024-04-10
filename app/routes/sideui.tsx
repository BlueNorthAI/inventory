import { useCookies } from 'react-cookie';
import { Mail } from '~/components/mail'
import { accounts, mails } from "~/data/ui/sidedata"


export default function Sideui() {
  const [cookies] = useCookies();

  const layout = cookies["react-resizable-panels:layout"];
  const collapsed = cookies["react-resizable-panels:collapsed"];
console.log(`collapsed`,collapsed);
  // Parse layout and collapsed state if they exist
  // const defaultLayout = layout ? JSON.parse(layout) : undefined;
  let defaultLayout;
if (Array.isArray(layout)) {
  // Handle array format, assuming the first element is the key and the second is the value
  defaultLayout = {
    [layout[0]]: layout[1]
  };
} else {
  // Parse as JSON
  try {
    defaultLayout = layout ? JSON.parse(layout) : undefined;
  } catch (error) {
    console.error('Error parsing layout JSON:', error);
    // Handle the error (e.g., set defaultLayout to a default value)
  }
}
  const defaultCollapsed = collapsed ? JSON.parse(collapsed) : undefined;
  return (
    <div>
          <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
    </div>
  )
}
