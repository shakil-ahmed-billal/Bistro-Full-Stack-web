
import { PropTypes } from 'prop-types';
import { Parallax } from 'react-parallax';


const SectionCover = ({ image, title, description }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={image}
                bgImageAlt="the dog"
                className='h-[600px] w-full object-cover bg-center '
                strength={-200}>
                <div
                    className="hero h-[600px] ">
                    <div className=""></div>
                    <div className="hero-content  text-neutral-content text-center ">
                        <div className=" w-7/12 py-10 hero-overlay bg-opacity-80">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5 w-10/12 mx-auto">{description}</p>
                        </div>
                    </div>
                </div>
                <div style={{}} />
            </Parallax>
        </div>
    )
}
SectionCover.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default SectionCover
