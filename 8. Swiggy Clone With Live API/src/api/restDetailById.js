import axios from "axios";

export const getData = async (id) => {
  const proxyServer = "https://cors-anywhere.herokuapp.com/";
  // const proxyServer = "https://api.cors.lol/?url=";
  // const proxyServer = "https://api.allorigins.win/raw?url=";
  const swiggyServer = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

  const data = await axios.get(proxyServer + swiggyServer);
  // const data = await axios.get(proxyServer + encodeURIComponent(swiggyServer));

  // console.log(data?.data?.data);

  return data?.data?.data;
};
