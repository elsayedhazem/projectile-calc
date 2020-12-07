import { useState } from "react";
import calculate from "./logic";

export default function useForm() {
  const initialInputValues = {
    initialVelocity: "",
    angle: "",
    initialHeight: "",
  };
  const initialOutputValues = {
    travelTime: 0,
    maxHeight: 0,
    horizontalDistance: 0,
  };
  const [inputValues, setInputValues] = useState(initialInputValues);
  const [outputValues, setOutputValues] = useState(initialOutputValues);

  return {
    inputValues: inputValues,
    outputValues: outputValues,
    handleChange: (e) => {
      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value,
      });
      setOutputValues(calculate(inputValues));
    },
  };
}
