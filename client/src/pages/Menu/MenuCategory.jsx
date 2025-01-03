import MenuItems from "../../components/Shared/MenuItems"
import PropTypes from 'prop-types';
import SectionCover from "../../components/Shared/SectionCover";
import { Link } from "react-router-dom";


const MenuCategory = ({ item , coverImage , title , description}) => {
    return (
        <div>
            {title && <SectionCover
            title={title}
            description={description}
            image={coverImage}
            ></SectionCover>}
            <div className="w-8/12 mx-auto grid grid-cols-2 gap-3 pb-12">
                {
                    item.map(menu => <MenuItems key={menu._id} menu={menu}></MenuItems>)
                }
            </div>
            <div className="flex justify-center mb-10">
            <div className="btn-main"><Link to={`/order/${title}`}>Order Now</Link></div>
            </div>
        </div>
    )
}
MenuCategory.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        // add other properties of menu object if needed
    })).isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default MenuCategory

