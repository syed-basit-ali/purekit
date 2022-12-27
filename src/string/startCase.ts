/**
 *
 * @param str
 * @returns
 */
const startCase = (str: string = ''): string => {
	let out = str
		.replace(/[-._\s]+/g, ' ')
		.replace(/[A-Z0-9]/, ' $&')
		.replace(/[-]{2,}/, '')
		.trim();

	if (out[0] === '-') out = out.slice(1);
	if (out[out.length - 1] === '-') out = out.slice(0, -1);

	return out.split(' ').map(capitalize).join(' ');
};

const capitalize = (str: string): string =>
	str.charAt(0).toUpperCase() + str.slice(1);

export default startCase;
