import React, {useEffect, useState} from 'react';
import {useInput} from "./useInput";

function displayMessage(message) {
  alert(message)
}

function InputCustomHook() {
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>

    </div>
  );
}

export default InputCustomHook