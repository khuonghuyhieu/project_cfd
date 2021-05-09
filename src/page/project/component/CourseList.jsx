import { CourseProjects } from '../../../component';

function CourseList() {
	return (
		<section className="section-1">
			<div className="container">
				<h2 className="main-title">dự án</h2>
				<p className="top-des">
					Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem
					non luctus
				</p>
				<div className="list row">
					<CourseProjects />
					<CourseProjects />
					<CourseProjects />
					<CourseProjects />
					<CourseProjects />
					<CourseProjects />
					<CourseProjects />
				</div>
				<div className="bottom">
					<div className="btn overlay round btn-more">tải thêm</div>
				</div>
			</div>
		</section>
	);
}

export default CourseList;
