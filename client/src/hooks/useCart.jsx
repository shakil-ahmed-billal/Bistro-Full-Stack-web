import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'

const useCart = () => {

    const axiosPublic = useAxiosPublic()


    // tan stack query data load 
    const {data: cart , refetch} = useQuery({
        queryKey: ['cart'],
        queryFn: async ()=>{
            const {data} = await axiosPublic(`/cart`)
            return data
        }
    })

  return [cart , refetch]
}

export default useCart
