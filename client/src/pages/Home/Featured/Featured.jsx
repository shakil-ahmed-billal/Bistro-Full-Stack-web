import featuredImage from '../../../assets/home/featured.jpg'
import SectionTitle from "../../../components/Shared/SectionTitle"


const Featured = () => {
    return (
        <div className='featured-item bg-fixed mb-10'>
            <SectionTitle
                heading="Featured"
                subHeading="Our Featured Items"
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10 py-20 items-center bg-slate-400 bg-opacity-40 justify-between">
                <div className="w-full flex justify-end items-end ">
                    <img className='flex w-8/12 items-end' src={featuredImage} alt="" />
                </div>
                <div className="">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some ?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio magni recusandae, nulla fugit fuga veritatis sequi molestias officia minima, explicabo totam corrupti! Assumenda impedit natus tenetur qui, dolorum nam ex vitae. Repellat architecto corporis minima nihil facilis molestiae non quasi!</p>
                    <p className="btn-main">Button</p>
                </div>
            </div>
        </div>
    )
}

export default Featured
