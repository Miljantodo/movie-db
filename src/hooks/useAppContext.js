import { useContext } from "react";
import { Context } from "../App";

export default function useAppContext() {
  return useContext(Context);
}
