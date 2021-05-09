import { useState } from 'react';
export default function FormOperate() {
	// let [name, setName] = useState('');
	// let [phone, setPhone] = useState('');
	// let [email, setEmail] = useState('');
	// let [web, setWeb] = useState('');
	// let [title, setTitle] = useState('');
	// let [content, setContent] = useState('');

	let [form, setForm] = useState({
		name: '',
		phone: '',
		email: '',
		web: '',
		title: '',
		content: '',
	});

	let [error, setError] = useState({
		name: '',
		phone: '',
		email: '',
		web: '',
		title: '',
		content: '',
	});

	function onSubmit() {
		form.name.trim().replace(/ +/g, ' '); // ????

		let errorOjb = {};
		if (!form.name.trim()) {
			errorOjb.name = 'Name là bắt buộc';
		}

		if (form.phone.trim() && !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone.trim())) {
			errorOjb.phone('Phone không đúng định dạng');
		}

		if (!form.email.trim()) {
			errorOjb.email = 'Email là bắt buộc';
		} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.trim())) {
			errorOjb.email = 'Email không đúng định dạng';
		}

		if (
			form.web.trim() &&
			!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
				form.web.trim()
			)
		) {
			errorOjb.web = 'URL không đúng định dạng';
		}

		if (!form.title.trim()) {
			errorOjb.title = 'Tiêu đề là bắt buộc';
		}
		if (!form.content.trim()) {
			errorOjb.content = 'Nội dung là bắt buộc';
		}

		if (Object.keys(errorOjb).length === 0) {
			console.log(form);
		} else {
			setError(errorOjb);
		}
	}

	function InPutOnChange(e) {
		// console.log(e.target.   name or value);
		let name = e.target.name;
		let value = e.target.value;

		setForm({
			...form,
			[name]: value,
		});
	}

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
						InPutOnChange
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
						InPutOnChange
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
						InPutOnChange
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
						InPutOnChange
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
						InPutOnChange
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
						InPutOnChange
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
