export default async function chromeStorageGet(item) {
    var getValue = new Promise(function (resolve, reject) {
        chrome.storage.local.get(item, (data) => {
            resolve(data[item]);
        });
    });

    let gV = await getValue;
    return gV;
}