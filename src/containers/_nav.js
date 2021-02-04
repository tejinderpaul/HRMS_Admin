export default [{
    _name: 'CSidebarNav',
    _children: [{
            _name: 'CSidebarNavItem',
            name: 'Dashboard',
            to: '/dashboard',
            icon: 'cil-speedometer',
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Drivers',
            to: '/drivers',
            icon: 'cil-people'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Customers',
            to: '/customers',
            icon: 'cil-people'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Bookings',
            to: '/bookings',
            icon: 'cil-laptop'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Complaint',
            to: '/complaint',
            icon: 'cil-lightbulb'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Vehicle Type',
            to: '/vehicletype',
            icon: 'cil-basket'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Admin User',
            to: '/admin-user',
            icon: 'cil-user'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Goods Types',
            to: '/goodstypes',
            icon: 'cil-moon'
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Notifications',
            route: '/notifications',
            icon: 'cil-bell',
            // items: [{
            //         name: 'Alerts',
            //         to: '/notifications/alerts'
            //     },
            //     {
            //         name: 'Badges',
            //         to: '/notifications/badges'
            //     },
            //     {
            //         name: 'Modals',
            //         to: '/notifications/modals'
            //     }
            // ]
        },

    ]
}]