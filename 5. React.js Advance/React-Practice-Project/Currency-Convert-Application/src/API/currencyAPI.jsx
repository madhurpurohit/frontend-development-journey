import axios from "axios";

//* Details About API key.
/*
Your API Key: 5a344caddba24018403027a2
Example Request: https://v6.exchangerate-api.com/v6/5a344caddba24018403027a2/latest/USD

Website:- https://app.exchangerate-api.com/dashboard/confirmed
*/

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/5a344caddba24018403027a2",
});

//* Fetch the currency Convert
export const fetchConvertedCurrency = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
