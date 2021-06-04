import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../hook/useFormValidate';
import { updateAction } from '../../../redux/action/authAction';
function Info() {
	let { login } = useSelector((store) => store.auth);

	let { form, error, InputChange, check } = useFormValidate(
		{
			name: login.name,
			phone: login.phone,
			fb: login.fb,
			sk: login.sk,
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
				fb: {
					required: true,
					pattern: 'fb',
				},
				sk: {
					required: true,
				},
			},
			message: {
				name: {
					required: 'Họ và tên không được để trống',
				},
				phone: {
					required: 'Phone không được để trống',
					pattern: 'Số điện thoại phải là số Việt Nam',
				},
				fb: {
					required: 'Link facebook không được để trống',
					pattern: 'Link facebook không đúng định dạng',
				},
				sk: {
					required: 'Link Skype không được để trống',
				},
			},
		}
	);

	let dispatch = useDispatch();

	function OnSubmit() {
		let errorOjb = check();

		if (Object.keys(errorOjb).length === 0) {
			// console.log(form);
			dispatch(updateAction(form));
		}
	}

	return (
		<div className="tab1">
			<label>
				<p>
					Họ và tên<span>*</span>
				</p>
				<input
					name="name"
					value={form.name}
					onChange={InputChange}
					type="text"
					placeholder="Nguyễn Văn A"
				/>
				{error.name && <p className="error_text tab-margin">{error.name}</p>}
			</label>
			<label>
				<p>
					Số điện thoại<span>*</span>
				</p>
				<input
					name="phone"
					value={form.phone}
					onChange={InputChange}
					type="text"
					placeholder="0949******"
				/>
				{error.phone && <p className="error_text tab-margin">{error.phone}</p>}
			</label>
			<label>
				<p>
					Email<span>*</span>
				</p>
				<input
					name="email"
					value={form.email}
					onChange={InputChange}
					defaultValue="vuong.dang@dna.vn"
					disabled
					type="text"
				/>
				{error.email && <p className="error_text tab-margin">{error.email}</p>}
			</label>
			<label>
				<p>
					Facebook<span>*</span>
				</p>
				<input
					name="fb"
					value={form.fb}
					onChange={InputChange}
					type="text"
					placeholder="Facebook url"
				/>
				{error.fb && <p className="error_text tab-margin">{error.fb}</p>}
			</label>
			<label>
				<p>
					Skype<span>*</span>
				</p>
				<input
					name="sk"
					value={form.sk}
					onChange={InputChange}
					type="text"
					placeholder="Skype url"
				/>
				{error.sk && <p className="error_text tab-margin">{error.sk}</p>}
			</label>
			<div onClick={OnSubmit} className="btn main rect">
				LƯU LẠI
			</div>
		</div>
	);
}

export default Info;
