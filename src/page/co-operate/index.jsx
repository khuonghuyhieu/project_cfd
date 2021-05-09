import PopupLogin from '../../component/PopupLogin';
import FormOperate from './component/FormOperate';

export default function Operate() {
	return (
		<main className="register-course" id="main">
			<section className="section-1 wrap container">
				<h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
				<p className="top-des">
					Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá
					trị, cũng như việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
				</p>
				<PopupLogin />
				<FormOperate />
			</section>
		</main>
	);
}
