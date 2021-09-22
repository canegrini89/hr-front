// assets
import { IconUsers, IconCalendarTime, IconFile, IconHeart, IconFolder } from '@tabler/icons';

// constant
const icons = {
    IconUsers,
    IconCalendarTime,
    IconFile,
    IconHeart,
    IconFolder
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const company = {
    id: 'company',
    title: 'Your Company',
    type: 'group',
    children: [
        {
            id: 'employees',
            title: 'Employees',
            type: 'item',
            url: '/employees/list',
            icon: icons['IconUsers'],
            breadcrumbs: false
        },
        {
            id: 'calendar',
            title: 'Calendar',
            type: 'item',
            url: '/calendar',
            icon: icons['IconCalendarTime'],
            breadcrumbs: false
        },
        {
            id: 'company-files',
            title: 'Company Files',
            type: 'item',
            url: '/files',
            icon: icons['IconFile'],
            breadcrumbs: false
        },
        {
            id: 'benefits',
            title: 'Benefits',
            type: 'item',
            url: '/benefits',
            icon: icons['IconHeart'],
            breadcrumbs: false
        },
        {
            id: 'reports',
            title: 'Reports',
            type: 'item',
            url: '/reports',
            icon: icons['IconFolder'],
            breadcrumbs: false
        }
    ]
};
