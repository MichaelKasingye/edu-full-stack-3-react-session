import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FeaturesPage() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/"+id, {
      method: 'DELETE',
    })
    .then((response) => response.json())
      .then((json) => {
        setData(json)
        setLoading(false);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [id]);

  console.log(data);

  return(
    <div  className="article">
     {loading ? <h2>Deleting...</h2> : (
        <>
      <h1>Deleted</h1>
      </>
      )}


      {!data? <h2>LOADING</h2> :(
        <>
        <h4>ID: {data.id}</h4>   
      <h4>TITLE: {data.title}</h4>
      <h4>Description</h4>
      <p>{data.body}</p>
        </>
      )}
 
<button onClick={handleSubmit}>Delete</button>

</div>

  )
}


export default FeaturesPage;
