import React, { useState } from "react";

/*function Count() {
    const [count, setCount] = useState(0)
    const handleMinus =() => {
        setCount(count - 1)
    }

    const handlePlus =() => {
        setCount(count + 1)
    }
    return (
        <>
            <button onClick={handleMinus}>-</button>
            <h1>{count}</h1>
            <button onClick={handlePlus}>+</button>
        </>
    )
}
*/

function Count() {
    const [show, setShow] = useState(false);
    const handleClick =() => {
        setShow(!show)
    }

    const handlePlus =() => {
        setCount(count + 1)
    }
    //conditional rendering
    //if show is true then show h1 else don't show h1
    return (
        <>
            <button onClick={()=>handleClick()}>Show</button>
            {
                show? <h1>Show is True</h1> : <h1>Show is False</h1>
                //show && <h1>Show is True</h1>
            }
        </>
    )
}

export default Count