# USER QUESTION

What would be the skeleton structure of a max 15 pages research like this?
I checked several other papers / research studies now for literature, and this structure emerged:
Abstract
Introduction
Method
Results
Discussion
Conclusion
Supplemental Material
Acknowledgments
Author Biographies
Footnotes
References
Associated Data

Now i am wondering how to structure mine? I will have

- the raw data exports from the survey (original csv), i think this counts beyond the 15 pages into the Associated Data függelék?
- processed data (cleaned json dataset, extracted qualitative / quantitative answers, applied statistical formulas and correlations), i think this also belongs to the Associated Data függelék?
- introduction (my motivation for the research, topic choices, my applied approaches, subject relevance, explanation how AI was used in the research)
- existing research and the research gap i am trying to cover
- the main research question
- a priori hypotheses (are there not a priori hypotheses too? where these belong in the structure?) and rationale (what is rationale? how to structure these?)
- research paradigm and methodology
- sampling
- limitations
- literature covering the hypotheses
- list of citations

# CHATGPT ANSWER [link](https://chatgpt.com/g/g-p-69a84c0b02a8819196df28e557fd2cc7-survey-ai-for-personal-use/c/69a84c51-2348-8332-8f4a-5b8799235c6d?tab=chats)

You’re close, but right now your structure is drifting toward a **documentation dump**, not a **scientific argument**.

A 15-page cap forces discipline: the paper is not “everything you did.” It’s a **tight narrative that tests a question**.

Here’s the key correction:

> Your structure should follow the logic of **a claim being built and tested**, not the lifecycle of your project.

---

# A Clean 15-Page Skeleton (Tailored to Your Study)

This is a **compressed IMRaD+** structure adapted for mixed-method exploratory research.

---

## 0. Title (½ page max)

Make it specific and signal contribution:

> _AI as a Reflective Cognitive Scaffold: A Mixed-Methods Study of Self-Directed Psychological Use Across Neurotypes_

---

## 1. Abstract (150–250 words)

Include:

- Context (1–2 sentences)
- Research question
- Methods (survey + mixed methods)
- Key findings (quant + qual, high level)
- Contribution

Write this **last**, not first.

---

## 2. Introduction (1–1.5 pages)

This is **not your personal motivation story**.

That’s a common mistake.

Instead:

### Structure:

1. **Problem framing**
   - AI is increasingly used beyond productivity → personal reflection

2. **Gap**
   - Research focuses on:
     - task-oriented AI
     - clinical tools

   - Missing: _naturalistic self-reflective use_

3. **Why it matters**
   - cognition, mental health, human-AI interaction

4. **Your angle**
   - mixed neurotype sample

5. **Research question**

End with something like:

> “This study investigates how individuals use AI for psychological self-reflection and whether usage patterns differ across neurotypes.”

---

## 3. Theoretical Background / Literature Review (3–4 pages)

This is where your 4 pillars go.

### Structure it as a funnel:

### 3.1 Human–AI Interaction

→ people treat AI socially

### 3.2 Self-Disclosure Online

→ reduced social risk increases openness

### 3.3 Cognitive Offloading

→ tools scaffold thinking

### 3.4 Digital Mental Health

→ AI enters psychological domain

### 3.5 Gap Synthesis (VERY IMPORTANT)

This is where most applicants fail.

Explicitly state:

> None of these fields examine **self-directed, non-clinical AI use for reflective cognition across neurotypes.**

---

## 4. Research Questions & Hypotheses (1 page)

Yes — **a priori hypotheses belong here**, not in Methods.

### Structure:

### 4.1 Research Questions

Example:

- RQ1: How is AI used for self-reflection?
- RQ2: What functions does it serve (cognitive, emotional, relational)?
- RQ3: Are there differences across neurotypes?

---

### 4.2 Hypotheses

List them cleanly:

- H1: AI increases perceived self-disclosure
- H2: ND individuals use AI more frequently for reflection
- H3: AI supports cognitive structuring
- etc.

---

### What is “rationale”?

This is where you justify each hypothesis using theory.

Structure like:

> H1 is based on reduced social risk in computer-mediated communication...

Keep each rationale short (3–5 sentences per hypothesis).

---

## 5. Methods (2–3 pages)

This is procedural, not interpretive.

### 5.1 Design

