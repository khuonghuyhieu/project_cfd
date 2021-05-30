import React from 'react';
import useFormValidate from '../../../hook/useFormValidate';
import ContactApi from '../../../service/contactApi';

//formValidate quản lý state
// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'INPUT_CHANGE':
// 			return {
// 				...state,
// 				form: {
// 					...state.form,
// 					...action.payload,
// 				},
// 			};
// 		case 'SET_ERROR':
// 			return {
// 				...state,
// 				error: action.payload,
// 			};
// 	}

// 	return state;
// }

export default function FormOperate() {
	// formValidate cơ bản
	// let [name, setName] = useState('');
	// let [phone, setPhone] = useState('');
	// let [email, setEmail] = useState('');
	// let [web, setWeb] = useState('');
	// let [title, setTitle] = useState('');
	// let [content, setContent] = useState('');

	//formValidate lưu trong ojb state
	// let [form, setForm] = useState({
	// 	name: '',
	// 	phone: '',
	// 	email: '',
	// 	web: '',
	// 	title: '',
	// 	content: '',
	// });
	// let [error, setError] = useState({
	// 	name: '',
	// 	phone: '',
	// 	email: '',
	// 	web: '',
	// 	title: '',
	// 	content: '',
	// });

	//formValidate quản lý state
	// let [state, dispatch] = useReducer(reducer, {
	// 	form: {
	// 		name: '',
	// 		phone: '',
	// 		email: '',
	// 		web: '',
	// 		title: '',
	// 		content: '',
	// 	},
	// 	error: {
	// 		name: '',
	// 		phone: '',
	// 		email: '',
	// 		web: '',
	// 		title: '',
	// 		content: '',
	// 	},
	// });

	//formValidate sử dụng hook tự viết hook
	let { form, error, InputChange, check } = useFormValidate(
		{
			name: '',
			phone: '',
			email: '',
			website: '',
			title: '',
			content: '',
		},
		{
			rule: {
				name: {
					required: true,
				},
				phone: {
					required: true,
					pattern: 'phone',
				},
				email: {
					required: true,
					pattern: 'email',
				},
				website: {
					pattern: 'url',
				},
				title: {
					required: true,
				},
				content: {
					required: true,
				},
			},
			message: {
				name: {
					required: 'Họ và tên không đươc để trống',
				},
				phone: {
					required: 'Số điện thoại không được để trống',
					pattern: 'Số điện thoại phải là số điện thoại Việt Nam',
				},
				email: {
					required: 'Email không được để trống',
					pattern: 'Email phải đầy đủ cú pháp',
				},
				website: {
					pattern: 'Url phải đầy đủ cú pháp',
				},
				title: {
					required: 'Tiêu đề không được để trống',
				},
				content: {
					required: 'Nội dung không được để trống',
				},
			},
		}
	);
	async function onSubmit() {
		// form.name.trim().replace(/ +/g, ' '); // ????
		let errorOjb = check();
		// formValidate viết kiểu điều kiện này sử dụng trong 3 trường hợp: cơ bản, lưu trong obj state, quản lý sate.
		// if (!form.name.trim()) {
		// 	errorOjb.name = 'Name là bắt buộc';
		// }

		// if (form.phone.trim() && !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
		// 	errorOjb.phone = 'Phone không đúng định dạng';
		// }

		// if (!form.email.trim()) {
		// 	errorOjb.email = 'Email là bắt buộc';
		// } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
		// 	errorOjb.email = 'Email không đúng định dạng';
		// }

		// if (
		// 	form.web.trim() &&
		// 	!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
		// 		form.web
		// 	)
		// ) {
		// 	errorOjb.web = 'URL không đúng định dạng';
		// }

		// if (!form.title.trim()) {
		// 	errorOjb.title = 'Tiêu đề là bắt buộc';
		// }
		// if (!form.content.trim()) {
		// 	errorOjb.content = 'Nội dung là bắt buộc';
		// }

		//check()

		// setError(errorOjb);

		// formValidate quản lý sate
		// dispatch({
		// 	type: 'SET_ERROR',
		// 	payload: errorOjb,
		// });
		if (Object.keys(errorOjb).length === 0) {
			let res = await ContactApi.contact(form);
			if (res.success) {
				alert('Gửi thông tin liên lạc thành công');
			} else if (res.error) {
				alert('Gửi thông tin liên lạc không thành công');
			}
		}
	}
	// function InputChange(e) {
	// 	// console.log(e.target.   name or value);
	// 	let name = e.target.name;
	// 	let value = e.target.value;
	// 	// formValidate quản lý sate
	// 	// dispatch({
	// 	// 	type: 'INPUT_CHANGE',
	// 	// 	payload: {
	// 	// 		[name]: value,
	// 	// 	},
	// 	// });

	// 	// setForm({
	// 	// 	...form,
	// 	// 	[name]: value,
	// 	// });
	// }

	// let { form, error } = state;

	return (
		<div className="form">
			<label>
				<p>
					Họ và tên<span>*</span>
				</p>
				<input
					// value={name}
					name="name"
					value={form.name}
					onChange={
						InputChange
						/*(e) =>
						// setName(e.target.value);
						setForm({ ...form, name: e.target.value })*/
					}
					type="text"
					placeholder="Họ và tên bạn"
				/>
				{error.name && <p className="error_text">{error.name}</p>}
			</label>
			<label>
				<p>Số điện thoại</p>
				<input
					// value={phone}
					name="phone"
					value={form.phone}
					onChange={
						InputChange
						/*(e) =>
						// setPhone(e.target.value);
						// setForm({ ...form, phone: e.target.value })*/
					}
					type="text"
					placeholder="Số điện thoại"
				/>
				{error.phone && <p className="error_text">{error.phone}</p>}
			</label>
			<label>
				<p>
					Email<span>*</span>
				</p>
				<input
					// value={email}
					name="email"
					value={form.email}
					onChange={
						InputChange
						/*(e) =>
						// setEmail(e.target.value);
						setForm({ ...form, email: e.target.value })*/
					}
					type="text"
					placeholder="Email của bạn"
				/>
				{error.email && <p className="error_text">{error.email}</p>}
			</label>
			<label>
				<p>Website</p>
				<input
					// value={web}
					name="web"
					value={form.web}
					onChange={
						InputChange
						/*(e) =>
						// setWeb(e.target.value);
						setForm({ ...form, web: e.target.value })*/
					}
					type="text"
					placeholder="Đường dẫn website http://"
				/>
				{error.web && <p className="error_text">{error.web}</p>}
			</label>
			<label>
				<p>
					Tiêu đề<span>*</span>
				</p>
				<input
					// value={title}
					name="title"
					value={form.title}
					onChange={
						InputChange
						/*(e) =>
						// setTitle(e.target.value);
						setForm({ ...form, title: e.target.value })*/
					}
					type="text"
					placeholder="Tiêu đề liên hệ"
				/>
				{error.title && <p className="error_text">{error.title}</p>}
			</label>
			<label>
				<p>
					Nội dung<span>*</span>
				</p>
				<textarea
					// value={content}
					name="content"
					value={form.content}
					onChange={
						InputChange
						/*(e) =>
						// setContent(e.target.value);
						setForm({ ...form, content: e.target.value })*/
					}
					cols={30}
					rows={10}
					defaultValue={''}
				/>
				{error.content && <p className="error_text">{error.content}</p>}
			</label>
			<div onClick={onSubmit} className="btn main rect">
				đăng ký
			</div>
		</div>
	);
}
