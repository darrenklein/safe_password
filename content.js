// The variable passwords will be available here...

document.addEventListener('submit', (event) => {
	const formChildren = event.target.children
	let passwordValues = []

	for (let child of formChildren) {
		if (child.type === 'password') {
			passwordValues.push(child.value)
		}
	}

	if (passwordValues.length) {
		console.log(passwordValues)
	}
})
