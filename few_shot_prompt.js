function toCamelCase(str) {
  // Pattern: handle spaces, underscores, and hyphens based on examples
  return str
    .split(/[-_ ]+/)
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (index === 0) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

// Examples guided by prompt:
// first name -> firstName
// user_id -> userId
// SCREEN_NAME -> screenName
// mobile-number -> mobileNumber