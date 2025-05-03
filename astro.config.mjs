// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
            config: {
                limitInputPixels: false,
            },
        },
    },
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
        maxDuration: 8,
    }),
    site: 'https://docs.uaproject.xyz',
    integrations: [
        sitemap(),
        starlight({
            title: 'UAProject',
            defaultLocale: 'root',
            head: [
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:image',
                        content: 'https://docs.uaproject.xyz/favicon.svg',
                    },
                },
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:type',
                        content: 'website',
                    },
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'twitter:card',
                        content: 'summary_large_image',
                    },
                },
            ],
            components: {
                TwoColumnContent: './src/components/Footer.astro',
            },
            locales: {
                root: {
                    label: 'Ukrainian',
                    lang: 'uk',
                },
            },
            logo: {
                src: './src/assets/favicon.svg'
            },
            social: [
                {icon: 'discord', label: 'Discord', href: 'https://discord.gg/uaproject'}
            ],
            customCss: [
                './src/fonts/font-face.css',
                './src/styles/custom.css',
            ],
            sidebar: [
                {
                    label: '☄ Інформація',
                    autogenerate: {directory: 'general'},
                },
                {
                    label: '📔 Посібники',
                    autogenerate: {directory: 'guides'},
                },
                {
                    label: '☔ Магія?',
                    autogenerate: {directory: 'magic'},
                },
                {
                    label: '🪄 Магічні шляхи',
                    autogenerate: {directory: 'pathways'},
                },
                {
                    label: '✨ Підтримка ',
                    autogenerate: {directory: 'support'},
                }
            ],
        }),
    ],
});
