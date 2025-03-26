import { useState } from "react"

function Counter(){

    let [counter, setCounter] = useState(0)

    function incrementHandler(){
        setCounter((prev) =>  prev + 1);
    }

    function decrementHandler(){
        setCounter((prev) =>  prev - 1);
    }

    return(
        <>
        <div className="w-[360px] mt-9 mx-auto">
            <p>Counter App</p>
            <h3 className="text-2xl font-bold">{counter}</h3>
            <div className="flex gap-2">
            <button onClick={incrementHandler} className="bg-neutral-950 text-neutral-200 rounded-lg px-2 py-2">Increment</button>
            <button onClick={decrementHandler} className="bg-neutral-950 text-neutral-200 rounded-lg px-2 py-2">Decrement</button>
        </div></div>
        </>
    )
}

export default Counter;