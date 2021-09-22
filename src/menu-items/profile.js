// assets
import { IconDashboard, IconDeviceAnalytics, IconUser, IconPool, IconAlarm, IconFile } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics,
    IconUser,
    IconPool,
    IconAlarm,
    IconFile
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const profile = {
    id: 'profile-dashboard',
    title: 'You',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons['IconDashboard'],
            breadcrumbs: false
        },
        {
            id: 'me',
            title: 'Me',
            type: 'item',
            url: '/profile',
            icon: icons['IconUser'],
            breadcrumbs: false
        },
        {
            id: 'time-off',
            title: 'Time off',
            type: 'item',
            url: '/time-off',
            icon: icons['IconPool'],
            breadcrumbs: false
        },
        {
            id: 'clock-in',
            title: 'Clock in',
            type: 'item',
            url: '/clock-in',
            icon: icons['IconAlarm'],
            breadcrumbs: false
        },
        {
            id: 'my-documents',
            title: 'My documents',
            type: 'item',
            url: '/documents',
            icon: icons['IconFile'],
            breadcrumbs: false
        }
    ]
};
