import { useState } from 'react';
import PopupLogin from '../../component/PopupLogin';
import Info from './component/Info';
import MyCoin from './component/MyCoin';
import MyCourse from './component/MyCourse';
import PaymentHistory from './component/PaymentHistory';
import Projected from './component/Projected';
import { Route, Switch, NavLink, useRouteMatch, Redirect } from 'react-router-dom';

export default function Profile() {
	// viết tab trong react
	// let [tabActive, setTabActive] = useState(0);

	let { path } = useRouteMatch();

	// viết tab trong react
	// function setTab(e, index) {
	// 	e.preventDefault();
	// 	setTabActive(index);
	// }

	//vd Redireact
	// let login = true; //or false
	// if (!login) return <Redirect path="/" />;

	// <Redirect path="/" />;

	return (
		<main className="profile" id="main">
			<PopupLogin />
			<section>
				<div className="top-info">
					<div className="avatar">
						{/* <span class="text">H</span> */}
						<img src="img/avatar-lg.png" alt="" />
						<div className="camera" />
					</div>
					<div className="name">trần nghĩa</div>
					<p className="des">Thành viên của team CFD1-OFFLINE</p>
				</div>
				<div className="container">
					<div className="tab">
						<div className="tab-title">
							<NavLink exact to={`${path}`}>
								Thông tin tài khoản
							</NavLink>
							<NavLink to={`${path}/mycourse`}>Khóa học của bạn</NavLink>
							<NavLink to={`${path}/projected`}>Dự án đã làm</NavLink>
							<NavLink to={`${path}/paymenthistory`}>Lịch sử thanh toán</NavLink>
							<NavLink to={`${path}/mycoin`}>Quản lý COIN của tôi</NavLink>
						</div>
						<div className="tab-content">
							{/* Router lồng */}
							<Switch>
								<Route path={`${path}/mycourse`} component={MyCourse} />
								<Route path={`${path}/projected`} component={Projected} />
								<Route path={`${path}/paymenthistory`} component={PaymentHistory} />
								<Route path={`${path}/mycoin`} component={MyCoin} />
								<Route component={Info} />
							</Switch>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
