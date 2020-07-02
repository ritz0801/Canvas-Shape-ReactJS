import React from 'react';
import { Rect, Transformer } from 'react-konva';
import './Rectangle.scss';
import { connect } from 'react-redux';
import { transformWidthShape, transformHeightShape, moveShapeX, moveShapeY, getDetailShape } from '../../Redux/Actions/actions';

const Rectangle = ({ shapeProps, isSelected, onSelect, ...props }) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.setNode(shapeRef.current);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <React.Fragment>
            <Rect
                onClick={onSelect}
                onTap={onSelect}
                ref={shapeRef}
                {...shapeProps}
                draggable
                onTransform={e => {
                    // console.log("name: ", e.currentTarget.attrs.name, "width: ", e.currentTarget.attrs.width * e.currentTarget.attrs.scaleX, "height: ", e.currentTarget.attrs.height * e.currentTarget.attrs.scaleY);
                    // props.transformWidthShape(e.currentTarget.attrs);
                    // props.transformHeightShape(e.currentTarget.attrs);
                    props.getDetailShape(e.currentTarget.attrs)
                }}
                onDragMove={e => {
                    // console.log("name: ", e.currentTarget.attrs.name, "x: ", e.currentTarget.attrs.x, "y: ", e.currentTarget.attrs.y);
                    // props.moveShapeX(e.currentTarget.attrs);
                    // props.moveShapeY(e.currentTarget.attrs);
                    props.getDetailShape(e.currentTarget.attrs)
                }}
            />
            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        shapes: state.ShapeReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
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
        }
        ,
        getDetailShape: (shape) => {
            dispatch(getDetailShape(shape))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rectangle);