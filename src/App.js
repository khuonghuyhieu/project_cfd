import React, { useEffect, useState } from 'react'; //có thể {creatContext}

import './assets/style/custom.scss';

import { Header, Footer } from './component';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './page/home';
import Operate from './page/co-operate';
import Register from './page/register';
import Profile from './page/profile';
import Page404 from './page/404page';
import Detail from './page/detail';
import Email from './page/email';
import Faq from './page/faq';
import Coin from './page/introduce-coin';
import Course from './page/course';
import Team from './page/team';
import Payment from './page/payment';
import Project from './page/project';
import Demo from './page/CountDown';
import PopupLogin from './component/PopupLogin';
import PrivateRouter from './component/PrivateRouter';
import Auth from './service/auth';
// import { routerConfig } from './core/routerConfig';
// import routers from './router';

// import Header from "./component/Header";
// import Footer from "./component/Footer";

Auth.update({
	name: 'Khương Huy Hiếu',
}).then((res) => {});

export let Context = React.createContext();

function App() {
	// let login = {
	// 	name: 'Khương Huy Hiếu',
	// 	avatar: 'img/screenshot_1615217950.png',
	// };

	let [state, setState] = useState({
		// login: false,
		login: JSON.parse(localStorage.getItem('login')),
	});

	useEffect(() => {
		localStorage.setItem('login', JSON.stringify(state.login));
	}, [state.login]);

	async function handleLogin(username, password) {
		//fetch là 1 bất đồng bộ
		try {
			let res = await Auth.login({ username, password });
			if (res.data) {
				setState({
					...state,
					login: res.data,
				});
				// console.log('Hello');
				return {
					success: true,
				};
			} else if (res.error) {
				return {
					error: res.error,
				};
			}
			// setState({
			// 	...state,
			// 	loginError: res.error,
			// });
			// let res = await fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/login', {
			// 	method: 'POST',
			// 	body: JSON.stringify({
			// 		username,
			// 		password,
			// 	}),
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// });

			// res = await res.json();
			// console.log('Hello');
		} catch (err) {}

		// .then((res) => {
		// 	// console.log('res', res);
		// 	return res.json(); // nếu trên này không trả về 1 promise thì ở dưới sẽ không then đc
		// })
		// .then((res) => {
		// 	// console.log(res);
		// 	if (res.data) {
		// 		setState({
		// 			...state,
		// 			login: res.data,
		// 		});
		// 		callback();
		// 	} else if (res.error) {
		// 		setState({
		// 			...state,
		// 			loginError: res.error,
		// 		});
		// 	}
		// })
		// .catch((err) => {
		// 	console.log('err', err);
		// });

		//xét cứng login
		// if (username === 'admin@gmail.com' && password === '123456') {
		// 	setState({
		// 		...state,
		// 		login: {
		// 			name: 'Khương Huy Hiếu',
		// 			avatar: 'img/screenshot_1615217950.png',
		// 		},
		// 	});
		// 	// localStorage.setItem(
		// 	// 	'login',
		// 	// 	JSON.stringify({
		// 	// 		name: 'Khương Huy Hiếu',
		// 	// 		avatar: 'img/screenshot_1615217950.png',
		// 	// 	})
		// 	// );
		// } else {
		// 	return 'Sai thông tin đăng nhập';
		// }
	}

	function handleLogout() {
		setState({
			...state,
			login: false,
		});

		// localStorage.setItem('login', false);
	}

	return (
		<Context.Provider value={{ ...state, handleLogin, handleLogout }}>
			<BrowserRouter>
				<div className="App">
					{/* chia Header những trang dưới có thể dống v khi không sài cái thư viên react-router-dom */}
					<Header />
					<PopupLogin />

					{/* cắt components từng trang bằng router */}
					<Switch>
						<Route path="/projects" component={Project} />
						<Route path="/payment" component={Payment} />
						<Route path="/team" component={Team} />
						<Route path="/coin" component={Coin} />
						<Route path="/course" component={Course} />
						<Route path="/faq" component={Faq} />
						<Route path="/email" component={Email} />
						<Route path="/detail/:slug" component={Detail} />
						<PrivateRouter path="/profile" component={Profile} />
						<Route path="/co-operate" component={Operate} />
						<Route path="/register/:slug" component={Register} />
						<Route path="/demo" component={Demo} />
						<Route exact path="/" component={Home} />
						<Route component={Page404} />
					</Switch>

					{/* {routerConfig(routers)} */}
					<Footer />
					{/* cách 3 */}
					{/* <Route path="/faq" >
						<Faq />
						</Route > */}
					{/* cách 2 */}
					{/* <Route path="/course" render = {(prop) => <Course /> } /> */}
				</div>
			</BrowserRouter>
		</Context.Provider>
	);
}

export default App;

//component
// function App() {
//   return (
//     <div className="App">
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//     </div>
//   );
// }

// prop
// function Item({ image, title, children }) {
//   return (
//     <div className="item">
//       <div className="name">{title}</div>
//       <img
//         style={{ width: 100, height: 300, alignContent: "center" }}
//         src={image}
//         alt=""
//       />
//       <div>{children}</div>
//     </div>
//   );
// }

// function a({ a, b }) {
//   console.log(a);
// }

// a({
//   a: 1,
//   b: 2,
// });
