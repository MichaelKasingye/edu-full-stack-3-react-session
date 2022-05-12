import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./Pages/Article";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import NavigationBar from "./Components/NavigationBar";

import Error from "./Pages/Error";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
