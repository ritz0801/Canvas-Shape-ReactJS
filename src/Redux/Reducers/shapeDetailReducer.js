import * as Types from '../Constants/constants';

const initialState = {}

const shapeDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_DETAIL_SHAPE: {
            return { ...action.payload };
        }
        case Types.CHANGE_X_DETAIL_SHAPE: {
            const newShapeDetail = { ...state };
            newShapeDetail.x = Number.parseInt(action.payload);
            return { ...newShapeDetail };
        }
        case Types.CHANGE_Y_DETAIL_SHAPE: {
            const newShapeDetail = { ...state };
            newShapeDetail.y = Number.parseInt(action.payload);
            return { ...newShapeDetail };
        }
        case Types.CHANGE_WIDTH_DETAIL_SHAPE: {
            const newShapeDetail = { ...state };
            newShapeDetail.width = (Number.parseInt(action.payload) / state.scaleX);
            return { ...newShapeDetail };
        }
        case Types.CHANGE_HEIGHT_DETAIL_SHAPE: {
            const newShapeDetail = { ...state };
            newShapeDetail.height = (Number.parseInt(action.payload) / state.scaleY);
            return { ...newShapeDetail };
        }
        default:
            return state;
    }
}

export default shapeDetailReducer;