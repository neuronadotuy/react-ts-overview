const Functions = () => {

	const doMath = (a: number, b: number) => {
		return a + b
	}

	return ( 
		<>
			<h3>Functions</h3>
			{doMath(10, 4)}
		</>
	 );
}
 
export default Functions;