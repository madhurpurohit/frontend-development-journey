export function Interview1() {
  const student = [];

  return (
    <>
      {/* In the below code if array length is greater than 0 than it print No Student Found, & if length is 0 than it prints 0. */}
      {/* <p>{student.length && "No Student Found"}</p> */}

      {/* To tackle the above code weird behavior even or length is 1 than it says No Student Found. We firstly tackle if length is 0 than our left hand side should always be true.  */}

      {/* Method1:- */}
      {/* <p>{student.length === 0 && "No Student Found"}</p> */}

      {/* Method2:- */}
      {/* <p>{!student.length && "No Student Found"}</p> */}

      {/* Method2:- */}
      <p>{Boolean(!student.length) && "No Student Found"}</p>
      <p>Total Number of Students: {student.length}</p>
    </>
  );
}
