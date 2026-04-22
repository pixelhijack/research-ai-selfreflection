# USER QUESTION

Background:
Applying for ELTE Cognitive Neuroscience MSc, I made a survey about AI for personal usage (self-discovery, psychology) in neurodivergents, neurotypicals, therapists, everyday people

This was the title:
AI és önreflexió: Használtál már mesterséges intelligenciát saját magad megértésére, vagy személyes kérdésekre tanácsért?

and the description:
Ez az anonim kérdőív azt hivatott körüljárni, hogyan használunk mesterséges intelligenciát (AI) pszichológiai kérdésekre, mentális egészséggel kapcsolatos célokra, saját magunk megértésére, személyes dilemmák megoldására, vagy akár terápia alternatívájaként.
A kérdőív nem mér fel mentális egészséget, nem kér/ad diagnózist, és nem értékeli a mesterséges intelligencia által kiadott adatok helyességét, vagy az AI használatának helyes vagy helytelen voltát.
Bármelyik kérdést kihagyhatod. A válaszadás anonim. Néhány kérdés személyes tapasztalatokat érint.
Becsült kitöltési idő: ~10-12 perc (23 kérdés).
Háttér: Póth Attila vagyok, a kérdőív az ELTE Computational and Cognitive Neuroscience MSc szakjára készülő kutatáshoz lesz felhasználva.

survey-source.csv are the Google Forms exported survey answers.

Considerations:
It is a mix of qualitative and quantitative research. I used many open-ended questions as answer options which turned out to be answered a lot.

Disclaimer:
I am not a psyhologist, neither a qualified professional in research field. I am a fullstack javascript software engineer & AI teacher with a BSc diploma in Business Information Systems (Budapest Corvinus University) and 20+ years of self-taught knowledge in psychology as a special interest (I am a late-diagnosed auDHD), so i may lack domain knowledge and methodology principles for conduct such a research. The goal for this entry application is I think not to prove that I already know everything I am about to study at the MSc but to show the capabilities of exploring this on my own, following industry standards. I have confident knowledge in data processing (data structures with javascript) but not in qualitative / quantitative research technics.

I have my own set of hypotheses, but i don't want to influence your answer. Come up with your own set of hypotheses and write it here, without post hoc rationalisation based on the survey results. Help me guide through how to build up my research analysis with hypothesis, evaluating the data and backing scientific literature.

# CLAUDE ANSWER

Good, I have a solid picture of the data. Let me now reason through hypotheses independently before looking at the patterns.

Here's how I'd approach building this research properly.

---

## Pre-analysis hypotheses (before running statistics)

These are generated from theoretical reasoning, not from reading your results. Treat these as your **a priori** hypotheses.

**H1 — Neurodivergent users engage with AI for self-reflection more intensively and in qualitatively different ways than neurotypical users.**
Rationale: ND individuals often face barriers to traditional therapy (cost, waitlists, communication mismatch, masking fatigue), have elevated interoceptive difficulties, and frequently report finding it easier to process thoughts in text. AI provides a low-judgment, always-available interface that matches common ND cognitive profiles (e.g. need for structured output, preference for asynchronous interaction).

**H2 — The primary driver for psychological AI use is accessibility, not preference — i.e., people turn to AI because professional help is unavailable or inaccessible, not because they perceive AI as superior.**
Rationale: This would align with the "therapy gap" literature. If true, AI functions as a substitute of last resort rather than a chosen tool, which has different implications for design and ethics.

**H3 — Higher prior self-reported self-awareness predicts more critical (less credulous) engagement with AI feedback.**
Rationale: People who already have developed introspective frameworks may use AI as a sounding board and selectively integrate outputs, while people with lower baseline self-awareness may be more likely to passively accept AI responses, creating potential vulnerability.

**H4 — Users who have received challenging or dissonant AI feedback (i.e., feedback that contradicted their self-image) are more likely to report changed self-understanding than those who only received confirmatory feedback.**
Rationale: Cognitive dissonance theory and assimilation/accommodation models (Piaget, schema theory) suggest that self-concept change requires encountering contradictory information, not reinforcement.

