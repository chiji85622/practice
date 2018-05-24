export default function(size) {
	const bit = size.toString().length;
	const multiple = Math.pow(10, bit);
	let res = [];
	for (let i = 0; i++ < size; ) {
		res.push(Math.floor(Math.random() * multiple));
	}
	return res;
}
