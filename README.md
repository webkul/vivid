![Vivid.JS Logo](https://webkul.github.io/vivid/assets/res/vivid-logo.svg)
### Check [Beautiful Doc](https://webkul.github.io/vivid/docs.html) on Website.

---

# Introduction
Vivid.JS is an SVG Icons library which can be used to add highly customizable vibrant icons to the DOM without any dev dependencies.

Vivid.JS is easy to adapt and can bring SVG icons to life using html5 data attributes on the go. Icons can also be individually customized in terms of colors and size using html5 data attributes which gives more power to Vivid.JS library.

Vivid.JS SVG Icons ca be download and customized as per needs in different designing softwares like Photoshop and Sketch as well.

Download Vivid.JS Icons for [Sketch](https://bit.ly/vivid-sketch)

Download Vivid.JS Icons for [Photoshop](https://bit.ly/vivid-ps)

# Getting Started
To get started with Vivid.JS, you just need to include `vivid-icons.min.js` to your project.

# Installation
Compiled vivid-icons.min.js JavaScript minified file can be directly linked from [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/#/) CDN or Vivid.JS can be included within your workflow using your favorite package managers as well.

## Link from jsDelivr or UNPKG CDN
You can include Vivid Icons JavaScript file in the header section of your document as shown below -

```html
<script src="https://cdn.jsdelivr.net/npm/vivid-icons" type="text/javascript"></script>
```

or

```html
<script src="https://unpkg.com/vivid-icons" type="text/javascript"></script>
```

## Package Managers
You can use either npm, yarn or bower to get the Vivid.JS package

Copy and Paste the command below in your terminal to get package with npm -
```cli
npm install vivid-icons
```
Copy and Paste the command below in your terminal to get package with yarn -
```cli
yarn add vivid-icons
```
Copy and Paste the command below in your terminal to get package with bower -
```cli
bower install vivid-icons
```
# Usage
Including icons with Vivid.JS is very easy and quick to use.

## Using an Icon
An SVG Icon can be easily included using the syntax `<i data-vi="icon-name"></i>` , where `icon-name` is replaced by the unique name of the respective icon.

### Example Code
```html
<i data-vi="doc"></i>
```

## Customizing Icon Size
To customize the size of the respective icon, Add `data-vi-size="number"` data attribute to `i` element to customize size of the icon.

### Example Code
```html
<i data-vi="doc" data-vi-size="96"></i>
```

## Customizing Icon Colors
Each Vivid Icon has upto three colors which are `primary`, `accent` and `prop`. Each color can be customized respectively using data attributes.

Add `data-vi-primary="#hexcode"` data attribute to customize the primary color of the icon.

Add `data-vi-accent="#hexcode"` data attribute to customize the accent color of the icon.

Add `data-vi-prop="#hexcode"` data attribute to customize the prop color of the icon.

### Example Code
```html
<i data-vi="doc" data-vi-primary="#2B13C1" data-vi-accent="#00ECB1" data-vi-prop="#CEFAFF"></i>
```

# Icon Customization
Oh! Yes, You can customize the default size and colors of the `Vivid.JS` SVG Icons Library.

### Install Node.js
First of all you need to [install the latest version of Node.js](https://nodejs.org/en/) (if you don't have it pre-installed), once you are over with Node.js installation, open up terminal and verify everything has setup correctly by running `npm -v` and it should return with something like `5.x.x`

### Create your Project
* Open terminal and create your project directory with `mkdir project-name` command.
* Go to your project directory using `cd project-name` command.
* Initialize your project by `npm init` command and enter the necessary details.

### Install Vivid.JS Package
Install Vivid.JS SVG Icons Package with npm package manager using the command below -
```cli
npm install vivid-icons
```

Once, the vivid-icons is installed as a node module, go to node_modules/vivid-icons directory using `cd node_modules/vivid-icons` command and install **vivid-icons dependencies** with `npm install`.

### Customize Icons
Go to `src` directory of the installed package and open `config.js` file.

#### `config.js` file looks like
```javascript
export let iconConfig = { 
    size: "48", 
    primaryColor: "#FF6E6E", 
    accentColor: "#0C0058", 
    propColor: "#FFFFFF" 
 } 
```
Update the respective property values which needs to be changed.

### Compile Vivid.JS Icons
Once you are done with updates in `config.js` head back to the terminal and run the following command -
```cli
npm run build
```

### Voila! You're done
Once the compilation process is over, your browser will fire up to show the compiled Vivid SVG Icons in your browser from the `./dist/preview.html` file.

**If you are using Windows environment replace the `"open-html": "open ./dist/preview.html"` with `"open-html": "show ./dist/preview.html"` in `package.json` file.**

# Adding Icons
If you wish to create your very own Vivid.JS with your custom icons, Follow the steps below -

Once you have [installed Vivid.JS](#install-vividjs-package), `add/replace/remove` the icons from `./icons` directory

Make sure the SVG Icons which has been added must have `vi-primary` and `vi-accent` class to the respective [SVG Elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element), so that the colors can be customized later from `src/config.js`.

### Example Code
```html
<svg id="chat" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <defs>
        <style>
        .vi-primary {
            fill: #ffb400;
        }

        .vi-accent {
            fill: #070c2b;
        }
        </style>
    </defs>
    <path class="vi-primary" d="M24,39.765A18.556,18.556,0,0,1,13.924,37.1L7,44V23.882l0.012,0.006C7.011,23.791,7,23.7,7,23.6,7,14.369,13.247,8,24,8s17,6.652,17,15.882S34.753,39.765,24,39.765Z"/>   
    <path class="vi-accent" d="M31.994,20.99a3,3,0,1,1-3,3A3,3,0,0,1,31.994,20.99ZM24,21a3,3,0,1,1-3,3A3,3,0,0,1,24,21Zm-8,0a3,3,0,1,1-3,3A3,3,0,0,1,16,21Z"/>   
</svg>
```
Go to the root directory of `vivid-icons` and execute `npm run build` command from terminal.

# Credits
© Copyright 2018 [Webkul Software](https://webkul.com), All rights reserved.