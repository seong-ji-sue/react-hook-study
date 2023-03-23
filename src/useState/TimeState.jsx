import React, {useEffect, useState} from 'react';

function TimeState() {
    //state : time, state change : setTime
    const [time, setTime] = useState(1)

    //Update 버튼 클릭 시 이벤트로 함수 실행
    const handleClick = () =>{
        // setTime(time + 1)//state 변경
        let newTime;
        if(time >= 12) newTime = 1
        else newTime = time + 1;
        setTime(newTime);
    }

    return (
        <div>
            <span>현제 시각 : {time}시</span>
            <button onClick={handleClick}>Update</button>
        </div>
    );
}

export default TimeState