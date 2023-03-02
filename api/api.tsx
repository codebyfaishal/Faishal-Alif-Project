import axios from "axios";

export const apiGetList = () => {
  return axios.get("https://v2.jokeapi.dev/categories", {
  });
};

export const apiGetListDetail = (selectedCategory) => {
  console.log("apiGetPokemonsDetails", selectedCategory)
  return axios.get(`https://v2.jokeapi.dev/joke/${selectedCategory}?type=single&amount=2`);
};
