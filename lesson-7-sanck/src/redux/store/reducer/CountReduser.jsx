import { store } from "../configureStore";

const initialState = {
    counter: 0
};

export const CountReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'plus':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'minus':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export const loggerMiddleware = store => next => action => {
    let result;
    console.groupCollapsed('Dispatching', action.type);
    console.log('Prev state', store.getState());
    console.log('Action', action)
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
}