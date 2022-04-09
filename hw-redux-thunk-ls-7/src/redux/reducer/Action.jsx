

export const getCount = () => {
    return (dispatch, getState) => {
        console.log(getState());
        dispatch({ type: 'plus' })
        dispatch({ type: 'plus' })
        dispatch({ type: 'minus' })
        console.log('идет время...')
        setTimeout(() => {
            console.log(getState())
            console.log('Закончено ')
            document.querySelector('h1').textContent = `запрос завершен...  ${new Date()}`
        }, 3000)

    }
}