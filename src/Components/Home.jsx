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
            <p className=" text-xl">
              Welcome to FITpedia, your ultimate resource for everything related
              to muscle building and strength training. Whether you're a
              beginner looking to get started or an experienced lifter aiming to
              take your gains to the next level, we've got you covered. Explore
              our comprehensive guides, workout routines, nutrition tips, and
              expert advice to sculpt your physique and achieve your
              muscle-building goals.
            </p>
            <div className=" bg-transparent">
              {bodyparts.map((bodypart, index) => (
                <button
                  onClick={() => {
                    setInput(bodypart);
                    fetchData();
                    window.scrollTo({ top: 1800, behavior: "smooth" });
                  }}
                  className="btn btn-outline m-3 bg-transparent"
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
          <p className="text-center">Search</p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.toLocaleLowerCase())}
            placeholder="Search text"
            className="w-full bg-black"
          />
          <button onClick={fetchData}>Search</button>
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
