import { Routes, Route } from 'react-router-dom'
import Chats from './components/Chats';
import Home from './components/Home';
import Layout from './components/Layout';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
