export default function FormRegister() {
	return (
		<div className="form">
			<label>
				<p>
					Họ và tên<span>*</span>
				</p>
				<input type="text" placeholder="Họ và tên bạn" />
			</label>
			<label>
				<p>
					Số điện thoại<span>*</span>
				</p>
				<input type="text" placeholder="Số điện thoại" />
			</label>
			<label>
				<p>
					Email<span>*</span>
				</p>
				<input type="text" placeholder="Email của bạn" />
			</label>
			<label>
				<p>
					URL Facebook<span>*</span>
				</p>
				<input type="text" placeholder="https://facebook.com" />
			</label>
			<label className="disable">
				<p>Sử dụng COIN</p>
				<div className="checkcontainer">
					Hiện có <strong>300 COIN</strong>
					{/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
					{/* Cần ít nhất 200 COIN để giảm giá */}
					<input type="checkbox" defaultChecked="checked" />
					<span className="checkmark" />
				</div>
			</label>
			<label>
				<p>Hình thức thanh toán</p>
				<div className="select">
					<div className="head">Chuyển khoản</div>
					<div className="sub">
						<a href="#">Chuyển khoản</a>
						<a href="#">Thanh toán tiền mặt</a>
					</div>
				</div>
			</label>
			<label>
				<p>Ý kiến cá nhân</p>
				<input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
			</label>
			<div className="btn main rect">đăng ký</div>
		</div>
	);
}
