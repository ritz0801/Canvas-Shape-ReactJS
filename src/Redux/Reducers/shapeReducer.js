import * as Types from '../Constants/constants';

const initialState = []

const shapeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_SHAPE: {
            return [...state, action.payload];
        }
        case Types.REMOVE_SHAPE: {
            let newState = [...state];
            return newState = newState.filter((shape) => {
                return shape.id !== action.payload.id;
            })
        }
        // case Types.TRANSFORMER_SHAPE: {
        //     let newState = [...state];
        //     for (let i = 0; i < newState.length; i++) {
        //         if (newState[i].id === action.payload.id) {
        //             newState[i].width = action.payload.width * action.payload.scaleX;
        //             newState[i].height = action.payload.height * action.payload.scaleY;
        //         }
        //     }
        //     return newState;
        // }
        // case Types.MOVE_SHAPE: {
        //     let newState = [...state];
        //     for (let i = 0; i < newState.length; i++) {
        //         if (newState[i].id === action.payload.id) {
        //             newState[i].x = action.payload.x;
        //             newState[i].y = action.payload.y;
        //         }
        //     }
        //     return newState
        // }
        case Types.MOVE_SHAPE_X: {
            let newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id === action.payload.id) {
                    newState[i].x = action.payload.x;
                }
            }
            return [...newState];
        }
        case Types.MOVE_SHAPE_Y: {
            let newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id === action.payload.id) {
                    newState[i].y = action.payload.y;
                }
            }
            return [...newState];
        }
        case Types.TRANSFORM_WIDTH_SHAPE: {
            let newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id === action.payload.id) {
                    newState[i].width = action.payload.width * action.payload.scaleX;
                    newState[i].x = action.payload.x;
                    newState[i].y = action.payload.y;
                }
            }
            return [...newState];
        }
        case Types.TRANSFORM_HEIGHT_SHAPE: {
            let newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id === action.payload.id) {
                    newState[i].height = action.payload.height * action.payload.scaleY;
                    newState[i].x = action.payload.x;
                    newState[i].y = action.payload.y;
                }
            }
            return [...newState];
        }
        default:
            return state;
    }
}

export default shapeReducer;