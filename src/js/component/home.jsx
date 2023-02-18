import React, {useState, useEffect} from "react";
import { SecondsCounter } from "./SecondsCounter.jsx";


//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0);
    	const [counterStr, setCounterStr] = useState(counter.toString().padStart(6, "0"));
    	const [countDown, setCountDown] = useState(0);
    	const [alertTarget, setAlertTarget] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!countDown) {
                setCounter((prevCounter) => prevCounter + 1);
                setCounterStr(counter.toString().padStart(6, "0"));
            }
            else {
                setCountDown(countDown - 1);
                setCounter((countDown) => countDown - 1);
                setCounterStr(countDown.toString().padStart(6, "0"));
            }
            if (alertTarget && counter === alertTarget) {
                    alert("Number Reached!");
            }

        }, 1000);

    }, [counter]);

	

	return (
		<div className="text-center">
			<SecondsCounter counterStr = {counterStr} />
			<input className="input" placeholder="Enter a Number" type="number" onChange={e => setCountDown(parseInt(e.target.value))} />
            		<input className="input" placeholder="Alert" type="number" onChange={e => setAlertTarget(parseInt(e.target.value))} />
            		<div className="btn-container">
				<button className="buttons">Stop</button>
				<button className="buttons">Reset</button>
				<button className="buttons">Resume</button>
            		</div>
		</div>
	);
};

export default Home;
