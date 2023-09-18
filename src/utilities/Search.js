export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "f8b4715b19msh2fb3ea4b0c7d4d9p10516cjsne92f624e6298",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchSearch = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
