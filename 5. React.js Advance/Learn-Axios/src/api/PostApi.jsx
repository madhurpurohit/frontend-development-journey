import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//* Get Method to fetch the data.
export const getData = () => {
  return api.get("/posts");
};

//* Delete Method  to delete data.
export const deleteData = (id) => {
  return api.delete(`/posts/${id}`);
};

//* Post Method to add data.
export const addData = (data) => {
  return api.post("/posts", data);
};

//* Patch Method to update data.
export const updateDataPut = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
