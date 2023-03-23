import React, {useEffect, useState} from 'react';

function CountEffect() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const  handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) =>{
    setName(e.target.value)
  }

  useEffect(() => {
    console.log('랜더링')
  },[])

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type={"text"} value={name} onChange={handleInputChange}/>
      <span>name : {name}</span>
    </div>
  );
}

export default CountEffect