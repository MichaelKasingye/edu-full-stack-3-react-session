// import React, { useState, createContext } from 'react'
// import ContextPageHome from '../../Pages/ContextPageHome';
// import ContextPagemore from '../../Pages/ContextPagemare';

// export const UserCreateContext = createContext();

// export function UserContext() {
//     //  const person = useContext(UserCreateContext);
//      const [user, setUser] = useState("Mark");

//      function handleSubmit(event) {
//         event.preventDefault();
//         setUser("Bob");
//       }

//   return (
//     <div>
//         {/* <h1>Name it</h1>
//         <button onClick={handleSubmit}>Name</button> */}
//         <UserCreateContext.Provider value={user}>
//         <ContextPageHome/>
//         <ContextPagemore/>
//         </UserCreateContext.Provider>

//     </div>
//   )
// }

// UserContext()