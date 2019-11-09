document.addEventListener('submit', (event) => {
	const formChildren = event.target.children
	let passwordValues = []

	for (let child of formChildren) {
		if (child.type === 'password') {
			passwordValues.push(child.value)
		}
	}

	if (passwordValues.length) {
		for (let i = 0; i < passwordValues.length; i++) {
			if (binarySearch(passwords, passwordValues[i])) {
				console.log('password found')
				break
			}
		}
	}
})
