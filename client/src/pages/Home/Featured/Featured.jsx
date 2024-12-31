import featuredImage from '../../../assets/home/featured.jpg'
import SectionTitle from "../../../components/Shared/SectionTitle"


const Featured = () => {
    return (
        <div className='featured-item mb-10'>
            <SectionTitle
                heading="Featured"
                subHeading="Our Featured Items"
            ></SectionTitle>
            <div className="flex py-20 items-center justify-between">
                <div className="w-full">
                    <img className='flex justify-end items-end' src={featuredImage} alt="" />
                </div>
                <div className="">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some ?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio magni recusandae, nulla fugit fuga veritatis sequi molestias officia minima, explicabo totam corrupti! Assumenda impedit natus tenetur qui, dolorum nam ex vitae. Repellat architecto corporis minima nihil facilis molestiae non quasi!</p>
                    <p className="btn btn-outline">Button</p>
                </div>
            </div>
        </div>
    )
}

export default Featured
