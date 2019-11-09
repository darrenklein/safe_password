chrome.runtime.onMessage.addListener(() => {
	chrome.notifications.create({type: 'basic', iconUrl: 'icon.png', title: 'Safe Password', message: 'bad!'})
})
