// Attribute Constructor
export let attrConstructor = (element, options) => {
    for (let item in options) {
        element.setAttribute(item, options[item]);
    }
};
