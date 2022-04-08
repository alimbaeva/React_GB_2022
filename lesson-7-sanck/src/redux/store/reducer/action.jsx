export const getDate = () => {
    return (dispatch, getState) => {
        console.log(getState());
        dispatch({ type: 'plus' });
        dispatch({ type: 'plus' });
        dispatch({ type: 'plus' });
        console.log(getState());
    }
}