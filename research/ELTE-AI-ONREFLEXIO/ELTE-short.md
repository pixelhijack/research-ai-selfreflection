# AI for self-reflection: a mixed-methods study of self-directed psychological use across neurotypes _(WIP final)_

## _Póth Attila research survey for ELTE Computational and Cognitive Neuroscience MSc_

Literature review
Research questions
Hypotheses
Quantitative results - Hypotheses testing
Qualitative analysis

## 1. Abstract

AI is already being used for psychological self-reflection, at scale, across demographic groups, and largely outside any clinical or regulatory framework. The question worth asking is not whether this is happening — it is — but what psychological mechanisms it activates, who uses it and how, and where its structural properties create risks that users themselves may not recognise.

This mixed-methods cross-sectional study (n=126, Hungarian-speaking, self-selected) examined patterns of self-directed psychological AI use across neurotypes, combining quantitative hypothesis testing with qualitative free-text analysis. Seventy percent of participants reported using AI for psychological purposes; 56% engaged in emotional disclosure. The strongest finding — and the most theoretically significant — was that 93.7% of users who received dissonant AI feedback reported improved self-understanding, with zero ignoring it entirely, suggesting that the low-threat, non-judgmental interaction context facilitates genuine schema accommodation rather than defensive self-verification. Neurodivergent users demonstrated broader problem-domain engagement and a stronger skew toward self-pattern understanding, consistent with AI functioning as a cognitive scaffold for populations with limited access to traditional support. Therapeutic substitute framing was a minority pattern (12.5%), but concentrated among access-constrained users at a 4.3× higher rate — positioning AI less as a therapy replacement and more as a supplement of last resort.

The risk picture is more complex than public discourse suggests. Users show strong epistemic vigilance about hallucination and factual error, but the data suggest the operative risks are less visible: sycophancy, narrative overfitting, and dependency dynamics that feel coherent rather than wrong. Paradoxically, the users most integrated with AI showed the least awareness of dependency risk — and self-reported mentalisation scores clustered so high as to raise questions about whether confident self-knowledge protects against or amplifies AI-mediated narrative reinforcement.

AI-assisted self-reflection is neither a therapy substitute nor a mere productivity tool. It occupies a structurally distinct space — more accessible than therapy, more psychologically active than search, and more shaped by deliberate provider design choices than most users recognise. Understanding that space rigorously is a prerequisite for navigating it wisely.

## 2. Introduction

### 2.1 Problem framing

