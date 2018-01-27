import "./SingleSlot.css";
import React from 'react';

import { columnClicked, changePlayer } from "../../actions/gridActions";
import { connect } from 'react-redux';
import { determinePlayerColor } from "../../functions/players";

class SingleSlot extends React.Component {
    handleClick() {
        const slotID = this.props.index;
        columnClicked(slotID);
        changePlayer();


    }
    render() {
        const symbol = this.props.gridSlotValue;
        let bgColorStyle;
        if (symbol != null) {
            const color = determinePlayerColor(symbol, this.props.players)
            bgColorStyle = {"backgroundColor": color };
            
        }

        return (
            <div className="singleSlot"
                style={bgColorStyle}
                onClick={() => this.handleClick()} >
                {/* {symbol} */}

            </div>
        )
    }
}

const mapStateToProps = (store) => (
    {
        players: store.gridReducer.players,
    }
);
export default connect(mapStateToProps)(SingleSlot)