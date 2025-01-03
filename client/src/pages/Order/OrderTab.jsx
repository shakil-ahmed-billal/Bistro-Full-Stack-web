import FoodCard from "../../components/Shared/FoodCard"
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className="mx-auto grid md:grid-cols-3 gap-10">
                {items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
            </div>
        </div>
    )
}
OrderTab.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OrderTab

