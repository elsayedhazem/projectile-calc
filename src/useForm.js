import { useState } from "react";
import calculate from "./logic";

export default function useForm() {
  const initialInputValues = {
    initialVelocity: "",
    angle: "",
    initialHeight: "",
  };
  const [inputValues, setInputValues] = useState(initialInputValues);

  return {
    inputValues: inputValues,
    outputValues: calculate(inputValues),
    handleChange: (e) => {
      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value,
      });
    },
  };
}
