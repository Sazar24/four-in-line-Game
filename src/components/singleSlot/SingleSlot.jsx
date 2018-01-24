import "./SingleSlot.css";
import React from 'react';

import { columnClicked } from "../../actions/gridActions";

class SingleSlot extends React.Component {
    handleClick() {
        const slotID = this.props.index;
        columnClicked(slotID);

    }
    render() {
        
        return (
            <div className="singleSlot"
                onClick={() => this.handleClick()} >
                {this.props.gridSlotValue}

            </div>
        )
    }
}

export default SingleSlot;