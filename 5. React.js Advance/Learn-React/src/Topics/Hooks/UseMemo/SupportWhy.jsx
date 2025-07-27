import { memo, useRef } from "react";

const SupportWhy = ({ bioData }) => {
  const render = useRef(0);

  return (
    <div>
      <p>
        Nothing changed here, but I've now rendered:{" "}
        <span className="text-orange-500">{render.current++} times(s)</span>
      </p>
      <p className="mt-4">
        I am {bioData.name}, & my age is {bioData.age}
      </p>
    </div>
  );
};

export default memo(SupportWhy);
