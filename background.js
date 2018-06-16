function bookmarkPage() {
	browser.tabs.query({currentWindow: true, active: true})
		.then(tabs => {
			const activeTab = tabs[0];

			let url = 'spillo:///bookmark?';
		    url += 'url' + '=' + encodeURIComponent(activeTab.url);
		    url += '&';
		    url += 'title' + '=' + encodeURIComponent(activeTab.title);
		    browser.tabs.create({url})
		    	.then(newTab => {
		    		const tabId = newTab.id;
		    		window.setTimeout(browser.tabs.remove(tabId), 100);
		    	});
		});
}

browser.browserAction.onClicked.addListener(bookmarkPage);