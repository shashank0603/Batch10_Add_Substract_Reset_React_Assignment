import React,{useState} from 'react';


const AddSubstract = () => {
    const [number, setNumber] = useState(0);
    const increaseState = () => {
        setNumber(number + 1);
    }
    const decrementState = () => {
        if (number >= 0) {
            setNumber(number - 1);
        } else {
            alert('Please Reset, You have reached to negative numbers');
            setNumber(number - 1);
        }
    }
    const resetState = () => {
        setNumber(0);
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{number}</h1>
                    <div className="btn_div">
                        <button onClick={increaseState}>Increase</button>
                        <button onClick={resetState}>Reset</button>
                        <button onClick={decrementState}>Decrease</button>
                       
                    </div>
                </div>
            </div>
        </>
        );
}

export default AddSubstract;