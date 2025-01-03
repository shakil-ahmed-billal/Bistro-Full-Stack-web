import { Helmet } from 'react-helmet-async'
import SectionCover from '../../components/Shared/SectionCover'
import useMenu from '../../hooks/useMenu'
import SectionTitle from '../../components/Shared/SectionTitle'
import MenuCategory from './MenuCategory'
import menuImage from '../../assets/menu/banner3.jpg'
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'

const Menu = () => {

  const [menus] = useMenu()
  const offered = menus.filter(item => item.category === "offered")
  const soup = menus.filter(item => item.category === "soup")
  const pizza = menus.filter(item => item.category === "pizza")
  const dessert = menus.filter(item => item.category === "dessert")
  const salad = menus.filter(item => item.category === "salad")
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <SectionCover
      title={'Our Menu'}
      description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      image={menuImage}
      ></SectionCover>
      {/* offer menu section items render */}
      <SectionTitle
      heading='Dont Miss'
      subHeading='Today Offer'
      ></SectionTitle>
      <MenuCategory
      item={offered}
      ></MenuCategory>
      {/* dessert menu items render section */}
      <MenuCategory
      item={dessert}
      title={'dessert'}
      coverImage={dessertImage}
      description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
      ></MenuCategory>
      {/* pizza menu items render section */}
      <MenuCategory
      item={pizza} title={'pizza'}  coverImage={pizzaImage}
      description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuCategory>
      {/* salad menu items render section */}
      <MenuCategory
      item={salad} title={'salad'}  coverImage={saladImage}
      description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuCategory>
      {/* soup menu items render section */}
      <MenuCategory
      item={soup} title={'soup'}  coverImage={soupImage}
      description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></MenuCategory>
    </div>
  )
}

export default Menu
