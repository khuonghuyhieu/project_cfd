import { useState } from 'react';
import PopupLogin from '../../component/PopupLogin';
import Info from './component/Info';
import MyCoin from './component/MyCoin';
import MyCourse from './component/MyCourse';
import PaymentHistory from './component/PaymentHistory';
import Projected from './component/Projected';

export default function Profile() {
	let [tabActive, setTabActive] = useState(0);

	function setTab(e, index) {
		e.preventDefault();
		setTabActive(index);
	}

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
							<a href="#" className={tabActive === 0 ? 'active' : ''} onClick={(e) => setTab(e, 0)}>
								Thông tin tài khoản
							</a>
							<a href="#" className={tabActive === 1 ? 'active' : ''} onClick={(e) => setTab(e, 1)}>
								Khóa học của bạn
							</a>
							<a href="#" className={tabActive === 2 ? 'active' : ''} onClick={(e) => setTab(e, 2)}>
								Dự án đã làm
							</a>
							<a href="#" className={tabActive === 3 ? 'active' : ''} onClick={(e) => setTab(e, 3)}>
								Lịch sử thanh toán
							</a>
							<a href="#" className={tabActive === 4 ? 'active' : ''} onClick={(e) => setTab(e, 4)}>
								Quản lý COIN của tôi
							</a>
						</div>
						<div className="tab-content">
							{tabActive === 0 ? (
								<Info />
							) : tabActive === 1 ? (
								<MyCourse />
							) : tabActive === 2 ? (
								<Projected />
							) : tabActive === 3 ? (
								<PaymentHistory />
							) : (
								<MyCoin />
							)}
							{/* <Info />
							<MyCourse />
							<Projected />
							<PaymentHistory />
							<MyCoin /> */}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
