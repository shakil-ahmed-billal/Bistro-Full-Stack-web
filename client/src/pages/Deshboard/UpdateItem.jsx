import { Button, FileInput, Label, Select, Textarea, TextInput } from "flowbite-react"
import { useForm } from "react-hook-form"
import { imageUpload } from "../../API/utils"
import SectionTitle from "../../components/Shared/SectionTitle"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../hooks/useAxiosPublic"


const UpdateItem = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const {id} = useParams()


    const {data} = useQuery({
        queryKey: ['menuDetails'],
        queryFn: async()=>{
            const {data} = await axiosPublic(`/menu/${id}`)
            return data
        }
    })

    const {name , category , price , recipe } = data || {}

    const onSubmit = async (data) => {

        // if(errors)return
        const image = data.image[0]
        const imageURL = image&&  await imageUpload(image)

        const menu = {
            name: data.name,
            category: data.category,
            price: parseInt(data.price),
            recipe: data.recipe,
            image: imageURL
        }

        console.log(menu, image)
        // add menu items for database 
        const { data: result } = await axiosSecure.patch(`/updateItem/${id}`, menu)
        console.log(result)
    }

    return (
        <div>
            <div className="">
                <SectionTitle
                    heading="Add an item"
                    subHeading="What's Now"
                ></SectionTitle>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-10/12 mx-auto border rounded-md py-16 px-10">
                <div className="">
                    <Label>Recipe Name</Label>
                    <TextInput defaultValue={name} {...register('name')}></TextInput>
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                    <div className="">
                        <Label>Category</Label>
                        <Select defaultValue={category} {...register('category')}>
                            <option selected disabled value={''}>Select a categories</option>
                            <option value={'pizza'}>Pizza</option>
                            <option value={'soup'}>Soup</option>
                            <option value={'dessert'}>Pizza</option>
                            <option value={'salad'}>Salad</option>
                            <option value={'drinks'}>Drinks</option>
                        </Select>
                    </div>
                    <div className="">
                        <Label>Price*</Label>
                        <TextInput defaultValue={price} {...register('price')}></TextInput>
                    </div>
                </div>
                <div className="">
                    <Label>Recipe Details*</Label>
                    <Textarea defaultValue={recipe} {...register('recipe')} rows={"5"}></Textarea>
                </div>
                <FileInput {...register('image')}></FileInput>
                <button><Button>Add Items</Button></button>
            </form>
        </div>
    )
}

export default UpdateItem

