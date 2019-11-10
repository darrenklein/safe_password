document.addEventListener('submit', (event) => {
	const inputs = document.getElementsByTagName('input')
	let passwordValues = []

	for(var i = 0; i < inputs.length; i++) {
	    if(inputs[i].type.toLowerCase() == 'password') {
	        passwordValues.push(inputs[i].value);
	    }
	}

	if (passwordValues.length) {
		for (let i = 0; i < passwordValues.length; i++) {
			if (binarySearch(passwords, passwordValues[i])) {
				chrome.runtime.sendMessage({
				  from: 'content',
				  subject: 'showNotification',
				});

				break
			}
		}
	}
})
