# AI for self-reflection: a snowball sampling study of self-directed psychological use across neurotypes _(v1.0 long)_

## _Póth Attila research survey for ELTE Computational and Cognitive Neuroscience MSc_

## 1. Abstract

AI is already being used for psychological self-reflection, at scale, across demographic groups, and largely outside any clinical or regulatory framework. The question worth asking is not whether this is happening — it is — but what psychological mechanisms it activates, who uses it and how, and where its structural properties create risks that users themselves may not recognise.

This snowball sampling cross-sectional study (n=126, Hungarian-speaking, self-selected) examined patterns of self-directed psychological AI use across neurotypes, combining quantitative hypothesis testing with qualitative free-text analysis. Seventy percent of participants reported using AI for psychological purposes; 56% engaged in emotional disclosure. The strongest finding — and the most theoretically significant — was that 93.7% of users who received dissonant AI feedback reported improved self-understanding, with zero ignoring it entirely, suggesting that the low-threat, non-judgmental interaction context facilitates genuine schema accommodation rather than defensive self-verification. Neurodivergent users demonstrated broader problem-domain engagement and a stronger skew toward self-pattern understanding, consistent with AI functioning as a cognitive scaffold for populations with limited access to traditional support. Therapeutic substitute framing was a minority pattern (12.5%), but concentrated among access-constrained users at a 4.3× higher rate — positioning AI less as a therapy replacement and more as a supplement of last resort.

The risk picture is more complex than public discourse suggests. Users show strong epistemic vigilance about hallucination and factual error, but the data suggest the operative risks are less visible: sycophancy, narrative overfitting, and dependency dynamics that feel coherent rather than wrong. Paradoxically, the users most integrated with AI showed the least awareness of dependency risk — and self-reported mentalisation scores clustered so high as to raise questions about whether confident self-knowledge protects against or amplifies AI-mediated narrative reinforcement.

AI-assisted self-reflection is neither a therapy substitute nor a mere productivity tool. It occupies a structurally distinct space — more accessible than therapy, more psychologically active than search, and more shaped by deliberate provider design choices than most users recognise. Understanding this space rigorously — its mechanisms, its population-level variation, and its failure modes — is a prerequisite for both ethical deployment and effective regulation. The alternative, treating AI psychological use as either categorically beneficial or categorically dangerous, forecloses the empirical questions before they are asked.

## 2. Introduction

### 2.1 Problem framing

