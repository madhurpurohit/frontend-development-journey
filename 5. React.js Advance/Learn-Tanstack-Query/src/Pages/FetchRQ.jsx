import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteData, fetchPosts, updateData } from "../API/api";
import { OrbitProgress } from "react-loading-indicators";
import { NavLink } from "react-router";
import { useState } from "react";

export const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const getPostData = async () => {
    try {
      const res = await fetchPosts(pageNumber);
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();

  // To Fetch the Data.
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber], // This key will always be unique means if we have multiple queryKey than all are unique.
    queryFn: getPostData,
    // gcTime: 10000, // This is the cache time means how much time the data will be cached. This will be in milliseconds.
    staleTime: 100000, // This will set a timer after that if we trigger any api than it will call it & saved it's data in garbage(cache).
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
    placeholderData: keepPreviousData, // This will show previous data until the fresh data isn't load instead of shoeing a loading state.
  });

  // To delete the data.
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: (data, id) => {
      // console.log(data, id);
      queryClient.setQueryData(["posts", pageNumber], (curPost) => {
        return curPost?.filter((post) => post.id !== id);
      });
    },
  });

  // To update the data.
  const updateMutation = useMutation({
    mutationFn: (id) => updateData(id),
    onSuccess: (apiData, postId) => {
      console.log(apiData, postId);
      queryClient.setQueryData(["posts", pageNumber], (curPost) => {
        return curPost?.map((post) => {
          return post.id === postId
            ? { ...post, title: apiData.data.title }
            : post;
        });
      });
    },
  });

  // Handle loading data state.
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

  // Handle error data state.
  if (isError) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-800">
        <p className="text-white">{error.message || "Something went wrong!"}</p>
      </div>
    );
  }

  return (
    <>
      <div className="px-6 pt-24 bg-gray-800 pb-8 grid place-items-center">
        <div className="max-w-[1460px] p-5">
          <ul className="grid grid-cols-1 items-center space-y-6">
            {data?.map((curPost) => {
              const { id, title, body } = curPost;

              return (
                <li
                  key={id}
                  className="bg-gray-600 p-7 border-l border-white rounded-r-2xl text-white flex flex-col space-y-3"
                >
                  <NavLink to={`/fetchrq/${id}`}>
                    <p>{id}</p>
                    <p>Title: {title}</p>
                    <p>News: {body}</p>
                  </NavLink>
                  <div className="flex space-x-6 mt-2">
                    <button
                      className="bg-[#09ac73] w-22 px-5 py-2.5 rounded-2xl cursor-pointer transition-all duration-250 hover:shadow-[0px_7px_19px_0px_#18dc9b] hover:bg-[#18dc9b] text-black"
                      onClick={() => deleteMutation.mutate(id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-[#09ac73] w-22 px-5 py-2.5 rounded-2xl cursor-pointer transition-all duration-250 hover:shadow-[0px_7px_19px_0px_#18dc9b] hover:bg-[#18dc9b] text-black"
                      onClick={() => updateMutation.mutate(id)}
                    >
                      Update
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex space-x-6 mt-8 items-center justify-center tracking-widest">
            <button
              className={`bg-[#09ac73] px-5 py-2.5 rounded-2xl cursor-pointer transition-all duration-250 hover:shadow-[0px_7px_19px_0px_#18dc9b] hover:bg-[#18dc9b] ${
                pageNumber === 0 ? "text-gray-500" : "text-black"
              }`}
              onClick={() => setPageNumber((prev) => prev - 3)}
              disabled={pageNumber === 0 ? true : false}
            >
              Prev
            </button>
            <h2 className="text-white font-bold text-2xl">
              {pageNumber / 3 + 1}
            </h2>
            <button
              className="bg-[#09ac73] px-5 py-2.5 rounded-2xl cursor-pointer transition-all duration-250 hover:shadow-[0px_7px_19px_0px_#18dc9b] hover:bg-[#18dc9b] text-black"
              onClick={() => setPageNumber((prev) => prev + 3)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
