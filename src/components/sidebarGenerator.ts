import type {SidebarItemProps} from "~/types";

export const sidebarItems : SidebarItemProps[] = [
    {
        label: 'Home',
        href: '/'
    }, {
        label: 'About',
        href: '/about'
    }, {
        label: 'Contact',
        subItems: [
            {
                label: 'Phone',
                href: '/contact/phone'
            }, {
                label: 'Email',
                href: '/contact/email'
            }
        ]
    }
];
