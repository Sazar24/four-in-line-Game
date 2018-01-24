import "./Board.css";
import React from 'react';
import { connect } from 'react-redux';
import SingleSlot from "../singleSlot/SingleSlot";

class Board extends React.Component {
    render() {
        const columnsAmount = this.props.gameParameters.columnsAmount;

        return (
            <div className="board">
                :Game Board:
                    {
                        this.props.gridArray.map((element, index) => {
                            let toggleNewLineStyle = null;
                            if (index % columnsAmount === 0)
                                toggleNewLineStyle = { 'clear': 'both' };


                            return (
                                    <div style={toggleNewLineStyle} key={index}>
                                        <SingleSlot
                                            gridSlotValue={element}
                                            index={index}
                                        />
                                    </div>
                            )
                        })
                    }
            </div>
        )
    }
}


const mapStateToProps = (store) => (
    {
        gameParameters: store.gridReducer.gameConsts.gameParameters,
        gridArray: store.gridReducer.gameModel
    });

export default connect(mapStateToProps)(Board);