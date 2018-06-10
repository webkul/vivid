// Attribute Constructor
export let attrConstructor = function (element, options) {
    for (let item in options) {
        element.setAttribute(item, options[item]);
    }
}