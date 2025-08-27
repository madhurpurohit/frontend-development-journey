import axios from "axios";

export const restaurantData = async () => {
  const proxyServer = "https://cors-anywhere.herokuapp.com/";
  // const proxyServer = "https://api.cors.lol/?url=";
  // const proxyServer = "https://api.allorigins.win/raw?url=";
  const swiggyApi =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

  const response = await axios.get(proxyServer + swiggyApi);
  // const response = await axios.get(proxyServer + encodeURIComponent(swiggyApi));

  // console.log(response);

  return (
    response?.data?.data?.cards?.flatMap(
      (c) =>
        c?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        c?.card?.gridElements?.infoWithStyle?.restaurants ||
        [],
    ) || []
  );
};
