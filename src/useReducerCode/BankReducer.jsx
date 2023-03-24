import React, {useEffect, useReducer, useState} from 'react';

//reducer -> state를 업데이트 하는 역할(은행)
//dispatch -> state 업데이트를 위한 요구
//action -> 요구 내용

/**
 * 기능
 * 1. 1000만원 단위로 출금과 입금을 할 수 있다.
 * 2. 통장의 잔액과 입력한 금액을 표시한다.
 */

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw'
}

const reducer = (state, action) => {
  console.log('reducer가 일을 합니다.', state, action)
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload
    case ACTION_TYPES.withdraw:
      return state - action.payload
    default:
      return state
  }
}

function BankReducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영</h2>
      <p>잔고 : {money}</p>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step={"1000"}
      />
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.deposit, payload: number});
      }}>예금</button>
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.withdraw, payload: number});
      }}>출금</button>
    </div>
  );
}

export default BankReducer