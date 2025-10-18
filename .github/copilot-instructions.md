<!-- .github/copilot-instructions.md for tp2-malen-ciardullo -->

# How to help in this repository (concise rules for AI coding agents)

This repository is a small static website (HTML/CSS/JS) showcasing artwork. The guidance below focuses on what an AI assistant needs to know to be productive editing, extending, and debugging the site.

1. Big picture
   - This is a client-side, static site. Entry is `index.html`. Other pages: `dos.html`, `tres.html`, `cuatro.html`.
   - Styling is primarily in `css/` (notably `cuadernos.css`, `estilo.css`, plus `input.css`/`output.css` in `Proyecto/src`). Tailwind CDN is used in `index.html` for layout utilities.
   - Interactive behavior lives in `js/`:
   - `audioControl.js` — toggles background video audio and updates id="btnAudio" label.
     - `cuadernos.js` — implements a page-flip UI using `.pagina` elements and controls with ids `siguiente`/`anterior`.
   - Media assets are under `img/` and fonts under `fonts/`.

2. Project-specific conventions
   - DOM access uses direct `document.getElementById` and `querySelectorAll` — prefer keeping the same approach (no heavy framework insertion) when making small fixes.
   - CSS class names are Spanish (e.g., `.hoja`, `.detras`, `.pasando`). Use these exact names when modifying JavaScript behavior.
   - Buttons and controls are placed by id in HTML (e.g., id="btnAudio", id="siguiente", id="anterior"). If adding controls, maintain the id-based wiring pattern.
   - The repository is intentionally static — avoid adding a build tool or bundler unless the change requires it. If a build step is necessary, document it clearly in `README.md` and add minimal scripts (e.g., npm) rather than replacing the static nature.

3. Coding patterns and examples to follow
   - Use small, focused JavaScript modules. Example: `audioControl.js` wraps behavior inside `DOMContentLoaded` to ensure elements exist.
   - Respect existing animation timing and class toggles. `cuadernos.js` uses a 1s timeout paired with CSS transition; keep the same durations or update both JS and CSS together.
   - When adding accessibility improvements (e.g., keyboard support for page flip or audio toggle), add only lightweight, progressive enhancements (ARIA attributes, keyboard event listeners) and keep changes localized to the corresponding JS file.

4. Build / run / debug
   - There is no build system. To preview changes, open `index.html` (or other HTML files) in a browser. For video/audio autoplay testing, serve the folder via a simple static server (recommended):

     python3 -m http.server 8000

     Then open http://localhost:8000 in a browser. Mention that local file:// may block media autoplay in some browsers.

5. Tests and quality gates
   - No automated tests are present. When changing JS/CSS, validate manually in desktop Chrome/Firefox and check mobile responsiveness because site uses Tailwind utilities and responsive classes in `index.html`.
   - Keep changes small and include a short testing note in the PR describing manual steps (which page to open, which buttons to click, expected visual change).

6. Integration and external dependencies
   - Uses Tailwind via CDN in `index.html` and Google Fonts. Don’t remove or rewrite these references without a clear reason.
   - Media files are referenced relative to `img/`. If renaming or moving assets, update all HTML references.

7. Files to inspect for context when making changes
   - `index.html` — main entry and Tailwind integration.
   - `dos.html`, `tres.html`, `cuatro.html` — other pages that may use the page-flip patterns.
   - `js/audioControl.js`, `js/cuadernos.js` — primary interactive logic.
   - `css/cuadernos.css`, `css/estilo.css`, `css/input.css`/`output.css` — styling and animation durations.

8. Example tasks and hints
   - Add keyboard navigation for the page flip: bind Left/Right arrow keys to `retrocederPagina`/`pasarPagina` in `cuadernos.js`. Use `event.code === 'ArrowRight'`/`ArrowLeft'` and guard to not interfere with form inputs.
   - Expose an `isMuted()` helper in `audioControl.js` if other scripts need to read playback state.
   - If changing transition time in CSS (`.hoja { transition: ... }`), update the 1000ms timeouts in `cuadernos.js` to match.

9. PR checklist for agents
   - Small focused commit message describing the change and files touched.
   - Manual test steps in PR description (HTML to open, buttons to click, keys to press).
   - If adding/renaming assets, show before/after asset references.

If anything in the instructions is unclear or you'd like more project-specific examples (keyboard shortcuts, alternate page layouts, or adding lightweight tests), tell me what to expand and I will iterate.
