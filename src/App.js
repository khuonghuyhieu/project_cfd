import React from 'react';

import { Header, Footer } from './component';

// import Home from './page/home';
import Operate from './page/co-operate';

// import Header from "./component/Header";
// import Footer from "./component/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <Home /> */}
			<Operate />
			<Footer />
		</div>
	);
}

export default App;

//component
// function App() {
//   return (
//     <div className="App">
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//       <Item image="/image.jpg" title="React.js">
//         hello
//       </Item>
//     </div>
//   );
// }

// prop
// function Item({ image, title, children }) {
//   return (
//     <div className="item">
//       <div className="name">{title}</div>
//       <img
//         style={{ width: 100, height: 300, alignContent: "center" }}
//         src={image}
//         alt=""
//       />
//       <div>{children}</div>
//     </div>
//   );
// }

// function a({ a, b }) {
//   console.log(a);
// }

// a({
//   a: 1,
//   b: 2,
// });
