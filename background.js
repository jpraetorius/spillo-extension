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
          .update({ loadReplace: true, url: spilloUrl })
          .then(browser.tabs.remove(duplicatedTab.id))
      })
  });
}

browser.browserAction.onClicked.addListener(bookmarkPage);
