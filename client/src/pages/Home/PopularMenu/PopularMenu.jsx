import { useEffect, useState } from "react"
import SectionTitle from "../../../components/Shared/SectionTitle"
import MenuItems from "../../../components/Shared/MenuItems"

const PopularMenu = () => {

    const [menus , setMenu] = useState([])

    useEffect(() => { 
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item => item.category === 'popular')
            setMenu(popularMenu)
        })
    }, [])

    console.log(menus)
  return (
    <div>
      <SectionTitle
      heading="Popular Menu"
      subHeading="Our Best Selling Items"
      ></SectionTitle>
      <div className="w-8/12 mx-auto grid grid-cols-2 gap-3 pb-12">
        {
           menus.map(menu => <MenuItems key={menu._id} menu={menu}></MenuItems> )
        }
      </div>
    </div>
  )
}

export default PopularMenu
