const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load-posts':
            return {
                ...state,
                posts: action.payload

            }
        default:
            return state;
    }
}

export const postThunk = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'load-posts',
                    payload: data
                })
            })
    }
}