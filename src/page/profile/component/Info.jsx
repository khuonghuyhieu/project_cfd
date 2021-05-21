import React from 'react';
import { useState } from 'react';
function Info() {
	let [form, setForm] = useState({
		name: '',
		phone: '',
		linkFb: '',
		linkSkype: '',
	});

	let [error, setError] = useState({
		name: '',
		phone: '',
		linkFb: '',
		linkSkype: '',
	});

	function OnSubmit() {
		let errorOjb = {};

		if (!form.name.trim()) {
			errorOjb.name = 'Họ và Tên là bắt buộc';
		}

		if (!form.phone.trim()) {
			errorOjb.phone = 'Phone là bắt buộc';
		} else if (form.phone.trim() && !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
			errorOjb.phone = 'Phone không đúng định dạng';
		}

		if (!form.linkFb.trim()) {
			errorOjb.linkFb = 'Link Facebook là bắt buộc';
		} else if (
			form.linkFb.trim() &&
			!/(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i.test(
				form.linkFb
			)
		) {
			errorOjb.linkFb = 'Link Facebook không đúng định dạng';
		}

		if (!form.linkSkype.trim()) {
			errorOjb.linkSkype = 'Link Skype là bắt buộc';
		}

		setError(errorOjb);
		if (Object.keys.length === 0) {
			console.log(form);
		}
	}

	function InPutOnChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		setForm({
			...form,
			[name]: value,
		});
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
					onChange={InPutOnChange}
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
					onChange={InPutOnChange}
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
					onChange={InPutOnChange}
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
					name="linkFb"
					value={form.linkFb}
					onChange={InPutOnChange}
					type="text"
					placeholder="Facebook url"
				/>
				{error.linkFb && <p className="error_text tab-margin">{error.linkFb}</p>}
			</label>
			<label>
				<p>
					Skype<span>*</span>
				</p>
				<input
					name="linkSkype"
					value={form.linkSkype}
					onChange={InPutOnChange}
					type="text"
					placeholder="Skype url"
				/>
				{error.linkSkype && <p className="error_text tab-margin">{error.linkSkype}</p>}
			</label>
			<div onClick={OnSubmit} className="btn main rect">
				LƯU LẠI
			</div>
		</div>
	);
}

export default Info;
