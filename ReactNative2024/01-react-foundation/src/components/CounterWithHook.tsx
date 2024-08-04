import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {

	const { count, increaseBy } = useCounter({ initialValue: 5 });
	const { count: count2, increaseBy: increaseBy2 } = useCounter({ initialValue: 0 });

	return (
		<>
			<h3>Counter 1 with hook: <small>{count}</small></h3>
			<div>
				<button onClick={() => increaseBy(-1)}>-1</button>
				&nbsp;
				<button onClick={() => increaseBy(1)}>+1</button>
			</div>
			<h3>Counter 2 with hook: <small>{count2}</small></h3>
			<div>
				<button onClick={() => increaseBy2(-1)}>-1</button>
				&nbsp;
				<button onClick={() => increaseBy2(1)}>+1</button>
			</div>
		</>
	)
}
