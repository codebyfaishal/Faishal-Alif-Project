import axios from "axios";

export const apiGetListAnnouncements = () => {
  return axios.get("https://app.rumahsiapkerja.com/rsk-backend/v3/website/announcements/active", {
  });
};

export const apiGetListBanner = () => {
  return axios.get("https://app.rumahsiapkerja.com/rsk-backend/v3/website/banners?page=0&size=100&isActive=true&location=welcome", {
  });
};

export const apiGetListHighlight = () => {
  return axios.get("https://app.rumahsiapkerja.com/rsk-backend/v3/highlights?isActive=true", {
  });
};

export const apiGetListHeader = () => {
  return axios.get("https://app.rumahsiapkerja.com/rsk-backend/v3/website/headers?numberOfCorePrograms=5&location=welcome", {
  });
};

export const apiGetListRecommendation = () => {
  return axios.get("https://app.rumahsiapkerja.com/rsk-backend/v2/website/core-programs/randomized?page=1&size=4&stamatus=PUBLISHED,APPROVED", {
  });
};


export const apiGetListDetail = (selectedCategory) => {
  console.log("apiGetPokemonsDetails", selectedCategory)
  return axios.get(`https://v2.jokeapi.dev/joke/${selectedCategory}?type=single&amount=2`);
};
