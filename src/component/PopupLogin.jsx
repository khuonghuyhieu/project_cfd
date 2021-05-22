import React from 'react';
import reactDOM from 'react-dom';
import { useState } from 'react';

function PopupLogin() {
	let [form, setForm] = useState({
		email: '',
		account: '',
		pass: '',
	});

	let [error, setError] = useState({
		email: '',
		account: '',
	});

	function InPutClose() {
		document.getElementById('root1').style.display = 'none';
		console.log('1');
	}

	function OnSubmit() {
		let errorOjb = {};

		if (!form.account.trim()) {
			errorOjb.account = 'Account là bắt buộc';
		}

		if (!form.email.trim()) {
			errorOjb.email = 'Email là bắt buộc';
		} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
			errorOjb.email = 'Email không đúng định dạng';
		}

		setError(errorOjb);
		if (Object.keys(errorOjb).length === 0) {
			console.log(form);
			//call AIP
		}
	}

	function InPutChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		setForm({
			...form,
			[name]: value,
		});
	}
	return reactDOM.createPortal(
		<div className="popup-form popup-login">
			<div className="wrap">
				{/* login-form */}
				<div className="ct_login" style={{ display: 'block' }}>
					<h2 className="title">Đăng nhập</h2>
					<input
						value={form.account}
						name="account"
						onChange={InPutChange}
						type="text"
						placeholder="Email / Số điện thoại"
					/>
					{error.account && <p className="error_text">{error.account}</p>}
					<input value={form.pass} name="pass" type="password" placeholder="Mật khẩu" />
					<div className="remember">
						<label className="btn-remember">
							<div>
								<input type="checkbox" />
							</div>
							<p>Nhớ mật khẩu</p>
						</label>
						<a href="#" className="forget">
							Quên mật khẩu?
						</a>
					</div>
					<div className="btn rect main btn-login">đăng nhập</div>
					<div className="text-register" style={{}}>
						<strong>hoặc đăng ký bằng</strong>
					</div>
					<div>
						<div className="btn btn-icon rect white btn-google">
							<img src="img/google.svg" alt="" />
							Google
						</div>
					</div>
					<div onClick={InPutClose} className="close">
						<img src="img/close-icon.png" alt="" />
					</div>
				</div>
				{/* email form */}
				<div className="ct_email">
					<h2 className="title">Đặt lại mật khẩu</h2>
					<input
						value={form.email}
						name="email"
						onChange={InPutChange}
						type="text"
						placeholder="Email"
					/>
					{error.email && <p className="error_text">{error.email}</p>}
					<div onClick={OnSubmit} className="btn rect main btn-next">
						Tiếp theo
					</div>
					<div className="back" />
					<div className="close">
						<img src="img/close-icon.png" alt="" />
					</div>
				</div>
			</div>
		</div>,
		document.getElementById('root1')
	);
}
export default PopupLogin;
