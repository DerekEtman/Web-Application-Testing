import React, {useState} from 'react';
import { Container } from 'semantic-ui-react'
import Display from './Display';

export default function Dashboard () {
    function resetPoints() {
        setStrike(0);
        setBall(0);
    }

    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);


    function getStrike()  {
        strike === 3? resetPoints() : setStrike(strike + 1);
    };

    function getBall() {
        ball === 4? resetPoints() : setBall(ball + 1)
    };

    function getFowl() {
        if ( strike < 2) {
            setStrike(strike + 1)
        } else if (strike === 2) {
            setStrike(strike)
        }
    }

    return(
        <Container>
        <div className="dashboard">
                <Display strike={strike} ball={ball} />
            <div className="bottomButtons">
                <button onClick={getStrike}>Strike</button>
                <button onClick={getBall}>Ball</button>
                <button onClick={getFowl}>Foul</button>
                <button onClick={resetPoints}>Hit</button>
            </div>
        </div>
        </Container>
    )
}