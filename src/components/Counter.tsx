import { useState } from 'react'

const Counter = () => {

	const [counter, setCounter] = useState(0)

	const math = (num: number) => {
		setCounter(counter + num)
	}

	return ( 
		<>
			<h3>Counter: {counter}</h3>
			<button className="btn btn-primary m-1" onClick={() => {math(1)}}>
				+1
			</button>
			<button className="btn btn-primary m-1" onClick={() => {math(-1)}}>
				-1
			</button>
		</>
	 );
}
 
export default Counter;