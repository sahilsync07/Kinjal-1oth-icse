# AI Chapter Creation Guide (ICSE 2027 Syllabus)

This guide provides instructions on how to create a new chapter page for the "Kinjal's Grammar Hub" platform. You can pass this guide to any AI assistant to help build out new subjects and chapters.

## 1. Project Architecture

The project uses a minimalist, monochromatic tech aesthetic with no heavy frameworks. 
- `index.html`: The home page that dynamically loads chapter cards.
- `style.css`: The global stylesheet. Do not duplicate these styles in new pages. Re-use existing classes.
- `data/*.js`: Data files containing chapter metadata (one per subject).
- `app.js`: Contains the Javascript question arrays and logic for the existing grammar chapters (Articles, SVA).

## 2. Steps to Add a New Chapter

### Step A: Create the HTML Page
Create a new HTML file for the chapter (e.g., `tenses.html`). 
1. Look at `articles.html` or `sva.html` as a template for the layout.
2. The page should include:
   - The global header and progress bar (`<header>`).
   - A horizontal scroll container (`<div class="scroll-container">`).
   - Multiple slide sections (`<section class="slide">`), each containing a `<div class="card">`.
3. Re-use classes like `card`, `companion-box`, `btn-primary`, `tech-table`, `blank-fill-container`, and `explanation-panel`.
4. The final slide must include the graduation certificate layout (`<div class="graduation-box">`).

### Step B: Create the Chapter Logic (JavaScript)
If the chapter has interactive quizzes:
1. Create a new JS file for the chapter (or append to `app.js` if it's English Grammar). E.g., `tenses.js`.
2. Define the quiz questions in a JSON array (like `QUESTIONS_C1` in `app.js`).
3. Add event listeners to handle option selection, input validation, and rendering the explanation panels (`.explanation-panel`).
4. Ensure the progress bar (`.progress-bar`) updates correctly when moving between slides.

### Step C: Update the Data File
Once the page is ready, you must link it on the home page.
1. Open the relevant subject data file in the `data/` directory (e.g., `data/eng_lang.js`).
2. Locate the chapter object in the `window.ICSE_CHAPTERS.push()` array.
3. Update the `href` property from `"#"` to the new filename (e.g., `"tenses.html"`).
4. Remove `"COMING SOON"` from the `tags` array and replace it with descriptive tags like `["12 SLIDES", "50 QUESTIONS"]`.

## 3. Design Rules (CRITICAL)
- **Aesthetic**: Strictly black (`#000000`), white (`#ffffff`), and grays (e.g., `var(--canvas-bg)`). Do NOT introduce new colors unless specifically asked.
- **Typography**: Use the predefined `var(--font-sans)` (Inter) and `var(--font-mono)` (JetBrains Mono).
- **Interactivity**: Use the `(•‿•)` companion ASCII art character for feedback and explanations.

## 4. Handoff
If you are an AI generating this, inform the user once the HTML and JS files have been created and the data file has been updated!
