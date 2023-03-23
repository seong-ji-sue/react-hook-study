import React, {useEffect, useState} from 'react';

function InputState() {

  const [names, setName] = useState(["홍길동", "김민수"]);



  return (
    <div>
      <input type={"text"}/>
      <button>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </div>
  );
}

export default InputState