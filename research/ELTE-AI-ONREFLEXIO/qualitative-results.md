# QUALITATIVE ANALYSIS METHOD

There were 4 open ended (free-text) questions additionally to closed questions in the survey,
+1 to cover anything the user wanted to add. These are the question keys (field keys):

"ai_concerns": "Mi aggaszt leginkább a mesterséges intelligencia használatával kapcsolatban ebben a témában? (Opcionális, jelölj bármennyit)",
"ai_model": "Milyen mesterséges intelligencia eszközöket használsz? (Jelölhetsz többet is)",
"tool_goal": "Milyen problémával fordultál az AI-hoz? (Jelöld mindet, ami szóba jöhet)",
"tool_usage": "Amikor AI-t használsz, hogyan használod a leggyakrabban? (Jelöld mindet, ami megfelelő lehet)",
"tool_motivation": "Mi az, ami általában arra vezet, hogy AI-t használj ilyen esetekben? (Válassz max hármat)",
"user_additional": "Opcionális: van valami a mesterséges intelligenciával és az önreflexióval kapcsolatos tapasztalataidban, ami fontosnak tűnik, de nem került szóba?"

For each, i extracted the { id, fieldKey, answer }, and added tags [], and based on the free text fields tagged by stance/valence, topic, function, concern type. After the anonym tagging (to not be biased) i mapped the tags back to the participants' enriched data by id, and also made stats about them. Here are the findings.

# DOMINANT FINDINGS

FREQUENCIES BY TAG

{tag: 'partner', count: 21}
{tag: 'dependence', count: 19}
{tag: 'therapy', count: 18}
{tag: 'introspection', count: 18}
{tag: 'data_processing', count: 17}
{tag: 'skeptical', count: 14}
{tag: 'emotion', count: 11}
{tag: 'clarity', count: 11}
{tag: 'search_focused', count: 9}
{tag: 'copilot', count: 9}
{tag: 'productivity_suite', count: 9}
{tag: 'tool', count: 9}
{tag: 'sycophancy', count: 8}
{tag: 'perplexity', count: 7}
{tag: 'work', count: 7}
{tag: 'concerned', count: 6}
{tag: 'communication', count: 6}
{tag: 'open_source_alternative', count: 5}
{tag: 'social_media_integrated', count: 5}
{tag: 'hallucination', count: 5}
{tag: 'medical', count: 4}
{tag: 'grok', count: 4}
{tag: 'quote', count: 4}
{tag: 'meta_reflection', count: 4}
{tag: 'environmental', count: 3}
{tag: 'privacy', count: 3}
{tag: 'limitations', count: 3}
{tag: 'positive', count: 3}
{tag: 'deepseek', count: 3}
{tag: 'family', count: 3}
{tag: 'enthusiastic', count: 3}

CO-OCCURRENCE MATRIX

        Co-occurrence Matrix (Top 10)
                partner     dependence  therapy     introspect  data_proce  skeptical   emotion     clarity     search_foc  copilot
    -------------------------------------------------------------------------------------------------------------------------------------
    partner     21          3           7           6           0           1           4           4           0           0
    dependence  3           19          2           3           1           6           3           1           0           0
    therapy     7           2           18          6           2           2           4           5           0           0
    introspect  6           3           6           18          1           5           7           5           0           0
    data_proce  0           1           2           1           17          2           1           1           0           0
    skeptical   1           6           2           5           2           14          2           2           0           0
    emotion     4           3           4           7           1           2           11          2           0           0
    clarity     4           1           5           5           1           2           2           11          0           0
    search_foc  0           0           0           0           0           0           0           0           7           0
    copilot     0           0           0           0           0           0           0           0           0           9

Tag frequencies by group "non_professional"
(index)
tag
count
0 'partner' 18
1 'therapy' 17
2 'dependence' 15
3 'introspection' 15
4 'data_processing' 15
5 'skeptical' 12
6 'clarity' 10
7 'tool' 9
8 'copilot' 9
9 'productivity_suite' 9
10 'emotion' 9
11 'search_focused' 7
12 'sycophancy' 7
13 'work' 7
14 'perplexity' 6
15 'communication' 6
16 'quote' 6
17 'concerned' 5
18 'open_source_alternative' 5
19 'social_media_integrated' 5
20 'hallucination' 4
21 'grok' 4
22 'positive' 3
23 'meta_reflection' 3
24 'environmental' 3
25 'deepseek' 3
26 'medical' 3
27 'limitations' 3
28 'prompt_quality_dependency' 2
29 'help_seeking' 2
30 'access' 2
31 'hallucination_confidence' 2
32 'enthusiastic' 2
33 'generic' 2
34 'self_aware' 2
35 'developer_tool' 2
36 'diagnosis' 2
37 'family' 2
38 'journaling' 2
39 'parenting' 2
40 'self_development' 2

