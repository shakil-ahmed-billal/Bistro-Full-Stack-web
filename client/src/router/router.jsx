import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../layout/MainPage'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'
import Order from '../pages/Order/Order'
import Login from '../authentication/Login'
import Register from '../pages/Regsiter/Register'
import PrivateRoute from '../private/PrivateRoute'
import Test from '../components/Test'
import AuthenticationRoute from '../authentication/AuthenticationRoute'




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
                element:<AuthenticationRoute><Order></Order></AuthenticationRoute>
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
                path:'/private',
                element:<AuthenticationRoute><Test></Test></AuthenticationRoute>
            }
        ]
    }
])

export default router
