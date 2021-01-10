import { useState } from "react";

function useForm(callback) {
  const [inputs, setInputs] = useState({});
  function handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
  }
  function handleInput(event) {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  }
  return { handleSubmit, handleInput, inputs };
}

export default useForm;
