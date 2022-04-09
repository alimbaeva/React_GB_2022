import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { postThunk } from './redux/reducer/reducer';

function App() {
  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts.posts)

  useEffect(() => {
    dispatch(postThunk())
  }, [])

  return (
    <div className="post">
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>
      })}

      {/* {JSON.stringify(posts)} */}
    </div>
  );
}

export default App;
