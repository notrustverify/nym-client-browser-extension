export {}

console.log("dfgdfjfgj")
alert("dsfgjghjf")
document.write("Hello World!");


chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  console.log(details.url.split('.').pop().split('/')[0])
  if(details.url.split('.').pop().split('/')[0] === "nym") {
      /*
      chrome.scripting.executeScript({
          target: {tabId: details.tabId},
          func: rewrite,
        }).then(() => console.log("script injected in all frames"))
        .catch((err) => console.warn("unexpected error", err));
  })*/
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.webNavigation.getFrame({tabId: tabs[0].id, frameId: 0}, frame => {
        if (frame.errorOccurred) {
          document.body.textContent = 'ERROR';
        }
      });
    });
}});