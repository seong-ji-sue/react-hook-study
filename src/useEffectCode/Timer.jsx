import React, {useEffect, useState} from 'react';

function Timer() {

  useEffect(() => {
    const timer = setInterval(()=>{
      console.log('타이머 돌아감')
    },1000)

    return () => {
      clearInterval(timer)
      console.log('타이머 종료')
    }
  })

  return (
    <div>
      <span>타이머를 시작</span>
    </div>
  );
}

export default Timer