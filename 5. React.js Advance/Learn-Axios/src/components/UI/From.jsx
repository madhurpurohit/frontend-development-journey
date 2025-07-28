import { useEffect, useState } from "react";
import { addData, updateDataPut } from "../../api/PostApi";

export const Form = ({ data, setData, updateData, setUpdateData }) => {
  const [addPost, setAddPost] = useState({
    title: "",
    body: "",
  });

  const isEmpty = Object.keys(updateData).length === 0;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    updateData &&
      setAddPost({
        title: updateData.title || "",
        body: updateData.body || "",
      });
  }, [updateData]);

  //* Data Add.
  const addPostData = async () => {
    try {
      const res = await addData(addPost);
      //   console.log(res.data);

      if (res.status === 201) {
        setData(() => [...data, res.data]);
        setAddPost({ title: "", body: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //* Update Data.
  const updatePostData = async () => {
    try {
      const res = await updateDataPut(updateData.id, addPost);
      console.log(res);

      if (res.status === 200) {
        setData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === res.data.id ? res.data : curElem;
          });
        });

        setAddPost({ title: "", body: "" });
        setUpdateData({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const action = e.nativeEvent.submitter.value;

    if (action === "Add") addPostData();
    else if (action === "Edit") updatePostData();
  };

  return (
    <>
      <section className="section-form">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Add Title"
            required
            autoComplete="off"
            id="title"
            name="title"
            value={addPost.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Add Post"
            required
            autoComplete="off"
            id="body"
            name="body"
            value={addPost.body}
            onChange={handleInputChange}
          />

          <button type="submit" value={isEmpty ? "Add" : "Edit"}>
            {isEmpty ? "Add" : "Edit"}
          </button>
        </form>
      </section>
    </>
  );
};
