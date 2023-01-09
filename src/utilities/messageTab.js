import chromeStorageGet from './chromeStorage';

export default async function messageTab(message) {
    const tabData = await chromeStorageGet("lastActiveTabData");
    await chrome.tabs.sendMessage(tabData.tabId, { message });
}