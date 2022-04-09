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
    return async (dispatch) => {
        dispatch({
            type: 'loading'
        })
        try {
            const res = await fetch('https://jsonplaceholder./typicode.com/users')
            const data = await res.json()
            dispatch({
                type: 'load-users',
                payload: data
            })
        } catch (error) {
            console.log('error', error)
            document.querySelector('h1').textContent = `${error}`
        }

    }
}