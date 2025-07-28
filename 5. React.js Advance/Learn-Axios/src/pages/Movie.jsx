// import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/UI/Card";
import { getMovie } from "../services/GetService";

export const Movie = () => {
  const [data, setData] = useState([]);

  const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=9eb476a2&s=Titanic&page=1";

  const getData = async () => {
    try {
      //   const res = await axios.get(API);
      const res = await getMovie();

      // console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="container grid grid-four--cols">
      {data.map((curElem) => {
        return <Card key={curElem.imdbID} movieData={curElem} />;
      })}
    </ul>
  );
};
