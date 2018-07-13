module.exports = {
	base: '/documentation-page-vuepress/',
	title: 'Documentation Exmaple Page',
	description: 'VuePress and deployed on Github Pages',
	dest: './docs',

		// Asset Handling
		configureWebpack: {
			resolve: {
				alias: {
					// '@alias': 'assets/'
					'@alias': 'documentation-page-vuepress/'
				}
			}
		},

		head: [
	    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
	    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
	    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }]
		],

		// Header Nav Language button
		locales: {
		'/': {
			lang: 'English',
			title: "Help Center",
			description: '----'
		}
	},

	themeConfig: {

		// Header Nav Logo
		logo: '/Logo.png',

		// Assumes GitHub. Can also be a full GitLab url.
		repo: 'janisrozenfelds/documentation-page-vuepress/',
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: 'Contribute!',

		// Optional options for generating "Edit this page" link

		// if your docs are in a different repo from your main project:
		docsRepo: 'janisrozenfelds/documentation-page-vuepress/',
		// if your docs are not at the root of the repo:
		docsDir: '',
		// if your docs are in a specific branch (defaults to 'master'):
		docsBranch: 'master',
		// defaults to false, set to true to enable
		editLinks: true,
		// custom text for edit link. Defaults to "Edit this page"
		editLinkText: 'Help us improve this page!',

		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				editLinkText: 'Edit this page on GitHub',
				lastUpdated: 'Last Updated',
				sidebar: [
					'/',
					'/guide/',
					'/guide/page1'
				]
			}
		}
	}
}
