import { iconObject } from "./parse";
import { attrConstructor } from './attr';
export let vividNode;

// Replace and Inject SVG Node 
let watchInjection = function () {
    vividNode = document.querySelectorAll("[data-vi]");
    vividNode.forEach(function (item, key) {
        let tempIconNode = vividNode[key];
        let tempIconNodeData = tempIconNode.dataset.vi;
        let overNode = iconObject[tempIconNodeData];

        if (tempIconNodeData.indexOf("-") !== -1) {
            tempIconNodeData = tempIconNodeData.replace(/-([a-z])/g, function (i) {
                return i[1].toUpperCase();
            });
            overNode = iconObject[tempIconNodeData];
        }

        if (overNode != undefined) {
            if (tempIconNode.dataset.viSize !== undefined && tempIconNode.dataset.viSize !== null) {
                attrConstructor(overNode, {
                    "width": tempIconNode.dataset.viSize,
                    "height": tempIconNode.dataset.viSize
                });
            }

            if (tempIconNode.dataset.viPrimary !== undefined && tempIconNode.dataset.viPrimary !== null) {
                let tempPrimaryNode = overNode.querySelectorAll(".vi-primary");
                for (let i = 0; i < tempPrimaryNode.length; i++) {
                    tempPrimaryNode[i].style.fill = tempIconNode.dataset.viPrimary;
                }
            }

            if (tempIconNode.dataset.viAccent !== undefined && tempIconNode.dataset.viAccent !== null) {
                let tempAccentNode = overNode.querySelectorAll(".vi-accent");
                for (let i = 0; i < tempAccentNode.length; i++) {
                    tempAccentNode[i].style.fill = tempIconNode.dataset.viAccent;
                }
            }

            if (tempIconNode.dataset.viProp !== undefined && tempIconNode.dataset.viProp !== null) {
                let tempPropNode = overNode.querySelectorAll(".vi-prop");
                for (let i = 0; i < tempPropNode.length; i++) {
                    tempPropNode[i].style.fill = tempIconNode.dataset.viProp;
                }
            }

            tempIconNode.parentNode.replaceChild(overNode, tempIconNode);
        } else {
            let errorString = "%c Vivid Error: No icon found for data-vi=\"" + tempIconNodeData + "\"";
            console.log(errorString, "color: #ff4646; font-weight: bold");
        }
    });
};

//Check for DOM Ready
if (document.readyState !== "loading") {
    watchInjection();
} else {
document.addEventListener("DOMContentLoaded", function () {
    watchInjection();
});
}