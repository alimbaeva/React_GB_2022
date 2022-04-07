
const initialState = {
    chats: [
        {
            id: 1,
            name: "Kate"
        },
        {
            id: 2,
            name: "Pete"
        },
        {
            id: 3,
            name: "Gylya"
        },
        {
            id: 4,
            name: "Jena"
        },

    ],
    messages: [
        {
            chatId: 2,
            text: "qqqqqqqq"
        },
        {
            chatId: 2,
            text: "eeeeeeeeeeee"
        },
        {
            chatId: 3,
            text: "qqqqqqqq22222222"
        },
        {
            chatId: 2,
            text: "111111111"
        },
        {
            chatId: 4,
            text: "))))))))"
        },
    ]
}

export const MessageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}