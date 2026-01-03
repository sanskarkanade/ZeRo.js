import { effect } from "../core/effect.js";


export function createBinding(node, parts, context) {
    function getValueFromContext(path) {
        const keys = path.split(".");
        let value = context[keys[0]];


        for (let i = 1; i < keys.length; i++) {
            if (value == null) return "";
            value = value[keys[i]];
        }


        return typeof value === "function" ? value() : value;
    }


    function update() {
        let final = "";
        parts.forEach(part => {
            if (part.type === "text") final += part.value;
            if (part.type === "binding") final += getValueFromContext(part.value);
        });


        node.textContent = final;
    }


    effect(update);
}