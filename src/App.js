import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./Pages/Article";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import ContextPageHome from "./Pages/ContextPageHome";
import NavigationBar from "./Components/NavigationBar";

import Error from "./Pages/Error";
import "./App.css";

export const UserCreateContext = createContext();

function App() {
  const [user] = useState("Mark");

  return (
    <UserCreateContext.Provider value={user}>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/post" element={<Post />} />
        <Route path="/contex-home" element={<ContextPageHome />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </UserCreateContext.Provider>
  );
}

export default App;
