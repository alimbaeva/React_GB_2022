
const initialState = {
    products: [
        {
            id: '1',
            name: "MacBooke"
        },
        {
            id: '2',
            name: "Car"
        },
        {
            id: '3',
            name: "Boook"
        },
        {
            id: '4',
            name: "Dress"
        },
        {
            id: '5',
            name: "Choose"
        }
    ]
}

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'deleteProduct':
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
                // products: state.products.filter(((item) => {
                //     return item.id !== action.payload;
                //     // if (item.id !== action.payload) {
                //     //     return true
                //     // }
                //     // return false
                // }))
            };

        case 'addProduct':
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }

        default: return state;
    }
}