import { signal } from "./signal.js";
import { effect } from "./effect.js";


export function computed(fn) {
    const s = signal(fn());


    effect(() => {
        s.value = fn();
    });


    return s;
}