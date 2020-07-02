import React, { useEffect, useState } from 'react';
import './DetailShape.scss';
import { connect } from 'react-redux';
import { getDetailShape, changeXShapeDetail, changeYShapeDetail, changeWidthShapeDetail, changeHeightShapeDetail, transformWidthShape, transformHeightShape, moveShapeX, moveShapeY } from '../../Redux/Actions/actions';
import { Input } from 'antd';


const DetailShape = (props) => {

    const handleXChange = (e) => {
        props.changeXShapeDetail(e.target.value)
        props.moveShapeX(props.detailShape)
    }

    const handleYChange = (e) => {
        props.changeYShapeDetail(e.target.value)
        props.moveShapeY(props.detailShape)
    }

    const handleWidthChange = (e) => {
        props.changeWidthShapeDetail(e.target.value);
        props.transformWidthShape(props.detailShape);
    }

    const handleHeightChange = (e) => {
        props.changeHeightShapeDetail(e.target.value);
        props.transformHeightShape(props.detailShape);
    }

    return (
        <div style={{ textAlign: "center" }} className="detail">
            <h1>Detail</h1>
            <div className="name">Name: {props.detailShape && (!props.shapes[props.selectedId] ? '' : props.detailShape.name)}</div>
            <div className="width-height">
                <p style={{ marginBottom: '0' }}>Width: </p>
                <Input type="number" value={props.detailShape && (!props.shapes[props.selectedId] ? '' : Math.ceil(props.detailShape.width * props.detailShape.scaleX))} onChange={handleWidthChange} />
                <p style={{ marginBottom: '0' }}>Height: </p>
                <Input type="number" value={props.detailShape && (!props.shapes[props.selectedId] ? '' : Math.ceil(props.detailShape.height * props.detailShape.scaleY))} onChange={handleHeightChange} />
            </div>
            <div className="x-y">
                <p style={{ marginBottom: '0' }}>X: </p>
                <Input type="number" value={props.detailShape && (!props.shapes[props.selectedId] ? '' : Math.ceil(props.detailShape.x))} onChange={handleXChange} />
                <p style={{ marginBottom: '0' }}>Y: </p>
                <Input type="number" value={props.detailShape && (!props.shapes[props.selectedId] ? '' : Math.ceil(props.detailShape.y))} onChange={handleYChange} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        shapes: state.shapeReducer,
        detailShape: state.shapeDetailReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailShape: (shape) => {
            dispatch(getDetailShape(shape))
        },
        transformWidthShape: (width) => {
            dispatch(transformWidthShape(width))
        },
        transformHeightShape: (height) => {
            dispatch(transformHeightShape(height))
        },
        moveShapeX: (x) => {
            dispatch(moveShapeX(x))
        },
        moveShapeY: (y) => {
            dispatch(moveShapeY(y))
        },
        changeXShapeDetail: (xInput) => {
            dispatch(changeXShapeDetail(xInput))
        },
        changeYShapeDetail: (yInput) => {
            dispatch(changeYShapeDetail(yInput))
        },
        changeWidthShapeDetail: (widthInput) => {
            dispatch(changeWidthShapeDetail(widthInput))
        },
        changeHeightShapeDetail: (heightInput) => {
            dispatch(changeHeightShapeDetail(heightInput))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailShape);