# Emoji-CC
Emoji Creative Commons is a fork of the last fully free EmojiOne™ 2.x version.

### Installation

Install with npm.

```sh
npm install emoji-cc --save
```
[![NPM Stats](https://nodei.co/npm/emoji-cc.png?downloads=true)](https://npmjs.org/package/emoji-cc)

### Usage
Selective import and lazy loading are ideal, total size for all emoji is around 3Mb, making it less than ideal to include something like `emoji.css` in a client bundle.

#### HTML
Copy `./svg` into the `/public` directory.
```
<html>
  <head></head>
  <body>
    <img src="/public/svg/coffee.svg" />
  </body>
</html>
```

#### HTML + CSS, single
Copy `./css/coffee.css` into the `/public/css/coffee.css` directory of your project.
```
<html>
  <head>
    <link rel="stylesheet" href="/public/css/coffee.css" />
  </head>
  <body>
    <div class="emoji-coffee">
      Hello World
    </div>
  </body>
</html>
```

#### HTML + CSS, all
Copy `./emoji.css` into the `/public/css` directory of your project.
```
<html>
  <head>
    <link rel="stylesheet" href="/public/emoji.css" />
  </head>
  <body>
    <div class="emoji-coffee">
      Hello World
    </div>
  </body>
</html>
```


#### React, svg import
```
import React, { Component } from 'react';
import coffee from 'emoji-cc/svg/coffee.svg';

class example extends Component {
  render() {
    return (
      <main>
        {coffee}
      </main>
    )
  }
}
```
#### React, inline style
```
import React, { Component } from 'react';
import coffee from 'emoji-cc/style/coffee.js';

class example extends Component {
  render() {
    return (
      <main>
        <div style={coffee} />
        
        <div style={{ border: '1px solid black', ...coffee}} />
      <main>
    )
  }
}
```

## Why only SVG?
All major browsers and devices support SVG. Scalable vector graphics (SVG) is a description for a path and not the rendered path itself, this means scaling up or down to your devices viewport can happen without loss of quality or fidelity. 

SVG is only format supported by this project.

## History
> EmojiTwo is a fork of the last fully free EmojiOne™ 2.x version.
> The non-free EmojiOne 3.0 assets have been completely deleted.
> The EmojiOne project made changes to 2.2.7’s licensing. Previously EmojiOne did not require attribution for non-commercial 
> and personal use 
> (for proof see [this snapshot of their website](https://web-beta.archive.org/web/20170327003706/http://emojione.com/licensing/#attribution)). 
> Considering that the EmojiOne project ony changed the ReadMe file in that branch to mandate attribution in any case, 
> EmojiTwo forked a state before those changes for greater flexibility.
> Whether or not EmojiTwo will see continued development, is not clear. At the very least it serves as backup. Hopefully Free > Software organsizations that adopted EmojiOne 2.x, such as Mozilla and KDE, will continue development of a fully free emoji > set in some form.

## License

#### EmojiOne Artwork

*  Applies to all PNG and SVG files as well as any adaptations made.
*  License: Creative Commons Attribution 4.0 International
*  Human Readable License: http://creativecommons.org/licenses/by/4.0/
*  Complete Legal Terms: http://creativecommons.org/licenses/by/4.0/legalcode


#### EmojiOne Non-Artwork

*  Applies to the Javascript, JSON, PHP, CSS, HTML files, and everything else not covered under the artwork license above.
*  License: MIT
*  Complete Legal Terms: http://opensource.org/licenses/MIT
