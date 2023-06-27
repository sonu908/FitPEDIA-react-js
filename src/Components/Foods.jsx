import PropTypes from "prop-types";
// import Ingredients from "./Ingredients";
import last from'../assets/last.jpg'
import Footer from "./Footer";

function Foods({ recipie }) {
  // const [Ingredients,setingredients] = useState([])
  // const Ingre = recipie.ingredients
  console.log(recipie);
  return (
    <div>
        <img src={last} alt="" />
      <p className="border-x border-red-700 text-4xl p-5">
        {" "}
        Proper{" "}
        <span className="text-red-700">
          nutrition plays a crucial role in supporting muscle growth
        </span>{" "}
        and overall fitness.High-protein dishes that can help support your
        muscle-building goals:
      </p>

      <div className="flex mt-10 justify-evenly gap-16 p-16 border-x border-red-700">
        <div className="w-2/4">
          <h1 className="text-4xl text-red-700">{recipie.name}</h1>
          <p>{recipie.description}</p>
          <div className="w-3/4">
           
            <h1 className="text-3xl text-red-700 mt-6">Prepration</h1>
            {recipie.steps.map((step, index) => (
              <h3 className="mt-3" key={index}>
                {" "}
                ● {step}
              </h3>
            ))}
          </div>
        </div>
         <div className="w-2/4">
           {recipie.ingredients.map((ingredient, index) => (
              <button
                key={index}
                className="min-h-[60px] max-h-[60px] overflow-hidden p-2 m-2 gap-3 w-[100px] text-white rounded-xl bg-gradient-to-r border-red-700 border bg-transparent"
              >
                {ingredient.name}
              </button>
              
            ))}
          <img src={recipie.image} className="rounded-2xl" alt="" />

        </div> 
      </div>
      <Footer/>

    </div>
  );
}

Foods.propTypes = {
  recipie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    prepareTime: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    steps: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Foods;
