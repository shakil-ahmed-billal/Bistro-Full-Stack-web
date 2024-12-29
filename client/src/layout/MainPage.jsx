import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"


const MainPage = () => {
  return (
    <div className="dark:bg-[#1F2937] dark:text-white">
      <header>
        <nav>
            <Header></Header>
        </nav>
      </header>
      <main>
        <section>
            <Outlet></Outlet>
        </section>
      </main>
    </div>
  )
}

export default MainPage
