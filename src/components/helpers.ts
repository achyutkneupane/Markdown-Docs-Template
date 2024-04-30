import {SidebarItemProps} from "~/types";

function routesAreSame(routeOne: string, routeTwo: string) {
    if (routeOne.endsWith('/')) {
        routeOne = routeOne.slice(0, -1);
    }
    if (routeTwo.endsWith('/')) {
        routeTwo = routeTwo.slice(0, -1);
    }
    return routeOne === routeTwo;
}

function firstLetterToUpperCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function routeParser(route: string): SidebarItemProps {
    const noExtension = route.replace('.mdx', '');
    const fullRouteWithoutRootFolder = noExtension.replace('/index', '/');
    const label: string = fullRouteWithoutRootFolder.replaceAll('/', '').replace('-', ' ');
    if (label === '') {
        return { href: fullRouteWithoutRootFolder, label: 'Home' };
    } else {
        const flLabel = firstLetterToUpperCase(label);
        return { href: fullRouteWithoutRootFolder, label: flLabel };
    }
}

export { routesAreSame, routeParser };