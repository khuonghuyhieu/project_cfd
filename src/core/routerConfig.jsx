import { Router, Switch } from 'react-router-dom';

export function routerConfig(routers) {
	return (
		<Switch>
			{routers.map((e) => {
				let { exact, path, component: Component, router: childRouters } = e;

				return <Router exact={exact} path={path} component={Component} />;
			})}
		</Switch>
	);
}
