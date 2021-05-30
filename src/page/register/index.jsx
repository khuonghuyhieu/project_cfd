import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CourseApi from '../../service/courseApi';
import FormRegister from './component/FormRegister';
import RegisterInfo from './component/RegisterInfo';

export default function Register() {
	let { slug } = useParams();
	console.log(slug);
	let [course, setCourse] = useState();

	useEffect(async () => {
		let res = await CourseApi.detail(slug);
		if (res.data) {
			setCourse(res.data);
		}
	}, [slug]);

	return (
		<main className="register-course" id="main">
			<section>
				<div className="container">
					<div className="wrap container">
						<div className="main-sub-title">ĐĂNG KÝ</div>
						<h1 className="main-title">{course?.title}</h1>
						<RegisterInfo {...course} />
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
