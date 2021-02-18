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
            name: 'My Leaves',
            to: '/myleaves',
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