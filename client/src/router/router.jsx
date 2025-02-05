import { createBrowserRouter } from 'react-router-dom'
import Login from '../authentication/Login'
import Dashboard from '../layout/Dashboard'
import MainPage from '../layout/MainPage'
import AddItem from '../pages/Deshboard/AddItem'
import AddUser from '../pages/Deshboard/AddUser'
import Cart from '../pages/Deshboard/Cart/Cart'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'
import Order from '../pages/Order/Order'
import Register from '../pages/Regsiter/Register'
import PrivateRoute from '../private/PrivateRoute'
import ManageItem from '../pages/Deshboard/ManageItem'
import UpdateItem from '../pages/Deshboard/UpdateItem'
import Payment from '../pages/Deshboard/Payment/Payment'
import PaymentHistory from '../pages/Deshboard/Payment/PaymentHistory'





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
                element: <Order></Order>
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
                path: '/dashboard/addItem',
                element: <AddItem></AddItem>
            },
            {
                path: '/dashboard/updateItem/:id',
                element: <UpdateItem></UpdateItem>
            },
            {
                path: '/dashboard/manageItem',
                element: <ManageItem></ManageItem>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            }

        ]
    }
])

export default router
