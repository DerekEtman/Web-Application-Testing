import React from 'react';

export default function Display (props) {

    return (
        <div className="display-name">
                <h1>Baseball.</h1>
                <div className="displayWrapper">
                    <div className="innerWrapper">
                        <div className="strikes">
                            <div className="strikesTitle">Strikes</div>
                            <div className="strikesValue">{props.strike}</div>
                        </div>

                        <div className="balls">
                            <div className="ballsTitle">Ball</div>
                            <div className="ballsValue">{props.ball}</div>
                        </div>
                    </div>
                </div>

        </div>
    )
}