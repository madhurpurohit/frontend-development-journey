import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchInfinite } from "../API/api";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["pages"],
      queryFn: fetchInfinite,

      //* For always getting only 10 user data when we scroll in repeat.
      getNextPageParam: (lastPage, allPages) => {
        //   console.log("Last Page", lastPage, allPages);
        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
    });

  console.log(data);

  //! Infinite Scrolling Logic Start Here.
  //   const handleInfiniteFetch = () => {
  //     const bottom =
  //       window.innerHeight + window.scrollY >=
  //       document.documentElement.scrollHeight - 1;

  //     if (bottom && hasNextPage) {
  //       fetchNextPage();
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleInfiniteFetch);
  //     return () => window.removeEventListener("scroll", handleInfiniteFetch);
  //   }, [hasNextPage]);
  //! Infinite Scrolling Logic End Here.

  //todo Infinite Scrolling using React Intersection Observer.
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className="px-6 pt-24 bg-gray-800 pb-8 grid place-items-center">
      <div className="max-w-[1460px] p-5">
        {data?.pages?.map((page, index) => (
          <ul
            className="grid grid-cols-1 items-center space-y-6 mt-8"
            key={index}
          >
            {page.map((user) => (
              <li
                className="bg-gray-600 p-7 border-l border-white rounded-r-2xl text-white flex flex-col items-center space-y-3"
                key={user.id}
              >
                <p className="text-2xl">User: {user.login}</p>
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  width={100}
                  height={200}
                  className="rounded-[50%]"
                />
                <p className="capitalize">User Type: {user.user_view_type}</p>
                <a
                  href={user.url}
                  className="bg-[#09ac73] w-45 px-5 py-2.5 rounded-2xl cursor-pointer transition-all duration-250 hover:shadow-[0px_7px_19px_0px_#18dc9b] hover:bg-[#18dc9b] text-black mt-4"
                >
                  See Github Profile
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div ref={ref} className="text-white text-3xl text-center">
        {isFetchingNextPage
          ? "Loading More..."
          : hasNextPage
          ? "Scroll down to load more"
          : "No more users"}
      </div>
    </div>
  );
};
