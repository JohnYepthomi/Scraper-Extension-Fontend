import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Stack from "react-bootstrap/Stack";
// import { useState } from "react";

export default function Menu() {
  // const [mode, setMode] = useState([]);

  function handleMenuClick(e) {
    // const modeText = e.target.innerText;
    // if (modeText === 'Table')
    //   setMode(state => [...state, 'table']);
    // else if (modeText === 'Link')
    //   setMode(state => [...state, 'link']);
    // else if (modeText === 'Text')
    //   setMode(state => [...state, 'text']);
  }

  return (
    <>
      <Stack className="align-items-start">
        <ButtonGroup size="sm">
          <Button variant="secondary" onClick={handleMenuClick}>Table</Button>
          <Button variant="secondary" onClick={handleMenuClick}>Link</Button>
          <Button variant="secondary" onClick={handleMenuClick}>Text</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
}
