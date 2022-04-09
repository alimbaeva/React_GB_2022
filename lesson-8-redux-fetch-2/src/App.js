import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { usersSelector } from './redux/reducer/postSelector/selector';
import { loadUser } from './redux/reducer/reducer';

function App() {

  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const loading = useSelector(state => state.users.loading)


  useEffect(() => {
    dispatch(loadUser())
  }, [])

  if (loading) {
    return (
      <div>
        идет загрузка...
      </div>
    )
  }

  return (
    <div className="post">
      {users.map((user) => (
        <div key={user.id}>
          <p >
            {user.name}
          </p>
          <p >
            {user.username}
          </p>
          <p >
            {user.email}
          </p>
        </div>
      ))
      }
    </div>
  );
}

export default App;
