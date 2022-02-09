import { useState } from "react"
import Child1 from "../../src/components/units/14-liftingstate-up/Child1"
import Child2 from "../../src/components/units/14-liftingstate-up/Child2"

export default function LiftingStateUpPage(){
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    // const onClickCountUp = () => {
    //     setCount((prev) => prev + 1)
    // }


    return(
        <div>
            <Child1 count={count} setCount={setCount}/>
            <div>===============================================</div>
            <Child2 countTwo={countTwo} setCountTwo={setCountTwo}/>
        </div>
    )
}