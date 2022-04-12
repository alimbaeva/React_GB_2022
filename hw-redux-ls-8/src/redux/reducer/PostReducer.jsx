const intionalState = {
    posts: [],
    loading: false,
    error: null
}

export const PostReducer = (state = intionalState, action) => {
    switch (action.type) {
        case 'get_posts': {
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        }

        case 'loading':
            return {
                ...state,
                loading: true
            }

        case 'error':
            return {
                ...state,
                loading: false,
                error: action.payload,

            }

        default:
            return state
    }
}


export const loadPosts = () => {
    return async (dispatch) => {
        dispatch({
            type: 'loading'
        })
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await response.json();
            dispatch({
                type: 'get_posts',
                payload: posts
            })
        } catch (err) {
            dispatch({
                type: 'error',
                payload: err.message
            })
        }
    }
}