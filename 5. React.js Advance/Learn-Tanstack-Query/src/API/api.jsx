import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// To fetch the data.
// export const fetchPosts = () => {
//   return api.get("/posts");
// };

// To fetch data with limited post
export const fetchPosts = (pageNumber) => {
  return api.get(`/posts?_start=${pageNumber}&_limit=3`);
};

// To fetch individual data.
export const fetchIndData = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// To delete data.
export const deleteData = (id) => {
  return api.delete(`/posts/${id}`);
};

// To update data.

export const updateData = (id) => {
  return api.patch(`/posts/${id}`, { title: "I have updated this news." });
};