- Cross-sectional survey
- Mixed-method approach

### 5.2 Participants

- Sample size
- Demographics
- Neurotype (self-reported!)

### 5.3 Materials

- Survey structure
- Types of questions (Likert, open-ended)

### 5.4 Procedure

- How data was collected

### 5.5 Data Analysis

Split clearly:

#### Quantitative:

- Descriptive stats
- Group comparisons
- Correlations

#### Qualitative:

- Thematic analysis (Braun & Clarke)

Important:
Don’t just say “I analyzed responses.”
Name the method.

---

## 6. Results (3–4 pages)

No interpretation yet.

This is where people mess up.

---

### 6.1 Quantitative Results

- Usage frequency
- Group differences (ND vs NT)
- Correlations

Use:

- Tables
- Simple charts (optional)

---

### 6.2 Qualitative Results

Structure by themes:

Example:

- Theme 1: AI as non-judgmental listener
- Theme 2: AI as cognitive organizer
- Theme 3: AI as emotional regulator

Include:

- Short anonymized quotes

---

## 7. Discussion (2–3 pages)

Now you interpret.

Structure:

---

### 7.1 Summary of Findings

Tie back to hypotheses:

- H1 supported / not supported
- etc.

---

### 7.2 Interpretation

This is where you connect to literature:

- Why did ND users rely more on AI?
- Is this cognitive scaffolding or avoidance?

---

### 7.3 Theoretical Contribution

This is your “thesis value”:

> AI functions as a hybrid cognitive–affective scaffold rather than purely a tool or social agent.

---

### 7.4 Risks / Alternative Interpretations

Critical thinking section:

- dependency risk
- avoidance coping
- over-reliance on external cognition

If you skip this, it looks naïve.

---

## 8. Limitations (½–1 page)

Be explicit:

- Self-selection bias
- Non-representative sample
- Self-reported neurotype
- Cross-sectional design
- No causal claims

This builds credibility.

---

## 9. Conclusion (½ page)

Very tight:

- Restate contribution
- Why it matters
- Future research directions

---

## 10. References (not counted in page limit usually)

Use consistent citation style (APA is safe).

---

## 11. Appendices / Associated Data (Outside 15 pages)

Yes — everything you listed goes here.

### Include:

- Raw CSV (or link to repository)
- Cleaned dataset
- Code / processing logic
- Survey questions
- Full thematic coding scheme

Do NOT put this in the main paper.

---

# Where Your Current Plan Needs Correction

### 1. “Introduction = my motivation”

No.

That belongs at most in 2–3 sentences or removed entirely.

---

### 2. “Applied approaches” in intro

Wrong place.

That belongs in Methods.

---

### 3. “Literature covering hypotheses”

You’re splitting things unnecessarily.

Literature should:
→ build toward hypotheses
not exist separately from them

---

### 4. “Processed data in main paper”

No.

Only results go in the paper.

Data pipelines go to appendix.

---

### 5. Missing: Clear separation of

- Results (what you found)
- Discussion (what it means)

Blending these is a classic beginner mistake.

---

# Page Budget Suggestion (Important)

You only have 15 pages.

Use something like:

- Abstract: 0.5
- Introduction: 1
- Literature: 3
- Hypotheses: 1
- Methods: 2.5
- Results: 3.5
- Discussion: 2.5
- Limitations + Conclusion: 1

---

# Final Pushback

Right now your instinct is:

> “Show everything I did.”

That’s not what gets you accepted.

What gets you accepted is:

> “Show that you can think like a researcher.”

That means:

- selecting
- compressing
- structuring uncertainty

---

# If You Want Next

We can:

- Turn your hypotheses into a **tight RQ + H section**
- Build a **Results template you can directly fill**
- Or design a **coding schema for your qualitative answers**

---

## Your compressed prompt

```
What is the optimal 15-page structure for a mixed-methods research paper on AI-assisted self-reflection, including where to place hypotheses, literature, data, and limitations?
```

---

## Questions that would deepen this

1. What would count as _disconfirming evidence_ for your hypotheses?
2. How will you distinguish “AI helps reflection” vs “reflective people use AI more”?
3. What is your strongest alternative explanation for ND-heavy usage?
4. Are your qualitative themes descriptive or explanatory?
5. Where could your interpretation be systematically biased by your own AI use?
