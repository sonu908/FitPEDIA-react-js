// import axios from "axios";

export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "74d9a9145cmshb482b1fa144563bp188a8fjsn79509e2286fc",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchSearch = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

// export const allequipment = async () => {
//   const options = {
//     method: "GET",
//     url: "https://exercisedb.p.rapidapi.com/exercises/equipmentList",
//     headers: {
//       "X-RapidAPI-Key": "494b40d3e5mshc05354a8b490110p169c4djsn2125a6a78c44",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data, "on js file");
//   } catch (error) {
//     console.error(error);
//   }
// };
