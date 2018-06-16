const fs = require('fs');
const path = require('path');
const svgObject = {};
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const chalk = require('chalk');

fs.readdir("./icons", (err, files) => {
    extract(files);

    if (!fs.existsSync("./dist")) {
        fs.mkdirSync("./dist");
    }
    fs.writeFile('./dist/icons.json', JSON.stringify(svgObject), err => {
        if (err) throw err;
        console.log(chalk.whiteBright.bgBlack.bold("Created [JSON] for SVG Icons !! "));
    });
});

function extract(data) {
    data.forEach(item => {
        const extension = path.extname(item);
        if (extension === ".svg") {
            const fileName = item.replace(/-([a-z])/g, i => i[1].toUpperCase());
            const fileData = fs.readFileSync("./icons/" + item).toString();
            const dom = new JSDOM(fileData);
            const svgDefs = dom.window.document.querySelector("defs");
            dom.window.document.querySelector("svg").removeChild(svgDefs);
            const fileDataCore = dom.window.document.querySelector("svg").innerHTML.replace(/\n/g, "");
            svgObject[fileName.slice(0, -4)] = fileDataCore;
        }
    });
}
