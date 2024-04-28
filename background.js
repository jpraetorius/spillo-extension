function sendToSpillo() {
  // get the active tab
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    const activeTab = tabs[0];

    // construct the Spillo URL out of the original Tab
    const spilloUrl = `spillo:///bookmark?url=
    ${encodeURIComponent(activeTab.url)}
    &title=
    ${encodeURIComponent(activeTab.title)}`;

    // add a silent link to the document that we click
    // to trigger the Spillo URL Handler
    let link = document.createElement("a");
    link.href = spilloUrl;
    document.body.append(link);
    link.click();
    // and clean up after ourselves
    link.remove();
  });
}

browser.browserAction.onClicked.addListener(sendToSpillo);
