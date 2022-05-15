import React, { useContext } from 'react'
import { UserCreateContext } from '../App'; 
import { useFetch } from '../Components/CustomHook/CustomeHook';

export default function ContextPage() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const person = useContext(UserCreateContext);
  console.log(data);

  console.log(person);
  return (
    <div>
      <h1>ContextPageHome</h1>
      <h2>{person}'s blogs</h2>
      <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
    </div>
  )
}