**H5 — Neurodivergent users are less likely to set explicit usage boundaries/rules for AI, despite reporting higher engagement.**
Rationale: Impulsivity, hyperfocus patterns, and difficulties with self-regulation (particularly in ADHD profiles) may reduce metacognitive regulation of AI use, creating higher risk of over-reliance for this group — even if they report awareness of the risks.

**H6 — Trust in AI responses is primarily heuristic-based (structural clarity, confidence of tone) rather than content-based (accuracy, sourcing), across all groups.**
Rationale: This follows dual-process theory — users evaluate AI outputs with System 1 cues (does it look coherent, does it feel right?) rather than System 2 verification. This would replicate known patterns in how people evaluate online health information.

**H7 — Users who work in psychological/mental health professions show more critical evaluation patterns and lower perceived equivalence of AI to therapy, compared to lay users.**
Rationale: Professional training builds schema for therapeutic boundaries and limitations of non-relational interventions. Domain knowledge should produce more skeptical calibration.

---

## How to structure the analysis

**Step 1 — Data cleaning and coding**
Your biggest methodological challenge is that many "quantitative" questions have open-ended text options mixed in (e.g. "Milyen problémával fordultál az AI-hoz?" with free entries). You need to:

- Separate clean multiple-choice responses from free-text
- For free-text answers: thematic coding (even informal) — group into categories, note frequency
- Treat neurodivergent status as a categorical independent variable with ~4 levels (NT / diagnosed ND / suspected ND / other psych diagnosis)

**Step 2 — Descriptive statistics**
Before any hypothesis testing, characterize your sample: gender breakdown, age distribution, AI usage frequency, how many used AI for psychological purposes vs. not, professional vs. non-professional. This matters because your sample is likely WEIRD-adjacent and self-selected (people who filled out a survey about AI self-reflection already have an above-average interest in both).

**Step 3 — Cross-tabulations for H1, H2, H5, H7**
Chi-square tests or Fisher's exact (given small subgroup sizes) between neurodivergent status and: use frequency, types of use, boundary-setting, trust patterns. With 126 responses and ~4 ND groups, some cells will be small — report this as a limitation.

**Step 4 — Ordinal analysis for H3**
Self-awareness rating (1–5 scale) as predictor → outcome: did they change their self-understanding, or did they set boundaries. Spearman correlation or ordinal regression.

**Step 5 — H4 (dissonant feedback → self-concept change)**
Cross-tab: received challenging feedback (yes/no/unsure) × self-understanding change (same/somewhat clearer/changed). This is the most theoretically interesting pairing in your data.

**Step 6 — Qualitative analysis of open-ended Q**
The final open text question ("van valami ami fontosnak tűnik…") is potentially rich. Even with 126 respondents, if 30–40 answered it, thematic analysis (informal inductive coding) can surface unexpected dimensions. Don't quantify these — treat them as illustrative quotes.

**Step 7 — Limitations section (be proactive)**

- Convenience/snowball sample, likely overrepresents digitally engaged, Hungarian-speaking, psychologically interested adults
- Self-reported neurodivergence (diagnosed vs. suspected vs. none) is not clinically validated
- No control over what "using AI for psychological purposes" means across respondents
- Survey was distributed by you — possible social desirability bias toward positive AI framing
- Retrospective self-report on self-awareness change is highly susceptible to recall bias

---

## Backing literature to look for

These are directions, not specific papers — verify them yourself since I'd rather not cite from memory inaccurately:

