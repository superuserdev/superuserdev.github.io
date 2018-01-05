import './std-js/shims.js';
import './std-js/deprefixer.js';
import {$, ready} from './std-js/functions.js';
import * as Mutations from './std-js/mutations.js';
import webShareApi from './std-js/webShareApi.js';
import * as shares from './share-config.js';

webShareApi(...Object.values(shares));

async function registerServiceWorker(el) {
	return new Promise(async (resolve, reject) => {
		try {
			if (! Navigator.prototype.hasOwnProperty('serviceWorker')) {
				throw new Error('Service worker not supported');
			} else if (! navigator.onLine) {
				throw new Error('Offline');
			}

			const url = new URL(el.dataset.serviceWorker, location.origin);
			const reg = await navigator.serviceWorker.register(url, {scope: '/'});

			if (navigator.onLine) {
				reg.update();
			}

			reg.addEventListener('updatefound', event => resolve(event.target));
			reg.addEventListener('install', event => resolve(event.target));
			reg.addEventListener('activate', event => resolve(event.target));
			reg.addEventListener('error', event => reject(event.target));
			reg.addEventListener('fetch', console.info);
		} catch (error) {
			reject(error);
		}
	});
}

ready().then(async () => {
	const $doc = $(document.documentElement);
	$('[data-service-worker]').each( el => registerServiceWorker(el));

	if (Navigator.prototype.hasOwnProperty('share')) {
		$('[data-share]').attr({hidden: false});
	}

	$doc.replaceClass('no-js', 'js');
	$doc.toggleClass('offline', ! navigator.onLine);
	$doc.watch(Mutations.events, Mutations.options, Mutations.filter);
	$doc.keypress(event => event.key === 'Escape' && $('dialog[open]').close());
	Mutations.init();

	$('[data-open]').click(event => {
		event.preventDefault();
		const url = new URL(event.target.dataset.open, location.origin);
		window.open(url);
	});

	if (document.head.dataset.hasOwnProperty('jekyllData')) {
		console.log(JSON.parse(decodeURIComponent(document.head.dataset.jekyllData)));
	}
});
