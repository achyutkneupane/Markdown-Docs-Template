import {component$, Fragment} from "@builder.io/qwik";
import {sidebarItems} from "~/routes/sidebarGenerator";
import type {SidebarItemProps} from "~/types";

const items: SidebarItemProps[] = sidebarItems;

const Sidebar = component$(() => {
    return (
        <div class="px-4 py-2 flex flex-col gap-2">
            {items.map((item: SidebarItemProps, index: number) => (
                <Fragment key={`sidebarItem-${index}`}>
                    <div class="sidebar-item">
                        {item.label}
                    </div>
                    {item.subItems && (
                        <div class="ml-4">
                            {item.subItems.map((subItem: SidebarItemProps, subIndex: number) => (
                                <div class="sidebar-sub-item" key={`sidebarSubItem-${subIndex}`}>
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