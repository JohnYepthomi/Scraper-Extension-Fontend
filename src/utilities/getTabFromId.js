export default async function getTabFromId(tabId) {
    const allTabs = await chrome.tabs.query({});
    return allTabs.filter((tab) => tab.id == tabId)[0];
}