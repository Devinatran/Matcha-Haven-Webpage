🍵 Matcha Haven — Store Products
A dynamic product storefront for a Japanese matcha tea brand. Products are fetched asynchronously and rendered into a responsive card grid — no frameworks, no build tools, just vanilla HTML, CSS, and JavaScript.

Technologies Used

HTML5 — semantic markup (<article>, <header>, <main>, <footer>)
CSS3 — custom properties, CSS Grid, keyframe animations, hover transitions
Vanilla JavaScript (ES6+) — async/await, Promises, .then() chaining, DOM manipulation
Google Fonts — Cormorant Garamond (display serif) and Zen Kaku Gothic New (body sans-serif)


How to Run
No installs or build steps needed.

Download or clone the project files.
Make sure all three files are in the same folder:

   matcha-haven/
   ├── index.html
   ├── style.css
   └── cp_2.js

Open index.html in any modern browser.

That's it — the page will load and render the product collection automatically.

What I Learned
Async JavaScript — two ways. The project implements the same data-fetching task twice: once with .then() chaining (fetchProductsThen) and once with async/await (fetchProductsAsync). Writing both side by side made the relationship between them click — async/await is syntactic sugar over Promises, not a different system.
DOM manipulation from scratch. Every product card is built entirely in JavaScript using createElement, classList.add, and appendChild — no template literals, no innerHTML shortcuts. It was tedious, but it made the document tree feel concrete and navigable in a way that copying HTML doesn't.
Error handling as a UI concern. The handleError function doesn't just console.error — it writes a visible, user-facing message back into the container. That small shift in thinking (errors are part of the UI, not just the console) changed how I approached the rest of the project.
CSS custom properties for consistency. Defining the full color palette and font stack in :root made it easy to stay consistent across 300+ lines of CSS without ever hardcoding a hex value twice.
Staggered animation with pure CSS. The cards entrance animation uses nth-child delays rather than any JavaScript timing — a clean, zero-dependency way to add visual polish.
