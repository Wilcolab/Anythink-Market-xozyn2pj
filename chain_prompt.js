/**
 * Step 1 & 2: Define function with Guard Clauses and Transformation Pipeline
 * Step 3: Convert to lowercase and join with hyphens
 */
export function toKebabCase(str) {
  // Step 1: Guard Clauses
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  
  const trimmed = str.trim();
  if (trimmed === '') {
    return '';
  }

  // Step 2: Segmentation Logic
  // Handles spaces, underscores, and camelCase transitions
  const segments = trimmed
    .split(/[^a-zA-Z0-9]+|(?<=[a-z])(?=[A-Z])/)
    .filter(segment => segment.length > 0);

  // Step 3: Normalization and Joining
  return segments
    .map(word => word.toLowerCase())
    .join('-');
}

// Step 4: Test Cases
console.log(toKebabCase("hello world"));       // "hello-world"
console.log(toKebabCase("camelCaseInput"));    // "camel-case-input"
console.log(toKebabCase("multiple__underscores")); // "multiple-underscores"