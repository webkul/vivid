import { iconConfig } from './config';
import { attrConstructor} from './attr';
import icons from './../dist/icons.json';

export let iconObject = icons;

//Imported SVG Icon's String as a DOM Node
for (let item in iconObject) {
    var iconNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    iconNode.innerHTML = iconObject[item];

    let primaryElement = iconNode.querySelectorAll(".vi-primary");
    let accentElement = iconNode.querySelectorAll(".vi-accent");
    let propElement = iconNode.querySelectorAll(".vi-prop");

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

    //Update Object
    iconObject[item] = iconNode;
}