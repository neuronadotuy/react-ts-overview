import { useState } from 'react'
import useCounter from '../hooks/useCounter';

const CounterCustomHook = () => {

	const { counter, math } = useCounter(0)

	return ( 
		<>
			<h3>CounterCustomHook: {counter}</h3>
			<button className="btn btn-primary m-1" onClick={() => {math(1)}}>
				+1
			</button>
			<button className="btn btn-primary m-1" onClick={() => {math(-1)}}>
				-1
			</button>
		</>
	 );
}
 
export default CounterCustomHook;