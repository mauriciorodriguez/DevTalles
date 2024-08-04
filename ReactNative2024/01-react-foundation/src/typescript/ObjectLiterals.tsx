interface Address {
	country: string;
	houseNo: number;
	state: string;
}

interface Person {
	fullName: string;
	age: number;
	address: Address;
}

export const ObjectLiterals = () => {

	const person: Person = {
		fullName: "Mauricio Rodriguez",
		age: 33,
		address: {
			country: "Argentina",
			houseNo: 10,
			state: "TDF"
		}
	}

	return (
		<>
			<h3>Objetos literales</h3>
			<pre>
				{JSON.stringify(person, null, 2)}
			</pre>
		</>
	)
}
