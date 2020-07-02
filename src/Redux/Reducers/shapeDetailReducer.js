import * as Types from '../Constants/constants';

const initialState = {}

const shapeDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_DETAIL_SHAPE: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

export default shapeDetailReducer;