import "./SingleSlot.css";
import React from 'react';

import { columnClicked, changePlayer } from "../../actions/gridActions";

class SingleSlot extends React.Component {
    handleClick() {
        const slotID = this.props.index;
        columnClicked(slotID);
        changePlayer();


    }
    render() {
        const playerColor=this.props.styleColor;
        console.log("color:", playerColor);
        
        return (
            <div className="singleSlot" 
            // style={{'backgroundColor':playerColor }}
                onClick={() => this.handleClick()} >
                {this.props.gridSlotValue}

            </div>
        )
    }
}

export default SingleSlot;