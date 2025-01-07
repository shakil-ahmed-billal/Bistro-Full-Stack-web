import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../layout/MainPage'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'
import Order from '../pages/Order/Order'
import Login from '../authentication/Login'
import Register from '../pages/Regsiter/Register'
import Dashboard from '../layout/Dashboard'
import PrivateRoute from '../private/PrivateRoute'
import AdminRoute from '../private/AdminRoute'
import Cart from '../pages/Deshboard/Cart/Cart'
import AddUser from '../pages/Deshboard/AddUser'





const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage></MainPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element : <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/cart',
                element: <PrivateRoute>
                    <Cart></Cart>
                </PrivateRoute>
            },
            {
                path: '/dashboard/addUsers',
                element: <AddUser></AddUser>
            },
            {
                path: '/dashboard/addItem'
            }
            
        ]
    }
])

export default router
