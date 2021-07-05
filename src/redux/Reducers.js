import { ADD_DATA } from "./Actions";



const initialState = {
    data : []
}

export const rootReducer = (state = initialState, action) => {
    return{
        data: countReducer(state.data, action),
    }
}

//reducer to handle registration data.
export const countReducer = (state = initialState.data, action) => {
    let data = state;
    if (action.type === ADD_DATA) {
        data = action.selectedData
    }
    return data;
}


