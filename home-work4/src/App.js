import { Routes, Route } from 'react-router-dom'
import ChatPage from './components/ChatPage';
import Chats from './components/Chats';
import Home from './components/Home';
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/chats/:id' element={<ChatPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