- **Therapy gap / access barriers**: search "barriers to mental health treatment seeking", Mojtabai et al. is a canonical reference
- **ND and text-based/asynchronous communication preferences**: autism & online communication literature, also ADHD & externalized working memory
- **Parasocial relationships with AI / chatbot attachment**: Skjuve et al. on Replika users; Woebot efficacy literature
- **Dual-process trust in online health information**: Eastin's credibility heuristics framework
- **Self-concept change through dissonance**: Swann's self-verification theory vs. Festinger's cognitive dissonance — these predict _opposite_ things and that tension is interesting
- **AI as reflective tool / "mirror"**: Turkle's work on technology and self is old but relevant philosophically; newer: Pentina et al. on AI self-disclosure

One genuine risk worth flagging: your survey design conflates "used AI for psychology topics" with "used AI for self-reflection." These overlap but aren't identical — someone using AI to research CBT techniques for a friend is different from someone processing their own trauma. This distinction may be worth acknowledging in your methodology section.

# MY ADDITIONAL hYPOTHESES

excellent, keep the hypotheses you wrote, let's reference them as you mentioned, H1-H2-H3 etc. 
here are some of mine i collected, let's check if any of these are valid as idea, could be validated by the numbers, exclude post hoc, and tell me how much these overlap with H1, H2 etc

```markdown
- 70-80% of people are using AI for personal purposes besides professional. However, as it is still a social taboo, less will admit it.
- women, neurodivergents and psychologists will use AI more for self-discovery purposes
- people rely mainly on their gut feelings trusting AI answers
- there are significant effects showing signs of narrative overfitting, confirmation bias, echo chamber, being in one's own bubble (however people will not admit it)
- some users would question and re-think their behaviours based on AI usage, creating a feedback loop beyond self-affirmation
- personal AI usage will have significant effect on the importance of therapy
- hallucinations are more turn-off than dependence
```

# CLAUDE UPDATE

Let me go through each one.

---

**"70-80% of people are using AI for personal purposes besides professional"**
Valid and testable — it's a prevalence estimate you can directly check against Q8 (used AI for psychological/personal purposes). The social taboo/underreporting part is _not_ testable from this data — you'd need an implicit measure or behavioral data. Drop that half, or flag it as a theoretical note. No strong overlap with H1–H7, this is more of a descriptive baseline finding. Worth keeping as a standalone descriptive hypothesis.

---

**"Women, neurodivergents and psychologists will use AI more for self-discovery"**
Valid and testable via cross-tabs. The neurodivergent part substantially overlaps with **H1** — don't treat them as separate hypotheses, fold the gender and professional dimensions into H1 as sub-comparisons. The women dimension is interesting but theoretically underdeveloped — why would women specifically? (Help-seeking behavior literature, emotional processing norms, stigma differential?) Without a theoretical grounding it risks looking like a fishing expedition. Either anchor it in a rationale or present it as exploratory.

---

**"People rely mainly on gut feelings trusting AI answers"**
Direct overlap with **H6** — this is essentially the same hypothesis. Yours is worded more casually, H6 is grounded in dual-process theory. Consolidate.

---

**"Narrative overfitting, confirmation bias, echo chamber — but people won't admit it"**
This is the most interesting one and also the most problematic methodologically. The first half (signs of confirmation bias/echo chamber) is _partially_ testable — you can look at whether people who received challenging AI feedback tended to dismiss or ignore it versus those who received confirming feedback. But the second half ("won't admit it") is untestable with self-report data by definition. You cannot demonstrate hidden bias using a survey that relies on self-awareness. This is a classic limitation of self-report methodology, not a finding.

What you _can_ argue: if the data shows high rates of "AI confirmed my existing self-image" _combined with_ low rates of boundary-setting and high trust, that pattern is _consistent with_ echo chamber dynamics — but you cannot conclude it. Be precise about this. Partial overlap with **H4** (the dissonant feedback angle is the inverse of this).

---

**"Some users would question and re-think their behaviours based on AI usage, creating a feedback loop beyond self-affirmation"**
Testable and overlaps directly with **H4**. H4 is more precisely framed (dissonant feedback → self-concept change). Yours adds the "feedback loop" framing which is a nice dynamic angle — the idea that self-reflection via AI isn't one-shot but iterative. That part isn't really testable from a cross-sectional survey though. Worth mentioning as a limitation and future research direction.

