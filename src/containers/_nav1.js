export default [{
    _name: 'CSidebarNav',
    _children: [{
            _name: 'CSidebarNavItem',
            name: 'Dashboard',
            to: '/dashboard',
            icon: 'cil-speedometer',
          //  display: 'none'
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
       

    ]
}]