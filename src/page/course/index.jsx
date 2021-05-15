import React from 'react';
import PopupLogin from '../../component/PopupLogin';
import CourseList from './component/CourseList';

function Course() {
	return (
		<main className="homepage" id="main">
			<PopupLogin />
			<CourseList />
		</main>
	);
}

export default Course;
