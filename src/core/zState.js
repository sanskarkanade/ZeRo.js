import { signal } from "./signal.js";


export function zState(initial) {
    const s = signal(initial);
    return [() => s.value, (v) => s.value = v];
}