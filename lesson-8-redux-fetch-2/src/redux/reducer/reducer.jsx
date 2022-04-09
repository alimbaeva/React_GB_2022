const initialState = {
    users: [],
    loading: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                loading: true
            }
        case 'load-users': {
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }
        default:
            return state
    }
}


export const loadUser = () => {
    return (dispatch) => {
        dispatch({
            type: 'loading',
        })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'load-users',
                    payload: data
                })
            })
    }
}