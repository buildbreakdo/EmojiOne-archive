const svgToMiniDataURI = require('mini-svg-data-uri');
const child_process = require('child_process');
const fs = require('fs');

const emojis = require('./emoji.json');

const emojisMap = {};
const allCss = [];
Object.keys(emojis).forEach(key => {
  const cssSelector = key.replace(/([a-z][A-Z0-9])/g, function (g) { return g[0] + '-' + g[1].toLowerCase() })
  const emojiSvg = fs.readFileSync(`./svg/${key}.svg`).toString();

  const cssDeclarationBody = `{ "background": "center / contain no-repeat url(\\"${svgToMiniDataURI(emojiSvg)}\\")" }`;
  const styleJs = `module.exports = ${cssDeclarationBody}`;

  fs.writeFileSync(`./style/${key}.js`, styleJs);

  allCss.push(`"${key}": ${cssDeclarationBody}`);
});

fs.writeFileSync(`./emoji.style.js`, `module.export = { ${allCss.join('\n')} }`);
