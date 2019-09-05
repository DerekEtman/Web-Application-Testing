import React from 'react';

export default function Display (props) {

    return (
        <div className="display-name">
            <h1>Baseball.</h1>
            <div className="strikes">
                <div className="strikesTitle">Strikes</div>
                <div className="strikesValue">{props.value}</div>
            </div>

            <div className="balls">
                <div className="ballsTitle">Ball</div>
                <div className="ballsValue">0</div>
            </div>

        </div>
    )
}