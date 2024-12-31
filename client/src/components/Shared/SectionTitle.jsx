
import PropTypes from 'prop-types';

const SectionTitle = ({heading , subHeading}) => {
  return (
    <div>
      <div className="w-4/12 mx-auto mt-10 py-8">
        <h1 className="font-bold text-center uppercase text-yellow-400">---{subHeading}---</h1>
        <p className="text-center uppercase text-3xl  mt-2 border-y-2 py-4">{heading}</p>
      </div>
    </div>
  )
}

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle
