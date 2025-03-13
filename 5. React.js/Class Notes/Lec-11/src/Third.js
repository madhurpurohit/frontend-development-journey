import { useContext } from "react";
import GlobalContext from "./Global";

export default function Third() {
  const data = useContext(GlobalContext);

  return <h1>{data} is Web Developer.</h1>;
}
