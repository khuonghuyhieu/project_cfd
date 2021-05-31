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

let routers = [
	{
		component: MainLayout,
		path: '/',
		routers: [
			{
				component: Home,
				path: '',
				exact: true,
			},
			{
				component: Team,
				path: '/team',
				exact: true,
			},
			{
				component: Team,
				path: '/co-operate',
				exact: true,
			},
		],
	},
];

export default routers;
