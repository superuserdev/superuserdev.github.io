export const facebook = {
	url: new URL('https://www.facebook.com/sharer/sharer.php?u&t'),
	icon: new URL('/img/logos/Facebook.svg', location.origin),
	label: 'Facebook',
};

export const twitter = {
	url: new URL('https://twitter.com/intent/tweet/?text&url'),
	icon: new URL('/img/logos/twitter.svg', location.origin),
	label: 'Twitter',
};

export const googlePlus = {
	url: new URL('https://plus.google.com/share/?url'),
	icon: new URL('/img/logos/Google_plus.svg', location.origin),
	label: 'Google+',
};

export const linkedIn = {
	url: new URL('https://www.linkedin.com/shareArticle/?title&summary&url'),
	icon: new URL('/img/logos/linkedin.svg', location.origin),
	label: 'LinkedIn',
};

export const reddit = {
	url: new URL('https://www.reddit.com/submit/?url&title'),
	icon: new URL('/img/logos/Reddit.svg', location.origin),
	label: 'Reddit',
};
