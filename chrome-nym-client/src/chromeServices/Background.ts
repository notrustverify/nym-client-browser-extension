export {}

console.log("start")
function rewrite(){
    document.write("Hello World!");
}



chrome.action.onClicked.addListener(tab => {
    console.log("clicked")
    const {url} = tab;
    console.log(`Loading: ${url}`);

    if (tab.url?.startsWith("chrome://")) return undefined;
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: rewrite,
      }).then(() => console.log("script injected in all frames"))
      .catch((err) => console.warn("unexpected error", err));
  });



  chrome.action.setBadgeText({
    text: "ON"
  });
  chrome.action.setBadgeBackgroundColor({ color: 'green' }, () => {
    // callback
});
