import React, { useState } from 'react';

const VotingMachine = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count+1);
    }
    const [sqlCount, Count] = useState(0);
    const increaseSql = () => {
        Count(sqlCount + 1);
    }
    const [springCount, Spring] = useState(0);
    const increaseSpring = () => {
        Spring(springCount + 1);
    }
    const [htmlCount, html] = useState(0);
    const increaseHtml = () => {
        html(htmlCount + 1);
    }
    return (
        <>
            <div className="main_dev">
                <div className="center_div">
                    <div className="btn_div">
                        <div>JAVA
                            <h2>{count}</h2>
                        <button onClick={increaseCount}>Java</button>   
                        </div>
                        <div>SQL
                            <h2>{sqlCount}</h2>
                        <button onClick={increaseSql}>SQL</button>
                        </div>
                        <div>SPRING
                            <h2>{springCount}</h2>
                        <button onClick={increaseSpring}>Spring</button>
                        </div>
                        <div>HTML
                            <h2>{htmlCount}</h2>
                        <button onClick={increaseHtml}>Html</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VotingMachine;