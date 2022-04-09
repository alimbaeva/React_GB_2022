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


  return (
    <div className="post">
      {
        loading ? (
          <>
            <div className='load'>
              идет загрузка...
              <h1></h1>
            </div>
          </>
        ) : (
          users.map((user) => (
            <div key={user.id} className='block'>
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
        )
      }
    </div>
  );
}

export default App;
