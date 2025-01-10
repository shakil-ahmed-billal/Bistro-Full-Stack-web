import { useQuery } from "@tanstack/react-query"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react"
import SectionTitle from "../../../components/Shared/SectionTitle"
import useAuth from "../../../hooks/useAuth"
import useAxiosSecure from "../../../hooks/useAxiosSecure"

const PaymentHistory = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: history = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/paymentHistory/${user?.email}`)
            return data
        }
    })

    return (
        <div>
            <SectionTitle
                heading="manage all items"
                subHeading="Hurry Up"
            ></SectionTitle>
            <Table striped>
                <TableHead>
                    <TableHeadCell>#</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>TransactionId</TableHeadCell>
                    <TableHeadCell>Date</TableHeadCell>
                    <TableHeadCell className="text-end">Status</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {history?.map((item, idx) => <TableRow key={item._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {item?.price}
                        </TableCell>
                        <TableCell>{item?.transactionId}</TableCell>
                        <TableCell>$ {item?.price}</TableCell>
                        <TableCell className="flex gap-2 content-end justify-end">
                            {item?.status}
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}

export default PaymentHistory
