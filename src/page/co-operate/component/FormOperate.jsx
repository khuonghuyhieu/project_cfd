import { useState } from 'react';
export default function FormOperate() {
	let [name, setName] = useState('');
	let [phone, setPhone] = useState('');
	let [email, setEmail] = useState('');
	let [web, setWeb] = useState('');
	let [title, setTitle] = useState('');
	let [content, setContent] = useState('');

	function onSubmit() {
		// if(){
		// 	console.log(name);
		// }
		console.log(phone);
		console.log(email);
		console.log(web);
		console.log(title);
		console.log(content);
	}
	return (
		<div className="form">
			<label>
				<p>
					Họ và tên<span>*</span>
				</p>
				<input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					type="text"
					placeholder="Họ và tên bạn"
				/>
			</label>
			<label>
				<p>Số điện thoại</p>
				<input
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
					type="text"
					placeholder="Số điện thoại"
				/>
			</label>
			<label>
				<p>
					Email<span>*</span>
				</p>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Email của bạn"
				/>
			</label>
			<label>
				<p>Website</p>
				<input
					value={web}
					onChange={(e) => setWeb(e.target.value)}
					type="text"
					placeholder="Đường dẫn website http://"
				/>
			</label>
			<label>
				<p>
					Tiêu đề<span>*</span>
				</p>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					placeholder="Tiêu đề liên hệ"
				/>
			</label>
			<label>
				<p>
					Nội dung<span>*</span>
				</p>
				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					name
					id
					cols={30}
					rows={10}
					defaultValue={''}
				/>
			</label>
			<div onClick={onSubmit} className="btn main rect">
				đăng ký
			</div>
		</div>
	);
}
