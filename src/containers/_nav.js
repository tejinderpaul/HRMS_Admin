export default [{
    _name: 'CSidebarNav',
    _children: [{
            _name: 'CSidebarNavItem',
            name: 'Dashboard',
            to: '/dashboard',
            icon: 'cil-speedometer',
            badge: {
                color: 'primary',
                text: 'NEW'
            }
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Drivers',
            to: '/drivers',
            icon: 'cis-truck'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Customers',
            to: '/customers',
            icon: 'cil-user'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Bookings',
            to: '/bookings',
            icon: 'cil-cursor'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Complaint',
            to: '/complaint',
            icon: 'cil-cursor'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Vehicle Type',
            to: '/vehicletype',
            icon: 'cil-cursor'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Admin User',
            to: '/admin-user',
            icon: 'cil-cursor'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Goods Types',
            to: '/goodstypes',
            icon: 'cil-cursor'
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Notifications',
            route: '/notifications',
            icon: 'cil-bell',
            items: [{
                    name: 'Alerts',
                    to: '/notifications/alerts'
                },
                {
                    name: 'Badges',
                    to: '/notifications/badges'
                },
                {
                    name: 'Modals',
                    to: '/notifications/modals'
                }
            ]
        },

    ]
}]