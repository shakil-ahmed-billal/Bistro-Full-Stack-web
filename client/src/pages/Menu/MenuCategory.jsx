import MenuItems from "../../components/Shared/MenuItems"
import PropTypes from 'prop-types';
import SectionCover from "../../components/Shared/SectionCover";

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
        </div>
    )
}
MenuCategory.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        // add other properties of menu object if needed
    })).isRequired,
};

export default MenuCategory

