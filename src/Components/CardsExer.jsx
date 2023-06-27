import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardsExer({ result }) {
  return (
    <Link to={`/exercise/${result.id}`}>
      <div className="w-[350px] m-auto mt-20 card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={result.gifUrl}
            alt="Shoes"
            className=" rounded-2xl"
            loading="lazy"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{result.target}</h2>
          <p>{result.name}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </Link>
  );
}

CardsExer.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardsExer;
