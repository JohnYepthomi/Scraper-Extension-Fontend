import chromeStorageGet from "./chromeStorage";
// import getTabFromId from './getTabFromId';

export default async function injectScriptToActiveWindowTab() {
  const tabData = await chromeStorageGet("lastActiveTabData");
  // const currentActiveTab = await getTabFromId(tabData.tabId);
  // console.log({ currentActiveTab });
  await chrome.scripting.executeScript({
    target: { tabId: tabData.tabId },
    files: [
      "./Utils/getTextNodes.js",
      "./contentscripts/FindRowAndCol.js",
      "./contentscripts/main.js",
    ],
  });
}
