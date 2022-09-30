import { useRef } from "react";
import { useState } from "react";

export default function useStopWatch(){
    const [time,setTime] = useState(0);
    const timerId = useRef(null);

    const startSW = ()=>{
        if(!timerId.current){
            timerId.current = setInterval(()=>{
                setTime((prev)=>prev+1);
            },1000)
        }
    }
    const stopSW = ()=>{
        clearInterval(timerId.current);
        timerId.current = null;
    }
    const resetSW = ()=>{
        clearInterval(timerId.current);
        timerId.current=null;
        setTime(0);
    }

    return {time,startSW,stopSW,resetSW};

}