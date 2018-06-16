import { iconConfig } from './config';
import { attrConstructor } from './attr';
import icons from './../dist/icons.json';
const iconObject = icons;
export let vividNode;

// Replace and Inject SVG Node
const watchInjection = () => {
    vividNode = document.querySelectorAll("[data-vi]");
    vividNode.forEach((item, key) => {
        const tempIconNode = item;
        let tempIconNodeData = tempIconNode.dataset.vi;
        const overNode = iconObject[tempIconNodeData];

        if (tempIconNodeData.indexOf("-") !== -1) {
            tempIconNodeData = tempIconNodeData.replace(/-([a-z])/g, i => i[1].toUpperCase());
        }

        const iconNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconNode.innerHTML = iconObject[tempIconNodeData];
        const primaryElement = iconNode.querySelectorAll(".vi-primary");
        const accentElement = iconNode.querySelectorAll(".vi-accent");
        const propElement = iconNode.querySelectorAll(".vi-prop");

        // Customise Primary Color
        if (primaryElement != undefined && primaryElement != null) {
            if (iconConfig.primaryColor !== undefined || iconConfig.primaryColor !== "") {
                for (let i = 0; i < primaryElement.length; i++) {
                    primaryElement[i].style.fill = iconConfig.primaryColor;
                }
            }
        }

        // Customise Accent Color
        if (accentElement != undefined && accentElement != null) {
            if (iconConfig.accentColor !== undefined || iconConfig.accentColor !== "") {
                for (let i = 0; i < accentElement.length; i++) {
                    accentElement[i].style.fill = iconConfig.accentColor;
                }
            }
        }

        // Customise Prop Color
        if (propElement != undefined && propElement != null) {
            if (iconConfig.propColor !== undefined || iconConfig.propColor !== "") {
                for (let i = 0; i < propElement.length; i++) {
                    propElement[i].style.fill = iconConfig.propColor;
                }
            }
        }

        //Customize Size
        if (iconConfig.size !== undefined && iconConfig.size !== "") {
            attrConstructor(iconNode, {
                "width": iconConfig.size,
                "height": iconConfig.size,
                "viewBox": "0 0 48 48"
            });
        } else {
            attrConstructor(iconNode, {
                "width": "48",
                "height": "48",
                "viewBox": "0 0 48 48"
            });
        }

        if (iconNode != undefined) {
            if (tempIconNode.dataset.viSize !== undefined && tempIconNode.dataset.viSize !== null) {
                attrConstructor(iconNode, {
                    "width": tempIconNode.dataset.viSize,
                    "height": tempIconNode.dataset.viSize
                });
            }

            if (tempIconNode.dataset.viPrimary !== undefined && tempIconNode.dataset.viPrimary !== null) {
                const tempPrimaryNode = iconNode.querySelectorAll(".vi-primary");
                for (let i = 0; i < tempPrimaryNode.length; i++) {
                    tempPrimaryNode[i].style.fill = tempIconNode.dataset.viPrimary;
                }
            }

            if (tempIconNode.dataset.viAccent !== undefined && tempIconNode.dataset.viAccent !== null) {
                const tempAccentNode = iconNode.querySelectorAll(".vi-accent");
                for (let i = 0; i < tempAccentNode.length; i++) {
                    tempAccentNode[i].style.fill = tempIconNode.dataset.viAccent;
                }
            }

            if (tempIconNode.dataset.viProp !== undefined && tempIconNode.dataset.viProp !== null) {
                const tempPropNode = iconNode.querySelectorAll(".vi-prop");
                for (let i = 0; i < tempPropNode.length; i++) {
                    tempPropNode[i].style.fill = tempIconNode.dataset.viProp;
                }
            }

            tempIconNode.parentNode.replaceChild(iconNode, tempIconNode);
        } else {
            const errorString = "%c Vivid Error: No icon found for data-vi=\"" + tempIconNodeData + "\"";
            console.log(errorString, "color: #ff4646; font-weight: bold");
        }
    });
};

//Check for DOM Ready
if (document.readyState !== "loading") {
    watchInjection();
} else {
    document.addEventListener("DOMContentLoaded", watchInjection);
}
