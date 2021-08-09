module.exports = {
    title: 'Vuepress template',
    locales: {
        '/': {
            lang: 'pt-BR',
        },
    },
    theme: '@vuepress/theme-blog',
    themeConfig: {
        directories: [
            {
                id: 'post',
                dirname: '_posts',
                path: '/',
                itemPermalink: '/:year/:month/:day/:slug',
            },
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Tags', link: '/tag/' },
        ],
        footer: {
            contact: [
                { type: 'github', link: 'https://github.com/rubensoleao/' },
            ],
        },
        globalPagination: {
            lengthPerPage: 10,
        },
        sitemap: {
            hostname: 'https://mywebsiteurl.com',
        },
    },
    plugins: {
        'vuepress-plugin-canonical':
        {
            baseURL: 'https://mywebsiteurl.com',
            stripExtension: true,
        },
        '@vuepress/last-updated': {
            transformer(timestamp) {
                return timestamp;
            }
        },
        'seo': {
        },
    },
    shouldPrefetch: () => false
};
