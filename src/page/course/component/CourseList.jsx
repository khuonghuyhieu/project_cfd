import React from 'react';
import { CourseItem } from '../../../component';

function CourseList() {
	return (
		<React.Fragment>
			<section className="section-1">
				<div className="container">
					<h2 className="main-title">KHÓA HỌC CFD</h2>
					<p className="top-des">
						The readable content of a page when looking at its layout. The point of using Lorem
						Ipsum is that it has a more-or-less normal
					</p>
					<div className="textbox">
						<h3 className="sub-title">KHÓA HỌC</h3>
						<h2 className="main-title">ONLINE</h2>
					</div>
					<div className="list row">
						<CourseItem 
                            name="Javascript"
							image="img/img.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="da-ket-thuc"
                        />
						<CourseItem 
							name="Javascript"
							image="img/img2.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="dang-dien-ra"
							/>
						<CourseItem 
							name="Javascript"
							image="img/img1.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="dang-dien-ra"
						/>
						<CourseItem 
							name="Javascript"
							image="img/img3.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="dang-dien-ra"
						/>
						<CourseItem 
							name="Javascript"
							image="img/img4.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="da-ket-thuc"
						/>
						<CourseItem 
							name="Javascript"
							image="img/img5.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
						/>
					</div>
				</div>
			</section>
			<section className="section-2 section-blue">
				<div className="container">
					<div className="textbox white">
						<h3 className="sub-title">KHÓA HỌC</h3>
						<h2 className="main-title">OFFLINE</h2>
					</div>
					<div className="list row">
						<CourseItem 
							name="Javascript"
							image="img/img6.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="dang-dien-ra"
						/>
						<CourseItem 
							name="Javascript"
							image="img/img7.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="da-ket-thuc"
						/>
						<CourseItem 
							name="Javascript"
							image="img/img8.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
						/>
					</div>
					<div className="text-deco">C</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default CourseList;
