const fs = require('fs');

const emojis = require('./emoji.json');

const emojisMap = {};
Object.keys(emojis).forEach(key => {
  const emojiSvg = fs.readFileSync(`./svg/${key}.svg`).toString();
  emojisMap[key] = emojiSvg;
});

fs.writeFileSync(
  './index.js',
`const emoji = ${JSON.stringify(emojisMap, null, '  ')};
module.exports = emoji;`
);
