/* cell_division.js — Biology Chapter 50: Cell Cycle & Cell Division */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    // Slide 0: Welcome
    { face: "WELCOME", text: "Hey Kinjal! Welcome to your first Biology chapter — Cell Cycle & Cell Division. This is a crucial topic for your ICSE boards. Let's master it together!" },
    // Slide 1: Lesson 1 — Cell Cycle
    { face: "THINKING", text: "The cell cycle is the life story of a cell — from birth to division. Pay close attention to the phases of Interphase!" },
    // Slide 2: Quiz 1
    { face: "WELCOME", text: "Time to test what you learned about the cell cycle phases. Remember — G1, S, and G2 make up Interphase!" },
    // Slide 3: Lesson 2 — Mitosis
    { face: "THINKING", text: "Mitosis is the great divider! PMAT — Prophase, Metaphase, Anaphase, Telophase. Let's break it down stage by stage." },
    // Slide 4: Quiz 2
    { face: "WELCOME", text: "Can you identify each stage of mitosis? Let's see how well you remember PMAT!" },
    // Slide 5: Lesson 3 — Meiosis
    { face: "THINKING", text: "Meiosis is more complex — two divisions, crossing over, and genetic variation. Focus on the differences from mitosis!" },
    // Slide 6: Quiz 3
    { face: "WELCOME", text: "Meiosis has many unique features. Let's test if you can distinguish Meiosis I from Meiosis II!" },
    // Slide 7: Lesson 4 — Comparisons
    { face: "THINKING", text: "Board exams LOVE comparison questions. Mitosis vs Meiosis and Plant vs Animal cell division are guaranteed scorers!" },
    // Slide 8: Quiz 4
    { face: "WELCOME", text: "Comparison time! Can you tell which feature belongs to mitosis and which to meiosis?" },
    // Slide 9: Lesson 5 — Chromosomes & Significance
    { face: "THINKING", text: "Chromosomes carry our genetic blueprint. Understanding their structure helps everything else click into place!" },
    // Slide 10: Quiz 5
    { face: "WELCOME", text: "Final topic quiz! Let's see how well you know chromosome structure and the significance of cell division." },
    // Slide 11: Recap
    { face: "HAPPY", text: "Amazing progress, Kinjal! Here's a summary table of everything we covered. Use this as your quick revision sheet!" },
    // Slide 12: Mega Revision
    { face: "THINKING", text: "This is the ultimate challenge — 20 board-level questions mixing everything together. This is optional but highly recommended!" },
    // Slide 13: Graduation
    { face: "GRADUATION", text: "You've conquered Cell Division! Kinjal, you're a biology star! Print your certificate and show it off! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Cell Cycle Basics (10 questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: "q1_1", rule: "CELL CYCLE",
            sentence: "The cell cycle consists of two main phases: Interphase and _____ phase.",
            options: ["M (Mitotic)", "S (Synthesis)", "G1 (Gap 1)", "G0 (Quiescent)"],
            correct: 0,
            explanations: {
                correct: "The cell cycle has two main phases: Interphase (G1, S, G2) and the M phase (Mitotic phase), which includes mitosis and cytokinesis.",
                wrong: { 1: "S phase is a sub-phase within Interphase where DNA replication occurs, not a main phase.", 2: "G1 is also a sub-phase of Interphase, not one of the two main phases.", 3: "G0 is a resting phase where cells exit the cell cycle — it is not one of the two main phases." }
            }
        },
        {
            id: "q1_2", rule: "INTERPHASE",
            sentence: "During the _____ phase of Interphase, the cell grows in size and synthesizes proteins needed for DNA replication.",
            options: ["G1 (Gap 1)", "S (Synthesis)", "G2 (Gap 2)", "M (Mitotic)"],
            correct: 0,
            explanations: {
                correct: "G1 (Gap 1) is the first phase of Interphase. The cell grows, produces RNA, synthesizes proteins, and prepares for DNA replication.",
                wrong: { 1: "S phase is when DNA replication actually occurs, not the preparation for it.", 2: "G2 is the phase after DNA replication, where the cell prepares for mitosis.", 3: "M phase is mitosis itself, which comes after Interphase." }
            }
        },
        {
            id: "q1_3", rule: "S PHASE",
            sentence: "DNA replication takes place during the _____ phase of Interphase.",
            options: ["G1 (Gap 1)", "S (Synthesis)", "G2 (Gap 2)", "Prophase"],
            correct: 1,
            explanations: {
                correct: "The S (Synthesis) phase is when each chromosome replicates to form two sister chromatids joined at the centromere. DNA content doubles from 2n to 4n.",
                wrong: { 0: "G1 is the growth phase before DNA replication begins.", 2: "G2 comes after S phase — DNA has already been replicated by then.", 3: "Prophase is a stage of mitosis, not Interphase." }
            }
        },
        {
            id: "q1_4", rule: "G2 PHASE",
            sentence: "In the _____ phase, the cell synthesizes proteins needed for cell division, such as tubulin for spindle fibres.",
            options: ["G1", "S", "G2", "Prophase"],
            correct: 2,
            explanations: {
                correct: "G2 (Gap 2) is the final sub-phase of Interphase. The cell synthesizes tubulin (for spindle fibres), checks for DNA errors, and prepares to enter mitosis.",
                wrong: { 0: "G1 prepares for DNA replication, not for cell division itself.", 1: "S phase is devoted to DNA synthesis/replication.", 3: "Prophase is part of mitosis — spindle proteins are made beforehand in G2." }
            }
        },
        {
            id: "q1_5", rule: "INTERPHASE",
            sentence: "Interphase is often mistakenly called the 'resting phase', but in reality the cell is metabolically _____.",
            options: ["inactive", "active", "dormant", "dividing"],
            correct: 1,
            explanations: {
                correct: "Interphase is the most metabolically active period. The cell grows, replicates DNA, and synthesises proteins. It only 'rests' from division, not from activity.",
                wrong: { 0: "The cell is very much active during Interphase — it's the busiest period of the cell cycle.", 2: "Dormant is incorrect. Dormancy relates to G0 phase, not Interphase.", 3: "The cell is not dividing during Interphase — division happens in the M phase." }
            }
        },
        {
            id: "q1_6", rule: "CELL CYCLE",
            sentence: "The longest phase of the cell cycle is _____.",
            options: ["Prophase", "Interphase", "Anaphase", "Telophase"],
            correct: 1,
            explanations: {
                correct: "Interphase occupies about 90–95% of the total cell cycle time. It includes G1, S, and G2 phases where the cell grows and prepares for division.",
                wrong: { 0: "Prophase is the longest phase of mitosis, but mitosis itself is much shorter than Interphase.", 2: "Anaphase is actually the shortest phase of mitosis.", 3: "Telophase is a brief final phase of mitosis." }
            }
        },
        {
            id: "q1_7", rule: "INTERPHASE",
            sentence: "At the end of S phase, each chromosome consists of two _____ joined at the centromere.",
            options: ["homologous chromosomes", "sister chromatids", "centrioles", "spindle fibres"],
            correct: 1,
            explanations: {
                correct: "After DNA replication in S phase, each chromosome is made up of two identical sister chromatids joined at the centromere.",
                wrong: { 0: "Homologous chromosomes are pairs (one from each parent) — they are not the result of S phase replication.", 2: "Centrioles are organelles involved in spindle formation, not part of chromosome structure.", 3: "Spindle fibres are microtubules used during cell division, unrelated to chromosome replication." }
            }
        },
        {
            id: "q1_8", rule: "G0 PHASE",
            sentence: "Nerve cells (neurons) in adults typically remain in the _____ phase and do not divide.",
            options: ["G1", "S", "G2", "G0"],
            correct: 3,
            explanations: {
                correct: "G0 (G-zero) is the quiescent phase where cells exit the cell cycle and stop dividing. Neurons and mature RBCs are examples of cells that remain in G0.",
                wrong: { 0: "G1 is still part of the active cell cycle — cells in G1 are preparing for replication.", 1: "S phase cells are actively replicating DNA, not resting.", 2: "G2 cells have already replicated DNA and are about to divide." }
            }
        },
        {
            id: "q1_9", rule: "CELL CYCLE",
            sentence: "The division of the cytoplasm after nuclear division is called _____.",
            options: ["karyokinesis", "cytokinesis", "synapsis", "crossing over"],
            correct: 1,
            explanations: {
                correct: "Cytokinesis is the division of the cytoplasm, which follows karyokinesis (nuclear division). Together they complete cell division.",
                wrong: { 0: "Karyokinesis is the division of the nucleus, not the cytoplasm.", 2: "Synapsis is the pairing of homologous chromosomes during meiosis.", 3: "Crossing over is the exchange of genetic material between homologous chromosomes during meiosis." }
            }
        },
        {
            id: "q1_10", rule: "CELL CYCLE",
            sentence: "The division of the nucleus during cell division is specifically termed _____.",
            options: ["cytokinesis", "karyokinesis", "binary fission", "budding"],
            correct: 1,
            explanations: {
                correct: "Karyokinesis (karyon = nucleus, kinesis = movement) refers specifically to the division of the nucleus. It is followed by cytokinesis.",
                wrong: { 0: "Cytokinesis is the division of the cytoplasm, not the nucleus.", 2: "Binary fission is the mode of cell division in prokaryotes (bacteria), not a term for nuclear division.", 3: "Budding is an asexual reproduction method in organisms like yeast and Hydra." }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Mitosis (10 questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: "q2_1", rule: "PROPHASE",
            sentence: "During prophase, chromatin fibres condense and coil tightly to form visible _____.",
            options: ["centrioles", "chromosomes", "spindle fibres", "cell plates"],
            correct: 1,
            explanations: {
                correct: "In prophase, the loosely coiled chromatin condenses into short, thick, visible chromosomes. Each chromosome appears as two sister chromatids joined at the centromere.",
                wrong: { 0: "Centrioles are organelles that help form the spindle apparatus — they are not formed from chromatin.", 2: "Spindle fibres are made of tubulin protein and radiate from centrioles, not from chromatin.", 3: "Cell plates form during cytokinesis in plant cells, not during prophase." }
            }
        },
        {
            id: "q2_2", rule: "PROPHASE",
            sentence: "The nuclear membrane and nucleolus _____ during late prophase.",
            options: ["thicken", "disappear", "duplicate", "move to poles"],
            correct: 1,
            explanations: {
                correct: "By the end of prophase, the nuclear membrane breaks down (disappears) and the nucleolus also disintegrates, allowing spindle fibres to access the chromosomes.",
                wrong: { 0: "The nuclear membrane does not thicken — it actually dissolves.", 2: "The nuclear membrane does not duplicate; it disintegrates and reforms later in telophase.", 3: "The nuclear membrane does not move — it breaks down into fragments." }
            }
        },
        {
            id: "q2_3", rule: "METAPHASE",
            sentence: "During metaphase, chromosomes align along the _____ of the cell.",
            options: ["poles", "equator (metaphase plate)", "nuclear membrane", "centrioles"],
            correct: 1,
            explanations: {
                correct: "In metaphase, all chromosomes line up at the cell's equator (also called the metaphase plate or equatorial plate). Spindle fibres attach to their centromeres.",
                wrong: { 0: "The poles are where the centrioles sit — chromosomes move TO the poles during anaphase, not metaphase.", 2: "The nuclear membrane has already disappeared by metaphase.", 3: "Centrioles are at the poles; chromosomes align between them at the equator." }
            }
        },
        {
            id: "q2_4", rule: "ANAPHASE",
            sentence: "In anaphase, the centromere of each chromosome splits and _____ move to opposite poles.",
            options: ["homologous chromosomes", "sister chromatids", "centrioles", "nucleoli"],
            correct: 1,
            explanations: {
                correct: "During anaphase, the centromere splits and the two sister chromatids (now called daughter chromosomes) are pulled apart to opposite poles by spindle fibres.",
                wrong: { 0: "Homologous chromosomes separate during Meiosis I, not during mitotic anaphase.", 2: "Centrioles are already at the poles — they don't move during anaphase.", 3: "Nucleoli reform during telophase, not anaphase." }
            }
        },
        {
            id: "q2_5", rule: "ANAPHASE",
            sentence: "Anaphase is the _____ phase of mitosis.",
            options: ["longest", "shortest", "first", "last"],
            correct: 1,
            explanations: {
                correct: "Anaphase is the shortest phase of mitosis. The centromere splitting and chromatid separation happens very rapidly.",
                wrong: { 0: "Prophase is the longest phase of mitosis, not anaphase.", 2: "Prophase is the first phase of mitosis.", 3: "Telophase is the last phase of mitosis." }
            }
        },
        {
            id: "q2_6", rule: "TELOPHASE",
            sentence: "During telophase, the nuclear membrane _____ around each set of chromosomes.",
            options: ["disappears", "reforms", "thickens", "splits"],
            correct: 1,
            explanations: {
                correct: "In telophase, a new nuclear membrane reforms around each group of chromosomes at the poles. The nucleolus also reappears and chromosomes uncoil back to chromatin.",
                wrong: { 0: "The nuclear membrane disappeared during prophase — in telophase it reforms.", 2: "The nuclear membrane does not thicken; it re-forms from scratch.", 3: "The nuclear membrane does not split — it was already gone since prophase." }
            }
        },
        {
            id: "q2_7", rule: "CYTOKINESIS",
            sentence: "In animal cells, cytokinesis occurs by the formation of a _____ that pinches the cell inward.",
            options: ["cell plate", "cleavage furrow", "spindle apparatus", "cell wall"],
            correct: 1,
            explanations: {
                correct: "In animal cells, a cleavage furrow forms — the cell membrane pinches inward from the outside, eventually dividing the cytoplasm into two daughter cells.",
                wrong: { 0: "Cell plate formation occurs in plant cells, not animal cells.", 2: "The spindle apparatus is involved in chromosome movement, not cytoplasm division.", 3: "Animal cells do not have cell walls." }
            }
        },
        {
            id: "q2_8", rule: "CYTOKINESIS",
            sentence: "In plant cells, cytokinesis occurs by the formation of a _____ from the centre outward.",
            options: ["cleavage furrow", "cell plate", "spindle fibre", "centromere"],
            correct: 1,
            explanations: {
                correct: "In plant cells, vesicles from the Golgi apparatus fuse at the centre of the cell to form a cell plate, which grows outward to divide the cell.",
                wrong: { 0: "Cleavage furrow is the method used in animal cells, not plant cells.", 2: "Spindle fibres help move chromosomes during mitosis — they don't divide the cytoplasm.", 3: "The centromere is the point where sister chromatids are joined, not related to cytokinesis." }
            }
        },
        {
            id: "q2_9", rule: "MITOSIS",
            sentence: "Mitosis results in _____ daughter cells that are genetically identical to the parent cell.",
            options: ["four", "two", "three", "one"],
            correct: 1,
            explanations: {
                correct: "Mitosis produces two genetically identical daughter cells, each with the same chromosome number (2n) as the parent cell.",
                wrong: { 0: "Four daughter cells are produced by meiosis, not mitosis.", 2: "Three daughter cells are never a normal outcome of cell division.", 3: "One cell would mean no division occurred at all." }
            }
        },
        {
            id: "q2_10", rule: "MITOSIS",
            sentence: "The correct sequence of mitosis phases is Prophase → _____ → Anaphase → Telophase.",
            options: ["Interphase", "Metaphase", "Cytokinesis", "S phase"],
            correct: 1,
            explanations: {
                correct: "The correct order is PMAT: Prophase → Metaphase → Anaphase → Telophase. Remember the mnemonic: 'Please Meet At Twelve'!",
                wrong: { 0: "Interphase comes BEFORE mitosis begins — it is not a stage of mitosis.", 2: "Cytokinesis follows telophase — it is not between prophase and anaphase.", 3: "S phase is part of Interphase (DNA synthesis), not a mitotic stage." }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 3: Meiosis (10 questions)
    // ──────────────────────────────────────────────────────────
    "q3": [
        {
            id: "q3_1", rule: "MEIOSIS",
            sentence: "Meiosis is also called _____ division because the chromosome number is halved.",
            options: ["equational", "reduction", "vegetative", "binary"],
            correct: 1,
            explanations: {
                correct: "Meiosis is called reduction division because it reduces the chromosome number from diploid (2n) to haploid (n). This is essential for maintaining chromosome number across generations.",
                wrong: { 0: "Equational division is another name for Meiosis II (or mitosis), where chromosome number stays the same.", 2: "Vegetative division refers to asexual reproduction in plants, not meiosis.", 3: "Binary fission is division in prokaryotes like bacteria." }
            }
        },
        {
            id: "q3_2", rule: "MEIOSIS I",
            sentence: "During Prophase I of meiosis, homologous chromosomes pair up in a process called _____.",
            options: ["crossing over", "synapsis", "cytokinesis", "condensation"],
            correct: 1,
            explanations: {
                correct: "Synapsis is the pairing of homologous chromosomes (one maternal, one paternal) during Prophase I. The paired structure is called a bivalent or tetrad.",
                wrong: { 0: "Crossing over occurs DURING synapsis (after pairing) — it is not the pairing itself.", 2: "Cytokinesis is the division of cytoplasm that occurs after nuclear division.", 3: "Condensation of chromatin into chromosomes happens in prophase, but it's not the pairing process." }
            }
        },
        {
            id: "q3_3", rule: "CROSSING OVER",
            sentence: "The exchange of genetic material between non-sister chromatids of homologous chromosomes is called _____.",
            options: ["synapsis", "crossing over", "segregation", "independent assortment"],
            correct: 1,
            explanations: {
                correct: "Crossing over is the exchange of chromosome segments between non-sister chromatids during Prophase I. It occurs at points called chiasmata and produces genetic variation.",
                wrong: { 0: "Synapsis is the pairing of homologous chromosomes — crossing over happens after pairing.", 2: "Segregation is the separation of homologous chromosomes during Anaphase I.", 3: "Independent assortment refers to the random orientation of bivalents at the metaphase plate." }
            }
        },
        {
            id: "q3_4", rule: "MEIOSIS I",
            sentence: "In Anaphase I, _____ separate and move to opposite poles (the centromere does NOT split).",
            options: ["sister chromatids", "homologous chromosomes", "centrioles", "nucleoli"],
            correct: 1,
            explanations: {
                correct: "In Anaphase I, homologous chromosomes (not sister chromatids) separate and move to opposite poles. The centromere does NOT split — each chromosome still has two chromatids.",
                wrong: { 0: "Sister chromatids separate during Anaphase II (or mitotic anaphase), not Anaphase I.", 2: "Centrioles are already at the poles during anaphase.", 3: "Nucleoli reform during telophase, they don't separate during anaphase." }
            }
        },
        {
            id: "q3_5", rule: "MEIOSIS I",
            sentence: "At the end of Meiosis I, each daughter cell has _____ the number of chromosomes as the parent cell.",
            options: ["the same", "half", "double", "four times"],
            correct: 1,
            explanations: {
                correct: "Meiosis I is the reduction division — it halves the chromosome number from diploid (2n) to haploid (n).",
                wrong: { 0: "If the number stayed the same, it would be equational division (mitosis), not reduction division.", 2: "Doubling would mean the cell has more chromosomes, which doesn't happen in normal division.", 3: "Four times the chromosomes is not a normal outcome of any cell division." }
            }
        },
        {
            id: "q3_6", rule: "MEIOSIS II",
            sentence: "Meiosis II is similar to mitosis because the _____ splits and sister chromatids separate.",
            options: ["cell wall", "centromere", "nuclear membrane", "cell plate"],
            correct: 1,
            explanations: {
                correct: "In Meiosis II (like mitosis), the centromere of each chromosome splits, and the two sister chromatids are pulled to opposite poles.",
                wrong: { 0: "The cell wall is a structural feature of plant cells — it does not split during division.", 2: "The nuclear membrane disappears during prophase and reforms in telophase — its behaviour is not what makes Meiosis II similar to mitosis.", 3: "The cell plate forms during cytokinesis in plant cells — unrelated to the comparison." }
            }
        },
        {
            id: "q3_7", rule: "MEIOSIS",
            sentence: "Meiosis produces _____ haploid daughter cells from one diploid parent cell.",
            options: ["two", "four", "three", "eight"],
            correct: 1,
            explanations: {
                correct: "Meiosis involves two successive divisions (Meiosis I and II), producing four haploid (n) daughter cells from one diploid (2n) parent cell.",
                wrong: { 0: "Two daughter cells are produced by mitosis, not meiosis.", 2: "Three cells are not a normal product of any cell division.", 3: "Eight cells would require three divisions, which doesn't happen in meiosis." }
            }
        },
        {
            id: "q3_8", rule: "MEIOSIS",
            sentence: "Meiosis occurs in _____ cells to produce gametes (sex cells).",
            options: ["somatic", "reproductive (germ)", "nerve", "blood"],
            correct: 1,
            explanations: {
                correct: "Meiosis occurs in reproductive (germ) cells of the gonads (testes and ovaries) to produce gametes — sperm and ova.",
                wrong: { 0: "Somatic (body) cells divide by mitosis, not meiosis.", 2: "Nerve cells typically do not divide at all in adults (they stay in G0).", 3: "Blood cells are produced by mitosis in bone marrow, not by meiosis." }
            }
        },
        {
            id: "q3_9", rule: "CROSSING OVER",
            sentence: "The points where crossing over occurs between non-sister chromatids are called _____.",
            options: ["centromeres", "chiasmata", "centrioles", "telomeres"],
            correct: 1,
            explanations: {
                correct: "Chiasmata (singular: chiasma) are the X-shaped points where crossing over occurs between non-sister chromatids of homologous chromosomes during Prophase I.",
                wrong: { 0: "Centromeres are the constriction points that join sister chromatids together.", 2: "Centrioles are organelles involved in spindle fibre formation.", 3: "Telomeres are protective caps at the ends of chromosomes." }
            }
        },
        {
            id: "q3_10", rule: "MEIOSIS",
            sentence: "The biological significance of meiosis is to introduce genetic _____ among offspring.",
            options: ["uniformity", "variation", "mutation", "duplication"],
            correct: 1,
            explanations: {
                correct: "Meiosis introduces genetic variation through crossing over and independent assortment. This variation is essential for evolution and adaptation.",
                wrong: { 0: "Uniformity is the opposite — mitosis maintains genetic uniformity, not meiosis.", 2: "Mutations are random DNA changes, not the main purpose of meiosis.", 3: "Duplication of DNA happens in S phase of Interphase, not as a purpose of meiosis." }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 4: Comparisons — Mitosis vs Meiosis (10 questions)
    // ──────────────────────────────────────────────────────────
    "q4": [
        {
            id: "q4_1", rule: "COMPARISON",
            sentence: "Crossing over occurs in _____ but not in mitosis.",
            options: ["cytokinesis", "meiosis", "interphase", "telophase"],
            correct: 1,
            explanations: {
                correct: "Crossing over (exchange of genetic material between homologous chromosomes) occurs only during Prophase I of meiosis. It does not occur in mitosis.",
                wrong: { 0: "Cytokinesis is the division of cytoplasm — no crossing over here.", 2: "Interphase involves DNA replication but not crossing over.", 3: "Telophase involves nuclear membrane reformation, not crossing over." }
            }
        },
        {
            id: "q4_2", rule: "COMPARISON",
            sentence: "Mitosis maintains the _____ chromosome number, while meiosis halves it.",
            options: ["haploid", "diploid", "triploid", "polyploid"],
            correct: 1,
            explanations: {
                correct: "Mitosis is equational division — it maintains the diploid (2n) number. Meiosis reduces it from diploid (2n) to haploid (n).",
                wrong: { 0: "Mitosis does not produce or maintain haploid cells — that's the result of meiosis.", 2: "Triploid (3n) is an abnormal chromosome count, not related to normal mitosis.", 3: "Polyploid refers to having more than two complete sets of chromosomes — an abnormality." }
            }
        },
        {
            id: "q4_3", rule: "COMPARISON",
            sentence: "Mitosis involves _____ division(s), while meiosis involves two.",
            options: ["one", "two", "three", "four"],
            correct: 0,
            explanations: {
                correct: "Mitosis involves only one division cycle, producing 2 daughter cells. Meiosis involves two successive divisions (Meiosis I and II), producing 4 daughter cells.",
                wrong: { 1: "Two divisions would be meiosis, not mitosis.", 2: "No normal cell division involves three separate divisions.", 3: "Four divisions would produce 16 cells, which is not normal." }
            }
        },
        {
            id: "q4_4", rule: "COMPARISON",
            sentence: "Daughter cells produced by mitosis are genetically _____ to the parent cell.",
            options: ["different from", "identical", "half of", "double of"],
            correct: 1,
            explanations: {
                correct: "Mitotic daughter cells are genetically identical to the parent cell — they have the same number and type of chromosomes.",
                wrong: { 0: "Genetic difference is a feature of meiosis (due to crossing over and independent assortment), not mitosis.", 2: "Half the genetic material would be haploid — that's the result of meiosis.", 3: "Double the genetic material would be abnormal (tetraploid)." }
            }
        },
        {
            id: "q4_5", rule: "COMPARISON",
            sentence: "In mitosis, homologous chromosomes _____ pair up, unlike in meiosis.",
            options: ["always", "do not", "sometimes", "partially"],
            correct: 1,
            explanations: {
                correct: "In mitosis, homologous chromosomes act independently — they do NOT pair up (no synapsis). Pairing of homologues occurs only in Prophase I of meiosis.",
                wrong: { 0: "If they always paired, crossing over would occur — but that's exclusive to meiosis.", 2: "Sometimes pairing would be inaccurate — it simply does not happen in mitosis.", 3: "Partial pairing does not occur in mitosis." }
            }
        },
        {
            id: "q4_6", rule: "PLANT vs ANIMAL",
            sentence: "In plant cells, cytokinesis occurs by cell _____ formation, while in animal cells it occurs by cleavage furrow.",
            options: ["wall", "plate", "membrane", "spindle"],
            correct: 1,
            explanations: {
                correct: "Plant cells form a cell plate (from Golgi vesicles) at the centre that grows outward. Animal cells form a cleavage furrow that pinches inward.",
                wrong: { 0: "The cell wall is the rigid outer covering of plant cells, but the structure formed during cytokinesis is specifically called a cell plate.", 2: "Cell membrane is present in all cells but the specific structure formed during plant cytokinesis is the cell plate.", 3: "Spindle apparatus is involved in chromosome movement, not cytoplasm division." }
            }
        },
        {
            id: "q4_7", rule: "PLANT vs ANIMAL",
            sentence: "Centrioles are present in _____ cells but absent in most higher plant cells during cell division.",
            options: ["plant", "animal", "bacterial", "fungal"],
            correct: 1,
            explanations: {
                correct: "Animal cells have centrioles that form the aster and help organise the spindle apparatus. Most higher plant cells lack centrioles — their spindle is anastral (without asters).",
                wrong: { 0: "Most higher plant cells lack centrioles — only lower plants have them.", 2: "Bacterial cells divide by binary fission — they don't have centrioles.", 3: "Fungal cells have varied mechanisms, but the question contrasts plant and animal cells." }
            }
        },
        {
            id: "q4_8", rule: "COMPARISON",
            sentence: "Meiosis is important for _____ reproduction, while mitosis is important for growth and repair.",
            options: ["asexual", "sexual", "vegetative", "binary"],
            correct: 1,
            explanations: {
                correct: "Meiosis produces gametes (sperm and ova) which are essential for sexual reproduction. Mitosis is responsible for growth, repair, and asexual reproduction.",
                wrong: { 0: "Asexual reproduction involves mitosis, not meiosis.", 2: "Vegetative reproduction is a form of asexual reproduction, which uses mitosis.", 3: "Binary fission is prokaryotic division, unrelated to meiosis." }
            }
        },
        {
            id: "q4_9", rule: "PLANT vs ANIMAL",
            sentence: "The spindle formed in plant cells is called _____ because it lacks asters.",
            options: ["astral", "anastral", "bipolar", "unipolar"],
            correct: 1,
            explanations: {
                correct: "Plant cell spindle is anastral (without asters) because most higher plant cells lack centrioles. Animal cell spindle is astral (with asters radiating from centrioles).",
                wrong: { 0: "Astral spindle (with asters) is found in animal cells, not plant cells.", 2: "Bipolar simply means having two poles — both plant and animal spindles are bipolar.", 3: "Unipolar spindles don't occur in normal cell division." }
            }
        },
        {
            id: "q4_10", rule: "COMPARISON",
            sentence: "Mitosis occurs in _____ cells, while meiosis occurs only in reproductive cells.",
            options: ["germ", "somatic (body)", "gamete", "haploid"],
            correct: 1,
            explanations: {
                correct: "Mitosis occurs in somatic (body) cells for growth, repair, and regeneration. Meiosis occurs only in germ cells (reproductive cells) of the gonads.",
                wrong: { 0: "Germ cells undergo meiosis, not mitosis (though germ cell precursors multiply by mitosis).", 2: "Gametes are the product of meiosis — they don't undergo further meiosis.", 3: "Haploid cells can divide by mitosis in some organisms, but the correct general answer is somatic cells." }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 5: Chromosomes & Significance (10 questions)
    // ──────────────────────────────────────────────────────────
    "q5": [
        {
            id: "q5_1", rule: "CHROMOSOMES",
            sentence: "A chromosome consists of DNA wrapped around _____ proteins.",
            options: ["lipid", "histone", "carbohydrate", "enzyme"],
            correct: 1,
            explanations: {
                correct: "Chromosomes are made of DNA tightly coiled around histone proteins. This DNA-histone complex is called chromatin.",
                wrong: { 0: "Lipids form cell membranes — they are not structural components of chromosomes.", 2: "Carbohydrates provide energy and structural support in cell walls, not in chromosomes.", 3: "Enzymes are functional proteins that catalyse reactions — histones are structural proteins." }
            }
        },
        {
            id: "q5_2", rule: "CHROMOSOMES",
            sentence: "The constricted region of a chromosome where sister chromatids are joined is called the _____.",
            options: ["telomere", "centromere", "chiasma", "chromatin"],
            correct: 1,
            explanations: {
                correct: "The centromere is the constricted (narrowed) region that holds the two sister chromatids together. Spindle fibres attach to the centromere via the kinetochore.",
                wrong: { 0: "Telomeres are the protective end caps of chromosomes, not the point where chromatids join.", 2: "Chiasmata are the X-shaped crossover points seen during meiosis.", 3: "Chromatin is the diffuse, uncoiled form of DNA in the nucleus during interphase." }
            }
        },
        {
            id: "q5_3", rule: "CHROMOSOMES",
            sentence: "Humans have _____ pairs of chromosomes (total 46).",
            options: ["22", "23", "24", "46"],
            correct: 1,
            explanations: {
                correct: "Humans have 23 pairs of chromosomes — 22 pairs of autosomes and 1 pair of sex chromosomes (XX or XY), totalling 46 chromosomes.",
                wrong: { 0: "22 is the number of autosome pairs, but doesn't include the sex chromosome pair.", 2: "24 pairs (48 chromosomes) is incorrect for humans — that's the count for some other primates.", 3: "46 is the total number of individual chromosomes, not the number of pairs." }
            }
        },
        {
            id: "q5_4", rule: "SIGNIFICANCE",
            sentence: "Mitosis is essential for _____ and repair of worn-out tissues in multicellular organisms.",
            options: ["reproduction", "growth", "variation", "evolution"],
            correct: 1,
            explanations: {
                correct: "Mitosis enables growth (increasing cell number) and repair/regeneration of damaged or worn-out tissues throughout life.",
                wrong: { 0: "Sexual reproduction requires meiosis — mitosis is involved in asexual reproduction and growth.", 2: "Genetic variation is produced by meiosis (crossing over, independent assortment), not mitosis.", 3: "Evolution involves variation and natural selection over generations — mitosis alone doesn't drive evolution." }
            }
        },
        {
            id: "q5_5", rule: "SIGNIFICANCE",
            sentence: "Meiosis ensures that the chromosome number remains _____ from generation to generation in sexually reproducing organisms.",
            options: ["doubled", "constant", "halved", "tripled"],
            correct: 1,
            explanations: {
                correct: "By producing haploid gametes (n), meiosis ensures that when two gametes fuse during fertilisation, the diploid number (2n) is restored — keeping the chromosome number constant across generations.",
                wrong: { 0: "If the number doubled each generation, organisms would keep accumulating chromosomes — which doesn't happen.", 2: "Halved refers to what meiosis does within one generation, but across generations the number stays constant due to fertilisation restoring 2n.", 3: "Tripling the chromosome number is not a normal biological outcome." }
            }
        },
        {
            id: "q5_6", rule: "CHROMOSOMES",
            sentence: "The 22 pairs of non-sex chromosomes in humans are called _____.",
            options: ["sex chromosomes", "autosomes", "gametes", "alleles"],
            correct: 1,
            explanations: {
                correct: "Autosomes are the 22 pairs of chromosomes that are identical in males and females. The 23rd pair consists of sex chromosomes (XX in females, XY in males).",
                wrong: { 0: "Sex chromosomes are the 23rd pair (X and Y) — not the other 22 pairs.", 2: "Gametes are sex cells (sperm/egg), not types of chromosomes.", 3: "Alleles are alternative forms of a gene at a specific locus, not types of chromosomes." }
            }
        },
        {
            id: "q5_7", rule: "CHROMOSOMES",
            sentence: "The protective caps at the ends of chromosomes are called _____.",
            options: ["centromeres", "telomeres", "chiasmata", "histones"],
            correct: 1,
            explanations: {
                correct: "Telomeres are repetitive DNA sequences at the ends of chromosomes that protect them from deterioration and prevent fusion with neighbouring chromosomes.",
                wrong: { 0: "Centromeres are in the middle region of chromosomes, holding sister chromatids together.", 2: "Chiasmata are crossover points during meiosis, not chromosome end structures.", 3: "Histones are proteins around which DNA wraps — they are not end caps." }
            }
        },
        {
            id: "q5_8", rule: "SIGNIFICANCE",
            sentence: "Mitosis helps maintain the same _____ of DNA in all somatic cells of an organism.",
            options: ["variation", "amount", "mutation rate", "haploid number"],
            correct: 1,
            explanations: {
                correct: "Mitosis ensures that each daughter cell receives an exact copy of the parent cell's DNA — maintaining the same amount (diploid, 2n) of genetic material in all somatic cells.",
                wrong: { 0: "Mitosis maintains genetic uniformity, not variation — variation is introduced by meiosis.", 2: "Mutation rate is not controlled by mitosis — mutations occur randomly during DNA replication.", 3: "Somatic cells are diploid (2n), not haploid — haploid cells are gametes produced by meiosis." }
            }
        },
        {
            id: "q5_9", rule: "CHROMOSOMES",
            sentence: "During interphase, the genetic material exists as loosely coiled threads called _____.",
            options: ["chromosomes", "chromatin", "centrioles", "chromatids"],
            correct: 1,
            explanations: {
                correct: "During interphase, DNA is in a loosely coiled, diffuse form called chromatin. It condenses into visible chromosomes only during cell division (prophase).",
                wrong: { 0: "Chromosomes are the compact, visible form seen during cell division — not during interphase.", 2: "Centrioles are cell organelles involved in spindle formation, not a form of genetic material.", 3: "Chromatids are the two copies of a chromosome after DNA replication, joined at the centromere." }
            }
        },
        {
            id: "q5_10", rule: "SIGNIFICANCE",
            sentence: "Without meiosis, the fusion of two gametes would _____ the chromosome number with each generation.",
            options: ["halve", "maintain", "double", "eliminate"],
            correct: 2,
            explanations: {
                correct: "Without meiosis, gametes would be diploid (2n). When two diploid gametes fuse, the offspring would be 4n, then 8n, etc. — doubling the chromosome number every generation.",
                wrong: { 0: "Halving would occur if meiosis were happening, which is the scenario we're excluding.", 1: "Maintaining the number is what happens WITH meiosis — not without it.", 3: "Chromosomes wouldn't be eliminated; they would keep accumulating." }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: 20 Board-Level Questions
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: "mega_1", rule: "BOARD LEVEL",
            sentence: "The stage of mitosis where chromosomes are best studied for karyotyping is _____.",
            options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
            correct: 1,
            explanations: {
                correct: "At metaphase, chromosomes are most condensed and clearly visible, aligned at the equatorial plate. This makes them ideal for karyotyping (photographing and counting).",
                wrong: { 0: "In prophase, chromosomes are still condensing and may not be at maximum visibility.", 2: "In anaphase, chromosomes are actively moving — difficult to photograph clearly.", 3: "In telophase, chromosomes are decondensing back to chromatin." }
            }
        },
        {
            id: "mega_2", rule: "BOARD LEVEL",
            sentence: "A cell with 20 chromosomes undergoes mitosis. Each daughter cell will have _____ chromosomes.",
            options: ["10", "20", "40", "5"],
            correct: 1,
            explanations: {
                correct: "Mitosis is equational division — the chromosome number is maintained. Both daughter cells will have 20 chromosomes, identical to the parent cell.",
                wrong: { 0: "10 would be the haploid number — that's the result of meiosis, not mitosis.", 2: "40 would mean the chromosome number doubled, which is abnormal.", 3: "5 would be quarter of the original number — no normal division produces this." }
            }
        },
        {
            id: "mega_3", rule: "BOARD LEVEL",
            sentence: "A cell with 20 chromosomes undergoes meiosis. Each resulting gamete will have _____ chromosomes.",
            options: ["20", "10", "40", "5"],
            correct: 1,
            explanations: {
                correct: "Meiosis halves the chromosome number. A cell with 20 (2n) chromosomes produces gametes with 10 (n) chromosomes each.",
                wrong: { 0: "20 would mean no reduction occurred — that's mitosis.", 2: "40 would mean the number doubled, which is abnormal.", 3: "5 would be a quarter — meiosis halves, it doesn't quarter." }
            }
        },
        {
            id: "mega_4", rule: "BOARD LEVEL",
            sentence: "The point at which spindle fibres attach to the chromosome is called the _____.",
            options: ["centrosome", "kinetochore", "telomere", "chiasma"],
            correct: 1,
            explanations: {
                correct: "The kinetochore is a protein structure on the centromere where spindle fibres (microtubules) attach to pull chromosomes during cell division.",
                wrong: { 0: "The centrosome is the organelle that contains centrioles and organises spindle fibres — it's not on the chromosome.", 2: "Telomeres are chromosome end caps — spindle fibres don't attach there.", 3: "Chiasmata are crossing over points in meiosis — not spindle attachment sites." }
            }
        },
        {
            id: "mega_5", rule: "BOARD LEVEL",
            sentence: "The pairing of homologous chromosomes during Prophase I forms a structure called a _____.",
            options: ["chromatid", "bivalent (tetrad)", "centrosome", "spindle"],
            correct: 1,
            explanations: {
                correct: "When two homologous chromosomes pair during synapsis, they form a bivalent. Since each chromosome has two chromatids, the structure has four chromatids total — hence also called a tetrad.",
                wrong: { 0: "A chromatid is one copy of a duplicated chromosome — not the paired homologous structure.", 2: "A centrosome is the organelle that organises spindle fibres.", 3: "A spindle is the microtubule apparatus for moving chromosomes." }
            }
        },
        {
            id: "mega_6", rule: "BOARD LEVEL",
            sentence: "Mitosis does NOT occur in _____.",
            options: ["skin cells", "bone marrow cells", "mature red blood cells", "liver cells"],
            correct: 2,
            explanations: {
                correct: "Mature red blood cells (erythrocytes) lack a nucleus and cannot undergo mitosis. They are produced by mitosis in bone marrow but once mature, they don't divide.",
                wrong: { 0: "Skin cells frequently undergo mitosis to replace dead cells on the surface.", 1: "Bone marrow cells actively divide by mitosis to produce blood cells.", 3: "Liver cells can undergo mitosis, especially during regeneration." }
            }
        },
        {
            id: "mega_7", rule: "BOARD LEVEL",
            sentence: "The significance of crossing over in meiosis is to produce _____.",
            options: ["identical cells", "genetic variation", "more chromosomes", "larger cells"],
            correct: 1,
            explanations: {
                correct: "Crossing over produces new combinations of genes on chromosomes, leading to genetic variation among offspring — essential for evolution and adaptation.",
                wrong: { 0: "Identical cells are produced by mitosis — crossing over produces variation.", 2: "Crossing over exchanges segments but doesn't create extra chromosomes.", 3: "Cell size is unrelated to crossing over." }
            }
        },
        {
            id: "mega_8", rule: "BOARD LEVEL",
            sentence: "In human females, meiosis occurs in the _____.",
            options: ["testes", "ovaries", "kidneys", "bone marrow"],
            correct: 1,
            explanations: {
                correct: "In females, meiosis occurs in the ovaries to produce ova (egg cells). In males, it occurs in the testes to produce sperm.",
                wrong: { 0: "Testes are the male gonads where sperm are produced by meiosis.", 2: "Kidneys filter blood and produce urine — no meiosis occurs here.", 3: "Bone marrow produces blood cells by mitosis, not meiosis." }
            }
        },
        {
            id: "mega_9", rule: "BOARD LEVEL",
            sentence: "If a human cell has 46 chromosomes before meiosis, how many chromosomes will each sperm cell have? _____.",
            options: ["46", "23", "92", "12"],
            correct: 1,
            explanations: {
                correct: "Meiosis halves the chromosome number. Human somatic cells have 46 (2n), so gametes (sperm/ova) have 23 (n) chromosomes.",
                wrong: { 0: "46 is the diploid number of the parent cell, not the gamete.", 2: "92 would be double the original — this doesn't happen in normal division.", 3: "12 is not related to the human chromosome count." }
            }
        },
        {
            id: "mega_10", rule: "BOARD LEVEL",
            sentence: "The phase of mitosis where chromosomes first become visible under a microscope is _____.",
            options: ["Interphase", "Prophase", "Metaphase", "Anaphase"],
            correct: 1,
            explanations: {
                correct: "During prophase, chromatin condenses into visible chromosomes for the first time. They continue to condense and become most visible at metaphase.",
                wrong: { 0: "During interphase, genetic material exists as diffuse chromatin — chromosomes are not individually visible.", 2: "Chromosomes are already visible by metaphase, but they first become visible during prophase.", 3: "By anaphase, chromosomes have been visible for two phases already." }
            }
        },
        {
            id: "mega_11", rule: "BOARD LEVEL",
            sentence: "The cell organelle responsible for forming spindle fibres in animal cells is the _____.",
            options: ["mitochondria", "centriole", "ribosome", "Golgi body"],
            correct: 1,
            explanations: {
                correct: "Centrioles (within the centrosome) organise and form the spindle apparatus in animal cells. They migrate to opposite poles and radiate spindle fibres.",
                wrong: { 0: "Mitochondria are the powerhouse of the cell — they produce ATP, not spindle fibres.", 2: "Ribosomes synthesise proteins — they have no role in spindle formation.", 3: "Golgi bodies package and transport proteins — not involved in spindle formation." }
            }
        },
        {
            id: "mega_12", rule: "BOARD LEVEL",
            sentence: "Independent assortment of chromosomes during meiosis leads to _____.",
            options: ["identical gametes", "genetically different gametes", "polyploidy", "cell death"],
            correct: 1,
            explanations: {
                correct: "Independent assortment means homologous pairs orient randomly at the metaphase plate during Meiosis I. This produces 2^n possible gamete combinations (over 8 million in humans!).",
                wrong: { 0: "Identical gametes would result from mitosis — meiosis specifically produces variation.", 2: "Polyploidy is an abnormal condition with extra chromosome sets, not a result of independent assortment.", 3: "Cell death (apoptosis) is unrelated to independent assortment." }
            }
        },
        {
            id: "mega_13", rule: "BOARD LEVEL",
            sentence: "A bivalent during Prophase I consists of _____ chromatids.",
            options: ["two", "four", "one", "eight"],
            correct: 1,
            explanations: {
                correct: "A bivalent is formed by two homologous chromosomes, each consisting of two sister chromatids = 4 chromatids total. This is why it's also called a tetrad (tetra = four).",
                wrong: { 0: "Two chromatids would be a single chromosome after replication, not a bivalent.", 2: "One chromatid would be an unreplicated single chromosome.", 3: "Eight chromatids would require four chromosomes — a bivalent has only two." }
            }
        },
        {
            id: "mega_14", rule: "BOARD LEVEL",
            sentence: "Regeneration of a lizard's tail is an example of _____.",
            options: ["meiosis", "mitosis", "amitosis", "budding"],
            correct: 1,
            explanations: {
                correct: "Regeneration involves rapid mitotic divisions of cells to replace lost body parts. The new cells are genetically identical to the original tissue.",
                wrong: { 0: "Meiosis produces gametes — it is not involved in tissue regeneration.", 2: "Amitosis is a simple nuclear division without spindle formation, found in some lower organisms.", 3: "Budding is a form of asexual reproduction in organisms like Hydra, not tissue regeneration." }
            }
        },
        {
            id: "mega_15", rule: "BOARD LEVEL",
            sentence: "During Meiosis I, the chromosome number changes from _____ to haploid.",
            options: ["haploid", "diploid", "tetraploid", "triploid"],
            correct: 1,
            explanations: {
                correct: "Meiosis I is the reduction division — it reduces the chromosome count from diploid (2n) to haploid (n) by separating homologous chromosomes.",
                wrong: { 0: "If the cell started as haploid, it's already reduced — no further reduction needed.", 2: "Tetraploid (4n) is an abnormal condition with four sets of chromosomes.", 3: "Triploid (3n) is also abnormal — normal meiosis starts from diploid cells." }
            }
        },
        {
            id: "mega_16", rule: "BOARD LEVEL",
            sentence: "The stage of mitosis where spindle fibres contract and pull chromatids to opposite poles is _____.",
            options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
            correct: 2,
            explanations: {
                correct: "During anaphase, spindle fibres shorten (contract), pulling the separated sister chromatids (now daughter chromosomes) to opposite poles of the cell.",
                wrong: { 0: "In prophase, the spindle is forming but hasn't started pulling chromatids yet.", 1: "In metaphase, chromosomes are aligned at the equator — they haven't been pulled apart yet.", 3: "In telophase, chromosomes have already reached the poles." }
            }
        },
        {
            id: "mega_17", rule: "BOARD LEVEL",
            sentence: "Meiosis II is also called _____ division because it doesn't change the chromosome number.",
            options: ["reduction", "equational", "vegetative", "amitotic"],
            correct: 1,
            explanations: {
                correct: "Meiosis II is called equational division because the chromosome number remains the same (n → n). Sister chromatids separate, but the number of chromosomes per cell stays haploid.",
                wrong: { 0: "Reduction division is Meiosis I, where chromosome number is halved (2n → n).", 2: "Vegetative division refers to asexual reproduction, not meiosis.", 3: "Amitotic division is direct cell division without spindle formation — not related." }
            }
        },
        {
            id: "mega_18", rule: "BOARD LEVEL",
            sentence: "Uncontrolled mitosis in the body can lead to _____.",
            options: ["anaemia", "cancer (tumour formation)", "genetic variation", "meiosis"],
            correct: 1,
            explanations: {
                correct: "When cell cycle checkpoints fail and mitosis becomes uncontrolled, cells divide rapidly forming tumours. This is the basis of cancer.",
                wrong: { 0: "Anaemia is caused by low red blood cell count or haemoglobin — not directly by uncontrolled mitosis.", 2: "Genetic variation is produced by meiosis, not by uncontrolled mitosis.", 3: "Uncontrolled mitosis doesn't convert to meiosis — they are fundamentally different processes." }
            }
        },
        {
            id: "mega_19", rule: "BOARD LEVEL",
            sentence: "The number of chromosomes in a human nerve cell is _____.",
            options: ["23", "46", "92", "12"],
            correct: 1,
            explanations: {
                correct: "Nerve cells are somatic (body) cells, so they have the full diploid complement of 46 chromosomes (23 pairs). Only gametes have 23.",
                wrong: { 0: "23 is the haploid number found in gametes (sperm/ova), not in somatic cells.", 2: "92 would be tetraploid — an abnormal condition.", 3: "12 has no relation to the human chromosome count." }
            }
        },
        {
            id: "mega_20", rule: "BOARD LEVEL",
            sentence: "The structure formed by Golgi vesicles during cytokinesis in plant cells is the _____.",
            options: ["cleavage furrow", "cell plate", "nuclear membrane", "aster"],
            correct: 1,
            explanations: {
                correct: "In plant cells, Golgi-derived vesicles collect at the cell's equator and fuse to form the cell plate, which eventually becomes the new cell wall separating the daughter cells.",
                wrong: { 0: "Cleavage furrow forms in animal cells, not plant cells.", 2: "The nuclear membrane reforms around chromosomes during telophase — it's not related to cytokinesis.", 3: "Asters are star-shaped microtubule arrangements around centrioles in animal cells." }
            }
        }
    ]
};
