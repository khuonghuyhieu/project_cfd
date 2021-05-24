import useAuth from '../../../hook/useAuth';

function TopInfo() {
	let { login } = useAuth();

	return (
		<div className="top-info">
			<div className="avatar">
				{/* <span class="text">H</span> */}
				<img src={login.avatar} alt="" />
				<div className="camera" />
			</div>
			<div className="name">{login.name}</div>
			<p className="des">Thành viên của team CFD1-OFFLINE</p>
		</div>
	);
}
export default TopInfo;
