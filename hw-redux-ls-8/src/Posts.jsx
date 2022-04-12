
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { loadPosts } from './redux/reducer/PostReducer';
import { PostsSelector } from './redux/reducer/PostsSelector.jsx';

const Posts = () => {

    const dispatch = useDispatch();

    const posts = useSelector(PostsSelector);
    const loading = useSelector(state => state.posts.loading);
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        dispatch(loadPosts())
    }, []);

    const handleError = () => {
        dispatch(loadPosts())
    }

    if (loading) {
        return (
            <div>
                <h2>Идет загрузка...</h2>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Произошла ошибка , повторите попытку ...
                <button onClick={handleError}>Повторить попытку</button>
            </div>
        )
    }

    return (
        <div>
            {

                posts.map((item) => (
                    <div key={item.id}>
                        <p>
                            {item.title}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default Posts