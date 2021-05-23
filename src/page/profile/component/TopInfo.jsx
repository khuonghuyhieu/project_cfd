import { useContext } from 'react';

import { Context } from './../../../App';

function TopInfo() {
	let value = useContext(Context);

	return (
		<div className="top-info">
			<div className="avatar">
				{/* <span class="text">H</span> */}
				<img src={value.login.avatar} alt="" />
				<div className="camera" />
			</div>
			<div className="name">{value.login.name}</div>
			<p className="des">Thành viên của team CFD1-OFFLINE</p>
		</div>
	);
}
export default TopInfo;
