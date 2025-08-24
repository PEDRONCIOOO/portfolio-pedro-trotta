# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website for Pedro Trotta, a Software Engineer. The project uses TypeScript, SASS, and a custom design system called "Once UI" for components and styling.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production 
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linter
- `npm run export` - Export static files

## Code Architecture

### Design System (Once UI)
- **Location**: `src/once-ui/`
- **Components**: Comprehensive component library in `src/once-ui/components/`
- **Styles**: SCSS-based design system in `src/once-ui/styles/` and `src/once-ui/tokens/`
- **Usage**: All UI components are imported from `@/once-ui/components`

### Content Management
- **Configuration**: `src/app/resources/config.js` - Site-wide settings, themes, effects
- **Content**: `src/app/resources/content.js` - All page content, personal info, work experience
- **Routes**: Configured in `config.js` with password protection support

### Project Structure
- **Pages**: App Router structure in `src/app/`
- **Components**: Custom components in `src/components/`
- **MDX Content**: Blog posts in `src/app/blog/posts/`, project pages in `src/app/work/projects/`
- **Styling**: Component-specific SCSS modules, global styles through Once UI

### Key Features
- **Route Protection**: Password-protected routes configured in `config.js`
- **MDX Support**: Blog posts and project pages written in MDX
- **Image Gallery**: Masonry grid layout in `src/components/gallery/`
- **Responsive Design**: Mobile-first approach with Once UI breakpoints

### Styling Approach
- **Design Tokens**: Centralized in `src/once-ui/tokens/`
- **Theme System**: Dark/light themes, configurable color schemes
- **Component Styles**: SCSS modules co-located with components
- **Layout**: Flex and Grid-based layouts using Once UI components

### Data Flow
- Static content defined in `content.js`
- Dynamic routing for blog posts and projects via MDX files
- Theme and effects configured through `config.js`

## Code Formatting

Uses Biome for formatting and linting:
- 2-space indentation
- Double quotes for JavaScript/TypeScript
- 100 character line width

## TypeScript Configuration

- Path aliases: `@/*` maps to `./src/*`
- Strict null checks enabled
- Target ES2017