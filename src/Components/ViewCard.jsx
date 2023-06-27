import { useParams } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";

import { FetchSearch, exerciseOptions } from "../utilities/Search";
import { useEffect, useState } from "react";
import Foods from "./Foods";
import CountdownTimer from "./CountdownTimer";

function ViewCard() {
  const [exerciseData, setExerciseData] = useState(null);

  const [recipie, setRecipie] = useState("");

  const { id } = useParams();

  const exerciseParagraphs = [
    "This is a great exercise for building strong leg muscles and improving overall lower body strength. It primarily targets the quadriceps, hamstrings, and glutes. Known as the 'Barbell Squat,' this compound movement is highly effective in developing lower body power and stability. It requires the use of a barbell and a squat rack for proper execution.",
    "If you're looking to strengthen your core and enhance your overall stability, this exercise is perfect for you. It focuses on the abdominal muscles and lower back, providing a challenging workout for your core. Known as the 'Plank,' this bodyweight exercise can be performed anywhere without the need for any equipment.",
    "Are you aiming to sculpt your biceps and build arm strength? Look no further! This exercise is specifically designed to target the biceps and forearm muscles. Called the 'Dumbbell Curl,' it involves lifting dumbbells in a controlled manner, activating the biceps.",
    "Looking to work on your cardiovascular endurance and burn calories? Try this high-intensity exercise known as 'Jumping Jacks.' It engages multiple muscle groups, including the legs, arms, and core, while also increasing your heart rate. No equipment is required for this exercise, making it convenient and accessible for everyone.",
    "Are you seeking a challenging full-body workout that targets multiple muscle groups simultaneously? Look no further than the 'Kettlebell Swing.' This dynamic exercise engages the hips, glutes, hamstrings, and core, providing a total body workout. All you need is a kettlebell to perform this exercise effectively.",
  ];

  const [instructions, setinstructions] = useState();

  function DisplayQuotes() {
    const ToDisplayParaINdex = Math.floor(
      Math.random() * exerciseParagraphs.length
    );
    setinstructions(exerciseParagraphs[ToDisplayParaINdex]);
  }

  const Recipieoptions = async () => {
    const options = {
      method: "GET",
      url: "https://low-carb-recipes.p.rapidapi.com/random",
      headers: {
        "X-RapidAPI-Key": "5b821c9e2bmshb7349e5d97c26bfp1c19c6jsnb1ea2846c101",
        "X-RapidAPI-Host": "low-carb-recipes.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const result = response.data;
      setTimeout(() => {
        setRecipie(result);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getExercise = async () => {
      try {
        setTimeout(async () => {
          const response = await FetchSearch(
            `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
            exerciseOptions
          );
          setExerciseData(response);
          console.log(response);
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    };

    getExercise();
    DisplayQuotes();
    Recipieoptions();
  }, [id]);

  return (
    <div className="p-3 h-full">
      <Nav />
      {exerciseData ? (
        <div className=" h-screen mt-8">
          <section className="flex p-4">
            <div className="col w-1/2 flex justify-center">
              <img
                src={exerciseData.gifUrl}
                className="w-[500px] rounded-2xl border-2 border-solid border-red-700"
                alt=""
              />
            </div>

            <div className="col w-1/2 bg-transparent float-left flex-col justify-evenly">
              <h1 className="text-red-700 text-4xl">{exerciseData.name}</h1>
              <h1> Equipment : {exerciseData.equipment} </h1>
              <div className="mt-4 p-3">
                <p>target</p>
                <button className="h-[40px] p-2 w-[150px] text-white tracking-widest rounded-xl bg-gradient-to-r from-red-700 to-red-400">
                  {" "}
                  {exerciseData.target}{" "}
                </button>{" "}
                <button className="h-[40px] p-2 w-[150px] ml-4 text-white tracking-widest rounded-xl bg-gradient-to-r from-red-700 to-red-400">
                  {exerciseData.bodyPart}
                </button>
              </div>{" "}
              <p className="w-2/4 p-3 mt-4">{instructions}</p>
              <CountdownTimer/>
            </div>
          </section>
          {recipie ? (
            <Foods recipie={recipie} />
          ) : (
            <div>
              <h1>Some error occured</h1>
            </div>
          )}{" "}
        </div>
      ) : (
        <div className="absolute top-5 left-0 right-0 bottom-0 flex flex-col items-center bg-transparent justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
}

export default ViewCard;