Tag frequencies by group "professional":
(index)
tag
count
0 'dependence' 3
1 'skeptical' 2
2 'introspection' 2
3 'partner' 2
4 'search_focused' 2
5 'data_processing' 2
6 'sycophancy' 1
7 'privacy' 1
8 'concerned' 1
9 'hallucination' 1
10 'boundary_violation' 1
11 'big_tech_distrust' 1
12 'disillusionment' 1
13 'enthusiastic' 1
14 'meta_reflection' 1
15 'playful' 1
16 'persona_projection' 1
17 'emotion' 1
18 'boundary_setting' 1
19 'intentional_limitation' 1
20 'emotion_removal' 1
21 'rationality_seeking' 1
22 'agent' 1
23 'perplexity' 1
24 'medical' 1
25 'study' 1
26 'academic' 1
27 'science' 1

Tag frequencies by group freq_score: 5
(index)
tag
count
0 'partner' 14
1 'data_processing' 10
2 'dependence' 9
3 'introspection' 9
4 'search_focused' 8
5 'clarity' 8
6 'skeptical' 7
7 'therapy' 7
8 'perplexity' 6
9 'tool' 6
10 'social_media_integrated' 5
11 'communication' 5
12 'copilot' 4
13 'productivity_suite' 4
14 'grok' 4
15 'medical' 4
16 'emotion' 4
17 'work' 3

Tag frequencies by group freq_score: 4
(index)
tag
count
0 'therapy' 8
1 'dependence' 6
2 'introspection' 5
3 'quote' 5
4 'partner' 4
5 'tool' 3
6 'emotion' 3
7 'sycophancy' 3
8 'skeptical' 3
9 'privacy' 3
10 'open_source_alternative' 3
11 'productivity_suite' 3

Tag frequencies by group freq_score: 3
(index)
tag
count
0 'data_processing' 3
1 'sycophancy' 3
2 'copilot' 2
3 'productivity_suite' 2
4 'emotion' 2
5 'work' 2

Tag frequencies by group freq_score: 2
(index)
tag
count

0 'data_processing' 1
Tag frequencies by group freq_score: 1
pipeline-qualitative.html:9350
(index)
tag
count
prevalence
0 'concerned' 2
1 'dependence' 2

    Tag frequencies by group ai_therapy_label: UNSURE

    (index)
    tag
    count
    prevalence
    0	'data_processing'	7	'38.9%'
    1	'dependence'	3	'16.7%'
    2	'work'	3	'16.7%'
    3	'partner'	3	'16.7%'
    4	'introspection'	2	'11.1%'
    5	'search_focused'	2	'11.1%'

    Tag frequencies by group ai_therapy_label: COMPLEMENTARY
    (index)
    tag
    count
    prevalence
    0	'therapy'	6	'14.3%'
    1	'data_processing'	6	'14.3%'
    2	'copilot'	5	'11.9%'
    3	'productivity_suite'	5	'11.9%'
    4	'introspection'	5	'11.9%'
    5	'skeptical'	5	'11.9%'
    6	'dependence'	5	'11.9%'
    7	'partner'	5	'11.9%'
    8	'clarity'	5	'11.9%'
    9	'meta_reflection'	3	'7.1%'
    10	'sycophancy'	3	'7.1%'
    11	'emotion'	3	'7.1%'
    12	'tool'	3	'7.1%'
    13	'communication'	3	'7.1%'
    14	'perplexity'	2	'4.8%'
    15	'search_focused'	2	'4.8%'
    16	'prompt_quality_dependency'	2	'4.8%'
    17	'help_seeking'	2	'4.8%'
    18	'access'	2	'4.8%'
    19	'privacy'	2	'4.8%'
    20	'hallucination'	2	'4.8%'
    21	'positive'	2	'4.8%'
    22	'self_aware'	2	'4.8%'
    23	'diagnosis'	2	'4.8%'
    24	'work'	2	'4.8%'

    Tag frequencies by group ai_therapy_label: UNSPECIFIED

    (index)
    tag
    count
    prevalence
    0	'productivity_suite'	4	'18.2%'
    1	'search_focused'	3	'13.6%'
    2	'copilot'	3	'13.6%'
    3	'perplexity'	2	'9.1%'


    Tag frequencies by group ai_therapy_label: WEAKER
    (index)
    tag
    count
    prevalence
    0	'skeptical'	7	'22.6%'
    1	'dependence'	5	'16.1%'
    2	'introspection'	5	'16.1%'
    3	'therapy'	5	'16.1%'
    4	'concerned'	4	'12.9%'
    5	'clarity'	4	'12.9%'
    6	'partner'	4	'12.9%'
    7	'tool'	3	'9.7%'
    8	'emotion'	3	'9.7%'
    9	'hallucination'	3	'9.7%'
    10	'open_source_alternative'	3	'9.7%'
    11	'data_processing'	3	'9.7%'
    12	'sycophancy'	3	'9.7%'
    13	'communication'	2	'6.5%'
    14	'environmental'	2	'6.5%'
    15	'perplexity'	2	'6.5%'
    16	'search_focused'	2	'6.5%'
    17	'hallucination_confidence'	2	'6.5%'
    18	'deepseek'	2	'6.5%'
    19	'journaling'	2	'6.5%'
    20	'parenting'	2	'6.5%'
    21	'work'	2	'6.5%'

    Tag frequencies by group ai_therapy_label: SIMILAR
    (index)
    tag
    count
    prevalence
    0	'social_media_integrated'	3	'60.0%'
    1	'grok'	2	'40.0%'
    2	'open_source_alternative'	2	'40.0%'
    3	'introspection'	1	'20.0%'
    4	'partner'	1	'20.0%'
    5	'quote'	1	'20.0%'
    6	'therapy'	1	'20.0%'
    7	'positive'	1	'20.0%'
    8	'articulation_benefit'	1	'20.0%'
    9	'deepseek'	1	'20.0%'

    Tag frequencies by group ai_therapy_label: BETTER_OR_EQUAL
    (index)
    tag
    count
    prevalence
    0	'partner'	7	'87.5%'
    1	'dependence'	6	'75.0%'
    2	'quote'	5	'62.5%'
    3	'introspection'	5	'62.5%'
    4	'therapy'	4	'50.0%'
    5	'emotion'	4	'50.0%'
    6	'decision_paralysis'	2	'25.0%'
    7	'medical'	2	'25.0%'
    8	'enthusiastic'	2	'25.0%'
    9	'limitations'	2	'25.0%'
    10	'tool'	2	'25.0%'

