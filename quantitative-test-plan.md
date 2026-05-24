## Individual assessment

**H1 – Self-disclosure hypothesis**
Theoretically solid and well-grounded. The problem is it's **not directly testable from your data**. You don't have a comparative measure — you didn't ask "do you disclose more to AI than to humans in comparable contexts." What you _can_ test is a proxy: whether people report using AI for emotional disclosure at all, and whether accessibility barriers are cited as drivers. Flag this as partially testable and be precise about what your data actually measures vs. what the hypothesis claims.

**H2 – Neurodivergence usage emphasis hypothesis**
Your strongest and most directly testable hypothesis. The two-part structure (higher use + lower boundary-setting despite higher engagement) is good because it creates an internal tension that's interesting if confirmed. Both parts map cleanly to columns in your coded data. Keep as-is.

**H3 – Cognitive offloading / perspective shift hypothesis**
This is doing too much work. You've bundled three distinct claims: (a) AI is perceived as useful for structuring/organizing thoughts, (b) dissonant feedback predicts self-concept change, and (c) confirmation bias/echo chamber dynamics exist. These could easily produce contradictory results — (b) and (c) are almost logical inverses of each other. **Split this into H3a and H3b.** H3a = cognitive offloading/structuring as perceived benefit. H3b = dissonant feedback → self-understanding change. The echo chamber piece stays as a caveat about what self-report data can and can't show, as we discussed earlier.

**H4 – Pseudo-therapeutic substitution hypothesis**
Good framing, but the "pseudo" prefix is slightly loaded — worth being neutral in academic writing ("therapeutic substitution" is fine). The two sub-rationales (accessibility barrier vs. preference for directness vs. shame) are actually three competing explanations for the same behavior, which is valuable. Your data can distinguish the first (accessibility as driver) but not cleanly separate the second and third — shame especially is not something people self-report reliably. Note this.

**H5 – AI as tool vs. agent framing hypothesis**
Conceptually your most ambitious and theoretically interesting hypothesis. The problem: **you don't have a clustering variable in your data**. You'd need to derive the instrumental vs. relational framing from a combination of responses (usage mode + trust pattern + experience description), which is doable but requires you to define the operationalization clearly before running it, or it becomes post-hoc. How to handle: define the cluster assignment rule _now_, before looking at the distribution. For example: "relational framing = use_validation=1 OR ai_experience contains 'partner/companion' framing." Then test whether that derived variable predicts trust and dependency concern differences.

**H6 – Reflection amplification hypothesis**
Clean, testable, well-grounded. The prior self-awareness (ordinal 1–5) → engagement quality link maps directly to your data. The "narrative coherence" piece is not measurable from your survey though — drop that phrase or qualify it as out of scope.

**H7 – Heuristic trust hypothesis**
Still your most theoretically anchored hypothesis. Well-connected to dual-process theory. Directly testable. No changes needed.

---

## Collectively

The set is better than the originals because the hypotheses now have explicit rationales, are more precisely framed, and connect to theory. The main remaining issues are:

- **H1** overclaims what the data can show — needs a scope qualifier
- **H3** needs splitting
- **H5** needs an operationalization defined before analysis
- Several hypotheses have sub-claims that should be labeled (a/b) so you can report partial confirmation cleanly

Coverage-wise, you've addressed: neurodivergence (H2), therapy substitution (H4), trust mechanisms (H7), self-awareness moderation (H6), and relational vs. instrumental framing (H5). What's notably absent is any **gender** hypothesis — which you flagged earlier as potentially interesting — and the **hallucinations vs. dependency concern** comparison, which was your cleanest standalone testable idea. Whether you include those is your call, but don't lose them.

---

## Data analysis orchestration

Here's the full analysis plan mapped hypothesis by hypothesis to your actual columns.

---

### Preliminary: sample description (run first, before any hypothesis testing)

```
gender distribution
age distribution
nd_status distribution → collapse to 4 levels:
  "diagnosed_nd"   ← Q5a
  "suspected_nd"   ← Q5b
  "neurotypical"   ← Q5c
  "other_psych"    ← Q5d
  "no_share"       ← Q5e  (probably exclude from ND comparisons)
is_professional: yes / no / abstain
ai_frequency distribution
used_ai_psych: yes / no / tried once
```

Flag your sample limitations here: self-selected, Hungarian-speaking, digitally engaged, likely overrepresents ND (surveys about AI self-reflection circulate in ND communities).

---

### H1 — Self-disclosure (partial test only)

**What you can measure:** prevalence of emotional/personal use, and whether accessibility is cited as a driver.

```
Variables:
  prob_emotions + prob_selfpatterns  → "emotional disclosure use" composite
  driver_noaccess + driver_speed     → "accessibility barrier" composite

Descriptive: % of respondents with emotional disclosure use = 1
Cross-tab:   emotional disclosure use × nd_status
Cross-tab:   emotional disclosure use × is_professional

Report as: "consistent with H1" not "confirms H1"
Note explicitly: no comparative human-disclosure measure exists in this dataset
```

---

### H2 — Neurodivergence usage emphasis

**Two-part test.**

