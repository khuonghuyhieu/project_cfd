import { LOGIN, LOGOUT, ERROR, UPDATE } from '../type';
import Auth from '../../service/auth';

export function loginAction(data, success) {
	return async (dispatch) => {
		let res = await Auth.login(data);
		if (res.data) {
			dispatch({
				type: LOGIN,
				payload: res.data,
			});
			success();
		} else if (res.error) {
			dispatch({
				type: ERROR,
				payload: res.error,
			});
		}
	};

	// trả về biến để các file khác lấy biến của function
	// return {
	// 	type: LOGIN,
	// 	payload: data,
	// };
}
export function updateAction(data) {
	return async (dispatch) => {
		let res = await Auth.update(data);
		if (res.data) {
			dispatch({
				type: UPDATE,
				payload: res.data,
			});
		} else if (res.error) {
			dispatch({
				type: ERROR,
				payload: res.error,
			});
		}
	};
}
export function logoutAction() {
	return {
		type: LOGOUT,
	};
}
