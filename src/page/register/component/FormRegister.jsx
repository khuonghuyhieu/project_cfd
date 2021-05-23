import { useState } from 'react';
import useFormValidate from '../../../hook/useFormValidate';

export default function FormRegister() {
	let { form, error, InputChange, check } = useFormValidate(
		{
			name: '',
			phone: '',
			email: '',
			fb: '',
			coin: false,
			payment: 'chuyen-khoan',
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
				fb: {
					required: true,
					pattern: 'fb',
				},
			},
			message: {
				name: {
					required: 'Họ và tên không để trống',
				},
				phone: {
					required: 'Phone không để trống',
					pattern: 'Phone phải là số Việt Nam',
				},
				email: {
					required: 'Email không được để trống',
					pattern: 'Email không đủ hoặc đúng cú pháp',
				},
				fb: {
					required: 'Link Facebook không để trống',
					pattern: 'Link facebook không đúng cú pháp',
				},
			},
		}
	);

	function OnSubmit() {
		let errorOjb = check();

		if (Object.keys(errorOjb).length === 0) {
			console.log(form);
		}
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
					onChange={InputChange}
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
					onChange={InputChange}
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
					onChange={InputChange}
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
					value={form.fb}
					name="fb"
					onChange={InputChange}
					type="text"
					placeholder="https://facebook.com"
				/>
				{error.fb && <p className="error_text">{error.fb}</p>}
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
						onChange={InputChange}
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
					onChange={InputChange}
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
