import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";
import { fetchIndData } from "../../API/api";
import { OrbitProgress } from "react-loading-indicators";

export const FetchInd = () => {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchIndData(id),
  });

  if (isPending) {
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

  if (isError) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-800">
        <p className="text-white">{error.message || "Something went wrong!"}</p>
      </div>
    );
  }

  return (
    <>
      <div className="px-6 pt-24 h-[56vh] bg-gray-800 pb-8 grid place-items-center">
        <div className="max-w-[1460px] grid grid-cols-1 items-center space-y-6">
          <div
            key={id}
            className="bg-transparent p-7 text-white flex flex-col space-y-4"
          >
            <p>{id}</p>
            <p>Title: {data.title}</p>
            <p>News: {data.body}</p>
            <NavLink to="/">
              <button className="bg-[#09ac73] px-5 py-2.5 rounded-2xl cursor-pointer transition-all duration-250 hover:shadow-[0px_7px_19px_0px_#18dc9b] hover:bg-[#18dc9b] mt-8">
                Go Back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
