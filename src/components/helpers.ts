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

function replaceAll(str: string, find: string, replace: string) : string {
    return str.replace(new RegExp(find, 'g'), replace);
}

function labelParser(str: string) {
    const withoutSymbol = replaceAll(str, '-', ' ');
    return withoutSymbol.replaceAll(/\b\w/g, (char) => char.toUpperCase());
}

export { routesAreSame, labelParser };