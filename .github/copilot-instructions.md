# AI Agent Instructions for Avis-Portfolio

## Project Overview
This is a Node.js-based portfolio website using Express and EJS templating. It showcases Avis Ejerenwa's work, skills, and professional experience through a modern, responsive interface.

## Key Architecture Patterns
- **MVC Structure**: 
  - `src/app.js` - Main Express application entry point
  - `src/controllers/` - Request handlers
  - `src/views/` - EJS templates
  - `src/public/` - Static assets (CSS, JS, images)

- **Environment Management**:
  ```javascript
  const SERVER = !(process.execPath.includes("C:"));
  // Handles different paths for server/local environments
  const APP_DIRECTORY = !(SERVER) ? "" : (process.env.APP_DIRECTORY || "");
  ```

## Critical Files & Components
- `src/app.js`: Core application setup, middleware configuration, and route definitions
- `src/views/home.ejs`: Main portfolio page with sections:
  - Hero section
  - About Me
  - Experience (tab-based layout)
  - Featured Projects
  - Contact

## Development Workflow
1. **Local Development**:
   ```bash
   npm install
   npm run dev  # Runs with nodemon for hot reloading
   ```

2. **Production**:
   ```bash
   npm start  # Runs with node directly
   ```

## Project Conventions
1. **Route Structure**:
   - Base routes include APP_DIRECTORY prefix for server deployment
   - Example: `app.get(APP_DIRECTORY+'/', handler)`

2. **View Organization**:
   - Partials in `views/partials/` for reusable components
   - Main layout template wraps all pages

3. **Static Assets**:
   - CSS: `public/css/styles.css` for global styles
   - JavaScript: `public/js/scripts.js` for client-side functionality
   - Images: `public/img/` for project assets

## Common Tasks
1. **Adding a New Section**:
   - Create partial in `views/partials/` if reusable
   - Update `home.ejs` with new section markup
   - Add corresponding styles in `styles.css`

2. **Modifying Projects**:
   - Projects are structured in `home.ejs` using consistent card patterns
   - Follow existing format for YouTube video embeds and project links

## Error Handling
- 404 errors are handled by `views/partials/404.ejs`
- Server errors should maintain the consistent error page pattern

## Integration Points
- **YouTube Embeds**: Used for project showcases
- **Social Links**: GitHub and LinkedIn integrations
- **Contact Form**: Email mailto: links for direct contact

Remember to maintain the clean, professional design aesthetic and ensure responsive behavior across all screen sizes.