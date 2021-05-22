import { useState } from 'react';
import useFormValidate from '../../../hook/useFormValidate';
export default function FormOperate() {
	// let [name, setName] = useState('');
	// let [phone, setPhone] = useState('');
	// let [email, setEmail] = useState('');
	// let [web, setWeb] = useState('');
	// let [title, setTitle] = useState('');
	// let [content, setContent] = useState('');

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

	function onSubmit() {
		// form.name.trim().replace(/ +/g, ' '); // ????

		let errorOjb = check();
		// setError(errorOjb);
		if (Object.keys(errorOjb).length === 0) {
			console.log(form);
		}
	}

	// function InPutOnChange(e) {
	// 	// console.log(e.target.   name or value);
	// 	let name = e.target.name;
	// 	let value = e.target.value;

	// 	setForm({
	// 		...form,
	// 		[name]: value,
	// 	});
	// }

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
