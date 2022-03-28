// import Card from "./components/Card";
import { Routes, Route } from 'react-router-dom';
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Blog from './components/Blog.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import Layout from './components/Layout.jsx';
import SinglePage from './components/SinglePage.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/posts' element={<Blog />} />
          <Route path='/posts/:id' element={<SinglePage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route >
      </Routes>
    </>
  );
}

export default App;
