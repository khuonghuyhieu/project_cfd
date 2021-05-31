import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import Intro from './component/Intro';
import Banner from './component/Banner';
import Project from './component/Project';
import Course from './component/Course';
import CourseApi from '../../service/courseApi';

function Detail(props) {
	let { slug } = useParams();
	let [info, setInfo] = useState();
	let [coursesRelate, setCoursesRelate] = useState();

	// console.log('param: ', param);

	// let routeMatch = useRouteMatch();
	// console.log('routeMatch: ', routeMatch);

	useEffect(async () => {
		let res = await CourseApi.detail(slug);
		if (res.data) {
			setInfo(res.data);
		}
	}, [slug]);

	useEffect(async () => {
		let res = await CourseApi.relate(slug);
		if (res.data) {
			setCoursesRelate(res.data);
		}
	}, [slug]);

	return (
		<React.Fragment>
			<main className="course-detail" id="main">
				<Banner {...info} />
				<Intro {...info} />
				<Project />
				<Course {...coursesRelate} />
			</main>
		</React.Fragment>
	);
}

export default Detail;
