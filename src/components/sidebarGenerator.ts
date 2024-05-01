import type {SidebarItemProps} from "~/types";
import { parse } from 'yaml'
import fs from 'fs';
import path from 'path';
import {labelParser, routeParser, routesAreSame} from "~/components/helpers";

const yamlFile = "./src/components/docs.yml";
const fullPath = path.resolve(yamlFile);
const file = fs.readFileSync(fullPath, 'utf8');
const parsedYML = parse(file).routes;
function extractRoutes(prevKey: string, obj : any): SidebarItemProps[] {
    const routes: SidebarItemProps[] = [];

    obj?.forEach((item: any) => {
        if (typeof item === 'object') {
            for (const [key, values] of Object.entries(item)) {
                routes.push({ label: labelParser(key), subItems: extractRoutes(key, values) });
            }
        } else {
            if(item === 'home') {
                routes.push({ label: 'Home', href: `/${prevKey}` });
                return;
            }
            routes.push({ label: labelParser(item), href: `${prevKey ? `/${prevKey}` : ''}/${item}` });
        }
    });
    return routes;
}
const parsedSidebarItems: SidebarItemProps[] = extractRoutes("",parsedYML);

const ROOT_PATH = 'src/routes';
const detectedSidebarItems: SidebarItemProps[] = [];
const getPagesInDirectory = (rootPath : string) => {
    fs.readdirSync(rootPath)
        .filter(file => !file.startsWith('_') && !file.startsWith('[') && !file.endsWith('.tsx'))
        .map(file => {
            const fullPath = path.join(rootPath, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                return getPagesInDirectory(fullPath);
            }
            const folderWithoutRoot = fullPath.replace(ROOT_PATH, '');
            const {href, label} : SidebarItemProps = routeParser(folderWithoutRoot);
            detectedSidebarItems.push({label, href});
        });
}

const allPaths = [ROOT_PATH];
allPaths.flatMap(getPagesInDirectory);

function filterUndetectedItems(items: SidebarItemProps[]): SidebarItemProps[] {
    return items.filter((item) => {
        if(item.subItems) {
            item.subItems = filterUndetectedItems(item.subItems);
            return item.subItems.length > 0;
        }
        return detectedSidebarItems.some((detectedItem) => routesAreSame(detectedItem.href, item.href));
    });
}

const sidebarItems : SidebarItemProps[] = filterUndetectedItems(parsedSidebarItems);

export default sidebarItems;