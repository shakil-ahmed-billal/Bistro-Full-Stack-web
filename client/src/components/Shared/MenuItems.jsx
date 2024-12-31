
import { PropTypes } from 'prop-types';

const MenuItems = ({menu}) => {

    const {name, price, image , recipe} = menu || {}

  return (
    <div className='flex items-center gap-2  p-4 border-b border-gray-200 dark:border-gray-700'>
        <div className="flex items-center">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-40' src={image} alt="" />
        </div>
        <div className="">
            <p className='uppercase'>{name}---</p>
            <p>{recipe}</p>
        </div>
        <p className='text-yellow-400'>{price}$</p>
    </div>
  )
}
MenuItems.propTypes = {
    menu: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      recipe: PropTypes.string
    })
  };
export default MenuItems