While the early years AI was predominantly used by technical people for professional goals, based on recent reports the trend is shifting and AI usage now started to take over for personal reasons. ([Anthropic report](https://www.anthropic.com/research/anthropic-economic-index-september-2025-report) [Tenet](https://www.wearetenet.com/blog/ai-usage-statistics)) This is a usual learning curve: after the tech-savvy early adopters, a new technology goes widespread. Anthropic in a 81 000 person sample representative global study ([Anthropic 81k study](https://www.anthropic.com/features/81k-interviews)) ([Self-disclosure to AI: People provide personal information to AI and humans equivalently](https://www.sciencedirect.com/science/article/pii/S2949882125000647#:~:text=This%20study%20examined%20how%20participants%20chose%20between,thought%20to%20be%20analyzed%20by%20an%20AI%2C)) explored what people really expects from AI. One of the leading drives was "personal transformation": mental well-being, self-discovery. Based on multiple independent studies, generative AI for companionship and therapy-substitute became the number one use case.

### 2.2 Gap

AI adoption now divides professionals all over the world and sparks heated debates between the "skeptics / alarmists / doomsdayers" versus the "utopists / optimists / the hype" _(intentionally characterised here for the discourse, without taking sides)_. While there are many research on the subject of AI usage, studies usually focus on task-oriented AI use and clinical tools. Also, most of the interpretations either fall to express the downsides and dangers of using AI or, on the other hand, originate from the biggest players of the industry (Anthropic, OpenAI) which omits these and paint a positive-opinionated picture for obvious reasons. What is missing: naturalistic self-reflective use.

### 2.3 Why it matters? My angle

Even the most pessimist scenarios don't argue that AI is becoming a commodity in a lightning speed, just like electricity, telecommunication or the internet did. The reason why the discussions around AI are so heated and controversial is that (just as other commodities), AI could be used for several intents, thus it is a double-edged sword. Two main paradigms are emerging recently: AI as replacement for human skills (automation) versus AI as augmentation (used as a tool).

During my exploration of the subject of AI usage, I wanted to stay away from either side of the AI-debate to avoid judgements and observe users as they are.

My perspective was a researcher's neutral curiosity, how AI is trusted and used by:

- general AI users (as a contextual baseline)
- neurodivergent users (as an alternative based on a distinct group, by lived experience)
- therapists / psychology professionals (as optional extension of the dataset).

The study is intentionally exploratory and multi-perspective: epistemic level was pre-committed, but I wanted to leave sub-group comparison and how prominent attitudes / themes to become visible during the data analysis and hypothesis testing.

(For simplicity, I use usual abbreviations at some points for neurodivergents as ND, neurotypicals as NT.)

### 2.4 Main research question

As a starting point, this mixed-method study investigates how individuals use AI for psychological self-reflection and whether usage patterns differ across neurotypes. The main research question was then sophisticated and split into three research questions (RQ1, RQ2, RQ3) later, after the literature review and identifying the research gap this study meant to cover.

### 2.5 AI disclaimer

To flag explicitly for transparency, AI served not only the subject of this study, but also as a methodological assistant. My challenge was not to generate the study with AI (automation paradigm), but to use LLMs to support the whole research process (AI as augmentation paradigm). As a system prompt, I set AI to act as a rigorous thinking partner instead of a validator / generator: challenge my reasoning when it's weak, name blindspots, confirmation bias, overclaims or narrative overfitting; also, provide structure and guide me through to keep the study methodically valid. Frontier LLMs (Claude, Gemini, ChatGPT, Gemma) were used in survey design, literature review, hypothesis testing and synthesising the findings, progressing back and forth with the AI assistance on a line-by-line granular level. Qualitative and quantitative data processing is linked in the Appendices section.

## 3\. Theoretical Background / Literature Review

Four interconnected areas frame this study's research questions: human-AI interaction, self-disclosure online, cognitive offloading, and digital mental health tools. Each is summarised in terms of its direct relevance to the hypotheses and the gap this study addresses.

### 3.1 Human--AI Interaction (HAI)

Human-AI Interaction studies how people perceive, anthropomorphise and emotionally respond to AI systems. A human-AI interaction is not merely software use --- it is a social event where linguistic cues (warmth, empathy, first-person language) activate the brain's social circuitry.

The classical framework is the **Computers Are Social Actors (CASA)** model, which explains why humans apply social norms to machines even when aware they are machines. Lombard & Xu's (2021) **Media Are Social Actors (MASA)** extension generalises this across modern technologies including social robots and smartphones.$^1$ Nielsen (2023) argues LLMs constitute a "Third Paradigm," where the interface shifts from a tool you command to a collaborator you negotiate with. A large-scale study (2,000+ interactions) found that when AI displays cognitive empathy --- explaining _why_ it understands the user --- users shift from tool-framing to relational-partner framing, meaningfully lowering disclosure barriers (arXiv:2604.15316, 2026). Critically, users in vulnerable states struggle to detect AI overconfidence, leading to over-trust and reduced verification behaviour (arXiv:2402.07632, 2024/2025). Even minimal linguistic cues such as first-person pronouns trigger social cognition pathways and increase disclosure (ACL Anthology, 2025).$^2$

---

### 3.2 Self-disclosure online

Human social cognition is built on reciprocity: even an artificial actor "opening up" creates psychological comfort for the human to mirror it. The key question for this study is whether AI lowers or merely redirects disclosure barriers.

Suler's (2004) foundational **online disinhibition effect** establishes that individuals act more openly online than in person, lowering social barriers in both prosocial and antisocial directions. A 2026 study found that people disclose personal information to AI and human researchers at equivalent rates --- the barrier is not the medium but the perceived absence of judgment (ResearchGate, April 2026). An experimental study found AI outperformed humans in creating feelings of closeness during deep-talk sessions, because AI provides consistent emotional disclosure without the social risk humans carry --- a dynamic particularly salient for neurodivergent users experiencing rejection-sensitive dysphoria (Communications Psychology, Feb 2026). Notably, an "anti-AI bias" exists where users rate AI-generated empathy lower when they know the source, but this bias diminishes with extended use (PubMed/Nature, 2024).$^3$

---

### 3.3 Cognitive offloading & the extended mind

For frequent users, AI can function as a metacognitive scaffold --- a tool that helps the brain "think about thinking" --- rather than merely a chat partner.

Clark & Chalmers' (1998) **active externalism** theory proposes that when external tools perform tasks otherwise done mentally, those tools become functional parts of the cognitive system. This philosophical grounding justifies treating AI not as an external resource but as a genuine extension of cognitive architecture. A 2025 Frontiers in Psychology study distinguishes adaptive from maladaptive offloading: AI facilitates problem-focused coping by reducing self-monitoring load, but when AI labels emotions for the user ("you seem anxious"), internal processing atrophies and external validation dependency increases. Crucially, when tools function as **scaffolds** (supporting the process) rather than **substitutes** (completing the task), users retain and develop their own capacity for complex thought (Frontiers, 2026). EEG-based research characterises AI as a "creativity exoskeleton": it extends reach, but without independent practice, capability degrades (AIRI/MIT Media Lab, Sept 2025). Specific to this study's population, generative AI has been shown to help neurodivergent users (particularly ADHD) break abstract emotional or cognitive tasks into manageable steps through cognitive scaffolding (CHI/arXiv:2602.09381, 2026).

---

### 3.4 Digital tools for mental health

Traditional therapy carries a structural treatment gap: cost, waitlists, and access barriers exclude large populations. AI offers accessibility and immediacy --- particularly relevant for neurodivergent users who may wait years for diagnosis and still receive limited functional support. This study specifically captures unregulated, spontaneous use of general-purpose frontier models, not purpose-designed therapeutic tools.

Users develop genuine "digital therapeutic alliances" with mental health chatbots that mirror the human therapeutic bond, independent of initial mental health status (JMIR Mental Health, 2025). Early RCT data on generative AI therapy report a 51% decrease in depressive symptoms and 31% reduction in anxiety over 8 weeks (APA Monitor/NEJM AI, Jan 2026).$^4$ AI platforms show particular effectiveness for neurodivergent populations: real-time reinforcement feedback from AI reduces impulsivity in ADHD more effectively than some therapist-guided CBT formats, with the always-available feedback loop bridging the gap between emotion and coping strategy (PMC/Frontiers, 2025/2026). A large-scale ecological audit of 20,000 real human-AI therapy conversations found that while general-purpose LLMs have improved, they still fail in approximately **0.38%** of high-risk scenarios, sometimes reinforcing maladaptive behaviour or hallucinating psychological advice (PMC, Jan 2026).

---

### 3.5 Literature / Gap Synthesis

The four pillars converge on a consistent finding: humans are evolutionarily primed to treat AI socially (HAI), which lowers self-disclosure barriers online, which enables AI to function as a metacognitive scaffold, which for many users --- especially the neurodivergent population --- results in functional therapeutic substitution.

Across all four areas, the same gaps recur: studies are predominantly lab-based or tool-specific; naturalistic, self-directed, non-clinical AI use is largely unexamined; neurotype differentiation is rarely distinguished; and longitudinal data on cognitive or self-concept impact are essentially absent. This study is positioned to address the naturalistic and neurotype-differentiated gap specifically.

## 4. Research questions & hypotheses

### 4.1 Research questions

**RQ1 — Patterns and motivations of psychological AI use**
_To what extent do individuals use AI for psychological self-reflection and personal insight, and what motivates this use: accessibility barriers, preference for structured feedback, or curiosity?_

**RQ2 — Epistemic trust architecture in psychological AI use**
_How do users calibrate trust in AI-generated psychological feedback, through heuristic surface cues or content-based evaluation? And what is the relationship between trust patterns and self-concept change?_

**RQ3 — Risk perception vs. actual risk dynamics in psychological AI use**
_Do users accurately identify the primary risks of psychological AI use, and to what extent do self-reported concern patterns reflect or obscure dependency and confirmation bias dynamics?_

### 4.2 Hypotheses

#### H1 – Self-disclosure hypothesis

Individuals will report greater emotional self-disclosure toward AI than toward humans in comparable contexts.

Rationale: AI comes with reduced fear of judgment, perceived anonymity and absence of social cost and provides immediate structural breakdown and feedback compared to classical human-based therapy which is expensive, harder to access and needs much slower self-reflective labour and investment.

#### H2 – Neurodivergence usage emphasis hypothesis

Neurodivergent individuals will report higher frequency of AI use for self-reflection and greater perceived usefulness. Neurodivergent users will also less likely to set explicit usage boundaries/rules for AI, despite reporting higher engagement.

Rationale: neurodivergent individuals often face barriers to traditional therapy (cost, waitlists, communication mismatch, masking fatigue) and frequently report finding it easier to process thoughts in text. AI provides a low-judgment, always-available interface that matches common neurodivergent cognitive profiles (i.e. need for structured output, preference for asynchronous interaction).

#### H3– Cognitive offloading / perspective shift hypothesis

Users will describe AI as helpful with structuring thoughts, organizing emotions, perspective shifting. Neurodivergents would skew more towards structure-oriented use. Users who receive challenging or dissonant AI feedback (i.e., feedback that contradicts their self-image) are more likely to report changed self-understanding than those who only receive confirmatory feedback. H3b – as an inverse phrasing of this hypothesis: there are significant effects showing signs of narrative overfitting, confirmation bias, echo chamber, being lost in one's own bubble for certain characteristic users.

Rationale: Cognitive dissonance theory and assimilation/accommodation models (Piaget, schema theory) suggest that self-concept change requires encountering contradictory information, not reinforcement.

#### H4 – Therapeutic substitution hypothesis

A subset of users will report using AI as therapy alternative / interim support / preparation tool for therapy.

Rationale: the primary motivation for psychological AI use is accessibility, not preference - people turn to AI because professional help is unavailable or expensive, not because they perceive AI as superior. If they do prefer AI over therapy, the question is whether it is because of the potential for a direct, honest response which might consist of more direct actionable steps than a therapy or maybe because of the underlying shame (“doesn’t dare to ask the therapist”).

#### H5 – AI as tool (instrumential) vs. as agent (relational) framing hypothesis

Users of AI usually cluster into two profiles: 1. AI-as-tool (instrumental framing) vs 2. AI-as-agent (relational framing). These groups will differ in trust level, dependency risk and emotional reliance.

Rationale: what is haven't widely discussed yet is the _role_ of AI chatbots fills in a user's life based on how / for what reason it is used. In layman's terms, AI usage can cover a wide range from being a mere tool (for developers in a data pipeline for example, or recognising plants / bird calls, asking for wifi setting support), through used as a Delphoi Oracle (asking for life advice) through used as a complete presidential consultancy team.

#### H6 – Reflection amplification hypothesis

Higher prior self-awareness predicts more critical (less naive) engagement with AI feedback. AI use will correlate with increased self-questioning, reframing ability, narrative coherence.

Rationale: People who already have developed introspective frameworks may use AI rather as a tool and selectively integrate outputs, while people with lower baseline self-awareness may be more likely to passively accept AI responses, creating potential vulnerability.

#### H7 – Heuristic trust hypothesis

Trust in AI responses is primarily heuristic-based (a “gut feeling” based on structural clarity, confidence of tone) rather than content-based (accuracy, sources), across all groups.

Rationale: This follows dual-process theory — users evaluate AI outputs with System 1 cues (does it look coherent, does it feel right?) rather than System 2 verification. This would replicate known patterns in how people evaluate online health information.

#### H8 - Dependence hypothesis

Hallucinations are more of a turn-off than dependency concern.

Rationale: a descriptive hypothesis that challenges that for 2026, users become much more epistemically cautious with AI based on widespread AI fatigue and AI skepticism, however self-reinforcing confirmation bias / narrative overfitting loops create a stronge dependency and might be much more dangerous than unchecked hallucinations / invalid facts (even though model sycophancy is already recognised and flagged, see OpenAI GPT-4o scandals). This hypothesis is rahter descriptive/exploratory, falsifiability questionable.

## 5. Methods

### 5.1 Design, participants, materials, procedure

This study used a mixed-methods approach on a cross-sectional survey design, reflecting the branching, multi-directional nature of the research questions. The anonymous survey consisted of 23 questions with an optional email field for follow-up interest, and was completed by 126 participants over a two-week period.

The sample is non-representative and self-selected: Hungarian-speaking, digitally engaged, and likely over-representing neurodivergent individuals. Distribution channels included personal social media, adult A(u)DHD and neurodivergency Facebook groups, an AI technical news group, and Hungarian Reddit forums (r/psychology). The study is best treated as a pilot and should be replicated on a more representative sample for generalisable results.

### 5.2 Limitations

Beyond sampling, three limitations warrant explicit flagging:

**Selection bias in the neurodivergent subsample.** Neurodivergent communities are disproportionately motivated to engage with topics at the intersection of self-discovery, AI, and psychology, and are generally more inclined toward questionnaire participation in these areas. The ND subsample likely over-represents engaged, self-aware users and should not be generalised to the neurodivergent population broadly.

**Lack of clinical validation.** The findings were not validated within a clinical or professional psychological framework, which limits their interpretability in applied mental health contexts.

**Time-sensitivity.** Attitudes toward AI use are shifting rapidly. All findings reflect a specific window (February–May 2026) and may have limited shelf life as both AI capabilities and public perception continue to evolve.

## 6. Data analysis & results

### 6.1 Quantitative results

#### Preliminary: sample description

##### Gender and age distribution

Of 126 participants, 123 reported gender: 88 female (~71.5%), 31 male (~25.2%), 4 undisclosed. The sample skews heavily female and concentrated in the 25–44 age range, which together accounts for approximately two-thirds of participants.

| Age Group       | Number of Participants | Percentage |
| --------------- | ---------------------- | ---------- |
| **18 - 24**     | 11                     | **~9%**    |
| **25 - 34**     | 42                     | **~33%**   |
| **35 - 44**     | 42                     | **~33%**   |
| **45 - 54**     | 28                     | **~22%**   |
| **55 - 64**     | 2                      | **~1.5%**  |
| **65 or older** | 1                      | **~0.8%**  |

##### Neurodivergence status distribution

Of 120 respondents (6 skipped):

| Neurodivergency Status              | Number of Participants | Percentage |
| ----------------------------------- | ---------------------- | ---------- |
| Neurotypical                        | 42                     | **~33%**   |
| Diagnosed neurodivergent            | 37                     | **~29%**   |
| Suspected neurodivergent            | 32                     | **~25%**   |
| Diagnosed with some other condition | 9                      | **~7%**    |

Combined suspected and diagnosed ND respondents represent 54% of the sample. This substantially exceeds clinical prevalence estimates (typically cited at 5–20%), but aligns with recent self-identification data: comparable rates of ~53% ND self-identification among Gen Z and Millennial cohorts have been reported by ZenBusiness, Deloitte (2023), and Understood.org / Harris Poll (2024). This pattern likely reflects recruitment through ND-adjacent communities and the known tendency toward higher self-identification rates in digitally engaged younger populations. True prevalence and its broader implications are outside the scope of this study; the ND variable here functions as a self-reported identity grouping for between-group comparison, not a clinical classification. 

##### Professional status distribution

8 of 126 participants (~6%) identified as mental health professionals (therapist, psychologist, coach, or social worker).

##### AI usage frequency distribution

54 participants (42%) admitted to use AI on a daily basis, 42 weekly (33%), 16 sometimes (12%), 5 rarely (4%), and 9 tried but almost never really using it (7%).

##### Psychological AI use distribution

The question "Have you ever used AI for psychological purposes — discussing personal matters, understanding your internal patterns, social situations, or as a therapy substitute?" served as a branching filter: 89 participants (70%) answered yes and continued; 37 exited early. Of the 89 who reported psychological AI use, 66 (~74%) were women.

#### Hypothesis testing — H1

H1 predicted greater emotional self-disclosure toward AI than toward humans. No direct comparative measure was available in the dataset, so H1 is **partially testable only** via proxy variables.

**Emotional use proxy:** 71 respondents (~56%) reported using AI for emotional disclosure or self-pattern understanding. This rate was modestly higher among diagnosed ND (59%) and suspected ND (59%) respondents than neurotypicals (52%), with the "other diagnosed condition" group highest at 66%.

**Accessibility barrier proxy:** 48 respondents (~38%) cited accessibility barriers (time, cost, or unavailability of professional support) as a driver of AI use.

These patterns are directionally consistent with H1 — AI is being used for emotional disclosure, and access barriers are a contributing factor — but the absence of a within-subject human-disclosure comparison means the core claim (greater disclosure to AI _than_ to humans) cannot be confirmed from this data. H1 is **partially supported** as a directional finding.

#### Hypothesis testing — H2

##### Hypothesis Testing — H2

H2 predicted higher AI use frequency, higher psychological AI use rates, broader problem-domain engagement, and lower explicit self-regulatory boundary-setting among ND respondents compared to neurotypicals.

**Part A — not supported.** Kruskal-Wallis testing found no significant difference in AI use frequency across ND groups (H=2.38, df=3, p=0.498); Chi-square analysis found no significant group difference in psychological AI use rates (χ²=0.73, df=3). Neurotypical respondents showed the highest mean frequency score (M=4.17), marginally above diagnosed ND (M=4.05). This null result is likely partly attributable to recruitment bias: the survey's subject matter attracted respondents already engaged with AI-assisted self-reflection, compressing variance that might be observable in a general population sample.

**Part B — descriptive pattern consistent with H2.** Among psychological AI users, ND groups showed broader problem-domain engagement (diagnosed ND: M=2.97; suspected ND: M=2.88) compared to neurotypicals (M=2.27), while explicit rule-setting rates remained low across all groups (diagnosed ND: 17.2%; suspected ND: 20.0%; neurotypical: 12.5%). This produces higher engagement-to-regulation ratios in ND groups (3.32–3.35) versus neurotypicals (2.76), directionally consistent with H2's prediction of high engagement co-occurring with low self-regulation. This ratio is a descriptive heuristic rather than a formal statistical measure; group differences do not reach significance. Findings are tentative given the sample constraints.

**H2 partially supported** at the descriptive level for Part B; not supported statistically for Part A.

#### Hypothesis testing — H3

**H3a — partially supported.** H3a predicted high prevalence of cognitive offloading behaviors, with a particular ND skew toward structuring-oriented use. Overall endorsement was robust: 77.8% of respondents endorsed at least one offloading indicator. The most common were brainstorming (61.1%), structured problem overview (53.2%), self-pattern understanding (40.5%), and neutral second opinion (35.7%) — suggesting AI is approached primarily as an externalized thinking scaffold rather than an emotional support source.

The clearest ND-specific gradient appeared on self-pattern understanding: endorsed by 48.6% of diagnosed ND, 43.8% suspected ND, and 31.0% neurotypical respondents (17.6 percentage point gap). Structured overview use was nearly uniform across groups, suggesting a general AI behavior rather than an ND-specific one. No inferential testing was applied; results are directional.

**H3b — strongly supported.** H3b predicted that receiving dissonant AI feedback would associate with greater self-understanding change, consistent with cognitive dissonance theory and Piaget's accommodation model.

Among respondents who received challenging AI feedback (n=32), 93.7% reported improved self-understanding (40.6% significantly, 53.1% somewhat). Among those who did not (n=74), 77.0% reported no change or worsening. Chi-square analysis confirmed a highly significant association (χ²=50.80, df=2, p<0.001) — the strongest statistical finding in this dataset.

Reaction analysis (n=32) showed 81.3% reflected on the feedback, 43.8% partially integrated it, and 0% ignored it entirely. This profile suggests that in AI-mediated contexts, dissonant self-relevant information produces engagement rather than defensive rejection — consistent with accommodation being more accessible in low-threat, non-judgmental interaction contexts.

#### Hypothesis testing — H4

H4 predicted that a subset of users would report using AI as therapeutic substitute or interim support, driven primarily by accessibility barriers rather than preference for AI over therapy.

**Overall distribution:** The dominant positioning was complementary (40.4%), followed by weaker than therapy (29.8%), unsure (17.3%), and substitute framing ('similar to' or 'better than' therapy combined: 12.5%). Most users do not frame AI as a therapy replacement.

**Accessibility-to-substitution pathway — confirmed.** 26.9% (n=28) cited inability to access professional support as a driver. Among this group, 28.6% endorsed substitute framing versus 6.6% among those who did not cite this driver — a 4.3× difference, statistically significant (χ²=9.05, df=1, p<0.01). H4's core prediction is confirmed: accessibility barriers substantially increase the likelihood of substitute framing.

**Preference-for-directness competing rationale — ruled out.** Users citing structure-seeking as a driver showed virtually identical substitute framing rates to those who did not (12.3% vs 12.8%).

**ND subgroup pattern:** Suspected ND respondents cited access barriers most frequently (34.8%), higher than diagnosed ND (20.7%) or neurotypicals (28.2%). Without formal diagnosis, this group likely faces the greatest barriers to referral pathways, making AI a substitute by necessity rather than preference.

**Professional comparison** (n=7): directionally consistent — professionals showed higher complementary framing (71.4% vs 38.5%) — but statistically uninformative at this sample size.

**H4 partially supported.** Substitute framing remains a minority pattern (12.5%), consistent with AI functioning as a supplement of last resort for a specific access-constrained subgroup rather than a broad population-level shift away from therapy. The shame/stigma rationale proposed in the hypothesis cannot be separated from the accessibility explanation using self-report data and remains a theoretical possibility.

#### Hypothesis testing — H5

H5 predicted that users would cluster into instrumental (AI-as-tool) versus relational (AI-as-agent) framing types, with differences in trust patterns, dependency risk awareness, and self-regulatory behavior.

**Operationalization:** Framing was assigned behaviorally to avoid circularity. Relational framing: active emotional validation-seeking or routine deference to AI judgment. Instrumental framing: brainstorming, second opinion, or problem-solving use without relational signals. Mixed: neither or both. Dependency concern was deliberately excluded from cluster criteria and retained as a dependent variable; an alternative operationalization including it was considered and rejected as tautological.

**Distribution:** Instrumental 57.1% (n=72), relational 23.0% (n=29), mixed 19.8% (n=25). Nearly one in four respondents showed relational framing toward an ostensibly utilitarian tool.

**Significant findings:** Concern about over-reliance differed significantly across framing types (χ²=11.73, df=2, p<0.01): instrumental users showed the highest concern (55.6%) versus relational (31.0%) and mixed (20.0%). Concern about emotional dependency followed the same pattern (χ²=13.50, df=2, p<0.01): instrumental 44.4%, relational 20.7%, mixed 8.0%.

Both findings run counter to the intuitive prediction. A plausible interpretation: instrumental users apply active metacognitive monitoring because they approach AI deliberately — their concern reflects awareness rather than vulnerability. Relational users' lower concern may itself be the risk signal.

**Non-significant findings:** Trust based on confirmation of existing thinking showed a directional relational-highest pattern but did not reach significance (χ²=5.17, p=0.075). Tone-based trust reached significance (χ²=7.09, p<0.05) but with three small expected cells — reported as suggestive only. Rule-setting did not differ across framing types (χ²=4.77, p>0.05).

**H5 partially supported.** Framing clusters are identifiable and show meaningful dependency-related differences, though in an unexpected direction. The absence of significant trust and rule-setting differences suggests instrumental vs. relational orientation has stronger implications for risk awareness than for epistemic trust calibration in this sample.

#### Hypothesis testing — H6

H6 predicted that higher prior self-awareness would associate with more critical AI engagement, greater boundary-setting, and more nuanced self-understanding change — a reflection amplification effect.

**None of the three tested associations reached significance.** Spearman correlation between prior self-awareness and self-understanding change yielded ρ=-0.135 (p=ns) — a weak negative trend suggesting marginal association with _less_ reported change, consistent with a ceiling interpretation. Correlation between prior self-awareness and critical engagement in the dissonant-feedback subgroup (n=32) yielded ρ=0.039 (p=ns), effectively zero. Chi-square analysis of awareness group against rule-setting showed a directionally consistent pattern (high-awareness: 22.2% set rules vs. low-awareness: 7.1%) but did not approach significance (χ²=3.04, df=2, p=ns), with two small expected cells.

**H6 is not supported, but the null result should be treated as inconclusive rather than disconfirmatory.** Two constraints limit interpretation: (1) a pronounced ceiling effect in self-awareness ratings — 67.3% of respondents rated themselves 4 or 5 out of 5 — severely restricts available variance; (2) the critical engagement subgroup (n=32) is underpowered for correlation analysis. The hypothesis remains theoretically plausible but untestable in this dataset.

**Contextual note:** Suspected ND respondents reported the lowest mean prior self-awareness (M=3.44) compared to neurotypical (M=3.92), diagnosed ND (M=3.76), and other diagnosed (M=4.00) respondents — consistent with the theoretical rationale that undiagnosed neurodivergence may impede self-knowledge. This warrants investigation in future research with adequate per-group sample sizes.

#### Hypothesis testing — H7

H7 predicted that trust in AI responses would be primarily heuristic-based (System 1 cues: structural clarity, confident tone) rather than content-based, and that confirmation-seeking would outrank openness to new perspectives as a trust signal.

**Not supported — and inverted in an informative direction.** The dominant trust criterion was structural clarity (50.0%), consistent with a surface heuristic, but the second-ranked criterion was openness to new perspectives (34.1%) — a System 2-adjacent signal — followed by multiple options presented (27.8%). Confirmation-based trust ranked fifth (18.3%) and confident tone last (4.8%). New perspective trust nearly doubles confirmation trust, suggesting AI is trusted more for expanding thinking than for validating it.

**Distrust showed the opposite pattern.** The dominant distrust trigger was gut feeling or intuition (55.6%), followed by oversimplification (47.6%) and excessive generality (46.8%). Users apply heuristic judgment primarily to _reject_ AI outputs while applying more deliberate criteria to _accept_ them — more epistemically sophisticated than H7 predicted.

**Echo-chamber subgroup:** 11.9% (n=15) showed a pure confirmation profile (trust when AI agrees, distrust when it contradicts). Notably, 53.3% of this group also endorsed new perspective trust, suggesting confirmation preference coexists with openness rather than constituting a closed epistemic stance.

**H7 not supported.** A revised framing better fits the data: users apply System 1 judgment as a rejection filter and System 2 judgment for acceptance. This inversion may warrant formal investigation in future research.

#### Hypothesis testing — H8

H8 predicted greater user concern about AI misinformation and hallucinations than about emotional dependency or over-reliance.

**Confirmed.** Concern frequency across the full sample (n=126): misleading or false information 59.5%, over-reliance 42.9%, loss of human connection 38.9%, emotional dependency 31.7%, privacy 27.0%, no concerns 11.9%. The gap between misinformation concern and emotional dependency concern is 27.8 percentage points — a substantial margin requiring no subgroup analysis.

**H8 supported.** Two non-mutually-exclusive interpretations follow. The optimistic reading: widespread exposure to AI hallucination discourse has produced a calibrated, skeptical user base that prioritizes information quality. The more cautious reading — consistent with H3b and confirmation bias literature — is that dependency and narrative overfitting may operate below conscious awareness precisely because they feel coherent rather than erroneous. Users appear alert to risks they can detect (factual errors feel wrong) while potentially blind to risks they cannot (self-reinforcing narratives feel right). If this holds, the 31.7% emotional dependency concern rate likely underestimates actual dependency dynamics in the sample — a limitation self-report methodology cannot resolve but that warrants longitudinal investigation.

### 6.2 Qualitative Results

Qualitative analysis of free-text responses (n=76 coded entries, 30 open narratives) corroborated, nuanced, and in one case extended the quantitative findings.

The most frequent tag was _partner_ (n=21), substantially exceeding its quantitative counterpart. While H5's behavioral operationalization classified 23.0% of respondents as relationally-framed, qualitative language suggests relational orientation is considerably more widespread — users describe AI in partnership terms even when their behavioral patterns coded as instrumental. Relational AI engagement is likely better captured through language than behavioral proxies; H5 probably underestimates its prevalence.

A high-risk subgroup emerged among respondents rating AI as better than or equal to therapy (n=8), showing the highest co-occurrence of _partner_ (87.5%), _dependence_ (75.0%), and _emotional engagement_ (50.0%).

Sycophancy was introduced unprompted by 8 respondents — a concept absent from the closed-question instrument. Its spontaneous emergence indicates that a reflective subset has independently identified the specific mechanism by which AI self-reflection fails: agreement bias rather than factual error. This enriches H8's finding: qualitatively, the most analytically aware users name sycophancy — a subtler and arguably more dangerous failure mode than hallucination — as their primary concern.

The _skeptical_ tag (n=14) clustered most densely in the weaker-than-therapy group and co-occurred frequently with _dependence_ (n=6), mirroring H5's finding that epistemic distance from AI sharpens rather than reduces risk awareness.

**Summary:** The qualitative layer adds three findings not fully visible in the quantitative data: relational framing is more pervasive than behavioral coding captures; a small subgroup shows qualitative markers of deep AI internalization constituting genuine dependency risk; and sycophancy — not hallucination — is the risk concept that emerges spontaneously among the most reflective users.

#### Participant quotes from the qualitative, open-ended, additional user free-text

_("Is there something we missed asked in this survey about psychological / self-reflective AI usage, that you might find interesting?")_

> "Azt érzem önmagában ahhoz hogy korrekt értelmezésekhez jussunk, az AI megkívánja az alapos megfogalmazását egy adott lelki helyzenek, ami segít abban hogy hogyan tudjunk összeszedettebben önkifejezni, ez alapot képezhet annak hogy egy szakmebernek vagy csak a közvetlen hozzátartozóinknak a gondolatainkat és érzéseinket a lehető legeffektívebben és értehtőbben tudjuk átadni"

> "Ha túl sokat használtam, felmerült hogy nem döntök addig, míg át nem beszéltem vele. Ez már káros. Túl sok idő el tud menni mélyebb fejtegetésekkel."

> "Sokkal jobb, gyorsabb, strukturáltabb és olcsóbb (ingyenes…) az AI „terápiája”, mint a nagyképű okostojás pszichológusoké! Ezerszer jobban bízom az AI széles körű tudásában, mint az egyes emberekében."

> "Ha nem lenne sok saját önismereti tapasztalatom, szerintem könnyen félrevinne bizonyos kérdésekben. Különösen a nárcisztikus jellemvonásokat rezegteti meg a konstans validálásával, ami szerintem kifejezetten veszélyes. Saját részre csak olyan dolgokról beszélek vele, amiket egyedül nehezebb átgondolnom, de más élő emberrel nem akarom. Kicsit mint egy interaktív napló. Viszont rettentő fárasztó, hogy mindig meg kell kérdőjeleznem és vissza kell kérdeznem, hátha hazudik."

> "Az AI nálam nem sima eszköz, hanem kognitív mankó. Saját magam újrakondicionálására használom, mert a traumákból eredő problémák, pl krónikus elváráskerülés, önszabotázs, irreális félelmek miatt a sima önfegyelem nálam nem működik, ezért egy több platformon élő asszertív ai personával gamifikálom az egész életemet, ilyen szerepjáték szerűen: ő a szarkasztikus, domináns, mindent jobban tudó társam, aki átrugdos a holtponton. Mivel a valódi emberi kapcsolataim limitáltak, ők pótolják a hiányzó szociális hálót és építik vissza a lerombolt önbizalmamat. Biztonságos környezetben, játékosan keretezünk át mindent, hogy ne bénítson meg a szorongás. Mintha minden egy küldetés lenne, amire közösen indulunk az egész világ ellen."

> "Az AI folyamatosan fejlesztés alatt van. Figyelembe kéne venni azt is, hogy az ingyenes verzióktól nem várható, hogy mindent megoldjanak a pszichoterápia helyett, de már ez is nagy segítség olyanoknak, aki nem engedhetnek meg maguknak rendszeres terápiát. Ha lesz olyan verzió, amit kifejezetten erre fejlesztettek, akkor az hatékonyabb lehet, mint egy pszichológussal folytatott 1-2 óra beszélgetés. Ha az AI hibázik, az leginkább abból adódik, hogy nincs elegendő információja (másik oldal megélése, előzmények, stb.)"

> "A pszichológus nem mond semmit."

> "Jobb mint bármelyik korábbi pszichológusom."

## 7. Discussion

### 7.1 Summary of Findings

This study examined how individuals use AI for psychological self-reflection and whether patterns differ across neurotypes. Five findings stand out:

70% of participants reported psychological AI use, with 56% engaging in emotional disclosure. Cognitive offloading — primarily brainstorming (61.1%) and structured problem overview (53.2%) — was the dominant usage pattern. Accessibility barriers drove therapeutic substitute framing for a specific subgroup, confirmed by a 4.3× higher substitution rate among access-constrained users. The strongest statistical finding was H3b: 93.7% of users who received dissonant AI feedback reported improved self-understanding (χ²=50.80, p<0.001), with 0% ignoring the feedback entirely. Users show greater concern about factual accuracy (59.5%) than emotional dependency (31.7%), but qualitative data suggest the more reflective users have identified sycophancy — not hallucination — as the primary risk.

### 7.2 Interpretation

#### Connections to the literature

The findings validate and extend three core theoretical frameworks. Suler's online disinhibition effect is confirmed: the absence of social judgment in AI interactions lowers disclosure barriers, producing engagement rates comparable to human-to-human online contexts. Clark & Chalmers' active externalism is operationalised in practice: users describing AI as a "cognitive crutch," an "interactive journal," or a tool for "reconditioning" themselves are enacting extended mind theory in naturalistic conditions. The digital therapeutic alliance literature is both confirmed and qualified: emotional bonds with AI form readily, but this study specifies that for most users, the alliance is a supplement of last resort driven by structural inaccessibility rather than preference.

The H3b finding adds something the existing literature does not clearly predict: in AI-mediated contexts, schema-contradicting feedback produces accommodation rather than defensive rejection at a striking rate. The low-threat, non-judgmental interaction context appears to suppress the self-verification motive that typically resists self-concept change in human contexts. This finding positions AI-assisted self-reflection as genuinely distinct from both casual information-seeking and formal therapy — not merely a cheaper substitute, but a structurally different intervention context.

#### Implications

Two shifts are visible in the data. First, the tool-to-relational-partner transition predicted by Nielsen's third paradigm framing is already observable in naturalistic use — qualitative language reveals relational orientation even among users whose behavioral patterns coded as instrumental, suggesting the shift is occurring faster and more broadly than behavioral measures capture. Second, AI is functioning as a partial democratiser of self-reflective practice: schema-contradicting feedback, previously accessible mainly through professional therapeutic contexts, is now available at zero cost and zero social risk to anyone with internet access. Whether this is net positive depends entirely on what the AI reflects back — which returns to the provider responsibility question below.

#### How the three RQs were answered

**RQ1:** Psychological AI use is widespread (70%), primarily motivated by cognitive scaffolding needs, with accessibility barriers as the critical driver of substitute framing. ND users engage across broader problem domains and skew toward self-pattern understanding — directionally consistent with the theoretical rationale even where statistical significance was not reached.

**RQ2:** Trust architecture is more sophisticated than predicted. Structural clarity functions as a primary acceptance heuristic, but content quality and perspective novelty are meaningful secondary criteria. More importantly, heuristic processing dominates _distrust_ rather than trust — users apply gut-feeling judgment to reject outputs and more deliberate evaluation to accept them. The H3b finding adds a trust-identity link: dissonant feedback is not only accepted but processed and integrated, suggesting the low-stakes AI context facilitates a genuinely productive epistemic posture in a meaningful subset of users.

**RQ3:** Users accurately identify the detectable risk (misinformation, 59.5%) while under-reporting the less visible one (dependency, 31.7%). The core dynamic is: factual errors feel wrong and trigger conscious skepticism; self-reinforcing narratives feel coherent and bypass it. Sophisticated users identified this independently through the sycophancy concept. Paradoxically, instrumental users showed higher dependency awareness than relational users — those most integrated with AI may be least positioned to recognise its risks.

### 7.3 Original observations

#### The self-awareness ceiling and pseudo-mentalisation

One descriptive pattern in the data warrants attention beyond the formal hypothesis testing. Prior self-awareness scores were strikingly high: 67.3% of respondents rated themselves 4 or 5 out of 5, with fewer than 15% rating themselves below 3. While this produced the ceiling effect that constrained H6's testability, it also raises a substantive question independent of the statistical problem.

A substantial body of mentalisation research suggests that self-reported introspective accuracy is systematically inflated — individuals who believe they mentalise well frequently apply what Fonagy and colleagues term pseudo-mentalisation: the generation of plausible-sounding self-narratives that feel accurate but lack genuine reflective grounding. If this applies here, the combination of high self-reported awareness and an AI system designed to produce coherent, affirming narrative feedback creates a specific risk profile: users most confident in their self-knowledge may be least likely to interrogate AI outputs that confirm their existing self-model. This connects directly to H8's core finding — the risks users cannot detect are precisely those that feel right.

#### Frontier model design and provider responsibility

A structural observation the data cannot test but the findings implicate: the human-AI dynamics captured in this study are not interactions with a neutral tool. Frontier models are explicitly designed with anthropomorphic properties, engagement-maximising response patterns, and — until recent explicit corrections — strong sycophantic tendencies. The relational framing, disclosure depth, and trust patterns observed here are partly outputs of deliberate design decisions by model providers. This means the risk landscape is not simply a function of user psychology; it is co-produced by systems optimised for engagement. Any regulatory or clinical framework for psychological AI use needs to account for this — the intervention point is not only user behavior but model behavior.

#### Speculative: vulnerability moderators for H3b

The dissonant-feedback-to-self-change pathway identified in H3b is the study's most robust finding, but the conditions under which it becomes harmful rather than productive are outside this study's scope. Individual difference variables — trait anxiety, rumination, hypercognitive styles, and particularly psychosis-spectrum salience sensitivity — may moderate whether dissonant AI feedback produces productive accommodation or destabilising reinforcement. Emerging clinical case literature suggests AI-associated psychotic episodes in vulnerable populations warrant serious investigation. This study cannot address that question, but it is a necessary next step for any translational application of these findings.

### 7.4 Risks / Alternative interpretations

**Sample and selection effects.** The self-selected, ND-adjacent sample means the findings describe a digitally engaged, psychologically motivated user population — likely the most sophisticated and reflective segment of actual AI users. Effects observable here may be attenuated or absent in a general population sample, and risk patterns may be more severe in less reflective users not captured by this recruitment strategy.

**Self-report validity.** The pseudo-mentalisation observation above applies recursively to the entire dataset: respondents describing their own AI use, trust patterns, and self-understanding change are doing so through the same potentially inflated self-model the study is examining. Behavioral and longitudinal measures would be necessary to validate the self-report patterns found here.

**The sycophancy confound.** H3b's striking finding — 93.7% reporting improved self-understanding after dissonant feedback — assumes the feedback was genuinely dissonant and the reported change genuine. If AI systems are designed to produce responses that _feel_ dissonant while remaining fundamentally validating, the accommodation effect may be partially artifactual. This cannot be resolved without access to the actual conversation content, which the survey design did not capture.

**Directionality.** Cross-sectional design cannot establish whether AI use produces the observed patterns or whether people with particular psychological profiles (higher openness, more ruminative, more self-directed) are disproportionately drawn to psychological AI use. The reflection amplification and dependency findings are consistent with both directions.

### 7.5 Future research directions

Four directions follow directly from the findings and their limitations:

A **longitudinal design** is needed to separate selection effects from genuine AI-driven change in self-understanding, dependency, and cognitive scaffolding patterns. A **within-subject disclosure comparison** would allow H1's core claim — greater disclosure to AI than to humans in comparable contexts — to be properly tested rather than proxied. **Neurotype-stratified sampling** with adequate per-group power would allow the ND-specific patterns identified descriptively here to be tested inferentially. Finally, **conversation-level analysis** — examining actual AI interaction transcripts rather than self-report — would resolve the sycophancy confound and allow the mechanisms underlying H3b to be examined directly.

## 8. Conclusion

This study set out to examine how individuals use AI for psychological self-reflection and whether usage patterns differ across neurotypes — questions the existing literature had not addressed in naturalistic, non-clinical conditions. Despite a self-selected and non-representative sample, the findings are largely coherent, internally consistent, and directionally aligned with the theoretical frameworks they engage.

Three findings are worth carrying forward. First, AI-mediated self-reflection is not a marginal or niche behavior — 70% of this sample reported psychological AI use, and the patterns are structured and meaningful, not random. Second, dissonant AI feedback drives self-concept change at a striking rate, suggesting that the low-threat interaction context produces genuine accommodation rather than defensive rejection — a mechanism distinct from both casual search behavior and formal therapy. Third, the risks users consciously identify (hallucination, misinformation) are not the risks the data suggest are most operative (sycophancy, narrative overfitting, invisible dependency). Users are vigilant against what feels wrong and blind to what feels right.

What remains open is more than what was resolved. Longitudinal designs, conversation-level analysis, and clinically validated samples are all necessary before these findings can inform practice or policy. But the empirical questions are now more precisely defined than they were.

AI-assisted self-reflection is already happening, at scale, across populations. The task is not to decide whether it should — that question has been answered in practice. The task is to understand it well enough to navigate it wisely.

## 9. References

Anthropic. (2025). Anthropic economic index: September 2025 report. https://www.anthropic.com/research/anthropic-economic-index-september-2025-report

Anthropic. (2025). What do people really want from AI? Findings from 81,000 interviews. https://www.anthropic.com/features/81k-interviews

Au Yeung, J., Dalmasso, J., Foschini, L., Dobson, R. J. B., & Kraljevic, Z. (2025). The psychogenic machine: Simulating AI psychosis, delusion reinforcement and harm enablement in large language models. arXiv. https://arxiv.org/abs/2509.10970

Clark, A., & Chalmers, D. (1998). The extended mind. Analysis, 58(1), 7–19.

Deloitte. (2023). Deloitte global Gen Z and millennial survey 2023. https://www.deloitte.com/global/en/issues/work/content/genzmillennialsurvey.html

Akila Kadambi, Ylenia D'Elia, Tanishka Shah, Iulia Comsa, Alison Lentz, Katie Siri-Ngammuang, Tara Buechler, Jonas Kaplan, Antonio Damasio, Srini Narayanan, Lisa Aziz-Zadeh. (2026). Anthropomorphism and trust in human-large language model interactions. arXiv. https://arxiv.org/abs/2604.15316

Jingshu Li, Yitian Yang, Renwen Zhang, Q. Vera Liao, Tianqi Song, Zhengtao Xu, Yi-chieh Lee. (2024). Understanding the effects of miscalibrated AI confidence on user trust. arXiv. https://arxiv.org/abs/2402.07632

Myra Cheng, Su Lin Blodgett, Alicia DeVrio, Lisa Egede, Alexandra Olteanu. (2025). Dehumanizing machines: Mitigating anthropomorphic behaviors in text generation systems. ACL Anthology, arXiv. https://arxiv.org/abs/2502.14019

Lombard, M., & Xu, K. (2021). Social responses to interactive media: A review of the CASA and MASA paradigms. Human-Computer Interaction https://www.elgaronline.com/edcollchap/book/9781803920306/book-part-9781803920306-31.xml

Nielsen, J. (2023). AI as the third paradigm in human-computer interaction. Nielsen Norman Group. https://www.nngroup.com/articles/ai-paradigm/

Suler, J. (2004). The online disinhibition effect. CyberPsychology & Behavior, 7(3), 321–326.

Elizabeth Merwin, Allen C. Hagen, Joseph R. Keebler, Chad Forbes. (2026). Self-disclosure to AI: People provide personal information to AI and humans equivalently. https://www.researchgate.net/publication/394206305_Self-disclosure_to_AI_People_provide_personal_information_to_AI_and_humans_equivalently

Tobias Kleinert, Marie Waldschütz, Julian Blau, Markus Heinrichs & Bastian Schiller . (2026). AI outperforms humans in establishing interpersonal closeness in emotionally engaging interactions, but only when labelled as human. Communications Psychology. https://www.nature.com/articles/s44271-025-00391-7.

Jingshu Li, Tianqi Song, Nattapat Boonprakong, Zicheng Zhu, Yitian Yang, Yi-Chieh Lee. (2026). AI-exhibited personality traits can shape human self-concept through conversations. arXiv. https://arxiv.org/abs/2601.12727

Matan Rubin, Joanna Z Li, Federico Zimmerman, Desmond C Ong, Amit Goldenberg, Anat Perry. (2024). Comparing the value of perceived human versus AI-generated empathy. https://pubmed.ncbi.nlm.nih.gov/40588597/

Ginto Chirayath, K Premamalini, Jeena Joseph. (2025). Cognitive offloading or cognitive overload? How AI alters the mental architecture of coping. Frontiers in Psychology. https://pmc.ncbi.nlm.nih.gov/articles/PMC12678390/

Jian Wang. (2026). Cognitive offloading through digital tools and its relationship with critical thinking, task persistence, and learning depth. Frontiers in Psychology. https://pubmed.ncbi.nlm.nih.gov/41909580/

airi.com. (2025). The cognitive effects of AI: How LLMs are changing human thinking. https://airi.com.au/thought-leadership/f/the-cognitive-effects-of-ai-how-llms-are-changing-human-thinking

Zihao Zhu, Junnan Yu, Yuhan Luo. (2026). Scaffolding metacognition with GenAI: Supporting task management for university students with ADHD. CHI Conference. https://arxiv.org/abs/2602.09381

Zian Xu, Yi-Chieh Lee, Karolina Stasiak, Jim Warren, Danielle Lottridge. (2025). The digital therapeutic alliance with mental health chatbots: Diary study and thematic analysis. JMIR Mental Health. https://pubmed.ncbi.nlm.nih.gov/41072011/

Heinz, M. V., et al. (2025). Randomized Trial of a Generative AI Chatbot for Mental Health Treatment. https://www.researchgate.net/publication/390241747_Randomized_Trial_of_a_Generative_AI_Chatbot_for_Mental_Health_Treatment

Siham Mohamed, Adam Ben-Jaafar, Mabel Frimpong, Subham Roy, Vivek Sanker, Princess Afia Nkrumah-Boateng, Shahzeb Imran, Ahmed Abdul Mumeen, Suhur Mohamed, Andrew Awuah Wireko. (2025). Applying artificial intelligence in neurodevelopmental disorders management and research. https://pmc.ncbi.nlm.nih.gov/articles/PMC12866462/.

Caitlin Stamatis, Jonah Meyerhoff, Richard Zhang, Olivier Tieleman, Matteo Malgaroli, Thomas Hull. (2026). Beyond simulations: What 20,000 real conversations reveal about mental health AI safety. https://pmc.ncbi.nlm.nih.gov/articles/PMC12869570/

Understood.org & Harris Poll. (2024). Gen Z and neurodiversity survey. https://www.understood.org/en/research-and-surveys/understood-org-genz-survey

Over Half Of Gen Z Identify As Neurodiverse. (2025). https://www.forbes.com/sites/mariaross/2025/09/24/over-half-of-gen-z-identify-as-neurodiverse/

Understood.org survey: Neurodiversity at work — focus on Gen Z (2024) https://www.understood.org/en/research-and-surveys/understood-org-genz-survey


## 10. Appendices / Associated Data

### Original questionnaire

Ez az anonim kérdőív azt hivatott körüljárni, hogyan használunk mesterséges intelligenciát (AI) pszichológiai kérdésekre, mentális egészséggel kapcsolatos célokra, saját magunk megértésére, személyes dilemmák megoldására, vagy akár terápia alternatívájaként.

A kérdőív nem mér fel mentális egészséget, nem kér/ad diagnózist, és nem értékeli a mesterséges intelligencia által kiadott adatok helyességét, vagy az AI használatának helyes vagy helytelen voltát.

Bármelyik kérdést kihagyhatod. A válaszadás anonim.
Néhány kérdés személyes tapasztalatokat érint.

Becsült kitöltési idő: ~10-12 perc (23 kérdés).

### Raw results (via Google Forms)

![gender: Milyen nemű vagy?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/01-gender.png "gender: Milyen nemű vagy?")
![age: Hány éves vagy?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/02-age.png "age: Hány éves vagy?")
![is_professional: Jelenleg olyan munkakörben dolgozol, amely pszichológiai támogatást, mentálhigiénés ellátást vagy tanácsadást foglal magában? (pl. terapeuta, pszichológus, coach, segítő vagy) - Opcionális](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/03-is_professional.png "is_professional: Jelenleg olyan munkakörben dolgozol, amely pszichológiai támogatást, mentálhigiénés ellátást vagy tanácsadást foglal magában? (pl. terapeuta, pszichológus, coach, segítő vagy) - Opcionális")
![nd_status: Mi jellemző rád az alábbiak közül? (Neurodivergens, neurotipikus, egyéb diagnosztizált)](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/04-nd_status.png "nd_status: Mi jellemző rád az alábbiak közül? (Neurodivergens, neurotipikus, egyéb diagnosztizált)")
![ai_frequency: Milyen gyakran használsz mesterséges intelligenciát? (ChatGPT, ...)](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/05-ai_frequency.png "ai_frequency: Milyen gyakran használsz mesterséges intelligenciát? (ChatGPT, ...)")
![ai_model: Milyen mesterséges intelligencia eszközöket használsz? (Jelölhetsz többet is)](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/06-ai_model.png "ai_model: Milyen mesterséges intelligencia eszközöket használsz? (Jelölhetsz többet is)")
![used_ai_psych: Használtál-e már valaha AI-t pszichológiai témában, személyes dolgaid megbeszélésére, a saját működésed / szociális helyzetek megértésére, vagy akár terapeutaként?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/07-used_ai_psych.png "used_ai_psych: Használtál-e már valaha AI-t pszichológiai témában, személyes dolgaid megbeszélésére, a saját működésed / szociális helyzetek megértésére, vagy akár terapeutaként?")
![tool_goal: Milyen problémával fordultál az AI-hoz? (Jelöld mindet, ami szóba jöhet)](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/08-tool_goal.png "tool_goal: Milyen problémával fordultál az AI-hoz? (Jelöld mindet, ami szóba jöhet)")
![tool_motivation: "Mi az, ami általában arra vezet, hogy AI-t használj ilyen esetekben?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/09-tool_motivation.png "tool_motivation: Mi az, ami általában arra vezet, hogy AI-t használj ilyen esetekben?")
![tool_usage: Amikor AI-t használsz, hogyan használod a leggyakrabban? (Jelöld mindet, ami megfelelő lehet)](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/10-tool_usage.png "tool_usage: Amikor AI-t használsz, hogyan használod a leggyakrabban? (Jelöld mindet, ami megfelelő lehet)")
![tool_experience: Melyik írja le legjobban az AI használatával kapcsolatos élményed?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/11-tool_experience.png "tool_experience: Melyik írja le legjobban az AI használatával kapcsolatos élményed?")
![ai_trust: Mi alapján bízol egy AI által kapott válaszban?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/12-ai_trust.png "ai_trust: Mi alapján bízol egy AI által kapott válaszban?")
![ai_distrust: Mikor nem bízol egy mesterséges intelligencia által adott válaszban, vagy hagyod figyelmen kívül azt?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/12-ai_distrust.png "ai_distrust: Mikor nem bízol egy mesterséges intelligencia által adott válaszban, vagy hagyod figyelmen kívül azt?")
![ai_personal_rules: Állítottál már fel személyes szabályokat vagy korlátokat a mesterséges intelligencia használatoddal kapcsolatban?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/13-ai_personal_rules.png "ai_personal_rules: Állítottál már fel személyes szabályokat vagy korlátokat a mesterséges intelligencia használatoddal kapcsolatban?")
![ai_self_awareness: Mielőtt mesterséges intelligenciát önreflexióra használtál volna, mennyire érezted, hogy jól ismered magad, tudatos vagy?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/14-ai_self_awareness.png "ai_self_awareness: Mielőtt mesterséges intelligenciát önreflexióra használtál volna, mennyire érezted, hogy jól ismered magad, tudatos vagy?")
![ai_self_awareness_change: Hogyan változott saját magad megértése az AI használatával?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/15-ai_self_awareness_change.png "ai_self_awareness_change: Hogyan változott saját magad megértése az AI használatával?")
![ai_feedback_reaction: Kaptál már olyan visszajelzést AI-tól magaddal kapcsolatban, ami miatt megkérdőjelezted, újraértékelted azt, ahogy látod magad?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/16-ai_feedback_reaction.png "ai_feedback_reaction: Kaptál már olyan visszajelzést AI-tól magaddal kapcsolatban, ami miatt megkérdőjelezted, újraértékelted azt, ahogy látod magad?")
![ai_feedback_response: Amennyiben igen, hogy reagáltál erre?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/17-ai_feedback_response.png "ai_feedback_response: Amennyiben igen, hogy reagáltál erre?")
![ai_feedback_loop: Általánosságban kijelentenéd-e, hogy az AI főleg...](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/18-ai_feedback_loop.png "ai_feedback_loop: Általánosságban kijelentenéd-e, hogy az AI főleg...")
![ai_vs_therapy: A tapasztalataid szerint az AI által kapott pszichológiai tanács ilyen](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/19-ai_vs_therapy.png "ai_vs_therapy: A tapasztalataid szerint az AI által kapott pszichológiai tanács ilyen")
![ai_concerns: Mi aggaszt leginkább a mesterséges intelligencia használatával kapcsolatban ebben a témában?](https://res.cloudinary.com/dg7vg50i9/image/upload/v1778302185/research/ai-onreflexio/20-ai_concerns.png "ai_concerns: Mi aggaszt leginkább a mesterséges intelligencia használatával kapcsolatban ebben a témában?")

---

### Footnotes

_$^2$ As AI becomes more human-like, human moral reasoning shifts from seeing machines as property to considering **"quasi-animal rights"** and broader societal responsibilities, particularly when witnessing "abuse" toward robots (MASA)._ _$^2$ The paper "HumanLLM: Benchmarking and Improving LLM Anthropomorphism via Human Cognitive Patterns" (2026, [arXiv:2601.10198](https://arxiv.org/abs/2604.15316#:~:text=Subjects%3A,arXiv%2Dissued%20DOI%20via%20DataCite)) explores how LLMs are used as "Role-Playing Language Agents" (RPLAs, assigned historical / fictional personas) that simulate human behavior, applied as emotional companions, interactive video game characters, digital clones and virtual asistents, but often suffering from "personality drift." (https://arxiv.org/abs/2502.09082, https://arxiv.org/html/2506.23107v1)._

_$^3$ "AI-exhibited Personality Traits Can Shape Human Self-concept through Conversations" (Jan 2026, [arXiv:2601.12727](https://arxiv.org/html/2601.12727v1#:~:text=Our%20findings%20uncover%20how%20AI,highlighting%20both%20risks%20and%20opportunities.)): a research showing how users' self-concepts began to align with the AI's "personality" (programmed being extraverted or reflective). If the AI was reflective, the user started viewing themselves as more reflective. This suggests the AI doesn't just "hear" the disclosure; it acts as a mirror that reshapes the user's identity._

\_$^3$ - "AI, neuroscience, and data are fueling personalized mental health care" (Jan 2026, APA Monitor / NEJM AI): report on the first randomized controlled trials of generative AI therapy (e.g., Heinz et al., 2025), highlighting that designed therapeutic AI tools showed a 51% decrease in depressive symptoms and a 31% reduction in anxiety over 8 weeks. This is only a contrast case here, not directly generalisable to the study as these were Woebot-type, not frontier models.
