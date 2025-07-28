import { useEffect, useState } from "react";
import { deleteData, getData } from "../api/PostApi";
import { Form } from "../components/UI/From";

export const CRUDOperations = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({});

  //* Get Data
  const getAllData = async () => {
    const res = await getData();
    // console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  //* Delete Method
  const handleDeleteButton = async (id) => {
    try {
      const res = await deleteData(id);

      if (res.status === 200) {
        const updatedData = data.filter((curPost) => {
          return curPost.id !== id;
        });

        setData(updatedData);
      } else {
        console.log("Failed to delete the post:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //* Update Data.
  const handleEditButton = (curElem) => setUpdateData(curElem);

  return (
    <>
      {/* Add & Update Data Go To Form Component. */}
      <Form
        data={data}
        setData={setData}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />

      {/* Delete Data Go To Posts Component. */}
      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            return (
              <li key={curElem.id} className="list-decimal">
                <p className="mt-5">Title: {curElem.title}</p>
                <p className="mt-5">News: {curElem.body}</p>

                <div className="mt-7">
                  <button onClick={() => handleEditButton(curElem)}>
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleteButton(curElem.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
