import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react"
import useMenu from "../../hooks/useMenu"
import { Delete, Edit } from "lucide-react";
import SectionTitle from "../../components/Shared/SectionTitle";
import { Link } from "react-router-dom";



const ManageItem = () => {

    const [menus] = useMenu()


    return (
        <div>
            <SectionTitle
            heading="manage all items"
            subHeading="Hurry Up"
            ></SectionTitle>
            <Table striped>
                <TableHead>
                    <TableHeadCell>#</TableHeadCell>
                    <TableHeadCell>Image</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell className="text-end">Action</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {menus?.map((item, idx) => <TableRow key={item._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <img className="w-16 rounded-md h-16 object-cover" src={item?.image}></img>
                        </TableCell>
                        <TableCell>{item?.name}</TableCell>
                        <TableCell>$ {item?.price}</TableCell>
                        <TableCell className="flex gap-2 content-end justify-end">
                            <Link to={`/dashboard/updateItem/${item._id}`}><Edit></Edit></Link>
                            <button ><Delete className="text-red-600"></Delete></button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}

export default ManageItem