While the early years AI was predominantly used by technical people for professional goals, based on recent reports the trend is shifting and AI usage now started to take over for personal reasons. ([Anthropic report](https://www.anthropic.com/research/anthropic-economic-index-september-2025-report) [Tenet](https://www.wearetenet.com/blog/ai-usage-statistics)) This is a usual learning curve: after the tech-savvy early adopters, a new technology goes widespread. Anthropic in a 81 000 person sample representative global study ([Anthropic 81k study](https://www.anthropic.com/features/81k-interviews)) ([Self-disclosure to AI: People provide personal information to AI and humans equivalently](https://www.sciencedirect.com/science/article/pii/S2949882125000647#:~:text=This%20study%20examined%20how%20participants%20chose%20between,thought%20to%20be%20analyzed%20by%20an%20AI%2C)) explored what people really expects from AI. One of the leading drives was "personal transformation": mental well-being, self-discovery. Based on multiple independent studies, generative AI for companionship and therapy-substitute became the number one use case. 

### 2.2 Gap

AI adoption now divides professionals all over the world and sparks heated debates between the "skeptics / alarmists / doomsdayers" versus the "utopists / optimists / the hype" *(intentionally characterised here for the discourse, without taking sides)*. While there are many research on the subject of AI usage, studies usually focus on task-oriented AI use and clinical tools. Also, most of the interpretations either fall to express the downsides and dangers of using AI or, on the other hand, originate from the biggest players of the industry (Anthropic, OpenAI) which omits these and paint a positive-opinionated picture for obvious reasons. What is missing: naturalistic self-reflective use.

### 2.3 Why it matters? My angle

Even the most pessimist scenarios don't argue that AI is becoming a commodity in a lightning speed, just like electricity, telecommunication or the internet did. The reason why the discussions around AI are so heated and controversial is that (just as other commodities), AI could be used for several intents, thus it is a double-edged sword. Two main paradigms are emerging recently: AI as replacement for human skills (automation) versus AI as augmentation (used as a tool).

During my exploration of the subject of AI usage, I wanted to stay away from either side of the AI-debate to avoid judgements and observe users as they are.

My perspective was a researcher's neutral curiosity, how AI is trusted and used by:

- general AI users (as a contextual baseline)
- neurodivergent users (as an alternative based on a distinct group, by lived experience)
- therapists / psychology professionals (as optional extension of the dataset).

The study is intentionally exploratory in parts and multi-perspective: epistemic level was pre-committed, but I wanted to leave sub-group comparison and how prominent attitudes / themes to become visible during the data analysis and hypothesis testing.

(For simplicity, I use usual abbreviations at some points for neurodivergents as ND, neurotypicals as NT.)
## 3. Theoretical Background / Literature Review

For the ease of overview on the topics AI usage for self-reflection covers, four main areas were identified for this study: human-AI interactions, self-disclosure online, cognitive offloading & the extended mind and mental health tools. Each will be discussed and summarised how they overarch the main research questions and the existing research gap.

### 3.1 Human–AI Interaction (HAI)

Human-AI Interaction (HAI) is a field which studies how people perceive, anthropomorphise and emotionally respond to AI systems, bridging the gap between computer science and cognitive neuroscience. In general, a human-AI interaction is not just "using software", but it is a social event where the brain's social circuits are "hijacked" by linguistic cues (warmth, empathy, first-person language). The field raises several questions recently with the steep rise of LLMs, for example whether anthropomorphism is a design trick or an emergent human bias, or if relational framing increase effectiveness or dependency, thus emotional AI should simulate empathy or stay being as a mere instrument rather than a social actor.

#### Common findings

- The classical paradigm is represented by the Computers Are Social Actors (CASA) model which is handled as the gold standard for explaining why we treat machines socially as people even when we know they are machines.
- A newer update and extension of this is the Media Are Social Actors (MASA), a theoretical framework by Lombard & Xu (2021), where authors suggest that humans continue to apply social norms and scripts to a wide range of modern technologies, including social robots and smartphones, treating them as social actors rather than mere tools. As AI becomes more human-like, human moral reasoning shifts from seeing machines as property to considering **"quasi-animal rights"** and broader societal responsibilities, particularly when witnessing "abuse" toward robots.
- In a 2023 study, Nielsen argues that LLMs represent a "Third Paradigm", where the interface is no longer a tool you command, but a collaborator we negotiate with (Nielsen, 2023).
- In "Anthropomorphism and Trust in Human-Large Language Model Interactions" (2026, [arXiv:2604.15316](https://arxiv.org/abs/2604.15316#:~:text=Subjects%3A,arXiv%2Dissued%20DOI%20via%20DataCite)) is a large-scale study (2000+ interactions), which suggests that if the AI shows cognitive empathy (explaining _why_ it understands you), users move from seeing it as a "tool" to a "relational partner," lowering the barrier for disclosure.
- The paper "HumanLLM: Benchmarking and Improving LLM Anthropomorphism via Human Cognitive Patterns" (2026, [arXiv:2601.10198](https://arxiv.org/abs/2604.15316#:~:text=Subjects%3A,arXiv%2Dissued%20DOI%20via%20DataCite)) explores how LLMs are used as "Role-Playing Language Agents" (RPLAs, assigned historical / fictional personas) that simulate human behavior, applied as emotional companions, interactive video game characters, digital clones and virtual asistents, but often suffering from "personality drift." (https://arxiv.org/abs/2502.09082, https://arxiv.org/html/2506.23107v1)
- "Understanding the Effects of Miscalibrated AI Confidence on User Trust" (2024/2025, [arXiv:2402.07632](https://arxiv.org/html/2402.07632v4#:~:text=To%20understand%20the%20effects%20of,difficult%20for%20users%20to%20detect.)): users (especially if in a vulnerable state) struggle to detect when an AI is "wrong but confident." This leads to over-trust, where the user stops checking the AI’s work.
- "Dehumanizing Machines: Mitigating Anthropomorphic Behaviors in Text Generation Systems" (2025), ACL Anthology: a critical look on how the smallest linguistic cues (like the AI using first-person pronouns "I", "me") trigger social cognition pathways and empathy in the human brain, leading to more disclosure.

### 3.2 Self-Disclosure Online

Human social cognition is hardwired to reciprocity: even if an artificial actor like an AI is "opening up", the human will feel a psychological obligation or comfort to somewhat mirror it and do the same. There are several social debates around questions like whether online disclosure improves well-being at all, or just reinforce rumination; or if anonymity is our basic privacy right and protects the self, or destabilising and propagate bullying and harassment. 

#### Common findings

- John Suler’s foundational research identifies the **online disinhibition effect** as a psychological phenomenon where individuals act more impulsively or intensely on the internet than in person (Suler, 2004), lowering social barriers and leading to either benign kindness or toxic aggression.
- A very recent study of "Self-disclosure to AI: People provide personal information to AI and humans equivalently" (April 2026, [ResearchGate](https://www.researchgate.net/publication/394206305_Self-disclosure_to_AI_People_provide_personal_information_to_AI_and_humans_equivalently)). Key finding: people are just as likely to disclose personal information to an AI as to a human researcher. In fact, the barrier to expose private feelings is not higher in case of an AI but the lack of judgement just makes it lower.
- "AI Outperformed Humans at Emotional Connections—But Only When People Thought It Was Human" (Feb 2026, [Communications Psychology](https://thedebrief.org/ai-outperformed-humans-at-emotional-connections-but-only-when-people-thought-it-was-human-study-finds/#:~:text=%E2%80%9CAI%2Dgenerated%20content%20outperformed%20human,talk%20interactions%2C%E2%80%9D%20researchers%20report.)): an experimental study describing how AI actually outperformed humans in creating feelings of closeness during "deep-talk" sessions because the AI could provide consistent, high-level emotional disclosure without the "social risk" (fear of rejection) humans feel (which especially prominent in neurodivergency in the form of RSD).
- "AI-exhibited Personality Traits Can Shape Human Self-concept through Conversations" (Jan 2026, [arXiv:2601.12727](https://arxiv.org/html/2601.12727v1#:~:text=Our%20findings%20uncover%20how%20AI,highlighting%20both%20risks%20and%20opportunities.)): a research showing how users' self-concepts began to align with the AI's "personality" (programmed being extraverted or reflective). If the AI was reflective, the user started viewing themselves as more reflective. This suggests the AI doesn't just "hear" the disclosure; it acts as a mirror that reshapes the user's identity.
- "Comparing the value of perceived human versus AI-generated empathy" (2024, [PubMed / Nature](<https://pubmed.ncbi.nlm.nih.gov/40588597/#:~:text=We%20conducted%20nine%20studies%20(n,%2C%20than%20AI%2Dattributed%20ones.)>)). A study on "anti-AI bias": while AI produces more _objectively_ supportive text, users often rate it lower if they **know** it’s AI. However, this bias is "dampened" during long-term use.

### 3.3 Cognitive offloading & the extended mind

For frequent users, AI does not act only as a "chat partner", but easily transition to something as a functional part of the human neural architecture, a metacognitive scaffold, a tool that helps the brain "think about thinking", or an "external brain" to which they can offload decisions, dilemmas, feelings to explain. Internal debates emerge around questions like whether offloading reduce cognitive ability (memory, learning, problem-solving, socialising) long-term, or does it rather free resources for higher-level thinking

#### Common findings

- In their philisophical paper "The Extended Mind: Active Externalism and Cognitive Systems", Andy Clark and David Chalmers propose the theory of _active externalism_, which suggests that the human mind is not confined to the physical boundaries of the skull. They argue that when individuals use external tools - such as notebooks, calculators, or computers - to perform tasks they would otherwise do mentally, those objects become functional parts of their cognitive processes.
- "Cognitive offloading or cognitive overload? How AI alters the mental architecture of coping" (2025, [Frontiers in Psychology](https://www.researchgate.net/publication/397845677_Cognitive_offloading_or_cognitive_overload_How_AI_alters_the_mental_architecture_of_coping#:~:text=it%20demonstrates%20the%20double%2Dsidedness,human%20resilience.)): AI facilitates problem-focused adaptive coping by minimising cognitive load associated with self-monitoring, but if the AI labels our feelings for us ("You seem anxious") then we stop doing the internal work and rely more and more on it as an external validator.
- "Cognitive offloading through digital tools and its relationship with critical thinking, task persistence, and learning depth" (2026, [Frontiers in Psychology](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1781101/full#:~:text=Drawing%20on%20social%20cognitive%20theory,offloading%20to%20these%20learning%20outcomes.)): when digital tools are used as scaffolds (supporting the process) rather than substitutes (doing the final task), users feel more capable of handling complex thoughts because the tool manages the "structural" load.
- "The Cognitive Effects of AI: How LLMs Are Changing Human Thinking" (Sept 2025, [AIRI / MIT Media Lab findings](https://www.thealgorithmicbridge.com/p/what-the-studies-say-about-how-ai#:~:text=But%20the%20pattern%20across%20studies,can%20maintain%20or%20increase%20engagement.)): this summary of EEG-based research on brain activity during AI-assisted writing and reflection finds that AI behaves like a creativity exoskeleton - it can help you move further, but if you never walk without it, your own muscles atrophy
- "Scaffolding Metacognition with GenAI: Supporting Task Management for University Students with ADHD" (2026, [CHI Conference / arXiv](https://arxiv.org/html/2602.09381v1#:~:text=Drawing%20on%20these%20findings%2C%20we,for%20both%20research%20and%20practice.)): Specific research on how Generative AI helps "breaking down" large, abstract emotional or cognitive tasks into small, manageable steps—a process called "Cognitive Scaffolding."

### 3.4 Digital tools for mental health

Traditional therapy has a "treatment gap": many people cannot afford the costs. AI might fill this gap by providing accessibility shortcuts and immediate feedback, which could be particularly effective for neurodivergent users who require instant, non-judgmental and many times 24/7 scaffolding but need to wait sometimes for years for a single diagnosis, which is not even providing much help beyond some certainty. At the same time, AI also could become a huge trap with misinformation (self-diagnosis) and enforcing users' confirmation biases, so we must distinguish between "designed" therapeutic AI (with safeguards) and the "organic" use of general frontier models (this survey captured the latter). Internal debates pushing questions like whether chatbots are ethical for vulnerable populations at all (principle of "nil nocere": what if it helps 9 user but reinforcing self-hurting behaviour for the 10th?); or what are the healthy boundaries of a software, does simulated empathy mislead users; or if AI can or should replace therapists?

#### Common findings

- "_The Digital Therapeutic Alliance With Mental Health Chatbots: Diary Study and Thematic Analysis"_ (2025, JMIR Mental Health): a 4-week longitudinal study examining how users build emotional bonds with chatbots (named Woebot and Wysa). Users develop a "digital therapeutic alliance" that mirrors the human therapeutic bond, which was not dependent on the user's initial mental health status, but on the "alignment" between the user's style and the AI's persona.
- "AI, neuroscience, and data are fueling personalized mental health care" (Jan 2026, APA Monitor / NEJM AI): report on the first randomized controlled trials of generative AI therapy (e.g., Heinz et al., 2025), highlighting that generative AI tools showed a 51% decrease in depressive symptoms and a 31% reduction in anxiety over 8 weeks.
- "Applying artificial intelligence in neurodevelopmental disorders management and research" (2025/2026, PMC / Frontiers): a research on how AI platforms reduce impulsivity in ADHD patients more effectively than some therapist-guided CBT. AI agents provide "real-time reinforcement" that humans cannot. For neurodivergent individuals, the instant and 24/7 available feedback loop of an AI helps bridge the gap between an emotion and a coping strategy.
- "Beyond Simulations: What 20,000 Real Conversations Reveal About Mental Health AI Safety" (Jan 2026, PMC): an "ecological audit" of actual human-AI therapy conversations, stating that while general-purpose LLMs (like standard ChatGPT) have improved, they still fail roughly **0.38%** of the time in high-risk scenarios (like crisis disclosure), sometimes reinforcing maladaptive behaviors or hallucinating psychological advice.

### 3.5 Literature / gap synthesis


Human-AI interactions showed how humans are evolutionarily "wired" to treat AI socially (CASA/MASA - first pillar). Our social wiring leads to deep **self-disclosure online**, because the "social risk" is zero (second pillar). Most studies around online self-disclosure yet are human-to-human, long-term AI-specific disclosure is not much covered. Online disclosure allows the AI to act as **metacognitive scaffold**, offloading the "mental heavy lifting" of organising one's life (third pillar). A generic impression is that most research about cognitive offloading predates LLMs by proving its negatively disrupting effects, while positives are harder to measure. For many (especially the neurodivergent population), cognitive offloading might results in a functional **therapeutic substitution**, though it carries high-tech risks. Studies usually try to track purpose-designed CBT apps and specific tool usage, but not unregulated, spontaneous self-directed AI usage.

All our four pillars of the literature show some common gaps in coverage: they are mostly lab-based, while non-clinical, non tool-specific observations, naturalistic self-reflection use cases, targeting human-AI context are not really analysed. Most research studies task completion, not real-life / existential processing. Neurotype differentiation is also not much distinguished. Long-term cognitive impact / longitudinal studies are also not yet present. 

## 4. Research questions & hypotheses

As a starting point, this snowball sampling study investigates how individuals use AI for psychological self-reflection and whether usage patterns differ across neurotypes. The main research question was then sophisticated and split into three research questions (RQ1, RQ2, RQ3).
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

Because of the many-direction branching rich nature of the questions arised during the design of this research, it is used a snowball sampling approach on a cross-sectional survey. The survey was anonymous (with optional email address field for expressing interest in potentional follow-ups), consisted of 23 questions.

The sample is not representative for the general population, it was self-selected, Hungarian-speaking, digitally engaged, likely over-representing neurodivergents. The survey is meant for showcase purposes only and should be repeated on better-fit sample for more structured and nuanced results. It was posted on multiple channels to gather data: personal Facebook wall, various Facebook groups (Adult A(u)DHD, Neurodivergency groups, AI technical news group), and Hungarian subreddit forums (r/psychology) and resulted in 126 participants filling in it during a 2 weeks period.

### 5.2 Other limitations

**To flag limitations explicitly, beyond the sample mentioned before:**

- Personal AI usage is still it is early phase at the time of this survey and its social view is controversial and quite a taboo. Also, neurodivergency is getting more widely known and even accepted, but stereotypes about ADHD and especially Autism are still extremely strong. Therefore the vulnerability of neurodivergent populations is strong, neurodivergent community by itself will hold a selection bias and are commonly more motivated in self-discovery, AI usage and filling in questionnaires in AI / psychology / neurodivergency topics.
- Lack of clinical validation: as the author has no former clinical / psychological / methodology certification but came from a technical background, the findings were not validated within a professional context.
- Personal attitudes towards LLMs and the whole topic is highly time-sensitive and potentially become outdated extremely quick and potentially age badly as the AI world is shifting in a lightning speed. Any results tracked within this study is a direct reflection of a period while it was conducted and processed (February-May 2026) and subject of changes.

### 5.3 AI disclaimer

To flag explicitly for transparency, AI served not only the subject of this study, but also as a methodological assistant. My challenge was not to generate the study with AI (automation paradigm), but to use LLMs to support the research process (AI as augmentation paradigm). As a system prompt, I set AI to act as a rigorous thinking partner instead of a validator / generator: challenge my reasoning when it's weak, name blindspots, confirmation bias, overclaims or narrative overfitting. LLMs (Claude, Gemini, ChatGPT, Ollama Gemma) were used in literature review and hypothesis testing pipeline implementation. 
## 6. Data analysis & results

### 6.1 Quantitative results

#### Preliminary: sample description

##### Gender and age distribution

Out of the 126 participants, 123 filled in the gender:

- male: 31 (~25.2%)
- female: 88 (~71.5%)
- didn't want to disclose: 4 participants

The participants are primarily in the early-to-mid-adult stages of life, with the **25–34** and **35–44** age groups being equally represented and together accounting for two-thirds of the total sample. The distribution is heavily skewed toward female participants and individuals between the ages of 25 and 44.

| Age Group       | Number of Participants | Percentage |
| --------------- | ---------------------- | ---------- |
| **18 - 24**     | 11                     | **~9%**    |
| **25 - 34**     | 42                     | **~33%**   |
| **35 - 44**     | 42                     | **~33%**   |
| **45 - 54**     | 28                     | **~22%**   |
| **55 - 64**     | 2                      | **~1.5%**  |
| **65 or older** | 1                      | **~0.8%**  |

##### Neurodivergence status distribution

| Neurodivergency Status              | Number of Participants | Percentage |
| ----------------------------------- | ---------------------- | ---------- |
| Neurotypical                        | 42                     | **~33%**   |
| Diagnosed neurodivergent            | 37                     | **~29%**   |
| Suspected neurodivergent            | 32                     | **~25%**   |
| Diagnosed with some other condition | 9                      | **~7%**    |

Based on the dataset, 120 participants answered on the question asking about neurodivergency status, excluded the 6 declined / skipped. Diagnosed neurodivergents represent a significant portion of the dataset, with respondents frequently citing that AI tools like ChatGPT or Gemini help with executive functions and organizing daily life. A large group of users suspect they may be neurodivergent, often using AI to better understand their internal patterns or social interactions.

The sum of suspected and diagnosed neurodivergents are 54%, and while real diagnosed prevalence rates are considered between 5-20%, this outcome quite overlaps with multiple recent studies: ZenBusiness study found 53% of british Gen Z identifies themselves with neurodivergence, Deloitte Global Gen Z and Millennial Survey (2023) found 53% in a global survey, while Understood.org & Harris Poll (2024) found 51%. True prevalence and discussing the implications are out of scope for this study, but it is interesting to imagine a world where neurodivergence is not considered a small minority anymore. ([link](https://www.understood.org/en/research-and-surveys/understood-org-genz-survey), [link](https://www.forbes.com/sites/mariaross/2025/09/24/over-half-of-gen-z-identify-as-neurodiverse/), [link](https://www.greaterbirminghamchambers.com/resource/what-hr-is-being-told-about-neurodiversity-is-wrong-and-it-s-costing-you.html))

##### Professional status distribution

8 out of the 126 participants answered he/she is working as a mental health professional (therapist, psychologist, coach, social worker).

##### AI usage frequency distribution

54 participants (42%) admitted to use AI on a daily basis, 42 weekly (33%), 16 sometimes (12%), 5 rarely (4%), and 9 tried but almost never really using it (7%).

##### Used AI for psychological goals distribution

As a split variable, question "Have you ever used AI in psychology area, discussing your personal things, your internal workflows, social situations, or as a therapist?" which early terminated the questionnaire if answered "no", resulted in 89 participants, 70% of the total, out of which is 66 participants, so ~74% of those who used AI for psychological goals are women.

#### Hypothesis testing — H1

56% of respondents used AI for emotional disclosure purposes. This rate was higher among diagnosed ND respondents (59%) than neurotypicals (52%), and higher among non-professionals than professionals (56.77% vs 50%). Accessibility barriers (not enough time / option to seek professional psychologist) were cited by 38% of all respondents. These patterns are consistent with H1's prediction that AI serves as a low-barrier alternative for emotional disclosure, though no direct comparison to human-disclosure contexts was available in this dataset.

TO NOTES ->
This hypothesis is a posteriori, sadly there wasn't an explicit question like "do you disclose more to AI than to humans in comparable contexts" so we don't have comparative measure, so unfortunately the hypothesis overclaims and only partially testable. What we can test here is only a proxy: whether people report using AI for emotional disclosure at all, and whether accessibility barriers are cited as drivers.

For this, I used derived composite variables (`emotional_use` and `accessibility_barrier`), getting descriptive: what % of respondents show emotional use:
71 person, ~56% of respondents used AI for emotional OR self-pattern understanding.
48 person, ~38% cited accessibility as a driver.

To see if ND respondents show emotional use at a different rate than NT respondents, I cross-tabbed `emotional_use` × `nd_status`:

| Neurodivergency Status              | No  | Emotional use | X% of diagnosed ND respondents used AI for emotional purposes vs % of NT respondents |
| ----------------------------------- | --- | ------------- | ------------------------------------------------------------------------------------ |
| Neurotypical                        | 42  | 22            | ~52%                                                                                 |
| Diagnosed neurodivergent            | 37  | 22            | ~59%                                                                                 |
| Suspected neurodivergent            | 32  | 19            | ~59%                                                                                 |
| Diagnosed with some other condition | 9   | 6             | ~66%                                                                                 |

**Result: emotional use in diagnosed, suspected neurodivergents and other diagnosed are somewhat / significantly higher than in neurotypicals.**

Cross-tab: emotional use × is_professional.
Result:
Out of 8 professionals, 50% used AI for emotional purposes.
Out of 118 non-professionals, 56.77% used AI for emotional purposes.

<- TO NOTES

#### Hypothesis testing — H2

H2 predicted that neurodivergent respondents would demonstrate higher AI use frequency, higher rates of psychological AI use, and broader problem-domain engagement compared to neurotypical respondents, and that this higher engagement would co-occur with lower explicit self-regulatory boundary-setting.

Part A of this hypothesis was not supported. Kruskal-Wallis testing revealed no significant difference in AI use frequency across ND groups (H=2.38, df=3, p=0.498), and Chi-square analysis found no significant group difference in rates of psychological AI use (χ²=0.73, df=3). Descriptive differences were negligible. Notably, neurotypical respondents showed the highest mean frequency score (M=4.17), marginally above diagnosed ND respondents (M=4.05), suggesting that in this sample, general AI engagement does not cluster by neurodivergent status. This null result is likely partly attributable to sampling bias: the survey's subject matter attracted respondents already interested in AI-assisted self-reflection, compressing the variance that might be observable in a general population sample.

Part B showed a more directionally consistent, though informal, pattern. Among respondents who used AI for psychological purposes, ND groups demonstrated broader problem-domain engagement (diagnosed ND: M=2.97, suspected ND: M=2.88) compared to neurotypical respondents (M=2.27), while explicit rule-setting rates remained similarly low across all groups (diagnosed ND: 17.2%, suspected ND: 20.0%, neurotypical: 12.5%). This produced higher engagement-to-regulation ratios in ND groups (3.32 and 3.35 respectively) compared to neurotypicals (2.76), consistent with H2's prediction of an internal contradiction between high engagement and low self-regulatory boundary-setting. However, this ratio is a descriptive heuristic rather than a formal statistical measure, and the group differences do not reach statistical significance. These findings are tentative and should be interpreted with caution given the small and self-selected sample.

#### Hypothesis testing — H3

H3a predicted that users would report using AI primarily for cognitive offloading purposes — structuring thoughts, brainstorming, perspective-seeking, and self-pattern understanding — and that neurodivergent respondents would show a particular skew toward structuring-oriented use.

Overall endorsement of cognitive offloading behaviors was high: 77.8% of respondents endorsed at least one of the four offloading indicators. The most frequently endorsed behavior was using AI as a brainstorming partner (61.1%), followed by seeking a structured overview of a problem (53.2%), understanding one's own patterns (40.5%), and seeking a neutral second opinion (35.7%). This ordering suggests that in this sample, AI is primarily approached as an externalized thinking tool — a scaffold for organizing and extending cognition — rather than as a source of emotional support, which is consistent with H3a's core claim.

Group-level analysis revealed modest but directionally consistent differences. The item showing the clearest gradient across ND groups was 'understanding own patterns' (tool_goal_self): endorsed by 48.6% of diagnosed ND respondents, 43.8% of suspected ND respondents, and 31.0% of neurotypical respondents — a gap of 17.6 percentage points between the diagnosed ND and neurotypical groups. This item is the most explicitly self-reflective of the four indicators and aligns most directly with the theoretical rationale that ND individuals use AI to externalize and structure self-understanding. By contrast, the structured overview item was nearly uniform across groups (59.5%, 53.1%, 52.4%), suggesting this is a general AI use pattern not specific to neurodivergent profiles. Neurotypical respondents showed the highest brainstorming endorsement rate (66.7%), consistent with brainstorming being a general productivity behavior rather than a self-reflection-specific one.

These findings partially support H3a. The overall prevalence of cognitive offloading behaviors is robust, and the self-pattern understanding item shows the predicted ND-skew. However, differences are modest and no statistical testing was applied given the descriptive nature of this analysis. The results should be interpreted as directional signals rather than confirmed group effects.

---

#### H3b compressed version

H3b predicted that receiving dissonant AI feedback would associate with greater self-understanding change. The cross-tabulation strongly confirms this. Among respondents who received challenging feedback (n=32), 93.7% reported improved self-understanding (40.6% significantly, 53.1% somewhat); among those who did not (n=60), 76.7% reported no change. Chi-square analysis confirmed the association (χ²=50.80, df=4, p<0.001), representing the strongest statistical finding in this dataset. Reaction analysis (yes group, n=32) showed 81.3% reflected on the feedback, 43.8% partially integrated it, and critically, 0% ignored it — consistent with Festinger's cognitive dissonance theory and Piaget's accommodation model: schema-contradicting information in a low-threat context produces engagement rather than rejection. H3b is strongly supported.

---

#### H3b long version

H3b predicted that receiving dissonant AI feedback — feedback that contradicted the respondent's existing self-image — would be associated with greater reported self-understanding change compared to receiving no such feedback, consistent with cognitive dissonance theory and Piagetian accommodation models.

The analysis was conducted on n=106 respondents who provided valid responses to both variables (20 excluded due to missing data on the self-change item). The IV (feedback received) was collapsed from three levels to two — 'yes' versus 'no or unsure' — due to the near-identical distribution of the 'no' and 'unsure' groups and to avoid near-zero expected cell counts in the chi-square.

The cross-tabulation produced a striking pattern. Among respondents who reported receiving challenging AI feedback (n=32), 93.7% reported some degree of improved self-understanding: 40.6% reported significant improvement and 53.1% reported partial clarification, with only 6.3% reporting unchanged or negative outcomes. Among respondents who did not receive or could not recall challenging feedback (n=74), 77.0% reported unchanged or worsened self-understanding, with only 23.0% reporting any improvement. Chi-square analysis confirmed this association was highly significant (χ²=50.80, df=2, p<0.001), with one of six expected cell counts falling below 5, which does not materially affect the conclusion given the effect magnitude.

Secondary analysis of the yes group's reactions (n=32) reinforces the finding. The most common response to dissonant feedback was reflection (81.3%), followed by context-dependent engagement (34.4%), partial integration (43.8%), and productive discomfort — uncomfortable but curious (31.3%). Critically, zero respondents reported ignoring the challenging feedback entirely. This reaction profile suggests that when AI delivers schema-contradicting information, users in this sample did not defensively reject it — they engaged with it, tolerated the discomfort, and frequently updated their self-understanding as a result.

H3b is strongly supported. This is the most statistically robust finding in the dataset, and the reaction breakdown provides a plausible mechanism: dissonant feedback leads to changed self-understanding because it is processed rather than dismissed. This aligns with Festinger's cognitive dissonance framework and with Swann's self-verification theory — notably, the data suggest that in AI-mediated contexts, accommodation may be more likely than self-verification, possibly because the low-stakes, non-judgmental nature of AI interaction reduces the defensive motivation to reject threatening self-relevant information.

#### Hypothesis testing — H4

H4 predicted that a subset of users would report using AI as a therapeutic substitute or interim support, driven primarily by accessibility barriers rather than preference for AI over human therapy.

Overall, 26.9% of respondents (n=28) cited inability to access professional support as a driver of their AI use, establishing a meaningful but minority access-barrier subgroup. The dominant positioning of AI relative to therapy across the full sample was complementary (40.4%), followed by weaker (29.8%), unsure (17.3%), and substitute framing — 'similar to' or 'better than' therapy combined — at 12.5%. This distribution suggests that most users in this sample do not approach AI as a therapy replacement.

However, cross-tabulation of access-barrier citation against substitute framing revealed a statistically significant association (χ²=9.05, df=1, p<0.01, one small expected cell noted). Among users who cited professional inaccessibility as a driver, 28.6% endorsed substitute framing — compared to 6.6% among those who did not cite this driver, a 4.3-times difference. This confirms H4's core prediction: when accessibility is the driver, users are substantially more likely to frame AI as therapeutically equivalent rather than merely supplementary.

A competing rationale — that substitute framing reflects preference for AI's directness and structured output rather than access barriers — was not supported. Users who cited structure-seeking as a driver showed virtually identical substitute framing rates to those who did not (12.3% vs 12.8%), ruling out preference for directness as an explanation for substitution positioning.

Secondary analysis by professional status was directionally consistent with predictions: professionals showed higher complementary framing (71.4%) compared to non-professionals (38.5%). However, only seven professionals were present in the sample, making this comparison statistically uninformative. It is reported as directional only.\_

Analysis by neurodivergent status showed that suspected ND respondents cited access barriers most frequently (34.8%), followed by other_psych (37.5%) and neurotypical (28.2%), with diagnosed ND respondents showing the lowest rate (20.7%). The elevated access-barrier rate among suspected ND respondents is notable: without a formal diagnosis, this group may face the greatest barriers to referral pathways and professional support, making AI a more prominent substitute by necessity.

H4 is partially supported. The accessibility-to-substitution pathway is confirmed and statistically significant. The preference-for-directness competing rationale is ruled out. The overall prevalence of substitute framing remains low (12.5%), consistent with AI functioning as a supplement of last resort for a specific subgroup rather than a broad population-level shift away from therapy. The shame and stigma rationale proposed in the hypothesis rationale cannot be separated from the accessibility explanation using self-report data and remains a theoretical possibility.

#### Hypothesis testing — H5

H5 predicted that users would cluster into instrumental framing (AI as tool) versus relational framing (AI as agent/companion), and that these groups would differ in trust patterns, dependency risk awareness, and self-regulatory behavior.

Framing type was operationalized behaviorally to avoid circularity. Relational framing was assigned when a respondent actively sought emotional validation from AI (tool_usage_emotional_support) or reported routinely deferring to AI judgment (tool_experience_follow). Instrumental framing was assigned when a respondent used AI for brainstorming, second opinion, or problem-solving without any relational signal. Respondents meeting neither or mixed criteria were classified as 'mixed.' Concern about emotional dependency was deliberately excluded from the cluster criteria and retained as a dependent variable — its inclusion would have created a tautological test. An alternative psychological-orientation operationalization including dependency concern as a relational criterion was considered and rejected on these grounds, though it produced a near-identical structural pattern on non-circular DVs.

The resulting distribution was: instrumental 57.1% (n=72), relational 23.0% (n=29), mixed 19.8% (n=25). The relational minority framing — nearly one in four respondents — represents a non-trivial subgroup given the tool's ostensibly utilitarian design.

Chi-square analysis across five dependent variables revealed two statistically significant group differences. Concern about over-reliance differed significantly across framing types (χ²=11.73, df=2, p<0.01, no small cells): instrumental users showed the highest over-reliance concern (55.6%), substantially above relational (31.0%) and mixed users (20.0%). Concern about emotional dependency also differed significantly (χ²=13.50, df=2, p<0.01, no small cells), again with instrumental users showing the highest rate (44.4%) versus relational (20.7%) and mixed (8.0%). Both results run counter to the intuitive prediction that relational users would show greater dependency awareness. A plausible interpretation is that instrumental users apply more active metacognitive monitoring precisely because they approach AI deliberately — their concern reflects awareness rather than vulnerability. Relational users may be less likely to conceptualize their AI use as potentially problematic, which itself constitutes a risk signal.

Trust in AI when it confirms existing thinking (trust_agrees_with_me) showed a directional pattern consistent with H5 — relational users scored highest (27.6%) versus instrumental (19.4%) and mixed (4.0%) — but did not reach statistical significance (χ²=5.17, df=2, p=0.075, one small cell). Trust based on confident tone showed significance (χ²=7.09, df=2, p<0.05) with relational users highest at 13.8%, but three of six expected cells fell below 5, making this result unreliable and reported as suggestive only. Rule-setting behavior did not differ significantly across framing types (χ²=4.77, df=2, p>0.05).

H5 is partially supported. The predicted framing-type clusters are identifiable and show meaningful differences on dependency-related outcomes, though the direction of the dependency concern findings was unexpected and warrants cautious interpretation. The absence of significant trust and rule-setting differences suggests that instrumental versus relational orientation may have stronger implications for risk awareness than for epistemic trust calibration or self-regulatory behavior in this sample.

#### Hypothesis testing — H6

H6 predicted that higher prior self-awareness would be associated with more critical engagement with AI feedback, greater likelihood of setting explicit usage boundaries, and more nuanced self-understanding change — reflecting a reflection amplification effect whereby existing introspective capacity potentiates productive AI use.

None of the three tested associations reached statistical significance. Spearman correlation between prior self-awareness (ordinal 1–5) and self-understanding change (ordinal -1 to 2) yielded ρ=-0.135 (t=-1.385, df=104, p=ns), indicating a weak non-significant negative trend — higher prior awareness was marginally associated with less reported change, consistent with a ceiling interpretation rather than amplification. Spearman correlation between prior self-awareness and critical engagement (reflection or integration of challenging feedback) in the subgroup who received dissonant AI feedback (n=32) yielded ρ=0.039 (t=0.211, df=30, p=ns), effectively zero. Chi-square analysis of awareness group against explicit rule-setting showed a directionally consistent pattern — 22.2% of high-awareness respondents set explicit rules versus 7.1% of low-awareness respondents — but did not approach significance (χ²=3.04, df=2, p=ns), with two small expected cells further limiting reliability.

H6 is not supported. Two methodological factors constrain interpretation. First, the prior self-awareness distribution showed a pronounced ceiling effect: 67.3% of respondents rated themselves 4 or 5 out of 5, severely restricting the variance available for correlation. This floor compression would suppress a real relationship even if one existed in a more representative sample. Second, the critical engagement subgroup (n=32) is underpowered for correlation analysis. These limitations mean the null result should be interpreted as inconclusive rather than disconfirmatory — the hypothesis remains theoretically plausible but untestable in this dataset.

Contextual analysis of prior self-awareness by neurodivergent status showed suspected ND respondents reporting the lowest mean awareness (M=3.44) compared to neurotypical (M=3.92), diagnosed ND (M=3.76), and other_psych (M=4.00) respondents. While group differences were modest and not formally tested, the suspected ND finding is consistent with the theoretical rationale that undiagnosed neurodivergence may impede self-knowledge, and warrants investigation in future research with adequate sample sizes per group.

#### Hypothesis testing — H7

H7 predicted that trust in AI responses would be primarily heuristic-based — driven by System 1 cues such as structural clarity and confident tone — rather than content-based evaluation, and that confirmation-seeking would outrank openness to new perspectives as a trust signal.

Trust flag frequency analysis did not support the predicted ranking. The dominant trust criterion was structural clarity (50.0%), consistent with a surface heuristic, but the second-ranked criterion was openness to new perspectives (34.1%) — a content-based, System 2-adjacent signal — followed by presentation of multiple options (27.8%). Confirmation-based trust ('agrees with my existing thinking') ranked fifth at 18.3%, and trust based on confident tone — the purest System 1 heuristic — ranked last at 4.8%. The direct System 1 vs System 2 comparison inverts the predicted order: new perspective trust (34.1%) nearly doubles confirmation trust (18.3%), suggesting that in this sample, AI is trusted more for expanding thinking than for validating it.

Distrust patterns showed the opposite asymmetry. The dominant distrust trigger was gut feeling or intuition (55.6%), followed by oversimplification (47.6%) and excessive generality (46.8%). Respondents thus apply heuristic judgment primarily to _reject_ AI outputs while applying more deliberate criteria to _accept_ them — a pattern more epistemically sophisticated than H7 predicted, and inconsistent with a simple dual-process account in which System 1 dominates both directions.

The pure confirmation heuristic profile — trusting when AI agrees and distrusting when it contradicts simultaneously — was present in only 11.9% of respondents (n=15), representing a small but non-trivial echo-chamber-risk subgroup. Notably, 53.3% of this group also endorsed new perspective trust, compared to 31.5% of non-profile respondents, indicating that confirmation preference coexists with openness to novel information rather than constituting a closed epistemic stance.

H7 is not supported as stated. The data suggest a more nuanced trust architecture: surface structure serves as a primary acceptance heuristic, but content quality and perspective novelty are meaningful secondary criteria. Heuristic processing dominates distrust rather than trust. A revised framing — that AI users apply System 1 judgment as a filter for rejection and System 2 judgment for acceptance — better fits the observed pattern and may warrant formal investigation in future research.

#### Hypothesis testing — H8

H8 predicted that users would report greater concern about AI misinformation and hallucinations than about emotional dependency or over-reliance, challenging the dominant public discourse framing which tends to foreground dependency and human-connection loss as the primary risks of psychological AI use.

Concern frequency analysis across the full sample (n=126) confirmed this prediction. Misleading or false information was the most frequently cited concern at 59.5%, followed by over-reliance (42.9%), loss of human connection (38.9%), and emotional dependency (31.7%). Privacy concern was endorsed by 27.0% of respondents, and 11.9% reported no concerns at all. The gap between misinformation concern (59.5%) and emotional dependency concern (31.7%) is 27.8 percentage points — a substantial margin that holds across the full sample without requiring subgroup analysis.

H8 is confirmed. Users in this sample show greater epistemic vigilance about factual accuracy than anxiety about relational or dependency dynamics. This finding has two interpretations that are not mutually exclusive. The optimistic reading is that widespread exposure to AI error and hallucination discourse has produced a calibrated, skeptical user base that prioritizes information quality over emotional experience. The more cautious reading — consistent with H3b's finding that dissonant AI feedback drives self-concept change, and with confirmation bias literature — is that dependency and narrative overfitting may operate below conscious awareness precisely because they feel coherent rather than erroneous. Users may be alert to the risks they can detect (factual errors, which feel wrong) while remaining blind to the risks they cannot (self-reinforcing narratives, which feel right). If this interpretation holds, the 31.7% emotional dependency concern rate may underestimate actual dependency dynamics in the sample — a limitation that self-report methodology cannot resolve but that warrants longitudinal investigation.

### 6.2 Qualitative Results

Qualitative analysis of free-text responses (n=76 coded entries, 30 open narratives) corroborated, nuanced, and in one case extended the quantitative findings.

The most frequent qualitative tag was 'partner' (n=21), substantially exceeding its quantitative counterpart. While behavioral operationalization in H5 classified 23.0% of respondents as relationally-framed, qualitative data suggest the relational register is considerably more widespread — users describe AI in partnership terms even when their behavioral patterns coded as instrumental. This discrepancy implies that relational orientation toward AI may be better captured through language than through behavioral proxies, and that H5's quantitative framing likely underestimates the prevalence of relational AI engagement.

A high-risk subgroup emerged qualitatively among respondents who rated AI as better than or equal to therapy (n=8). This group showed the highest co-occurrence of partner (87.5%), dependence (75.0%) and emotional engagement (50.0%).

Sycophancy was introduced unprompted as a concern by 8 respondents across framing groups — a concept absent from the closed-question instrument. Its spontaneous emergence indicates that a sophisticated subset of users has independently identified the specific mechanism by which AI self-reflection fails: agreement bias rather than factual error. This enriches H8's finding that misinformation concern dominates quantitatively: the qualitative layer reveals that users who think carefully about AI risk name _sycophancy_ — a subtler and arguably more dangerous failure mode than hallucination — as their primary concern.

The skeptical tag (n=14) clustered most densely in the weaker-than-therapy group (22.6%) and co-occurred frequently with dependence (n=6 co-occurrences), suggesting that users who have consciously evaluated AI against therapy and found it inferior are simultaneously more aware of dependency risk. This mirrors the H5 finding that instrumental users showed higher dependency concern than relational users — epistemic distance from AI appears to sharpen rather than reduce risk awareness.

The qualitative and quantitative layers are largely convergent. The primary addition from qualitative analysis is the following: relational framing might be more pervasive than behavioral coding captures; a small identifiable subgroup shows qualitative markers of deep AI internalization that constitute genuine dependency risk; and sycophancy — not hallucination — is the risk concept that emerges spontaneously among the most reflective users.

#### Quotes from the qualitative, open-ended, additional user free-text _("Is there something we missed asked in this survey about psychological / self-reflective AI usage, that you might find interesting?")_

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

Anthropic. (2025). _Anthropic economic index: September 2025 report._ [https://www.anthropic.com/research/anthropic-economic-index-september-2025-report](https://www.anthropic.com/research/anthropic-economic-index-september-2025-report)

Anthropic. (2025). _What do people really want from AI? Findings from 81,000 interviews._ [https://www.anthropic.com/features/81k-interviews](https://www.anthropic.com/features/81k-interviews)

Au Yeung, J., Dalmasso, J., Foschini, L., Dobson, R. J. B., & Kraljevic, Z. (2025). _The psychogenic machine: Simulating AI psychosis, delusion reinforcement and harm enablement in large language models._ arXiv. [https://arxiv.org/abs/2509.10970](https://arxiv.org/abs/2509.10970)

Cheng, M., Blodgett, S. L., DeVrio, A., Egede, L., & Olteanu, A. (2025). _Dehumanizing machines: Mitigating anthropomorphic behaviors in text generation systems._ ACL Anthology. [https://arxiv.org/abs/2502.14019](https://arxiv.org/abs/2502.14019) 

Chirayath, G., Premamalini, K., & Joseph, J. (2025). _Cognitive offloading or cognitive overload? How AI alters the mental architecture of coping._ _Frontiers in Psychology._ [https://pmc.ncbi.nlm.nih.gov/articles/PMC12678390/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12678390/) 

Clark, A., & Chalmers, D. (1998). The extended mind. _Analysis, 58_(1), 7–19.

Deloitte. (2023). _Deloitte global Gen Z and millennial survey 2023._ [https://www.deloitte.com/global/en/issues/work/content/genzmillennialsurvey.html](https://www.deloitte.com/global/en/issues/work/content/genzmillennialsurvey.html)

Forbes, Maria Ross. (2025). _Over half of Gen Z identify as neurodiverse._ [https://www.forbes.com/sites/mariaross/2025/09/24/over-half-of-gen-z-identify-as-neurodiverse/](https://www.forbes.com/sites/mariaross/2025/09/24/over-half-of-gen-z-identify-as-neurodiverse/) 

Heinz, M. V., Mackin, D., Bhattacharya S., Trudeau B. M. (2025). _Randomized trial of a generative AI chatbot for mental health treatment._ [https://www.researchgate.net/publication/390241747_Randomized_Trial_of_a_Generative_AI_Chatbot_for_Mental_Health_Treatment](https://www.researchgate.net/publication/390241747_Randomized_Trial_of_a_Generative_AI_Chatbot_for_Mental_Health_Treatment) DOI:10.1056/AIoa2400802 

Kadambi, A., D'Elia, Y., Shah, T., Comsa, I., Lentz, A., Siri-Ngammuang, K., Buechler, T., Kaplan, J., Damasio, A., Narayanan, S., & Aziz-Zadeh, L. (2026). _Anthropomorphism and trust in human-large language model interactions._ arXiv. [https://arxiv.org/abs/2604.15316](https://arxiv.org/abs/2604.15316) 

Kleinert, T., Waldschütz, M., Blau, J., Heinrichs, M., & Schiller, B. (2026). AI outperforms humans in establishing interpersonal closeness in emotionally engaging interactions, but only when labelled as human. _Communications Psychology._ [https://www.nature.com/articles/s44271-025-00391-7](https://www.nature.com/articles/s44271-025-00391-7) 

Li, J., Song, T., Boonprakong, N., Zhu, Z., Yang, Y., & Lee, Y.-C. (2026). _AI-exhibited personality traits can shape human self-concept through conversations._ arXiv. [https://arxiv.org/abs/2601.12727](https://arxiv.org/abs/2601.12727) 

Li, J., Yang, Y., Zhang, R., Liao, Q. V., Song, T., Xu, Z., & Lee, Y.-C. (2024). _Understanding the effects of miscalibrated AI confidence on user trust._ arXiv. [https://arxiv.org/abs/2402.07632](https://arxiv.org/abs/2402.07632) ⚠️ _Same — full first names, no APA formatting._

Lombard, M., & Xu, K. (2021). Social responses to interactive media: A review of the CASA and MASA paradigms. _Human-Computer Interaction._ [https://www.elgaronline.com/edcollchap/book/9781803920306/book-part-9781803920306-31.xml](https://www.elgaronline.com/edcollchap/book/9781803920306/book-part-9781803920306-31.xml) 

Merwin, E., Hagen, A. C., Keebler, J. R., & Forbes, C. (2026). _Self-disclosure to AI: People provide personal information to AI and humans equivalently._ [https://www.researchgate.net/publication/394206305_Self-disclosure_to_AI_People_provide_personal_information_to_AI_and_humans_equivalently](https://www.researchgate.net/publication/394206305_Self-disclosure_to_AI_People_provide_personal_information_to_AI_and_humans_equivalently) ⚠️ _Missing journal/venue name and DOI._

Mohamed, S., Ben-Jaafar, A., Frimpong, M., Roy, S., Sanker, V., Nkrumah-Boateng, P. A., Imran, S., Abdul Mumeen, A., Mohamed, S., & Awuah Wireko, A. (2025). _Applying artificial intelligence in neurodevelopmental disorders management and research._ [https://pmc.ncbi.nlm.nih.gov/articles/PMC12866462/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12866462/)  DOI:10.1016/j.chbah.2025.100180

Nielsen, J. (2023). _AI as the third paradigm in human-computer interaction._ Nielsen Norman Group. [https://www.nngroup.com/articles/ai-paradigm/](https://www.nngroup.com/articles/ai-paradigm/)

Rubin, M., Li, J. Z., Zimmerman, F., Ong, D. C., Goldenberg, A., & Perry, A. (2024). Nature Human Behviour. _Comparing the value of perceived human versus AI-generated empathy._ [https://pubmed.ncbi.nlm.nih.gov/40588597/](https://pubmed.ncbi.nlm.nih.gov/40588597/) DOI: 10.1038/s41562-025-02247-w

Stamatis, C., Meyerhoff, J., Zhang, R., Tieleman, O., Malgaroli, M., & Hull, T. (2026). _Beyond simulations: What 20,000 real conversations reveal about mental health AI safety._ [https://pmc.ncbi.nlm.nih.gov/articles/PMC12869570/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12869570/) 

Suler, J. (2004). The online disinhibition effect. _CyberPsychology & Behavior, 7_(3), 321–326.

Understood.org & Harris Poll. (2024). _Gen Z and neurodiversity survey._ [https://www.understood.org/en/research-and-surveys/understood-org-genz-survey](https://www.understood.org/en/research-and-surveys/understood-org-genz-survey)

Wang, J. (2026). _Cognitive offloading through digital tools and its relationship with critical thinking, task persistence, and learning depth._ _Frontiers in Psychology._ [https://pubmed.ncbi.nlm.nih.gov/41909580/](https://pubmed.ncbi.nlm.nih.gov/41909580/) Front Psychol. 2026 Mar 12:17:1781101. DOI: 10.3389/fpsyg.2026.1781101. eCollection 2026.

Xu, Z., Lee, Y.-C., Stasiak, K., Warren, J., & Lottridge, D. (2025). The digital therapeutic alliance with mental health chatbots: Diary study and thematic analysis. _JMIR Mental Health._ [https://pubmed.ncbi.nlm.nih.gov/41072011/](https://pubmed.ncbi.nlm.nih.gov/41072011/) JMIR Ment Health. 2025 Oct 10:12:e76642. DOI: 10.2196/76642.

Zhu, Z., Yu, J., & Luo, Y. (2026). _Scaffolding metacognition with GenAI: Supporting task management for university students with ADHD._ Proceedings of the ACM CHI Conference on Human Factors in Computing Systems. [https://arxiv.org/abs/2602.09381](https://arxiv.org/abs/2602.09381) 

## 10. Appendices / Associated Data

### Original questionnaire

#### _AI és önreflexió:_ Használtál már mesterséges intelligenciát saját magad megértésére, vagy személyes kérdésekre tanácsért?

Ez az anonim kérdőív azt hivatott körüljárni, hogyan használunk mesterséges intelligenciát (AI) pszichológiai kérdésekre, mentális egészséggel kapcsolatos célokra, saját magunk megértésére, személyes dilemmák megoldására, vagy akár terápia alternatívájaként.

A kérdőív nem mér fel mentális egészséget, nem kér/ad diagnózist, és nem értékeli a mesterséges intelligencia által kiadott adatok helyességét, vagy az AI használatának helyes vagy helytelen voltát.

Bármelyik kérdést kihagyhatod. A válaszadás anonim.
Néhány kérdés személyes tapasztalatokat érint.

Becsült kitöltési idő: ~10-12 perc (23 kérdés).

### Google Forms diagrams (raw data, auto-generated by Google)

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
