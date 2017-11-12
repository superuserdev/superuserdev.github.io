import './std-js/shims.js';
import {$} from './std-js/functions.js';
import * as Mutations from './std-js/mutations.js';

async function readyHandler() {
	Mutations.init();
	$(document.documentElement).replaceClass('no-js', 'js');
}

$(self).ready(readyHandler, {once: true});
