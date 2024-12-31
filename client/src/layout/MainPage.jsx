import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import Footer from "../components/Footer"


const MainPage = () => {
  return (
    <div className="dark:bg-[#1F2937] dark:text-white">
      <header>
        <nav className="fixed top-0 w-full z-50">
            <Header></Header>
        </nav>
      </header>
      <main className="min-h-[calc(100vh-64px)]">
        <section>
            <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default MainPage
