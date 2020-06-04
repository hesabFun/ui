import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

window.onload = () => {
	'use strict';

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('./service-worker.js');
	}
}