const fs = require('fs');
const path = require('path');
let svgObject = new Object();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const chalk = require('chalk');

fs.readdir("./icons", function (err, files) {
    extract(files);

    if (!fs.existsSync("./dist")) {
        fs.mkdirSync("./dist");
    }
    fs.writeFile('./dist/icons.json', JSON.stringify(svgObject), (err) => {
        if (err) throw err;
        console.log(chalk.whiteBright.bgBlack.bold("Created [JSON] for SVG Icons !! "));
    });
});

function extract(data) {
    data.forEach(function (item) {
        let extension = path.extname(item);
        if (extension === ".svg") {
            let fileName = item.replace(/-([a-z])/g, function (i) {
                return i[1].toUpperCase();
            });
            let fileData = fs.readFileSync("./icons/" + item).toString();
            let dom = new JSDOM(fileData);
            let svgDefs = dom.window.document.querySelector("defs");
            if(svgDefs != undefined){
                dom.window.document.querySelector("svg").removeChild(svgDefs);
            }
            let svgStyle= dom.window.document.querySelector("style");
            if(svgStyle != undefined){
                dom.window.document.querySelector("svg").removeChild(svgStyle);
            }
            let svgTitle = dom.window.document.querySelector("title");
            if(svgTitle != undefined){
                dom.window.document.querySelector("svg").removeChild(svgTitle);
            }
            let fileDataCore = dom.window.document.querySelector("svg").innerHTML.replace(/\n/g, "");
            svgObject[fileName.slice(0, -4)] = fileDataCore;
        }
    });
}