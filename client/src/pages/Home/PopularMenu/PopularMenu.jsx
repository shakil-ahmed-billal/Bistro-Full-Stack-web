import { useEffect, useState } from "react"
import SectionTitle from "../../../components/Shared/SectionTitle"
import MenuItems from "../../../components/Shared/MenuItems"
import useMenu from "../../../hooks/useMenu"

const PopularMenu = () => {


    const [menus] = useMenu()
    const popular = menus.filter(item => item.category === "popular")

  return (
    <div>
      <SectionTitle
      heading="Popular Menu"
      subHeading="Our Best Selling Items"
      ></SectionTitle>
      <div className="w-8/12 mx-auto grid grid-cols-2 gap-3 pb-12">
        {
           popular.map(menu => <MenuItems key={menu._id} menu={menu}></MenuItems> )
        }
      </div>
    </div>
  )
}

export default PopularMenu
