chrome.runtime.onMessage.addListener((request) => {
	if (request.from === 'content' && request.subject === 'showNotification') {
		const notifcationOptions = {
			type: 'basic',
			iconUrl: 'icon.png',
			title: 'Safe Password',
			message: 'That is a common password.\nConsider changing it.'
		}

		chrome.notifications.create(notifcationOptions)
	}
})
