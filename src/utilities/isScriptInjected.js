import chromeStorageGet from './chromeStorage';

export default async function isScriptInjected() {
    const tabData = await chromeStorageGet("lastActiveTabData");

    let response = await chrome.scripting.executeScript({
        target: { tabId: tabData.tabId },
        func: () => MAGIC_SCRAPE_SCRIPT_INJECTED ? true : false,
    });
    console.log({ response });
    return response[0].result ? true : false
}