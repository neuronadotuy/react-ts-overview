const BasicTypes = () => {

	const name: string = 'Fernando'
	const age: number = 35
	const isActive: boolean = true

	const powers: string[] = [
		'Speed',
		'Fly',
		'Breath underwater'
	]

	return ( 
		<>
			<h3>Basic Types</h3>
			{name}, {age} - {isActive ? 'Active' : 'Inactive'}
			<br/>
			{powers.join(', ')}
		</>
	 );
}
 
export default BasicTypes;