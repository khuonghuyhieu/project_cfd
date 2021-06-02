import Home from './page/home';
import MainLayout from './layout/MainLayout';
import Operate from './page/co-operate';
import Register from './page/register';
import Profile from './page/profile';
import Page404 from './page/404page';
import Detail from './page/detail';
import Email from './page/email';
import Faq from './page/faq';
import Coin from './page/introduce-coin';
import Course from './page/course';
import Team from './page/team';
import Payment from './page/payment';
import Project from './page/project';
import Info from './page/profile/component/Info';
import MyCoin from './page/profile/component/MyCoin';
import MyCourse from './page/profile/component/MyCourse';
import PaymentHistory from './page/profile/component/PaymentHistory';
import Projected from './page/profile/component/Projected';

let routers = [
	{
		component: MainLayout,
		routers: [
			{
				component: Team,
				path: '/team',
				exact: true,
			},
			{
				component: Operate,
				path: '/co-operate',
				exact: true,
			},
			{
				component: Home,
				path: '/',
				exact: true,
			},
			{
				component: Profile,
				path: '/profile',
				auth: true,
				routers: [
					{
						component: Info,
						exact: true,
					},
					{
						component: MyCoin,
						path: '/mycoin',
					},
					{
						component: MyCourse,
						path: '/mycourse',
					},
					{
						component: PaymentHistory,
						path: '/paymenthistory',
					},
					{
						component: Projected,
						path: '/projected',
					},
				],
			},
		],
	},
];

export default routers;
