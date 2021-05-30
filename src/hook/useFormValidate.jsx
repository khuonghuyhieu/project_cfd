import { useState } from 'react';

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
	phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
	urlPattern =
		/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
	fbPattern = /^(?:http(s)?:\/\/)?www.facebook.com\/[\w.-]+$/i;

function useFormValidate(initialForm, validate) {
	let [form, setForm] = useState(initialForm);
	let [error, setError] = useState({});

	function InputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		let type = e.target.type;
		if (type === 'checkbox') {
			value = e.target.checked;
		}

		setForm({
			...form,
			[name]: value,
		});
	}

	function check() {
		let errorOjb = {};
		let { rule, message } = validate;
		if (!message) {
			message = {};
		}

		for (let i in rule) {
			let r = rule[i];
			let m = message[i] || {};

			if (r.required && !form[i]?.trim()) {
				errorOjb[i] = m?.required || 'Trường này không được để trống';
				continue;
			}

			if (r.pattern) {
				// let pattern = r.pattern;  == row 34
				let { pattern } = r;
				if (pattern === 'email') pattern = emailPattern;
				if (pattern === 'phone') pattern = phonePattern;
				if (pattern === 'url') pattern = urlPattern;
				if (pattern === 'fb') pattern = fbPattern;

				if (!pattern?.test(form[i])) {
					errorOjb[i] = m?.pattern || 'Trường này không đúng định dạng';
				}
			}
			if (r.min) {
				if (form[i].length < r.min) {
					errorOjb[i] = m?.min || `Trường này không được ít hơn ${r.min} ký tự`;
				}
			}
			if (r.max) {
				if (form[i].length > r.max) {
					errorOjb[i] = m?.max || `Trường này không được nhiều hơn ${r.max} ký tự`;
				}
			}
		}

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

		setError(errorOjb);

		return errorOjb;
	}

	return {
		form,
		error,
		InputChange,
		check,
	};
}

export default useFormValidate;
