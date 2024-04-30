import {SidebarItemProps} from "~/types";
import { parse } from 'yaml'
import fs from 'fs';
import path from 'path';
import {labelParser} from "~/components/helpers";

const yamlFile = "./src/components/routes.yml";
const fullPath = path.resolve(yamlFile);
const file = fs.readFileSync(fullPath, 'utf8');

const parsedYML = parse(file).routes;

function extractRoutes(obj : any): SidebarItemProps[] {
    const routes: SidebarItemProps[] = [];

    obj?.forEach((item: any) => {
        if (typeof item === 'object') {
            for (const [key, values] of Object.entries(item)) {
                routes.push({ label: labelParser(key), subItems: extractRoutes(values) });
            }
        } else {
            if(item === 'home') {
                routes.push({ label: 'Home', href: '/' });
                return;
            }
            routes.push({ label: labelParser(item), href: `/${item}` });
        }
    });
    return routes;
}

const sidebarItems: SidebarItemProps[] = extractRoutes(parsedYML);

export default sidebarItems;