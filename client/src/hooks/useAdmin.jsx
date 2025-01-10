import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useAdmin = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin= false , isPending} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/admin/${user?.email}`)
            return data?.admin
        },
        
    })
    return [isAdmin , isPending]
}

export default useAdmin
