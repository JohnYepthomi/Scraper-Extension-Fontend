import { Stack } from "react-bootstrap";
import FindTable from '../templates/FindTable/FindTable';
import ActiveTabView from "../templates/FindTable/ActiveTabView";

export default function Home() {

  return (
    <Stack gap={3} className="ms-4 me-4 mt-4 pb-4">
      <ActiveTabView />
      <FindTable />
    </Stack>
  );
}
