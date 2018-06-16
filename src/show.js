const fs = require('fs');
const jsdom = require("jsdom");
const {JSDOM } = jsdom;
const chalk = require('chalk');

let iconNodes = "<title>Vivid.js Preview</title><script src=\"vivid-icons.min.js\" async=\"true\"></script><style>body{font-family:sans-serif;width:1116px;text-align:center;margin:0 auto;}.cheatsheet-brick{text-align: left;width:300px;padding:5px;margin:15px;border-radius:5px;max-width:100%;background:#F2F2F2;overflow:auto;display:inline-block}.cheatsheet-brick label,.cheatsheet-brick svg{display:inline-block;vertical-align:middle}.cheatsheet-brick label{font-size:16px;color:#220A41;font-weight:500;margin-left:10px;margin-top:2px}</style>";
const objectData = JSON.parse(fs.readFileSync("./dist/icons.json").toString());
const staticNodePre = "<div class=\"cheatsheet-brick\">";
const staticNodeSuf = "</div>";

for (let itemName in objectData) {
    const objectProperty = itemName.replace(/([A-Z])/g, "-$1").toLowerCase();
    const labelNode = "<label>&lt;i data-vi=\""+ objectProperty + "\"&gt;&lt;/i&gt;</label>";
    iconNodes += staticNodePre + "<i data-vi=\"" + objectProperty + "\"></i>" + labelNode + staticNodeSuf;
}

const dom = new JSDOM(iconNodes);
if (!fs.existsSync("./dist")) {
    fs.mkdirSync("./dist");
}

fs.writeFile('./dist/preview.html', dom.window.document.querySelector("html").innerHTML, err => {
    if (err) throw err;
    console.log(chalk.whiteBright.bgBlack.bold(" Created [HTML] Preview File !! "));
});