---

**"Personal AI usage will have significant effect on the importance of therapy"**
Partially testable — you have a question asking respondents to compare AI to therapy (complement vs. substitute vs. equivalent). But "significant effect" implies longitudinal measurement you don't have. What you can test: whether people perceive AI as therapy-equivalent, complementary, or inferior, and whether that perception differs by group (ND vs. NT, professional vs. non-professional). Overlaps with **H2** — if people use AI because therapy is inaccessible, that's structurally connected to how they position AI relative to therapy.

---

**"Hallucinations are more of a turn-off than dependence"**
Testable — you have a question on concerns (what worries you most), so you can directly compare frequency of "misleading/false information" vs. "over-reliance/emotional dependency" as top concerns. Clean, simple, no overlap with H1–H7. Valid as a standalone descriptive hypothesis. Theoretically interesting because it inverts the public discourse framing (most AI ethics concern focuses on dependency, but users may be more epistemically cautious than assumed).

---

## Summary table

| Your hypothesis                        | Testable?                            | Overlaps with | Action                                                  |
| -------------------------------------- | ------------------------------------ | ------------- | ------------------------------------------------------- |
| 70-80% personal use                    | Partially (prevalence yes, taboo no) | None          | Keep as descriptive baseline                            |
| Women/ND/psychologists use more        | Yes                                  | H1            | Fold into H1, add gender rationale                      |
| Gut feeling trust                      | Yes                                  | H6            | Consolidate into H6                                     |
| Echo chamber / won't admit             | Partially                            | H4 (inverse)  | Keep pattern-testing half, drop the "won't admit" claim |
| Feedback loop / rethinking             | Partially                            | H4            | Fold into H4, note iterative aspect as future research  |
| AI vs therapy importance               | Partially                            | H2            | Fold into H2 as perception sub-question                 |
| Hallucinations > dependence as concern | Yes                                  | None          | Keep as standalone                                      |

# CHATGPT HYPOTHESES

## H1 — Self-Disclosure Hypothesis

Individuals will report **greater emotional self-disclosure toward AI than toward humans in comparable contexts**, due to:

- reduced fear of judgment
- perceived anonymity
- absence of social cost

Grounded in:

- Online disinhibition effect (Suler, 2004)
- Self-disclosure research
- CASA paradigm (Computers Are Social Actors – Reeves & Nass)

---

## H2 — Neurodivergence Modulation Hypothesis

Neurodivergent individuals (especially ADHD/autistic traits) will report:

- higher frequency of AI use for self-reflection
- greater perceived usefulness

Possible mechanisms:

- Reduced social cognitive load
- Asynchronous interaction
- Lower rejection sensitivity activation
- Externalization of executive function

This connects to:

- Social fatigue literature
- Executive scaffolding
- Compensatory tool usage research

---

## H3 — Cognitive Offloading Hypothesis

Users will describe AI as helping with:

- structuring thoughts
- organizing emotions
- perspective shifting

This aligns with:

- Extended mind theory (Clark & Chalmers)
- Cognitive offloading literature
- Metacognitive scaffolding research

---

## H4 — Pseudo-Therapeutic Substitution Hypothesis

A subset of users will report using AI as:

- therapy alternative
- interim support
- preparation tool for therapy

But:  
Perceived emotional support will correlate with anthropomorphic framing of AI.

Grounded in:

- Therapeutic alliance theory
- Parasocial interaction research
- Anthropomorphism in AI studies

---

## H5 — Risk Perception Split Hypothesis

Users will cluster into two profiles:

- AI-as-tool (instrumental framing)
- AI-as-agent (relational framing)

These groups will differ in:

- trust level
- dependency risk
- emotional reliance

---

## H6 — Reflection Amplification Hypothesis

AI use will correlate with:

- increased self-questioning
- reframing ability
- narrative coherence

But not necessarily with:

- emotional resolution

This distinction is important.