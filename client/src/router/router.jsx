import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../layout/MainPage'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'
import Order from '../pages/Order/Order'

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
                path: '/order',
                element:<Order></Order>
            }
        ]
    }
])

export default router
