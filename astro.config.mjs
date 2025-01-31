// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
                src: './src/assets/logo.svg'
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
                    label: '✨ Підтримка ',
                    autogenerate: {directory: 'support'},
                }
            ],
        }),
    ],
});
