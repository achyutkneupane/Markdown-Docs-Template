import type {SidebarItemProps} from "~/types";

import fs from 'fs'
import path from 'path'
import {routeParser} from "~/components/helpers";

const ROOT_PATH = 'src/routes';

const sidebarItems: SidebarItemProps[] = [];

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
            sidebarItems.push({label, href});
        });
}

const allPaths = [ROOT_PATH];
allPaths.flatMap(getPagesInDirectory);

console.log(sidebarItems);

export default sidebarItems;