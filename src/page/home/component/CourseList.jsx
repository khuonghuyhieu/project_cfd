import React from 'react';
import { CourseItem } from '../../../component';

export default function CourseList() {
	return (
		<React.Fragment>
			<section className="section-courseoffline">
				<div className="container">
					<p className="top-des">
						The readable content of a page when looking at its layout. The point of using Lorem
						Ipsum is that it has a more-or-less normal
					</p>
					<div className="textbox">
						<h2 className="main-title">Khóa học Offline</h2>
					</div>
					<div className="list row">
						<CourseItem
							name="Javascript"
							image="img/img1.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="da-ket-thuc"
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
							image="img/img1.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="sap-ket-thuc"
						/>
						<CourseItem
							name="React-Redux"
							image="img/img1.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="da-ket-thuc"
						/>
						<CourseItem
							name="Javascript"
							image="img/img1.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="da-ket-thuc"
						/>
						<CourseItem
							name="Javascript"
							image="img/img1.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="da-ket-thuc"
						/>
					</div>
				</div>
			</section>
			<section className="section-courseonline section-blue">
				<div className="container">
					<div className="textbox">
						<h2 className="main-title">Khóa học Online</h2>
					</div>
					<div className="list row">
						<CourseItem
							name="Javascript"
							image="img/img1.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="da-ket-thuc"
						/>
						<CourseItem
							name="Javascript"
							image="img/img1.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="sap-dien-ra"
						/>
						<CourseItem
							name="Javascript"
							image="img/img1.png"
							description="One of the best corporate fashion brands in Sydney "
							teacher_avatar="img/avt.png"
							teacher_name="Trần Nghĩa"
							status="dang-dien-ra"
						/>
					</div>
					<div className="text-deco">C</div>
				</div>
			</section>
		</React.Fragment>
	);
}
