import React, {useEffect, useMemo, useState} from 'react';
import Child from "./Child";

/**
 * 기능
 * 1. 부모 컴포넌트의 나이 증가
 * 2. 자식 컴포넌트의 나이 증가
 * 3. 자식을 memo로 최적화하고 객체를 전달
 *
 * 부모 컴포넌트가 랜더링 시 자식 컴포넌트는 랜더링 되지 않게 하기
 *
 */

//자식 컴포넌트는 변하는게 없는데 부모 컴포넌트 랜더링 될 때 따라서 랜더링 됨
function FamilyMemo() {
  const [parentAge, setParentAge] = useState(0);
  const incrementParentAge = () => {
    setParentAge(parentAge +1)
  }


  console.log("부모 컴포넌트가 랜더링 되었어요")
  const name = useMemo({
    lastName: '홍',
    firstName:'길동'
  },[])

  return (
    <div style={{border: '2px solid navy', padding: '10px'}}>
      <h1>부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />

    </div>
  );
}

export default FamilyMemo