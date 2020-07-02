import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Rectangle from './components/Rectangle/Rectangle';
import { Stage, Layer } from 'react-konva';
import './components/Rectangle/Rectangle.scss';
import { PlusCircleFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import { addShape, getDetailShape } from './Redux/Actions/actions';
import ListShapes from './components/ListShapes/ListShapes';
import { ReactReduxContext, Provider } from 'react-redux';
import DetailShape from './components/DetailShape/DetailShape';

function App(props) {

  // const [rectangles, setRectangles] = React.useState(props.shapes);
  const [selectedId, selectShape] = React.useState(null);

  const checkDeselect = e => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <div className="shape-transformer-wrap">
      <div className="colume-1">
        <ListShapes />
      </div>

      <div className="colume-2">
        <PlusCircleFilled className="colume-2-addBtn" onClick={props.addShape} />
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Stage
              className="colume-2"
              width={window.innerWidth - 300 - 300}
              height={window.innerHeight}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
            >
              <Layer>
                {props.shapes.map((rect, i) => {
                  return (
                    <Provider key={i} store={store}>
                      <Rectangle
                        key={rect.id}
                        shapeProps={rect}
                        isSelected={rect.id === selectedId}
                        onSelect={() => {
                          selectShape(rect.id);
                          props.getDetailShape(rect);
                        }}
                        onChange={newAttrs => {
                          const rects = props.shapes.slice();
                          rects[i] = newAttrs;
                          // setRectangles(rects);
                        }}
                      />
                    </Provider>
                  );
                })}
              </Layer>
            </Stage>
          )}

        </ReactReduxContext.Consumer>

      </div>
      <div className="colume-3">
        <DetailShape />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shapes: state.shapeReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShape: () => {
      dispatch(addShape())
    },
    getDetailShape: (shape) => {
      dispatch(getDetailShape(shape))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
