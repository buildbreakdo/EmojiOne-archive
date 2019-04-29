const svgToMiniDataURI = require('mini-svg-data-uri');
const child_process = require('child_process');
const fs = require('fs');

const emojis = require('./emoji.json');

const emojisMap = {};
const allCss = [];
Object.keys(emojis).forEach(key => {
  const cssSelector = key.replace(/([a-z][A-Z0-9])/g, function (g) { return g[0] + '-' + g[1].toLowerCase() })
  const emojiSvg = fs.readFileSync(`./svg/${key}.svg`).toString();

  const css = [
    `.emoji-${cssSelector} {`,
    `  background: center / contain no-repeat url("${svgToMiniDataURI(emojiSvg)}");`,
    `}`
  ].join('\n');

  fs.writeFileSync(`./css/${key}.css`, css);

  allCss.push(css);
});

fs.writeFileSync(`./emoji.css`, allCss.join('\n'));
