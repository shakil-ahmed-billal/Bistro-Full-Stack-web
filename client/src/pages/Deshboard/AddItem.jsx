import { useForm } from "react-hook-form"
import SectionTitle from "../../components/Shared/SectionTitle"
import { Button, FileInput, Textarea, TextInput } from "flowbite-react"

const AddItem = () => {

    const {register , handleSubmit } = useForm()

    const handleForm = (data) =>{
        console.log(data)
    }

  return (
    <div>
        <div className="">
            <SectionTitle
            heading="Add an item"
            subHeading="What's Now"
            ></SectionTitle>
        </div>
        <div className="space-y-5">
            <TextInput></TextInput>
            <div className="grid grid-cols-2 gap-5 w-full">
                <TextInput></TextInput>
                <TextInput></TextInput>
            </div>
            <Textarea></Textarea>
            <FileInput></FileInput>
            <Button>Add Item</Button>
        </div>
    </div>
  )
}

export default AddItem
