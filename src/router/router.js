// createRouter takes a routes map { "/": () => element }
export function createRouter(routes, root) {
    function renderRoute() {
        const path = location.hash.replace("#", "") || "/";
        const component = routes[path];


        root.innerHTML = "";
        if (component) {
            const el = component();
            if (el instanceof Node) root.appendChild(el);
            else root.innerHTML = String(el);
        } else {
            root.innerHTML = "Not Found";
        }
    }


    window.addEventListener("hashchange", renderRoute);
    renderRoute();
}