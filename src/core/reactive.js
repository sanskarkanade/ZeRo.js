import { getActiveEffect } from "./effect.js";


export function reactive(obj) {
    const deps = new Map();


    return new Proxy(obj, {
        get(target, key) {
            if (!deps.has(key)) deps.set(key, new Set());
            const ae = getActiveEffect();
            if (ae) deps.get(key).add(ae);
            return target[key];
        },
        set(target, key, val) {
            target[key] = val;
            if (deps.get(key)) deps.get(key).forEach(fn => fn());
            return true;
        }
    });
}