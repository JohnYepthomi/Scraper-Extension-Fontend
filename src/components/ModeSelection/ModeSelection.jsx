import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Stack from "react-bootstrap/Stack";
import LinkMode from './LinkMode';
import TextMode from './TextMode';
import TableMode from './TableMode';
import { useState } from "react";
import NoTask from "./NoTask";

export default function ModeSelection() {
  const [mode, setMode] = useState([]);

  function handleModeClick(e) {
    const modeText = e.target.innerText;
    if (modeText === 'Table')
      setMode(state => [...state, 'table']);
    else if (modeText === 'Link')
      setMode(state => [...state, 'link']);
    else if (modeText === 'Text')
      setMode(state => [...state, 'text']);
  }

  return (
    <>
      <Stack className="align-items-start">
        <div><small>Select Mode</small></div>
        <ButtonGroup size="sm">
          <Button variant="secondary" onClick={handleModeClick}>Table</Button>
          <Button variant="secondary" onClick={handleModeClick}>Link</Button>
          <Button variant="secondary" onClick={handleModeClick}>Text</Button>
        </ButtonGroup>
      </Stack>

      {(mode.length === 0) && <NoTask />}
      {(mode.includes('table')) && <TableMode />}
      {(mode.includes('link')) && <LinkMode />}
      {(mode.includes('text')) && <TextMode />}
    </>
  );
}
