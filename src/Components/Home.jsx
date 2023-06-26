import { useEffect, useState } from "react";
import Nav from "./Nav";
import { FetchSearch, exerciseOptions } from "../utilities/Search";
import CardsExer from "./CardsExer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Banner from "./Banner";
import HomeTWO from "../assets/HomeTWO.jpg";

function Home() {
  const [input, setInput] = useState([]);

  const [bodyparts, setBodyparts] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const [CurrentPage, setCurrentPage] = useState(1);

  const ResultsPerpage = 9;

  const indexOfLastPage = CurrentPage * ResultsPerpage;
  const IndexOffirstPage = indexOfLastPage - ResultsPerpage;

  const CurrentExercise = searchResults.slice(
    IndexOffirstPage,
    indexOfLastPage
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  const fetchData = async () => {
    const data_all_exercise = await FetchSearch(
      "https://exercisedb.p.rapidapi.com/exercises/",
      exerciseOptions
    );
    // Handle the fetched data here
    const filtered = await data_all_exercise.filter(
      (workout) =>
        workout.name.toLowerCase().includes(input) ||
        workout.bodyPart.toLowerCase().includes(input) ||
        workout.equipment.toLowerCase().includes(input) ||
        workout.target.toLowerCase().includes(input)
    );
    console.log(searchResults);
    setSearchResults(filtered);
  };

  useEffect(() => {
    const equipMent = async () => {
      const data = await FetchSearch(
        "https://exercisedb.p.rapidapi.com/exercises/equipmentList",
        exerciseOptions
      );

      console.log(data, "first log");
      setBodyparts(data);
    };
    equipMent();
  }, []);

  return (
    <div className="p-7">
      <Nav />
      <Banner />
      <section className="relative">
        <img src={HomeTWO} alt="" className="mt-9 rounded-xl w-full" />
        <section className="absolute top-0 left-0 right-0 bottom-0  bg-transparent">
          <div className="w-2/4 bg-transparent">
            <p className=" text-xl mt-6 tracking-widest">
              Discover a wide range of equipment options designed to target
              specific muscle groups effectively.{" "}
              <span className=" text-red-700">
                specific muscle groups effectively. From dumbbells and barbells
                for overall strength to resistance bands for isolated muscle
                activation, specific muscle groups effectively.{" "}
              </span>{" "}
              our equipment selection caters to diverse workout preferences
            </p>
            <p className="mt-6 text-xl text-red-700 tracking-widest">
              Kickstart with these :{" "}
            </p>
            <div className=" bg-transparent max-w-[70%] ">
              {bodyparts.map((bodypart, index) => (
                <button
                  onClick={() => {
                    setInput(bodypart);
                    fetchData();
                    window.scrollTo({ top: 1800, behavior: "smooth" });
                  }}
                  className="btn btn-outline m-3 bg-transparent tracking-widest hover:bg-red-700 hover:text-white"
                  key={index}
                >
                  {bodypart}
                </button>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section>
        <div>
          <p className="text-center text-2xl tracking-widest mt-14">
            search for
            <span className=" text-red-700 ">
              {" "}
              equipment, target-muscle, workout-type
            </span>{" "}
          </p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.toLocaleLowerCase())}
            placeholder="Search text"
            className="w-full bg-black border border-red-700 p-4 rounded-xl mt-6"
          />
          <div className=" text-center">
            <button
              className="h-[40px] p-2 mt-4 w-[150px] text-white tracking-widest rounded-xl bg-gradient-to-r from-red-700 to-red-400"
              onClick={fetchData}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-3 ">
        {CurrentExercise.map((result, index) => (
          <CardsExer key={index} result={result} />
        ))}
      </div>
      <Stack spacing={2}>
        {searchResults.length > 9 && (
          <Pagination
            color="primary"
            count={Math.ceil(searchResults.length / ResultsPerpage)}
            page={CurrentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </div>
  );
}

export default Home;
