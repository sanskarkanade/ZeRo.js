let activeEffect = null;


export function effect(fn) {
    activeEffect = fn;
    fn();
    activeEffect = null;
}


export function getActiveEffect() {
    return activeEffect;
}