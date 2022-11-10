import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./component/Header";
import Blog from "./component/pages/Blog"
import SingleBlog from './component/pages/SingleBlog'
import { Error } from "./component/pages/Error"
import Home from "./component/pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
