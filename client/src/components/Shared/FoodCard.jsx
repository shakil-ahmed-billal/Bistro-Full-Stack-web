

import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useCart from '../../hooks/useCart';
const FoodCard = ({ item }) => {


    const { name , image , price , recipe ,_id} = item || {}
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    const [,refetch] = useCart()

    const handleCart = async() => {
        if(user && user?.email){
            const cartInfo = {
                menuId: _id,
                name,
                image,
                price,
                email: user?.email
            }
            const {data} = await axiosPublic.post(`/cart` , cartInfo)
            console.log(data)
            if(data.insertedId){
                refetch()
            }
        }
        if(!user){
            Swal.fire({
                title: "You are not Login?",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    // send the user login page
                    navigate('/login' , {state: location?.pathname})
                    
                }
              });
        }
        
    }

    return (
        <div>
            <div className="card dark:bg-gray-800  border-2 bg-base-100 shadow-xl rounded-none">
                <figure className="relative">
                    <img
                        src={image}
                        alt="Shoes" />
                        <p className="absolute top-5 right-5 bg-black px-3 py-2 text-yellow-300">$ {price}</p>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center ">
                        <button onClick={handleCart} className="btn-main ">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
FoodCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        recipe: PropTypes.string
    }).isRequired
};

export default FoodCard;
