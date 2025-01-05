import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
        <div className="w-64 min-h-screen">
            <Sidebar></Sidebar>
        </div>
        <div className="flex-1">
            <Outlet></Outlet>
        </div>
      </div>
  )
}

export default Dashboard
