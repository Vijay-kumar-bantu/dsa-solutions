/**
 * Capitalizes the first character of the given string and converts the rest to lowercase.
 *
 * @param str - The input string to be capitalized.
 * @returns The input string with the first character in uppercase and the rest in lowercase.
 *          Returns an empty string if the input is falsy.
 */
const capitalizeString = (str: string): string => {
	if (!str) return "";
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
export default capitalizeString;
