import { useHistory } from 'react-router-dom';

function useDelayLink() {
	let history = useHistory();

	function delayLink(e) {
		e.preventDefault();
		let href = e.currentTarget.getAttribute('href');
		// console.log(href);
		setTimeout(() => {
			history.push(href);
		});

		document.body.classList.remove('menu-is-show');
	}
	return delayLink;
}

export default useDelayLink;
