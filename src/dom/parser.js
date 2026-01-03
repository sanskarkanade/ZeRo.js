export function parseTemplateString(text) {
    const parts = [];
    let temp = "", i = 0;


    while (i < text.length) {
        if (text.slice(i, i + 2) === "{{") {
            if (temp) parts.push({ type: "text", value: temp });
            temp = "";
            const end = text.indexOf("}}", i);
            if (end === -1) {
                // no closing, treat rest as text
                temp = text.slice(i);
                break;
            }
            parts.push({ type: "binding", value: text.slice(i + 2, end).trim() });
            i = end + 2;
        } else {
            temp += text[i++];
        }
    }
    if (temp) parts.push({ type: "text", value: temp });
    return parts;
}