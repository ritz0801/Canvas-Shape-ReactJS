import React from 'react';
import { List } from 'antd';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { removeShape } from '../../Redux/Actions/actions';

const ListShapes = (props) => {
    const data = props.shapes

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<p style={{textAlign: "center"}}>{item.name}</p>}
                    />
                    <Button onClick={() => props.removeShape(item)} type="primary" danger>
                        Remove
                    </Button>
                </List.Item>
            )}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        shapes: state.shapeReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeShape: (shape) => {
            dispatch(removeShape(shape));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListShapes);