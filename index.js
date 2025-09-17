function sumNumbers(x, y) {
  return x + y;
}

// Export for tests
module.exports = { sumNumbers };

// Run if executed directly
if (require.main === module) {
  console.log("Hello from index.js!");
}
