import React from 'react';
import { CourseItem } from '../../../component';

function CourseList({ online, offline }) {
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
						{online.map((value, i) => (
							<CourseItem key={value.slug} {...value} />
						))}
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
						{offline.map((value, i) => (
							<CourseItem key={value.slug} {...value} />
						))}
					</div>
					<div className="text-deco">C</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default CourseList;
