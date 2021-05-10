import { useState } from 'react';

export default function FormRegister() {
	let [form, setForm] = useState({
		name: '',
		phone: '',
		email: '',
		linkFb: '',
		opinion: '',
		check: '',
	});

	let [error, setError] = useState({
		name: '',
		phone: '',
		email: '',
		linkFb: '',
		opinion: '',
		check: '',
	});

	function OnSubmit() {
		let errorOjb = {};

		if (!form.name.trim()) {
			errorOjb.name = 'Họ và Tên là bắt buộc';
		}

		if (!form.phone.trim()) {
			errorOjb.phone = 'Số điện thoại là bắt buộc';
		} else if (form.phone.trim() && !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
			errorOjb.phone = 'Phone không đúng định dạng';
		}

		if (!form.email.trim()) {
			errorOjb.email = 'Email là bắt buộc';
		} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
			errorOjb.email = 'Email không đúng định dạng';
		}

		if (!form.linkFb.trim()) {
			errorOjb.linkFb = 'Link Facebook là bắt buộc';
		} else if (
			!/(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i.test(
				form.linkFb
			)
		) {
			errorOjb.linkFb = 'Link Facebook không đúng định dạng';
		}

		setError(errorOjb);
		if (Object.keys(errorOjb).length === 0) {
			console.log(form);
		}
	}

	function InputOnchange(e) {
		let name = e.target.name;
		let value = e.target.value;
		// let checked = e.target.checked;
		setForm({
			...form,
			[name]: value,
			// [name]: checked,
			// [checked]: value,
		});
	}

	return (
		<div className="form">
			<label>
				<p>
					Họ và tên<span>*</span>
				</p>
				<input
					value={form.name}
					name="name"
					onChange={InputOnchange}
					type="text"
					placeholder="Họ và tên bạn"
				/>

				{error.name && <p className="error_text">{error.name}</p>}
			</label>
			<label>
				<p>
					Số điện thoại<span>*</span>
				</p>
				<input
					value={form.phone}
					name="phone"
					onChange={InputOnchange}
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
					value={form.email}
					name="email"
					onChange={InputOnchange}
					type="text"
					placeholder="Email của bạn"
				/>
				{error.email && <p className="error_text">{error.email}</p>}
			</label>
			<label>
				<p>
					URL Facebook<span>*</span>
				</p>
				<input
					value={form.linkFb}
					name="linkFb"
					onChange={InputOnchange}
					type="text"
					placeholder="https://facebook.com"
				/>
				{error.linkFb && <p className="error_text">{error.linkFb}</p>}
			</label>
			<label className="disable">
				<p>Sử dụng COIN</p>
				<div className="checkcontainer">
					Hiện có <strong>300 COIN</strong>
					{/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
					{/* Cần ít nhất 200 COIN để giảm giá */}
					<input
						value={form.check}
						name="check"
						onChange={InputOnchange}
						type="checkbox"
						defaultChecked="checked"
					/>
					<span className="checkmark" />
				</div>
			</label>
			<label>
				<p>Hình thức thanh toán</p>
				<div className="select">
					<div className="head">Chuyển khoản</div>
					<div className="sub">
						<a href="#">Chuyển khoản</a>
						<a href="#">Thanh toán tiền mặt</a>
					</div>
				</div>
			</label>
			<label>
				<p>Ý kiến cá nhân</p>
				<input
					value={form.opinion}
					name="opinion"
					onChange={InputOnchange}
					type="text"
					placeholder="Mong muốn cá nhân và lịch bạn có thể học."
				/>
			</label>
			<div onClick={OnSubmit} className="btn main rect">
				đăng ký
			</div>
		</div>
	);
}
