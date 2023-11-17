import { useState } from 'react'

const useCounter = ( initialValue: number = 10) => {
	const [counter, setCounter] = useState(initialValue )

	const math = (num: number) => {
		setCounter(counter + num)
	}

	return {
		counter,
		math
	}
}
 
export default useCounter;