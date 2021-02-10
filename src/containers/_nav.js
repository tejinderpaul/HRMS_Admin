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
            name: 'All Employees List',
            to: '/user',
            icon: 'cil-people'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Leaves',
            to: '/leaves',
            icon: 'cil-people'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Apply Leave',
            to: '/apply-leave',
            icon: 'cil-laptop'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Holidays',
            to: '/holidays',
            icon: 'cil-lightbulb'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Add User',
            to: '/add-employee',
            icon: 'cil-basket'
        },
        // {
        //     _name: 'CSidebarNavItem',
        //     name: 'Admin User',
        //     to: '/admin-user',
        //     icon: 'cil-user'
        // },
        // {
        //     _name: 'CSidebarNavItem',
        //     name: 'Goods Types',
        //     to: '/goodstypes',
        //     icon: 'cil-moon'
        // },
        // {
        //     _name: 'CSidebarNavDropdown',
        //     name: 'Notifications',
        //     route: '/notifications',
        //     icon: 'cil-bell',
        //     items: [{
        //             name: 'Alerts',
        //             to: '/notifications/alerts'
        //         },
        //         {
        //             name: 'Badges',
        //             to: '/notifications/badges'
        //         },
        //         {
        //             name: 'Modals',
        //             to: '/notifications/modals'
        //         }
        //     ]
        // },

    ]
}]