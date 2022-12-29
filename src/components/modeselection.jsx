import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Stack from "react-bootstrap/Stack";

export default function ModeSelection() {
  return (
    <Stack>
      <div>Select a Mode</div>
      <ButtonGroup>
        <Button variant="secondary">Table</Button>
        <Button variant="secondary">Link</Button>
        <Button variant="secondary">Text</Button>
      </ButtonGroup>
    </Stack>
  );
}
