# AI Chapter Creation Guide (ICSE 2027 Syllabus)

This guide provides crucial architectural instructions on how to create a new chapter module for "Kinjal's ICSE Hub". You must strictly follow these rules to ensure your chapter integrates seamlessly without causing merge conflicts with other AI agents.

## 1. Project Architecture (Decoupled Engine)

The project uses a minimalist, monochromatic tech aesthetic with no heavy frameworks.
- `index.html`: The home page that dynamically loads chapter accordions.
- `quiz_engine.js`: The global engine that handles ALL quiz logic, slide navigation, and graduation certificates. **NEVER MODIFY THIS FILE.**
- `style.css`: The global stylesheet. Do not duplicate these styles in new pages. Re-use existing classes.
- `subjects/*/data.js`: Data files containing chapter metadata and module links.

## 2. Steps to Add a New Chapter

### Step A: Create the HTML Page
Create a new HTML file for the chapter inside the appropriate subject folder (e.g., `subjects/physics/force.html`). 
1. Use `subjects/geography/climate.html` or `subjects/odia/rebati.html` as a template for the layout.
2. The page should include:
   - The global header and progress bar (`<header>`).
   - A horizontal scroll container (`<main class="scroll-container">`).
   - Multiple slide sections (`<section class="slide">`), breaking the chapter down into **Summary/Lesson slides** followed by an **Extensive Test (Quiz) slide**.
   - The final slide must include the graduation certificate layout.
3. At the bottom of the HTML, load your specific data JS file first, followed by the global quiz engine:
   ```html
   <script src="force.js"></script>
   <script src="../../quiz_engine.js"></script>
   ```

### Step B: Create the Chapter Data (JavaScript)
Create a specific JS file for your chapter's content (e.g., `subjects/physics/force.js`). 
1. **Do not write custom quiz logic.** 
2. Simply declare two global variables that `quiz_engine.js` will read:
   - `window.CHAPTER_COMPANION_MESSAGES`: Array of dialogue for Artie the AI tutor.
   - `window.CHAPTER_QUESTIONS`: An object containing arrays of multiple-choice questions matching the IDs of your HTML quiz containers.

### Step C: Update the Subject Data File for the Accordion UI
Once the page is ready, you must link it on the Home Page accordion.
1. Open the relevant subject data file (e.g., `subjects/physics/data.js`).
2. Locate the chapter object in the `window.ICSE_CHAPTERS.push()` array.
3. Update the `href` property from `"#"` to the new filename (e.g., `"subjects/physics/force.html"`).
4. Remove `"COMING SOON"` from the `tags` array and replace it with descriptive tags.
5. **CRUCIAL:** Add a `modules` array to the chapter object to populate the Home Page accordion. Map each logical part of your chapter to the specific slide anchor (e.g., `#slide-02`).
   ```javascript
   modules: [
       { name: "Lesson: Types of Force", type: "summary", href: "subjects/physics/force.html#slide-02" },
       { name: "Lesson: Torque & Equilibrium", type: "summary", href: "subjects/physics/force.html#slide-03" },
       { name: "Quiz: Extensive Test", type: "test", href: "subjects/physics/force.html#slide-04" }
   ]
   ```

## 3. Design Rules (CRITICAL)
- **Aesthetic**: Strictly black (`#000000`), white (`#ffffff`), and grays. Do NOT introduce new colors. Use monospace and tech-styled elements.
- **Teaching Methodology**: Always break the chapter into easily digestible Summary/Lesson slides before presenting the final extensive test.
- **Interactivity**: Use the `(•‿•)` companion ASCII art character for feedback.

## 4. Handoff
Inform the user once the HTML and JS files have been created, the `window.CHAPTER_QUESTIONS` are defined, and the `data.js` file has been updated with the required `modules` array!
