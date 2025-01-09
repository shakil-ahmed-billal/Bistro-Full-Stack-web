import { Delete } from "lucide-react";
import { AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


const Cart = () => {

  const [cart] = useCart()
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0)
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()

  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {

        const { data } = await axiosSecure.delete(`/cart/${id}`)
        if (data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      }
    });
  }

  return (
    <div>
      <div className="w-full flex flex-col gap-8 lg:gap-0 lg:flex-row">

        {/* Left Column - Order Summary */}
        <div className="bg-gray-50 rounded-md p-4 lg:p-8 flex-1">

          {/* order summery */}
          <div>
            <div className="flex justify-between">
            <h2 className="text-[1.2rem] text-gray-700 font-semibold mb-6">Your order ({cart?.length})</h2>
            <Link to={'/dashboard/payment'}><Button>Order Now</Button></Link>
            </div>
            {/* food cart items */}
            <div className="border border-gray-200 rounded-md">
              {cart?.map(item => <div key={item._id} className="flex flex-col lg:flex-row lg:items-center gap-4 p-4">
                <div className="border relative border-gray-200 w-max rounded-md bg-white">
                  <img src={item.image} alt="Nike Air Zoom Pegasus 39"
                    className="w-20 h-20 object-cover rounded" />

                  <span
                    className="px-[0.45rem] rounded-full absolute bg-white -top-2 -right-2 z-30 text-[0.9rem] text-gray-800 border border-gray-200 shadow-sm">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center gap-[30px] mt-2">
                    <p className="text-sm text-gray-500">Rating: <b className="text-gray-800">{item?.rating}</b></p>
                    <p className="text-sm text-gray-500">ID: <b className="text-gray-800">{item?._id.slice(0,4)}</b>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span onClick={() => handleDelete(item._id)} className="font-medium text-red-600"><Delete></Delete></span>
                  <span className="font-medium">${item.price}</span>
                </div>
              </div>)}

            </div>
            {/* discount section oart */}
            <div className="mt-6">
              <h3 className="font-medium mb-2 text-[1rem] text-gray-800">Discount Code</h3>
              <div className="flex gap-2 relative">
                <img alt="discount/png" src="https://i.ibb.co.com/r7rF8xK/ticket-discount.png"
                  className="w-[25px] absolute transform top-[50%] translate-y-[-50%] left-2" />
                <input type="text" placeholder="BUYRI"
                  className="border w-full border-gray-200 bg-transparent outline-none focus:border-[#0FABCA] rounded pl-10 pr-3 py-2" />
                <button
                  className="absolute top-[50%] transform translate-y-[-50%] right-5 text-[0.9rem] text-[#0FABCA]">Apply
                </button>
              </div>
            </div>
            {/* price section part */}
            <div className="mt-8 space-y-2 border-t border-gray-200 pt-6">
              <div className="flex justify-between">
                <span className="text-[1rem] text-gray-500">Subtotal</span>
                <span className="text-[1rem] font-medium text-gray-800">${totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[1rem] text-gray-500">Shipping Cost</span>
                <span className="text-[1rem] font-medium text-gray-800">$8.00</span>
              </div>
              <div className="flex justify-between pb-3">
                <span className="text-[1rem] text-gray-500">Discount (10%)</span>
                <span className="text-[1rem] font-medium text-gray-800">-$13.00</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-5 font-medium">
                <span>Total</span>
                <span className="text-[1rem] font-medium text-gray-800">$51.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Checkout Form */}
        
      </div>
    </div>
  )
}

export default Cart
