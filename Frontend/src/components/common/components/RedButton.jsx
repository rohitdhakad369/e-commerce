/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const RedButton = ({ name, disabled = false }) => {
  return (
    <button
      className={`motion-safe:hover:animate-pulse text-sm md:text-base md:px-12 py-3 rounded px-6
    ${
      disabled
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : " bg-gray-800 text-white hover:bg-gray-600 transition-transform duration-1000 transform hover:translate-y-[-4px] "
    }
    `}
    > 
      {name}
    </button>
  );
};

RedButton.propTypes = {
  name: PropTypes.string.isRequired,
};
export default RedButton;
