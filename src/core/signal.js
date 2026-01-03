import { getActiveEffect } from "./effect.js";

export function signal(initialValue) {
    let value = initialValue;
    let subscribers = new Set();


    const notify = () => subscribers.forEach(fn => fn());


    return {
        get value() {
            const ae = getActiveEffect();
            if (ae) subscribers.add(ae);
            return value;
        },
        set value(newVal) {
            value = newVal;
            notify();
        }
    };
}