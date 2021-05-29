// import { CourseItem } from '../../';
import { useState, useEffect } from 'react';
import CourseApi from '../../service/courseApi';
import Action from './component/Action';
import Banner from './component/Banner';
import CourseList from './component/CourseList';
import Different from './component/Different';
import Gallery from './component/Gallery';
import Testimonial from './component/Testimonial';

// console.log('1');
// // function Promise() -> Bất đồng bộ ~ (vd: setTimeOut)
// function a() {
// 	return new Promise((resolve, reject) => {
// 		// console.log('2'),
// 		setTimeout(() => {
// 			resolve(2);
// 		}, 2000);
// 	});
// }
// a()
// 	// Khi trả về kết quả có nghĩa là trả về resolve thì nó sd then()
// 	.then((b) => {
// 		console.log(b);
// 	})
// 	// khi Promise trả về reject thì catch trả về reject (thường xử lý lỗi)
// 	.catch((err) => {
// 		console.log(err);
// 	});

// console.log('3');

export default function Home() {
	let [list, setList] = useState({
		offline: [],
		online: [],
	});

	useEffect(() => {
		//them async trên function
		//setList(await CourseAip.list())
		CourseApi.list().then((res) => {
			setList(res);
			// console.log(res);
		});
	}, []);

	return (
		<main className="homepage" id="main">
			<Banner />
			<CourseList {...list} />
			<Different />
			<Testimonial />
			<Gallery />
			<Action />
		</main>
	);
}
