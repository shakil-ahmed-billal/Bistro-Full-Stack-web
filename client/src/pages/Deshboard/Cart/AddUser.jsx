import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Delete, Edit, User } from "lucide-react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddUser = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure('/users',{
                headers: {
                    authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            return data
        }
    })

    console.log(users)

    const handleDelete = (id) => {
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

                const { data } = await axiosSecure.delete(`/user/${id}`)
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


    // user role update
    const handleUserRole = (id) =>{
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

                const { data } = await axiosSecure.patch(`/user/admin/${id}`)
                if (data.modifiedCount> 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    console.log(data)
                }
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <p className="mt-5 font-semibold text-xl">Total Users : {users?.length}</p>
                <Table striped>
                    <TableHead>
                        <TableHeadCell>#</TableHeadCell>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell className="">Role</TableHeadCell>
                        <TableHeadCell className="text-end">Action</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {users?.map((user, idx) => <TableRow key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell>{idx + 1}</TableCell>
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {user?.name}
                            </TableCell>
                            <TableCell>{user?.email}</TableCell>
                            <TableCell onClick={()=>handleUserRole(user._id)} className="cursor-pointer">{user?.role === "admin"? "Admin": <User></User>}</TableCell>
                            <TableCell className="flex gap-2 content-end justify-end">
                                <button><Edit></Edit></button>
                                <button onClick={() => handleDelete(user._id)}><Delete className="text-red-600"></Delete></button>
                            </TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default AddUser
