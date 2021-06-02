import { Route, Switch } from 'react-router-dom';
import PrivateRouter from '../component/PrivateRouter';

export function routerConfig(routers, parentPath = '') {
	return (
		<Switch>
			{routers.map((e) => {
				let { exact, path, component: Component, routers: childRouters, auth } = e;

				if (!path) path = '';
				path = parentPath + '/' + path;
				path = path.replace(/\/+/g, '/');
				let child = null;
				if (childRouters) {
					child = routerConfig(childRouters, path);
				}
				if (auth) {
					return (
						<PrivateRouter
							exact={exact}
							path={path}
							component={() => <Component>{child}</Component>}
						/>
					);
				}
				return <Route exact={exact} path={path} component={() => <Component>{child}</Component>} />;
			})}
		</Switch>
	);
}
