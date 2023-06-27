export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "5b821c9e2bmshb7349e5d97c26bfp1c19c6jsnb1ea2846c101",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchSearch = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
