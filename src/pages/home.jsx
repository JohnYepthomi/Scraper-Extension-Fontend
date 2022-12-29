import { Container, Stack } from "react-bootstrap";
import ModeSelection from '../components/ModeSelection/ModeSelection';

export default function Home() {

  return (
    <Stack gap={3} className="ms-4 me-4 mt-4 pb-4">
      <ModeSelection />
    </Stack>
  );
}
