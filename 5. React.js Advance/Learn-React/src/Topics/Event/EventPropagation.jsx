export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    // event.stopPropagation();
    console.log("Child clicked");
  };
  //   return (
  //     <section className="main-div full-container">
  //       <div className="g-div" onClickCapture={handleGrandParent}>
  //         Grand Parent
  //         <div className="p-div" onClickCapture={handleParentClick}>
  //           Parent
  //           <div className="c-div" onClickCapture={handleChildClick}>
  //             Child Div
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  return (
    <section className="main-div full-container">
      <div className="g-div" onClick={handleGrandParent}>
        Grand Parent
        <div className="p-div" onClick={handleParentClick}>
          Parent
          <div className="c-div" onClick={handleChildClick}>
            Child Div
          </div>
        </div>
      </div>
    </section>
  );
};
