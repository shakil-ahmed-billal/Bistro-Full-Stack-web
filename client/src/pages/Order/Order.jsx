import { Helmet } from 'react-helmet-async'
import orderImage from '../../assets/shop/banner2.jpg'
import SectionCover from "../../components/Shared/SectionCover"
const Order = () => {
    return (
        <div>
            <Helmet>
                <title>bistro || order</title>
            </Helmet>
            <SectionCover
                title={'Order Food'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                image={orderImage}
            ></SectionCover>
        </div>
    )
}

export default Order
