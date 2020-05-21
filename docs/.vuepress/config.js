// Welcome to the config.js File. 
// Make sure that these following areas have been edit for each repository

// - base (as kuma-cheatsheet.github.io/[base])
// - repo
// - ga (a Google Analytics tracking code API)
// - algolia API index and API name
// - sidebar (optional) for each language

// and you are should not be edit other lines as they are a template for all cheatsheet.

// For more information, please visit kuma-cheatsheet.github.io for more information.

module.exports = {
    // Documentation : https://v1.vuepress.vuejs.org/config/#basic-config
    base: '/core/', // It should always start and end with a slash.

    repo: 'Kuma-Cheatsheet/core',
    repoLabel: 'Repository',
    editLinks: true,
    editLinkText: 'Help us improve this page!',

    // Setup favicon for the website
    // Documentation : https://v1.vuepress.vuejs.org/config/#head
    head: [
        ['link', { rel: 'icon', href: 'https://avatars1.githubusercontent.com/u/44744915' }]
    ],

    // Documentation : https://v1.vuepress.vuejs.org/config/#markdown
    markdown: {
        lineNumbers: 'True',
    },

    // Documentation : https://v1.vuepress.vuejs.org/plugin/
    // Make sure you have run : yarn global add vuepress@next
    plugins: [
        // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html
        // yarn add -D @vuepress/plugin-active-header-links@next
        ['@vuepress/active-header-links'],
        
        // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html
        // yarn add -D @vuepress/plugin-back-to-top@next
        ['@vuepress/back-to-top'],

        // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html
        // yarn add -D @vuepress/plugin-google-analytics@next
        ['@vuepress/google-analytics',
            {
                'ga': 'UA-134763793-1' // for example UA-00000000-0
            }
        ],

        // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html
        // yarn add -D @vuepress/plugin-medium-zoom@next
        ['@vuepress/medium-zoom'],
        
        // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-nprogress.html
        // yarn add -D @vuepress/plugin-nprogress@next
        ['@vuepress/nprogress'],
        
        // Documentation : yarn add -D @vuepress/plugin-pwa@next
        // yarn add -D @vuepress/plugin-pwa
        ['@vuepress/pwa'],
    ],

    // Editing header for each language
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Kuma Cheatsheet',
            description: 'Cheatsheet for all',
        },
        '/th/': {
            lang: 'th-TH',
            title: 'Kuma Cheatsheet',
            description: 'ชีทสรุปสำหรับทุกคน',
        },
    },

    // Editing themes
    // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html
    themeConfig: {

        // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#algolia-search
        algolia: {
            apiKey: '',
            indexName: '',
        },

        // Supports of mulitple languages
        // Documentation : https://v1.vuepress.vuejs.org/guide/i18n.html#default-theme-i18n-config
        locales: {

            // [Default] English Language
            '/': {
                selectText: 'Languages',
                label: 'English',

                // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#last-updated
                lastUpdated: 'Last update',

                // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#service-worker
                serviceWorker: {
                    // When there is website version, notify user
                    updatePopup: {
                        // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html#options
                        message: "New update of this website is available",
                        buttonText: "Reload",
                    }
                },

                nav: [
                    { text: 'Home', link: '/' },
                    {
                        text: 'Other Cheatsheet', items: [
                            {
                                text: 'Languages', items: [
                                    { text: 'Python', link: 'http://kuma-cheatsheet.github.io/python' },
                                    { text: 'SQL', link: 'http://kuma-cheatsheet.github.io/sql' },
                                ]
                            },
                            {
                                text: 'Tools', items: [
                                    { text: 'SPSS', link: 'http://kuma-cheatsheet.github.io/spss' },
                                    { text: 'Git', link: 'http://kuma-cheatsheet.github.io/git' },
                                ]
                            },
                            {
                                text: 'Diagrams & Algorithms', items: [
                                    { text: 'Class Diagram (UML)', link: 'http://kuma-cheatsheet.github.io/class-diagram' },
                                ]
                            },
                            {
                                text: 'Others', items: [
                                    { text: 'See all', link: 'https://github.com/Kuma-Cheatsheet' },
                                ]
                            }
                        ]
                    },
                    {
                        text: 'Contribute & Others', items: [
                            {
                                text: 'Contribute', items: [
                                    { text: 'Contribute to Cheatsheet', link: 'https://github.com/Kuma-Cheatsheet/core/' },
                                    { text: 'Contribution Guidelines', link: 'https://kuma-cheatsheet.github.io/Guidelines/' },
                                ]
                            },
                            {
                                text: 'Others', items: [
                                    { text: 'Legal Terms', link: 'https://github.com/Kuma-Cheatsheet/core/blob/master/LICENSE.md' },
                                    { text: 'Changelog', link: 'https://github.com/Kuma-Cheatsheet/core/commits/master' },
                                    { text: 'List of Contributor', link: 'https://github.com/Kuma-Cheatsheet/core/pulse' },
                                    { text: 'Development Milestones', link: 'https://github.com/Kuma-Cheatsheet/core/releases' },
                                ]
                            },
                        ]
                    },
                ],

                sidebar: [
                    // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar

                ],
            },

            // Thai Language
            '/th/': {
                selectText: 'ภาษา',
                label: 'ภาษาไทย',

                // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#last-updated
                lastUpdated: 'อับเดทล่าสุด',

                // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#service-worker
                serviceWorker: {
                    // When there is website version, notify user
                    updatePopup: {
                        // Documentation : https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html#options
                        message: "New update of this website is available",
                        buttonText: "OK",
                    }
                },

                nav: [
                    { text: 'หน้าแรก', link: '/' },
                    {
                        text: 'ชีทสรุปอื่นๆ', items: [
                            {
                                text: 'ภาษาโปรแกรมมิ่ง', items: [
                                    { text: 'Python', link: 'http://kuma-cheatsheet.github.io/python' },
                                    { text: 'SQL', link: 'http://kuma-cheatsheet.github.io/sql' },
                                ]
                            },
                            {
                                text: 'อุปกรณ์ช่วยเหลือ', items: [
                                    { text: 'SPSS', link: 'http://kuma-cheatsheet.github.io/spss' },
                                    { text: 'Git', link: 'http://kuma-cheatsheet.github.io/git' },
                                ]
                            },
                            {
                                text: 'แผนผังและอัลกอริทึม', items: [
                                    { text: 'Class Diagram (UML)', link: 'http://kuma-cheatsheet.github.io/class-diagram' },
                                ]
                            },
                            {
                                text: 'อื่นๆ', items: [
                                    { text: 'ดูทั้งหมด', link: 'https://github.com/Kuma-Cheatsheet' },
                                ]
                            }
                        ]
                    },
                    {
                        text: 'ร่วมพัฒนา', items: [
                            {
                                text: 'พัฒนาชีทสรุป', items: [
                                    { text: 'ผ่าน GitHub', link: 'https://github.com/Kuma-Cheatsheet/core/' },
                                    { text: 'วิธีการช่วยพัฒนา', link: 'https://kuma-cheatsheet.github.io/Guidelines/' },
                                ]
                            },
                            {
                                text: 'อื่นๆ', items: [
                                    { text: 'กฎหมายการนำไปใช้ต่อ', link: 'https://github.com/Kuma-Cheatsheet/core/blob/master/LICENSE.md' },
                                    { text: 'รายการความเปลี่ยนแปลง', link: 'https://github.com/Kuma-Cheatsheet/core/commits/master' },
                                    { text: 'รายชื่อผู้ร่วมพัฒนา', link: 'https://github.com/Kuma-Cheatsheet/core/pulse' },
                                    { text: 'เป้าหมายของการพัฒนา', link: 'https://github.com/Kuma-Cheatsheet/core/releases' },
                                ]
                            },
                        ]
                    },
                ],

                sidebar: [
                    // Documentation : https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar

                ],
            },
        },
    },
}
