type RouteHandler = () => void;

export class Router {
    private routes: { [path: string]: RouteHandler } = {};

    constructor() {
        window.addEventListener('hashchange', this.handleRouteChange.bind(this));
    }

    addRoute(path: string, handler: RouteHandler): void {
        this.routes[path] = handler;
    }

    navigate(path: string): void {
        window.location.hash = path;
    }

    private handleRouteChange(): void {
        const path = window.location.hash.slice(1);
        const handler = this.routes[path];
        if (handler) {
            handler();
        } else {
            console.error(`No handler found for route: ${path}`);
        }
    }
}