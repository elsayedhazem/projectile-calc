import { useState } from "react";
import calculate from "./logic";

export default function useForm(initialInputValues) {
  const [inputValues, setInputValues] = useState(initialInputValues);
  const [results, setResults] = useState();

  return {
    inputValues: inputValues,
    results: results,
    handleChange: (e) => {
      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value,
      });
    },
    handleSubmit: (e) => {
      const { initialVelocity, angle, initialHeight } = inputValues;
      setResults(calculate(initialVelocity, angle, initialHeight));
      setInputValues(initialInputValues);
    },
  };
}
