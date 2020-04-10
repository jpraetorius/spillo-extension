function bookmarkPage() {
  browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
    const activeTab = tabs[0];
    const originalUrl = activeTab.url;

    let spilloUrl = "spillo:///bookmark?";
    spilloUrl += "url" + "=" + encodeURIComponent(activeTab.url);
    spilloUrl += "&";
    spilloUrl += "title" + "=" + encodeURIComponent(activeTab.title);

    browser.tabs
      .duplicate(activeTab.id)
      .then(duplicatedTab => {
        browser.tabs
          .update(duplicatedTab.id, { loadReplace: true, url: spilloUrl })
          .then(tab => 
            window.setTimeout(_ => browser.tabs.remove(tab.id), 200)
          )
      });
  });
}

browser.browserAction.onClicked.addListener(bookmarkPage);
