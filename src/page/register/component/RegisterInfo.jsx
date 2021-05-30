import React from 'react';

function RegisterInfo({ opening_time, money }) {
	return (
		<div className="main-info">
			<div className="date">
				<strong>Khai giảng:</strong> {opening_time}
			</div>
			<div className="time">
				<strong>Thời lượng:</strong> 18 buổi
			</div>
			<div className="time">
				<strong>Học phí:</strong> {money}
			</div>
		</div>
	);
}

export default RegisterInfo;
