import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  // console.log(data);

  return (
    <>
      <h1>My Artcles</h1>
    {!data ? <h2>LOADING....</h2> :(
       <div className="blogs">
      {[...data].map(info =>(
        <article  key={info.id}>
          <Link to={`/article/${info.id}`}>
          <h5>{info.title}</h5>
          <p>{info.body}</p>
          </Link>
        </article>
    
    ))}
    </div>
    )}
    </>
  );
}
