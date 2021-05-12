import FormRegister from './component/FormRegister';
import PopupLogin from '../../component/PopupLogin';

export default function Register() {
	return (
		<main className="register-course" id="main">
			<PopupLogin />
			<section>
				<div className="container">
					<div className="wrap container">
						<div className="main-sub-title">ĐĂNG KÝ</div>
						<h1 className="main-title">Thực chiến front-end căn bản </h1>
						<div className="main-info">
							<div className="date">
								<strong>Khai giảng:</strong> 15/11/2020
							</div>
							<div className="time">
								<strong>Thời lượng:</strong> 18 buổi
							</div>
							<div className="time">
								<strong>Học phí:</strong> 6.000.000 VND
							</div>
						</div>
						<FormRegister />
					</div>
				</div>
			</section>
			{/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
		</main>
	);
}
