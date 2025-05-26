export function wrapNumber(number: number) {
	if (number > 1000 && number < 1000000) {
		const str = String(number)
		console.log('l', str.slice(str.length - 3, str.length - 2))
		return (
			str.slice(0, str.length - 3) +
			',' +
			str.slice(str.length - 3, str.length - 2) +
			'k'
		)
	}
	if (number > 1000000) {
		const str = String(number)
		return (
			str.slice(0, str.length - 6) +
			',' +
			str.slice(str.length - 6, str.length - 5) +
			'b'
		)
	}

	return String(number)
}
