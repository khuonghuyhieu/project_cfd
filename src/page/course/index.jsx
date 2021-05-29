import React, { useEffect, useState } from 'react';
import CourseApi from '../../service/courseApi';
import CourseList from './component/CourseList';

function Course() {
	let [list, setList] = useState({
		offline: [],
		online: [],
	});

	useEffect(() => {
		CourseApi.list().then((res) => {
			setList(res);
			console.log(res);
		});
	}, []);
	return (
		<main className="homepage" id="main">
			<CourseList {...list} />
		</main>
	);
}

export default Course;
