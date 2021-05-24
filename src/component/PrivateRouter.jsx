import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';

function PrivateRouter(prop) {
	let { login } = useAuth();
	if (!login) {
		setTimeout(() => {
			document.querySelector('#root1').style.display = 'flex';
		});
		return <Redirect to="/" />;
	}
	return <Route {...prop} />;
}
export default PrivateRouter;
