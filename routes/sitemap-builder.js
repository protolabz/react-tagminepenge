require('babel-register');

import router from '../templates/routes';
const Sitemap = require('../').default;

(
	new Sitemap(router)
		.build('http://my-site.ru')
		.save('../sitemap.xml')
);
