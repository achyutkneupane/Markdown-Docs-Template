function routesAreSame(routeOne: string, routeTwo: string) {
    if (routeOne.endsWith('/')) {
        routeOne = routeOne.slice(0, -1);
    }
    if (routeTwo.endsWith('/')) {
        routeTwo = routeTwo.slice(0, -1);
    }
    return routeOne === routeTwo;
}

export { routesAreSame };