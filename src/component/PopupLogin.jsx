import React, { useContext, useState } from 'react';
import reactDOM from 'react-dom';
import useFormValidate from '../hook/useFormValidate';
import useAuth from '../hook/useAuth';

function PopupLogin() {
	let [loginError, setLoginError] = useState(null);
	let { form, error, InputChange, check } = useFormValidate(
		{
			username: '',
			password: '',
		},
		{
			rule: {
				username: {
					required: true,
					pattern: 'email',
				},
				password: {
					required: true,
					min: 6,
					max: 32,
				},
			},
			message: {
				username: {
					required: 'Tên tài khoản không được bỏ trống',
					pattern: 'Email hoặc số điện thoại không đúng định dạng',
				},
				password: {
					required: 'Mật khẩu không được bỏ trống',
				},
			},
		}
	);

	function InPutClose() {
		document.getElementById('root1').style.display = 'none';
	}
	let { handleLogin } = useAuth(); //check lỗi bên AIP loginError

	async function OnSubmit() {
		let errorOjb = check();

		if (Object.keys(errorOjb).length === 0) {
			let res = await handleLogin(form.username, form.password);
			if (res.success) {
				// console.log('Hello');
				InPutClose();
			} else if (res.error) {
				setLoginError(res.error);
			}

			// .then((res) => {
			// 	console.log(res);
			// 	if (res) {
			// 		InPutClose();
			// 	}
			// });
			// if (res) {
			// 	alert(res);
			// } else {
			// 	// InPutClose();
			// }
		}
	}

	return reactDOM.createPortal(
		<div className="popup-form popup-login">
			<div className="wrap">
				{/* login-form */}
				<div className="ct_login" style={{ display: 'block' }}>
					<h2 className="title">Đăng nhập</h2>
					{/* Hiển thị lỗi loginError trên popuplogin */}
					{loginError && <p className="error_text">{loginError}</p>}
					<input
						value={form.username}
						name="username"
						onChange={InputChange}
						type="text"
						placeholder="Email / Số điện thoại"
					/>
					{error.username && <p className="error_text">{error.username}</p>}
					<input
						value={form.password}
						name="password"
						onChange={InputChange}
						type="password"
						placeholder="Mật khẩu"
					/>
					{error.password && <p className="error_text">{error.password}</p>}
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
					<div className="btn rect main btn-login" onClick={OnSubmit}>
						đăng nhập
					</div>
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
						onChange={InputChange}
						type="text"
						placeholder="Email"
					/>
					{error.email && <p className="error_text">{error.email}</p>}
					<div className="btn rect main btn-next">Tiếp theo</div>
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
