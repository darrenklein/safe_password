const doBinarySearch = (arr, target) => {
	const arrCopy = [ ...arr ]
	let left,
		right

	if (arrCopy.length === 0) {
		return false
	} else if (arrCopy.length === 1) {
		left = []
		right = [ arrCopy[0] ]
	} else {
		const boundary = arrCopy.length % 2 === 0 ? arrCopy.length / 2 : (arrCopy.length - 1) / 2

		left = arrCopy.slice(0, boundary)
		right = arrCopy.slice(boundary)	
	}

	if (target === right[0]) {
		return true
	} else if (right.length === 0) {
		return false
	} else if (target > right[0]) {
		return doBinarySearch(right.slice(1), target)
	} else {
		return doBinarySearch(left, target)
	}
}

const binarySearch = (arr, target) => {
	return doBinarySearch(arr, target)
}
