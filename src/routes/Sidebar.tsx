import {component$, Fragment} from "@builder.io/qwik";
import {sidebarItems} from "~/routes/sidebarGenerator";
import type {SidebarItemProps} from "~/types";

const items: SidebarItemProps[] = sidebarItems;

const currentRoute = '/';

const Sidebar = component$(() => {
    return (
        <div class="px-4 py-2 flex flex-col gap-2 bg-gray-50 h-screen">
            {items.map((item: SidebarItemProps, index: number) => (
                <Fragment key={`sidebarItem-${index}`}>
                    <div
                        class={`${item.subItems ? 'sidebar-item-with-subitems' : 'sidebar-item'} ${currentRoute === item.href ? 'active' : ''}`}>
                        {item.label}
                    </div>
                    {item.subItems && (
                        <div class="ml-4 flex flex-col gap-1">
                            {item.subItems.map((subItem: SidebarItemProps, subIndex: number) => (
                                <div key={`sidebarSubItem-${subIndex}`}
                                     class={`sidebar-sub-item  ${currentRoute === subItem.href ? 'active' : ''}`}>
                                    {subItem.label}
                                </div>
                            ))}
                        </div>
                    )}
                </Fragment>
            ))}
        </div>
    );
});

export default Sidebar;