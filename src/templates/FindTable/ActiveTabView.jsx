import { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';


function NoActiveTab() {
    return <div>No Active Tab Found</div>
}

async function asyncStorageGet(item) {
    var getValue = new Promise(function (resolve, reject) {
        chrome.storage.local.get(item, (data) => {
            resolve(data[item]);
        });
    });

    let gV = await getValue;
    return gV;
}

export default function ActiveTabView() {
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        const asyncFn = async () => {
            const activeTabDetails = await asyncStorageGet('lastActiveTabData');
            console.log({ activeTabDetails });
            setActiveTab(state => state = activeTabDetails);
        }
        asyncFn();
    }, [])

    return (
        <Stack className=" mt-5 align-items-center align-self-center" gap="1">
            <h6 className="m-0 p-0">Active Tab</h6>
            {
                activeTab &&
                <Stack direction="horizontal" gap='2' className="max-w-50 rounded p-1 border-secondary border border-1 d-flex justify-content-center align-items-center">
                    <img src={ activeTab.icon } width="15px" height="15px" alt="fav icon" />
                    <p className="p-0 m-0"><small>{ activeTab.title }</small></p>
                </Stack>
            }
        </Stack>
    );
}