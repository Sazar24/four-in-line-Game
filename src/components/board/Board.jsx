import "./Board.css";
import React from 'react';
import { connect } from 'react-redux';
import SingleSlot from "../singleSlot/SingleSlot";
import "../singleSlot/SingleSlot.css";

class Board extends React.Component {
    render() {
        const columnsAmount = this.props.gameParameters.columnsAmount;
        const currentPlayerColor = this.props.currentPlayer.color;

        const widthManually = { 'width': columnsAmount * 40 + 'px' };

        let titleDiv;
        if (this.props.isItWinMessage !== undefined)
            titleDiv =
                <div>
                    <div>GAME OVER</div>
                    {this.props.isItWinMessage}
                </div>;
        else
            titleDiv =
                <div style={{ 'margin': '10px 0 10px' }}>
                    Now it`s turn of:
                     <div className="singleSlot"
                        style={{ 'backgroundColor': currentPlayerColor, 'float': 'right' }}>
                    </div>
                </div>

        return (
            <div className="board" style={widthManually}>
                {titleDiv}
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
        gridArray: store.gridReducer.gameModel,
        currentPlayer: store.gridReducer.players[store.gridReducer.currentPlayerNr],
        isItWinMessage: store.gridReducer.message,

    });

export default connect(mapStateToProps)(Board);