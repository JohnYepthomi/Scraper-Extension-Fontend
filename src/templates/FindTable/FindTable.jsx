import { Button, Stack } from 'react-bootstrap';
import Table from '../../components/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Children } from "react";
import { useState } from 'react';
import NoTable from './NoTable';

function MultiTabs({ children, onSelect }) {
    const arrayChildren = Children.toArray(children);

    return (
        <Tabs
            defaultActiveKey="table1"
            id="uncontrolled-tab-example"
            className=""
            onSelect={onSelect}
            // justify
            transition={false}
        >

            {Children.map(arrayChildren, (child, index) => {
                const count = index + 1;
                return <Tab key={count} eventKey={"table" + count} title={"Table " + count}>
                    {child}
                </Tab>
            })}
        </Tabs>
    );
}

const MAX_TABLES = 3;

export default function FindTable() {
    const [tableCount, setTableCount] = useState(1);

    function handleAddTable() {
        setTableCount(state => state < MAX_TABLES ? state + 1 : state);
    }

    function handleTabSelect(eventKey, e) {
        console.log('tab selected, key', eventKey, ', event: ', e)
    }

    return (
        <div className=" border-1 border-secondary p-2 rounded d-flex flex-column gap-3">
            <Stack direction="horizontal" className="justify-content-between">
                <h6 className="text-light">Table Preview</h6>
                <Stack direction="horizontal" gap="3">
                    {tableCount < 3 && <Button variant="info" size="sm" onClick={handleAddTable} disabled={tableCount === 3}>
                        <Stack direction="horizontal" gap="2" className=''>
                            <div>Add Table</div>
                            <div className='m-0 p-0 mb-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-spreadsheet-fill" viewBox="0 0 16 16">
                                    <path d="M6 12v-2h3v2H6z" />
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3V9z" />
                                </svg>
                            </div>
                        </Stack>
                    </Button>}
                </Stack>
            </Stack>

            {
                (tableCount > 0) ?
                    <MultiTabs onSelect={handleTabSelect}>
                        {
                            Array.from({ length: tableCount }).map((_c, index) => {
                                return (
                                    <div key={index}>
                                        <Table />
                                        <button
                                            id="start-injection"
                                            type="button"
                                            className="btn btn-success align-self-center"
                                        >
                                            Find Table
                                        </button>
                                    </div>
                                );
                            })
                        }
                    </MultiTabs> : <NoTable />
            }

        </div>
    );
}
