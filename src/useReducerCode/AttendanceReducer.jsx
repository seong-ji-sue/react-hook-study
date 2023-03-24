import React, {useEffect, useReducer, useState} from 'react';
import Student from "./Student";
import students from "./Student";
import student from "./Student";

/**
 * 기능
 * 1. 총 학생 수 체크
 * 2. 학생 이름 입력 후 추가 버튼 클릭 시 학생 목록 추가
 * 3. 학생 목록에서 삭제버튼 클릭 시 목록에서 삭제
 * 4. 학생목록에서 학생을 클릭하면 isHere(출석) 체크
 * * css 속성
 * textDecoration: isHere ? 'line-through' : "none",
 * color: isHere ? 'gray' : "black"
 * * 학생 리스트
 * id: Date.now(), name:'James', isHere:false
 */

//action type
const ACTION_TYPE = {
  add: 'add-student',
  delete: 'delete-student',
  mark: 'mark-student'
}

//reducer
const reducer = (state,action) => {
  console.log(state)
  switch (action.type) {
    case ACTION_TYPE.add:
      const name = action.payload.name
      const newStudent = {id: Date.now(), name, isHere:false}
      return {
        count: state.count +1,
        students:[newStudent, ...state.students]
      }
    case ACTION_TYPE.delete:
      return {
        count: state.count -1,
        students: state.students.filter((studentInfo)=> {
          return studentInfo.id !== action.payload.id
        })
      }
    case ACTION_TYPE.mark:
      return {
        count: state.count,
        students: state.students.map((studentInfo) => {
          if(studentInfo.id === action.payload.id){
            return{...studentInfo, isHere: !studentInfo.isHere}
          }
          return studentInfo;
        })
      }
    default:
      return state
  }

}

//state 초기값
const initialState = {
  count: 0,
  students: []
}

function AttendanceReducer() {
  const [name, setName] = useState('');
  //useReducer 사용
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);


  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type={"text"}
        placeholder={'이름을 입력해주세요'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => {
        dispatch({type: ACTION_TYPE.add, payload:{name}})
        setName('')
      }}>추가</button>
      {studentsInfo.students.map((studentInfo)=> {
        return <Student
          key={studentInfo.id}
          name={studentInfo.name}
          dispatch={dispatch}
          actionType={ACTION_TYPE}
          id={studentInfo.id}
          isHere={studentInfo.isHere}
        />
      })}
    </div>
  );
};

export default AttendanceReducer;