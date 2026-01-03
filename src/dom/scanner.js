import { parseTemplateString } from "./parser.js";
import { createBinding } from "./binding.js";


export function scanDOM(root, context) {
    root.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes("{{")) {
            const parts = parseTemplateString(node.nodeValue);
            createBinding(node, parts, context);
        }


        if (node.nodeType === Node.ELEMENT_NODE) {
            scanDOM(node, context);
        }
    });
}