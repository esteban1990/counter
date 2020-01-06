import React from 'react'
import './../index.css'; // My own CSS
import PropTypes from 'prop-types';






function Counter(props) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i class="far fa-clock"></i>
            </div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>

        </div>
    )
}

Counter.propTypes = {

    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};


export default Counter;