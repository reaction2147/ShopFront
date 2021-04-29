import React, {useState} from "react"

const UpdateCart = () => {

    const [cart, setCart] = useState([])

    const Increment = () => {
        setCart(prevCount => prevCount +1)
    }

    const Decrement = () => {
        setCart(prevCount => prevCount - 1)
    }

    return (
        <div>
            <p>{cart}</p>
           <button onClick={Increment}>Increment</button>
           <button onClick={Decrement}>Increment</button>
        </div>
       
    )
}

export default UpdateCart