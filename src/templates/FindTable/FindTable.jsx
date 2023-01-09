import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../../components/Table";
import NoTable from "./NoTable";
import { Children, useState, useEffect } from "react";
import { Badge, Button, Stack } from "react-bootstrap";
import injectScriptToActiveWindowTab from "../../utilities/injectScriptToActiveWindowTab";
import isScriptInjected from '../../utilities/isScriptInjected';
import messageTab from '../../utilities/messageTab';
import FindActions from "./FIndActions";

function MultiTabs({ children, onSelect }) {
    const arrayChildren = Children.toArray(children);

    return (
        <Tabs
            defaultActiveKey="table1"
            id="uncontrolled-tab-example"
            className=""
            onSelect={ onSelect }
            // justify
            transition={ false }
        >
            { Children.map(arrayChildren, (child, index) => {
                const count = index + 1;
                return (
                    <Tab key={ count } eventKey={ "table" + count } title={ "Table " + count }>
                        { child }
                    </Tab>
                );
            }) }
        </Tabs>
    );
}

const MAX_TABLES = 3;

export default function FindTable() {
    const [tableCount, setTableCount] = useState(1);
    const [tableFound, setTableFound] = useState(false);
    const [columnData, setColumnData] = useState({});
    const [searching, setSearching] = useState(false);

    function handleAddTable() {
        setTableCount((state) => (state < MAX_TABLES ? state + 1 : state));
    }

    function handleTabSelect(eventKey, e) {
        console.log("tab selected, key", eventKey, ", event: ", e);
    }

    async function handleFindTable() {
        const isInjected = await isScriptInjected();
        if (!isInjected) {
            console.log('injecting script.');
            await injectScriptToActiveWindowTab();
        }

        setSearching(state => state = true);
        setTableFound(state => state = false); //reset state
        await messageTab('search-table');
    }

    function filterUnavailableRows(tableData) {
        const copy = JSON.parse(JSON.stringify(tableData));
        const colDataArr = Object.values(JSON.parse(JSON.stringify(tableData)));
        const numCols = colDataArr?.length;
        const numRows = colDataArr[0]?.length;

        if (numRows === 0 || !numCols || !numRows) return tableData;

        let rowRemovalIndexes = [];

        for (let i = 0; i < numRows; i++) {
            const temp = [];

            for (let j = 0; j < numCols; j++) {
                temp.push(colDataArr[j][i]);
            }

            if (temp.every(e => !e)) {
                rowRemovalIndexes.push(i);
            }
        }

        for (let k = 0; k < numCols; k++) {
            for (let m = rowRemovalIndexes.length - 1; m >= 0; m--)
                colDataArr[k].splice(rowRemovalIndexes[m], 1);
        }

        let result = {};
        colDataArr.forEach((datas, colIdx) => {
            result[Object.keys(copy)[colIdx]] = datas;
        })

        return result;
    }

    function handleFilterTable() {
        setColumnData(state => state = filterUnavailableRows(state));
    }

    useEffect(() => {
        const ServiceWorkerListener = async function () {
            await chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
                console.log('message received on react popup tab: ', request, ', by sender: ', sender);
                if (request.status === 'table-found') {
                    setTableFound(state => state = true);
                    setSearching(state => state = false);
                }

                if (request.status === 'column-found') {
                    if (request.payload?.relXPath && request.payload?.columnData && !request.payload.columnData?.every(d => !d)) {
                        setColumnData(state => ({ ...state, [request.payload.relXPath]: request.payload.columnData }));
                    }
                }
            });
        }

        ServiceWorkerListener();
    }, []);

    return (
        <div className=" border-1 border-secondary p-2 rounded d-flex flex-column gap-3">
            <Stack direction="horizontal" className="justify-content-between">
                <h6 className="text-light">Table Preview</h6>
                <Stack direction="horizontal" gap="3">
                    { tableCount < 3 && (
                        <Button
                            variant="info"
                            size="sm"
                            onClick={ handleAddTable }
                            disabled={ tableCount === 3 }
                        >
                            <Stack direction="horizontal" gap="2" className="">
                                <div>Add Table</div>
                                <div className="m-0 p-0 mb-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-file-earmark-spreadsheet-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M6 12v-2h3v2H6z" />
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3V9z" />
                                    </svg>
                                </div>
                            </Stack>
                        </Button>
                    ) }
                </Stack>
            </Stack>

            { tableCount > 0 ? (
                <MultiTabs onSelect={ handleTabSelect }>
                    { Object.keys(columnData).length > 0 ?
                        Array.from({ length: tableCount }).map((_c, index) => {
                            return (
                                <div key={ index }>
                                    <Table data={ columnData } setColumnData={ setColumnData } />
                                    <FindActions searching={ searching } hasData={ Object.keys(columnData).length > 0 } handleFindTable={ handleFindTable } handleFilterTable={ handleFilterTable } />
                                </div>
                            );
                        })

                        : <FindActions searching={ searching } hasData={ Object.keys(columnData).length > 0 } handleFindTable={ handleFindTable } handleFilterTable={ handleFilterTable } />
                    }
                </MultiTabs>
            ) : (
                <NoTable message="Add a new table to begin" />
            )
            }
        </div >
    );
}
