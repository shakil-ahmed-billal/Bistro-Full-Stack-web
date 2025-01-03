import { Outlet, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import { Header } from "../components/Header"


const MainPage = () => {

  const location = useLocation()
  const noHeader = location.pathname.includes('/login')


  return (
    <div className="dark:bg-[#1F2937] dark:text-white">
      <header>
        <nav className="fixed top-0 w-full z-50">
          {noHeader || <Header></Header>}
        </nav>
      </header>
      <main className="min-h-screen ">
        <section>
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
        {noHeader || <Footer></Footer>}
      </footer>
    </div>
  )
}

export default MainPage
