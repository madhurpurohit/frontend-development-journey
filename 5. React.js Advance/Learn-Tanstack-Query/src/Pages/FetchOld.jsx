import { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";
import { OrbitProgress } from "react-loading-indicators";

export const FetchOld = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      res.status === 200 ? setData(res.data) : [];
      setIsLoading(false);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-800">
        <OrbitProgress
          color="#ffffff"
          size="medium"
          text=""
          textColor=""
          speedPlus={0}
          easing="ease-in-out"
        />
      </div>
    );
  }

  return (
    <>
      <div className="px-6 pt-24 bg-gray-800 pb-8 grid place-items-center">
        <ul className="max-w-[1460px] grid grid-cols-1 items-center space-y-6">
          {data.map((curPost) => {
            const { id, title, body } = curPost;

            return (
              <li
                key={id}
                className="bg-gray-600 p-7 border-l border-white rounded-r-2xl text-white flex flex-col space-y-3"
              >
                <p>Title: {title}</p>
                <p>News: {body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
