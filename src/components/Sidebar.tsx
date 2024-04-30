import {component$, Fragment, useComputed$} from "@builder.io/qwik";
import sidebarItems from "~/components/sidebarGenerator";
import type {SidebarItemProps} from "~/types";
import {routesAreSame} from "~/components/helpers";
import {Link, useLocation} from '@builder.io/qwik-city';

const Sidebar = component$(() => {

    const loc = useLocation();
    const currentRoute = loc.url.pathname;
    const items: SidebarItemProps[] = useComputed$(() => sidebarItems).value;
    return (
        <div class="px-4 py-2 flex flex-col gap-2 bg-gray-50 h-screen">
            {items.map((item: SidebarItemProps, index: number) => (
                <Fragment key={`sidebarItem-${index}`}>
                    <Link href={item.href || ""} class={`sidebar-item ${routesAreSame(currentRoute, item.href || "") ? 'active' : ''}`}>
                        {item.label}
                    </Link>
                    {item.subItems && (
                        <div class="ml-4 flex flex-col gap-1">
                            {item.subItems.map((subItem: SidebarItemProps, subIndex: number) => (
                                <Link key={`sidebarSubItem-${subIndex}`} href={subItem.href || ""}
                                      class={`sidebar-sub-item  ${routesAreSame(currentRoute, subItem.href || "") ? 'active' : ''}`}>
                                    {subItem.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    );
});

export default Sidebar;