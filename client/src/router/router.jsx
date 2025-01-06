import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../layout/MainPage'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'
import Order from '../pages/Order/Order'
import Login from '../authentication/Login'
import Register from '../pages/Regsiter/Register'
import Dashboard from '../layout/Dashboard'
import Cart from '../pages/Deshboard/Cart/Cart'





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
                element: <Cart></Cart>
            }
            
        ]
    }
])

export default router
