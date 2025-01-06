import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { Header } from '../components/Header'

const Dashboard = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="flex">
      <div className="w-44 fixed z-10 min-h-[calc(100vh-60px)] content-center">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 ml-40 mt-16">
        <div className="w-11/12 mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
