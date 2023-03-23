import React, {useEffect, useState} from 'react';

const heavyWork = () => {
  console.log('엄청 무거운 작업');
  return ['철수', '영희'];
}

function InputState() {
  const [names, setName] = useState(() => heavyWork());
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  const handleUpload = () => {
    setName((prev) => {
      return [input, ...prev]
    })
  }

  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </div>
  );
}

export default InputState