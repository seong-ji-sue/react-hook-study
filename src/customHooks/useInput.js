import {useState} from "react";

//독립적으로 사용
export function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    setInputValue('')
    submitAction(inputValue)
  }

  return [inputValue, handleChange, handleSubmit]
}