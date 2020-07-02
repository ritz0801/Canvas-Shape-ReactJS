import React, { useEffect, useState } from 'react';
import './DetailShape.scss';
import { connect } from 'react-redux';
import { getDetailShape } from '../../Redux/Actions/actions';

const DetailShape = (props) => {
    return (
        <div style={{ textAlign: "center" }} className="detail">
            <h1>Detail</h1>
            <div className="name">Name: {props.detailShape && props.detailShape.name}</div>
            <div className="width-height">
                <p>Width: {props.detailShape && Math.ceil(props.detailShape.width * props.detailShape.scaleX)}</p>
                <p>Height: {props.detailShape && Math.ceil(props.detailShape.height * props.detailShape.scaleY)}</p>
           </div>
            <div className="x-y">
                <p>X: {props.detailShape && Math.ceil(props.detailShape.x)}</p>
                <p>Y: {props.detailShape && Math.ceil(props.detailShape.y)}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        detailShape: state.shapeDetailReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailShape: (shape) => {
            dispatch(getDetailShape(shape))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailShape);