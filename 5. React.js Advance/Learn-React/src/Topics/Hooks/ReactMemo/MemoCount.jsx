import { memo, useRef } from "react";

//* Method1:-
// export const MemoCount = memo(() => {
//   const render = useRef(0);

//   return (
//     <div>
//       <p>
//         Nothing changed here, but I've now rendered:{" "}
//         <span className="text-orange-500">{render.current++} times(s)</span>
//       </p>
//     </div>
//   );
// });

//* Method2:-
const MemoCount = () => {
  const render = useRef(0);

  return (
    <div>
      <p>
        Nothing changed here, but I've now rendered:{" "}
        <span className="text-orange-500">{render.current++} times(s)</span>
      </p>
    </div>
  );
};

// export memo(MemoCount); // It won't work because here it need export default.
export default memo(MemoCount);
