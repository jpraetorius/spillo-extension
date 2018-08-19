function bookmarkPage() {
  browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
    const activeTab = tabs[0];
    const originalUrl = activeTab.url;

    let spilloUrl = "spillo:///bookmark?";
    spilloUrl += "url" + "=" + encodeURIComponent(activeTab.url);
    spilloUrl += "&";
    spilloUrl += "title" + "=" + encodeURIComponent(activeTab.title);

    browser.tabs
      .update({ loadReplace: true, url: spilloUrl })
      .then(updatedTab => {
        window.setTimeout(
          browser.tabs.update({ loadReplace: true, url: originalUrl }),
          100
        );
      });
  });
}

browser.browserAction.onClicked.addListener(bookmarkPage);
