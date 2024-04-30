import {SidebarItemProps} from "~/types";
import { parse } from 'yaml'
import fs from 'fs';
import path from 'path';
import {labelParser} from "~/components/helpers";

const yamlFile = "./src/components/routes.yml";
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
                console.log(prevKey);
                routes.push({ label: 'Home', href: `/${prevKey}` });
                return;
            }
            routes.push({ label: labelParser(item), href: `${prevKey ? `/${prevKey}` : ''}/${item}` });
        }
    });
    return routes;
}

const sidebarItems: SidebarItemProps[] = extractRoutes("",parsedYML);

export default sidebarItems;