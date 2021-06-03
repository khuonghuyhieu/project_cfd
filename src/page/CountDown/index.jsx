import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Demo() {
	// let [count, setCount] = useState(100);
	// useEffect(() => {
	// 	let title = document.title;
	// 	document.title = 'demo';
	// 	console.log('constructor');
	// 	return () => {
	// 		document.title = title;
	// 	};
	// }, []);

	// useEffect(() => {
	// 	console.log('Hello');
	// 	setTimeout(() => {
	// 		setCount(count - 1);
	// 	}, 1000);
	// 	return () => {
	// 		console.log('callback');
	// 	};
	// }, [count]);

	// console.log('render');
	let dispatch = useDispatch();
	const state = useSelector((state) => state.count);

	function _handleIncrement() {
		dispatch({
			type: 'INCREMENT',
		});
	}
	function _handleDecrement() {
		dispatch({
			type: 'DECREMENT',
		});
	}
	return (
		<div style={{ margin: '200px auto', fontSize: 100 }}>
			{state.count} Count Down <br />
			<button onClick={_handleIncrement}>+</button>
			<button onClick={_handleDecrement}>-</button>
		</div>
	);
}

export default Demo;
