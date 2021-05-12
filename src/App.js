import React from 'react';

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
import Coin from './page/gioi-thieu-coin';
import KhoaHoc from './page/khoa-hoc';
import Team from './page/team';
import ThanhToan from './page/thanh-toan';
import Project from './page/project';

// import Header from "./component/Header";
// import Footer from "./component/Footer";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/* chia Header những trang dưới có thể dống v khi không sài cái thư viên react-router-dom */}
				<Header />
				{/* cắt components từng trang bằng router */}
				<Switch>
					<Route path="/projects" component={Project} />
					<Route path="/thanhtoan" component={ThanhToan} />
					<Route path="/team" component={Team} />
					<Route path="/khoahoc" component={KhoaHoc} />
					<Route path="/coin" component={Coin} />
					<Route path="/faq" component={Faq} />
					<Route path="/email" component={Email} />
					<Route path="/detail" component={Detail} />
					<Route path="/profile" component={Profile} />
					<Route path="/co-operate" component={Operate} />
					<Route path="/register" component={Register} />
					<Route exact path="/" component={Home} />
					<Route component={Page404} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
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
