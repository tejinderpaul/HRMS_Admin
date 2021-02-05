import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheLoginContainer = () =>
    import('@/containers/TheLoginContainer')
const TheContainer = () =>
    import('@/containers/TheContainer')

const Dashboard = () =>
    import('@/views/Dashboard')
const Drivers = () =>
    import('@/views/Drivers')
const Customers = () =>
    import('@/views/Customers')
const Applyleave = () =>
    import('@/views/Applyleave')
const Bookingview = () =>
    import('@/views/booking/Bookingview')
const Complaint = () =>
    import('@/views/Complaint')
const Customerdataview = () =>
    import('@/views/customers/Customerview')
const Vehicle = () =>
    import('@/views/Vehicle')
const vehicletype = () =>
    import('@/views/vehicletypes/Addvehicletypes')
const editvehicletype = () =>
    import('@/views/vehicletypes/Editvehicletype')
const Driverdataview = () =>
    import('@/views/drivers/Driverview')
const AdminUser = () =>
    import('@/views/admin/AdminUser')
const CreateAdminUser = () =>
    import('@/views/admin/CreateAdminUser')
const DriverWeeklyEarning = () =>
    import('@/views/drivers/Driverweeklyearning')
const Driverweeklyearningdetails = () =>
    import('@/views/drivers/Driverweeklyearningdetails')
const Goodstype = () =>
    import('@/views/Goodstypes')
const Creategoodstype = () =>
    import('@/views/goodstypes/Creategoodstype')
const Editgoodstype = () =>
    import('@/views/goodstypes/Editgoodstype')
const Complaintsreply = () =>
    import('@/views/complaints/Complaintsreply')
const Forgotpassword = () =>
    import('@/views/pages/Forgotpassword')
const Setpassword = () =>
    import('@/views/pages/Setpassword')
const Profile = () =>
    import('@/views/pages/Profile')
const Changepassword = () =>
    import('@/views/pages/Changepassword')

const Typography = () =>
    import('@/views/theme/Typography')

const Charts = () =>
    import('@/views/charts/Charts')
const Widgets = () =>
    import('@/views/widgets/Widgets')

// Views - Components
const Cards = () =>
    import('@/views/base/Cards')
const Forms = () =>
    import('@/views/base/Forms')
const Switches = () =>
    import('@/views/base/Switches')
const Tables = () =>
    import('@/views/base/Tables')
const Tabs = () =>
    import('@/views/base/Tabs')
const Breadcrumbs = () =>
    import('@/views/base/Breadcrumbs')
const Carousels = () =>
    import('@/views/base/Carousels')
const Collapses = () =>
    import('@/views/base/Collapses')
const Jumbotrons = () =>
    import('@/views/base/Jumbotrons')
const ListGroups = () =>
    import('@/views/base/ListGroups')
const Navs = () =>
    import('@/views/base/Navs')
const Navbars = () =>
    import('@/views/base/Navbars')
const Paginations = () =>
    import('@/views/base/Paginations')
const Popovers = () =>
    import('@/views/base/Popovers')
const ProgressBars = () =>
    import('@/views/base/ProgressBars')
const Tooltips = () =>
    import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () =>
    import('@/views/buttons/StandardButtons')
const ButtonGroups = () =>
    import('@/views/buttons/ButtonGroups')
const Dropdowns = () =>
    import('@/views/buttons/Dropdowns')
const BrandButtons = () =>
    import('@/views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () =>
    import('@/views/icons/CoreUIIcons')
const Brands = () =>
    import('@/views/icons/Brands')
const Flags = () =>
    import('@/views/icons/Flags')

// Views - Notifications
const Alerts = () =>
    import('@/views/notifications/Alerts')
const Badges = () =>
    import('@/views/notifications/Badges')
const Modals = () =>
    import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () =>
    import('@/views/pages/Page404')
const Page500 = () =>
    import('@/views/pages/Page500')
const Login = () =>
    import('@/views/pages/Login')
const Register = () =>
    import('@/views/pages/Register')

// Users
const Users = () =>
    import('@/views/users/Users')
const User = () =>
    import('@/views/users/User')


Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: configRoutes()
})

function configRoutes() {

    return [{

        path: '/',
        redirect: '/login',
        name: 'Home',
        component: TheLoginContainer,
        children: [{
            path: 'login',
            name: 'Admin Login',
            component: Login
        },
        {
            path: 'forgot-password',
            name: 'forgot-password',
            component: Forgotpassword
        },
        {
            path: 'set-password',
            name: 'set-password',
            component: Setpassword
        }

        ]
    },
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dashboard',
        component: TheContainer,
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: 'drivers',
            name: 'drivers',
            component: Drivers
        },
        {
            path: 'driver-view/:id',
            name: 'driver-view',
            component: Driverdataview
        },
        {
            path: 'customers',
            name: 'customers',
            component: Customers,

        },
        {
            path: 'customer-view/:id',
            name: 'customer-view',
            component: Customerdataview
        },
        {
            path: 'apply-leave',
            name: 'apply-leave',
            component:Applyleave 

        },
        {
            path: 'booking-view/:id',
            name: 'booking-view',
            component: Bookingview
        },
        {
            path: 'complaint',
            name: 'complaint',
            component: Complaint
        },
        {
            path: 'vehicletype',
            name: 'vehicle-type',
            component: Vehicle
        },
        {
            path: 'addvehicletype',
            name: 'add-vehicle-type',
            component: vehicletype
        },
        {
            path: 'editvehicletype/:id',
            name: 'edit-vehicle-type',
            component: editvehicletype
        },
        {
            path: 'admin-user',
            name: 'admin-user',
            component: AdminUser
        },
        {
            path: 'create-admin-user',
            name: 'create-admin-user',
            component: CreateAdminUser
        },
        {
            path: 'driver-weekly-earning/:id',
            name: 'driver-weekly-earning',
            component: DriverWeeklyEarning
        },
        {
            path: 'driver-weekly-earning-details',
            name: 'driver-weekly-earning-details',
            component: Driverweeklyearningdetails
        },
        {
            path: 'goodstypes',
            name: 'goodstypes',
            component: Goodstype
        },
        {
            path: 'create-goods-types',
            name: 'create-goods-types',
            component: Creategoodstype
        },
        {
            path: 'edit-goods-types/:id',
            name: 'edit-goods-types',
            component: Editgoodstype
        },
        {
            path: 'complaint-reply-view/:id',
            name: 'complaint-reply-view',
            component: Complaintsreply
        },
        {
            path: 'profile-view',
            name: 'profile-view',
            component: Profile
        },
        {
            path: 'change-password-view',
            name: 'change-password-view',
            component: Changepassword
        },


        ]
    },

        // {
        //     path: '/pages',
        //     redirect: '/pages/404',
        //     name: 'Pages',
        //     component: {
        //         render(c) {
        //             return c('router-view')
        //         }
        //     },
        //     children: [{
        //             path: '404',
        //             name: 'Page404',
        //             component: Page404
        //         },
        //         {
        //             path: '500',
        //             name: 'Page500',
        //             component: Page500
        //         },
        //         {
        //             path: 'login',
        //             name: 'Login',
        //             component: Login
        //         },
        //         {
        //             path: 'register',
        //             name: 'Register',
        //             component: Register
        //         }
        //     ]
        // }

    ]
}