import React, {useEffect, useState} from 'react';
import {useFetch} from "./useFetch";

const baseUrl = 'https://jsonplaceholder.typicode.com'

function FetchCustomHook() {
  // const {data, fetchUrl} = useFetch(baseUrl, 'users');

  const {data: userData} = useFetch(baseUrl, 'users');
  const {data: postData} = useFetch(baseUrl, 'posts');
  const {data: todoData} = useFetch(baseUrl, 'todos');

  return (
    <div>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      {postData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      {todoData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
    </div>
  );
}

export default FetchCustomHook