module.exports = {
    base: '/core/',
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

        // Supports of mulitple languages
        // Documentation : https://vuepress.vuejs.org/guide/i18n.html#default-theme-i18n-config
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                // Aria Label for locale in the dropdown
                ariaLabel: 'Languages',
                // text for the edit-on-github link
                editLinkText: 'Edit this page on GitHub',
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                // algolia docsearch options for current locale
                algolia: {},
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

                sidebar: {

                }
            },
            '/th/': {
                selectText: 'ภาษา',
                label: 'ไทย',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
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

                algolia: {},
                sidebar: {

                }
            }
        }
    }
}