import { useEffect, useState } from 'react';

function Demo() {
	let [count, setCount] = useState(100);
	useEffect(() => {
		let title = document.title;
		document.title = 'demo';
		console.log('constructor');
		return () => {
			document.title = title;
		};
	}, []);

	useEffect(() => {
		console.log('Hello');
		setTimeout(() => {
			setCount(count - 1);
		}, 1000);
		return () => {
			console.log('callback');
		};
	}, [count]);

	console.log('render');

	return <div style={{ margin: '200px auto', fontSize: 100 }}> {count} Count Down </div>;
}

export default Demo;
