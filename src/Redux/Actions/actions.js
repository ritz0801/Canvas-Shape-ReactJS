import * as Types from '../Constants/constants';

let valueOfID = 0;
let valueOfName = 0;

export const addShape = () => {
    const shape = {
        x: Math.random(10) * 100,
        y: Math.random(10) * 100,
        width: 100,
        height: 100,
        fill: 'red',
        id: valueOfID++,
        name: `Shape ${valueOfName++}`, 
        scaleX: 1,
        scaleY: 1,
    }

    return {
        type: Types.ADD_SHAPE,
        payload: shape,
    }
}

export const removeShape = (shape) => {
    return {
        type: Types.REMOVE_SHAPE,
        payload: shape,
    }
}

// export const transformShape = (shape) => {
//     return {
//         type: Types.TRANSFORM_SHAPE,
//         payload: shape,
//     }
// }

// export const moveShape = (shape) => {
//     return {
//         type: Types.MOVE_SHAPE,
//         payload: shape,
//     }
// }

export const transformWidthShape = (width) => {
    return {
        type: Types.TRANSFORM_WIDTH_SHAPE,
        payload: width,
    }
}

export const transformHeightShape = (height) => {
    return {
        type: Types.TRANSFORM_HEIGHT_SHAPE,
        payload: height,
    }
}

export const moveShapeX = (x) => {
    return {
        type: Types.MOVE_SHAPE_X,
        payload: x,
    }
}

export const moveShapeY = (y) => {
    return {
        type: Types.MOVE_SHAPE_Y,
        payload: y,
    }
}

export const getDetailShape = (shape) => {
    return {
        type: Types.GET_DETAIL_SHAPE,
        payload: shape,
    }
}