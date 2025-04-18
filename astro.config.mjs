// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

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
    integrations: [
        starlight({
            title: 'UAProject',
            defaultLocale: 'root',
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
            social: {
                discord: 'https://discord.gg/uaproject',
            },
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