Tag frequencies by group: INSTRUMENTAL
(index)
tag
count
prevalence
0 'therapy' 13 '18.1%'
1 'data_processing' 13 '18.1%'
2 'dependence' 12 '16.7%'
3 'introspection' 11 '15.3%'
4 'partner' 11 '15.3%'
5 'skeptical' 9 '12.5%'
6 'emotion' 8 '11.1%'
7 'clarity' 7 '9.7%'
8 'concerned' 6 '8.3%'
9 'sycophancy' 6 '8.3%'
10 'search_focused' 5 '6.9%'
11 'hallucination' 5 '6.9%'
12 'open_source_alternative' 5 '6.9%'
13 'work' 5 '6.9%'
14 'tool' 4 '5.6%'
15 'perplexity' 4 '5.6%'
16 'communication' 3 '4.2%'
17 'quote' 3 '4.2%'
18 'positive' 3 '4.2%'
19 'environmental' 3 '4.2%'
20 'privacy' 3 '4.2%'
21 'deepseek' 3 '4.2%'
22 'copilot' 3 '4.2%'
23 'productivity_suite' 3 '4.2%'

Tag frequencies by group: MIXED

(index)
tag
count
prevalence
0 'productivity_suite' 4 '16.0%'
1 'search_focused' 3 '12.0%'
2 'copilot' 3 '12.0%'
3 'perplexity' 2 '8.0%'
4 'tool' 2 '8.0%'
5 'communication' 2 '8.0%'
6 'clarity' 2 '8.0%'
7 'skeptical' 2 '8.0%'
8 'study' 1 '4.0%'
9 'joule' 1 '4.0%'
10 'work' 1 '4.0%'
11 'introspection' 1 '4.0%'
12 'source_verification' 1 '4.0%'
13 'communication_improvement' 1 '4.0%'
14 'data_processing' 1 '4.0%'
15 'partner' 1 '4.0%'
16 'sycophancy' 1 '4.0%'
17 'meta_reflection' 1 '4.0%'

Tag frequencies by group: RELATIONAL
(index)
tag
count
prevalence
0 'partner' 9 '31.0%'
1 'dependence' 7 '24.1%'
2 'introspection' 6 '20.7%'
3 'therapy' 5 '17.2%'
4 'quote' 4 '13.8%'
5 'copilot' 3 '10.3%'
6 'skeptical' 3 '10.3%'
7 'grok' 3 '10.3%'
8 'social_media_integrated' 3 '10.3%'
9 'data_processing' 3 '10.3%'
10 'emotion' 3 '10.3%'
11 'tool' 3 '10.3%'
12 'productivity_suite' 2 '6.9%'
13 'medical' 2 '6.9%'
14 'enthusiastic' 2 '6.9%'
15 'clarity' 2 '6.9%'
16 'parenting' 2 '6.9%'
