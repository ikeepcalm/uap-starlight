# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro project using the Starlight documentation theme for the UAProject (Ukrainian Minecraft Server) documentation website. The site is built as a static site and deployed to Vercel.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro ...` | Run Astro CLI commands |

## Architecture

### Core Structure
- **Framework**: Astro 5.x with Starlight theme
- **Content**: Markdown/MDX files in `src/content/docs/`
- **Deployment**: Static site hosted on Vercel
- **Site URL**: https://docs.uaproject.net

### Key Directories
- `src/content/docs/` - All documentation content organized by category:
  - `general/` - Basic server information and features
  - `guides/` - Step-by-step tutorials
  - `magic/` - Magic system documentation
  - `pathways/` - Magic character classes
  - `support/` - Help and community resources
- `src/assets/` - Images and media files organized by content category
- `src/components/` - Custom Astro components
- `src/styles/` - Custom CSS and theming
- `public/` - Static assets (favicon, robots.txt, custom scripts)

### Content Management
- **Content Config**: `src/content.config.ts` defines collection schemas
- **Sidebar Navigation**: Auto-generated from directory structure in `astro.config.mjs`
- **Frontmatter**: Standard Starlight frontmatter for metadata and page configuration
- **Languages**: Primarily Ukrainian content with Ukrainian locale (`uk`)

### Styling & Theming
- **Custom CSS**: `src/styles/custom.css` with extensive UAP-specific theming
- **Fonts**: Custom font loading via `src/fonts/font-face.css`
- **Color Scheme**: Blue accent colors with custom shadows and border radius
- **Responsive Design**: Mobile-first with custom breakpoints

### Custom Components
- **Footer**: `src/components/Footer.astro` - Custom footer with navigation links
- **Homepage Layout**: Special layout for homepage with custom hero and card sections
- **Navigation Enhancement**: `public/sidebar-navigation.js` for improved sidebar UX

### Configuration
- **Astro Config**: `astro.config.mjs` - Main configuration with Starlight setup
- **TypeScript**: Strict TypeScript configuration
- **Image Optimization**: Sharp service with unlimited input pixels
- **Analytics**: Vercel Web Analytics enabled
- **Sitemap**: Automatic sitemap generation

### Deployment
- **Platform**: Vercel with static output
- **Domain**: docs.uaproject.net
- **Build**: Automatic builds on git push
- **Performance**: Optimized static site generation with image processing

## Content Guidelines

When working with content:
- All content should be in Ukrainian language
- Follow existing frontmatter patterns for consistency
- Images should be placed in appropriate `src/assets/` subdirectories
- Use MDX for content requiring React-like components
- Maintain consistent navigation structure through directory organization

## Development Notes

- The site uses auto-generated sidebar navigation based on directory structure
- Custom styling heavily customizes the default Starlight appearance
- Footer component handles both homepage and internal page layouts
- Sidebar navigation includes custom JavaScript for enhanced UX
- All external links point to UAProject ecosystem (uaproject.net, Discord, etc.)