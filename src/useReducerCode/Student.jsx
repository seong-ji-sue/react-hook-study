import React, {useEffect, useState} from 'react';

function Student({name,id, dispatch, actionType,isHere}) {
  return (
    <div
      style={{
        textDecoration: isHere ? 'line-through' : "none",
        color: isHere ? 'gray' : "black"
      }}
      onClick={() => {
        dispatch({type: actionType.mark, payload:{id}})
      }}
    >
      <span>{name}</span>
      <button onClick={() => {
        dispatch({type: actionType.delete, payload:{id}})
      }}>삭제</button>
    </div>
  );
}

export default Student