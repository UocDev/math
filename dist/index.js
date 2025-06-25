const [major] = process.versions.node.split('.').map(Number);

if (major < 18 || major >= 26) {
  console.error(`Error RPM Node.js version: ${process.version}`);
  console.error(`Required Node.js 18.x or higher. Pleaseee download new LTS or currently version Node :3`);
  process.exit(1);
}
const arithmetic = require('../src/arithmetic');

module.exports = {
arithmetic
};
