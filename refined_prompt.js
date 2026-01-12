/**
 * Converts a string to camelCase with error handling and edge case management.
 * @param {string} str - The string to convert.
 * @returns {string} The camelCased string.
 * @throws {TypeError} If input is not a string.
 */
function toCamelCase(str) {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  const trimmed = str.trim();
  if (!trimmed) return '';

  const words = trimmed.split(/[^a-zA-Z0-9]+|(?<=[a-z])(?=[A-Z])/).filter(Boolean);

  return words
    .map((word, index) => {
      const lower = word.toLowerCase();
      return index === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

/**
 * Converts a string to dot.case format.
 * @param {string} str - The string to convert.
 * @returns {string} The dot.cased string.
 * @throws {TypeError} If input is not a string.
 */
function toDotCase(str) {
  if (typeof str !== 'string') throw new TypeError('Input must be a string');
  const trimmed = str.trim();
  if (!trimmed) return '';

  return trimmed
    .split(/[^a-zA-Z0-9]+|(?<=[a-z])(?=[A-Z])/)
    .filter(Boolean)
    .map(word => word.toLowerCase())
    .join('.');
}