import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import useDelayLink from '../hook/useDelayLink';
import store from '../redux';
import { logoutAction } from '../redux/action/authAction';

export function Header() {
	function navMenu() {
		document.body.classList.toggle('menu-is-show');
	}
	// sử dụng hook để làm loading
	let delayLink = useDelayLink(); // --> onclick cái biến vào thẻ link.
	let dispatch = useDispatch();
	let { login } = useSelector((store) => store.auth);
	function overlayClick() {
		document.body.classList.remove('menu-is-show');
	}

	// let login = {
	// 	name: 'Khương Huy Hiếu',
	// 	avatar: 'img/screenshot_1615217950.png',
	// };

	// let { login, handleLogout } = useAuth();
	function logout(e) {
		e.preventDefault();
		// dispatch({ type: 'LOGOUT' });
		dispatch(logoutAction());
	}

	return (
		<div>
			<header id="header">
				<div className="wrap">
					<div className="menu-hambeger" onClick={navMenu}>
						<div className="button">
							<span />
							<span />
							<span />
						</div>
						<span className="text">menu</span>
					</div>
					<Link to="/" className="logo" onClick={delayLink}>
						<img src="img/logo.svg" alt="" />
						<h1>CFD</h1>
					</Link>
					<div className="right">
						{login ? (
							<div className="have-login">
								<div className="account">
									<Link to="/profile" className="info">
										<div className="name">{login.name}</div>
										<div className="avatar">
											<img src={login.avatar} alt="" />
										</div>
									</Link>
								</div>
								<div className="hamberger"></div>
								<div className="sub">
									<Link to="/profile">Trang cá nhân</Link>
									<Link to="/profile/mycourse">Khóa học của tôi</Link>
									<Link
										to="#"
										// onClick={(e) => {
										// 	e.preventDefault();
										// 	handleLogout();
										// }}
										onClick={logout}
									>
										Đăng xuất
									</Link>
								</div>
							</div>
						) : (
							<div class="not-login bg-none">
								<a href="#" class="btn-register">
									Đăng nhập
								</a>
								<a href="#" class="btn main btn-open-login">
									Đăng ký
								</a>
							</div>
						)}
					</div>
				</div>
			</header>
			<nav className="nav">
				<ul>
					<li className="li_login">
						<Link to="#">Đăng nhập </Link>
						<Link to="/register">Đăng ký </Link>
					</li>
					<li className="active">
						<Link onClick={delayLink} to="/">
							Trang chủ
						</Link>
					</li>
					<li>
						<Link onClick={delayLink} to="/team">
							CFD Team
						</Link>
					</li>
					<li>
						<Link onClick={delayLink} to="/course">
							Khóa Học
						</Link>
					</li>
					<li>
						<Link onClick={delayLink} to="/projects">
							Dự Án
						</Link>
					</li>
					<li>
						<Link onClick={delayLink} to="/co-operate">
							Liên hệ
						</Link>
					</li>
					<li>
						<Link onClick={delayLink} to="/demo">
							CountDown
						</Link>
					</li>
				</ul>
			</nav>
			<div className="overlay_nav" onClick={overlayClick} />
		</div>
	);
}
