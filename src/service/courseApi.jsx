import Auth, { tokenHandle } from './auth';
import { endpoint } from './config';

const CourseApi = {
	list() {
		return fetch(`${endpoint}/elearning/v4/courses`, {
			method: 'GET',
		}).then((res) => res.json());
	},
	detail(slug) {
		return fetch(`${endpoint}/elearning/v4/course/${slug}`, {
			method: 'GET',
		}).then((res) => res.json());
	},
	async register(data, slug) {
		// let token = JSON.parse(localStorage.getItem('token'))?.token?.accessToken;

		// return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
		// 	method: 'POST',
		// 	body: JSON.stringify(data),
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Authorization: `Bearer ${token}`,
		// 	},
		// }).then((res) => res.json());

		let token = JSON.parse(localStorage.getItem('token'))?.accessToken;

		return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}).then((res) =>
			tokenHandle(res, () => {
				let token = JSON.parse(localStorage.getItem('token'))?.accessToken;
				return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}).then((res) => res.json());
			})
		);

		// if (res.status === 200) {
		// 	return res.json();
		// }
		// if (res.status === 403) {
		// 	await Auth.refreshToken();
		// 	let token = JSON.parse(localStorage.getItem('token'))?.accessToken;
		// 	return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
		// 		method: 'POST',
		// 		body: JSON.stringify(data),
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: `Bearer ${token}`,
		// 		},
		// 	}).then((res) => res.json());
		// }
	},
	relate(slug) {
		return fetch(`${endpoint}/elearning/v4/course-related/${slug}`, {
			method: 'GET',
		}).then((res) => res.json());
	},
};

export default CourseApi;