```
Part A — higher frequency + use intensity:
  IV:  nd_status (4-level, exclude "no_share")
  DVs: ai_frequency (ordinal)
       used_ai_psych (binary: yes vs. no/once)
       sum of prob_* flags (0–7 composite = breadth of use)
  Test: Kruskal-Wallis (non-parametric, ordinal IV, small groups)
        or Chi-square for binary DVs

Part B — lower boundary-setting despite higher engagement:
  IV:  nd_status
  DV:  set_rules (yes / somewhat / no → ordinal or binary: set vs. didn't)
  Cross-tab + Chi-square or Fisher's exact (cell sizes likely small)

  Key finding to look for: diagnosed_nd shows highest prob_* composite
  but lowest rate of set_rules = "yes"
```

---

### H3a — Cognitive offloading as perceived benefit

```
Descriptive frequencies:
  driver_structure    (wanted structured overview)
  use_brainstorm      (brainstorming partner)
  use_secondopinion   (neutral second opinion)
  prob_selfpatterns   (understanding own patterns)

Report % endorsement for each.
Cross-tab with nd_status to see if ND respondents skew toward structuring drivers.
```

### H3b — Dissonant feedback → self-understanding change

**Your most analytically interesting cross-tab.**

```
IV:  received_challenging_feedback (yes / no / unsure)
DV:  self_understanding_change (ordinal: unchanged / somewhat / changed significantly)

Chi-square or Fisher's exact.
Expected pattern: "yes" → higher rate of "changed significantly"
                  "no"  → higher rate of "unchanged"

Also check: reaction_to_feedback flags for the "yes" group
  react_reflected + react_integrated vs. react_ignored
  This shows what people *did* with the dissonance
```

---

### H4 — Pseudo-therapeutic substitution

```
Primary measure:
  driver_noaccess    → "used because no professional access"
  ai_vs_therapy      → how they position AI relative to therapy

Descriptive: % endorsing driver_noaccess
Cross-tab:   driver_noaccess × ai_vs_therapy
             (do people who cite access barriers also rate AI as substitute?)

Secondary:
  is_professional × ai_vs_therapy
  (professionals should rate AI as complement, not substitute — H7 inverse)

Competing rationale check (directness preference):
  driver_structure × ai_vs_therapy
  (structure-seeking may signal preference for AI directness, not just access)

Note in limitations: shame/stigma rationale is not separable from accessibility
in self-report data
```

---

### H5 — Instrumental vs. relational framing

**Define cluster assignment rule now, before running.**

```
Operationalization (define a priori):

  "Relational framing" respondent IF any of:
    use_validation = 1         (emotional validation seeking)
    ai_experience = [whatever value describes companion/partner framing]
    concern_emotional_dependency = 1 (aware of relational risk = signals relational mode)

  "Instrumental framing" respondent IF:
    use_brainstorm = 1 OR use_secondopinion = 1 OR use_problemsolve = 1
    AND use_validation = 0
    AND none of relational criteria above

  Mixed/unclear: everyone else

Then test group differences:
  IV:  framing_type (instrumental / relational / mixed)
  DVs: trust_agrees_with_me   (confirmation-seeking)
       trust_confident_tone    (heuristic trust)
       concern_overreliance
       concern_emotional_dependency
       set_rules

Chi-square or Fisher's exact per DV.
```

This operationalization will likely need adjustment once you see the distribution — but defining it first protects you from post-hoc accusation.

---

### H6 — Reflection amplification

```
IV:  prior_self_awareness (ordinal 1–5)
DVs:
  (a) self_understanding_change (ordinal)  → Spearman correlation
  (b) set_rules (binary: yes vs. no)       → point-biserial or Chi-square
  (c) react_reflected + react_integrated   → binary composite "critical engagement"
      Spearman with prior_self_awareness

Expected: higher prior_self_awareness → higher critical engagement,
          more likely to set rules, more nuanced self-change report

Also worth running: nd_status × prior_self_awareness
(ND respondents may skew lower on self-awareness pre-AI, which would interact with H2)
```

---

### H7 — Heuristic trust

```
Primary descriptive:
  Frequency of each trust_* flag
  Expected ranking: trust_structured and trust_agrees_with_me
                    should outrank trust_confident_tone

  The interesting comparison is:
    trust_agrees_with_me (confirmation heuristic — System 1)
    vs. trust_newperspective (content-based — System 2 adjacent)

Cross-tab: trust_agrees_with_me × distrust_contradicts_me
  (people who trust when it agrees AND distrust when it contradicts =
   pure confirmation heuristic profile — this is your echo chamber proxy)

Cross-tab: trust pattern × is_professional
  (professionals should show less heuristic trust — H7 interaction)

Hallucination vs. dependency (your standalone hypothesis):
  concern_misinformation vs. concern_overreliance vs. concern_emotional_dependency
  Simple frequency comparison — which concern dominates?
```

---

### Sequence to run in

1. Sample descriptives + nd_status distribution
2. H7 (simplest, purely descriptive frequencies — good warm-up)
3. H3b (most theoretically interesting cross-tab)
4. H2 (requires grouping, two-part)
5. H4 + H6 (both need ordinal handling)
6. H5 (derived variable, most complex)
7. H1 (partial, mostly descriptive)
8. Qualitative: freetext_dump + narratives thematic pass

Let me know when the JS pipeline output is clean and we can move into actual number-running.
