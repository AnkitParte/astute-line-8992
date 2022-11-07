import { useEffect } from "react";
import { useState } from "react";
import useStopWatch from "./useStopwatch";



let obj = {
    hours: 0,
    minutes: 0,
    seconds: 0
}


// feedback: fw18_0782 - You can use constant file or JSON file for static data
// const second = 1, const minute = 60, just an example
// Static data should be moved out, it reduces the noise in components
export function getTime(number) {
    var obj = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    if (number < 60) {
        obj.seconds = number
        return(obj);
    }
    else {
        let min = Math.floor(number / 60);
        let sec = Math.floor(number % 60);
        obj.seconds = sec;
        obj.minutes = min;
        if (min >= 60) {
            let hr = Math.floor(min / 60);
            obj.hours = hr;
        }
        return(obj);

    }

}


export default function StopWatch() {
    const { time: time2, startSW, stopSW, resetSW } = useStopWatch();
    const [data, setData] = useState(obj);

    
    useEffect(()=>{
        let ans = getTime(time2);
        setData(ans);
        return (()=>{});
    },[time2]);

    return (<>
        <hr />
        <h3>useStopWatch</h3>
        <div>
            <h4>StopWatch : {time2}</h4>
            <div>
                <button onClick={startSW}>start</button>
                <button onClick={stopSW}>stop</button>
                <button onClick={resetSW}>reset</button>
            </div>
        </div>
        <h3>
            {data.hours <= 1 ? ` ${data.hours} hr ` : ` ${data.hours} hr `}:
            {data.minutes <= 1 ? ` ${data.minutes} min ` : ` ${data.minutes} min `}:
            {data.seconds <= 1 ? ` ${data.seconds} sec ` : ` ${data.seconds} sec `}
        </h3>
        <hr />
    </>)
}
