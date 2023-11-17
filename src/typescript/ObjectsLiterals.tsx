interface Person {
	fullName: string
	age: number
	address: Address
}

interface Address {
	country: string
	street: string
}

const ObjectsLiterals = () => {

	const person: Person = {
		fullName: 'Fernando',
		age: 35,
		address: {
			country: 'Canada',
			street: 'False St 321'
		}
	}

	return ( 
		<>
			<h3>Objects Literals</h3>
			<code>
				<pre>
					{JSON.stringify(person, null, 2)}
				</pre>
			</code>
		</>
	 );
}
 
export default ObjectsLiterals;