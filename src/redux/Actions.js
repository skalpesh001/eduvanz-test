
export const ADD_DATA = "ADD_COUNTDATA";


export function setCountData(Data) {
    return { type: ADD_DATA, selectedData: Data }
};
