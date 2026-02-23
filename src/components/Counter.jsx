import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);


    const handleDecrease=()=>{
        if(count>0){
            setCount(count-1);
        }
    }

    const handleIncrease=()=>{
        if(count<20)
        {
            setCount(count+1);
        }
    }

    return(
        <div>
            <h1>Testing CI CD</h1>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrease} disabled={count==20}>Increase</button>
            <button onClick={handleDecrease} disabled={count==0}>Decrease</button>
        </div>
    )


}

export default Counter;