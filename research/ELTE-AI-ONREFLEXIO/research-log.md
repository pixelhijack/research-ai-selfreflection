# WORKFLOW

standard ETL (Extract, Transform, Load) patterns used in data engineering

1. Keep the pipeline immutable - don't modify the original CSV or converted JSON
2. Create a separate transformation layer with:
   A schema/keys mapping file (external, like your existing keys.json)
   A transformer script that cleans and normalizes the data
3. Handle the parsing issue - I notice the example record has broken quote escaping (the keys and values are mangled). This is a Google Forms CSV export issue.

Create a data transformer that:

Reads the raw JSON
Applies the key mapping
Fixes encoding/quote issues
Outputs a clean JSON ready for LLMs

---

# PROMPTS

## 1.

i will need to clean up a csv file and convert it to json. create a node.js utility script that opens a local csv file provided by a path, converts it to json via the convert-csv-to-json npm package i just added to the package.json, and saves the converted json to a local json file. this will be my pipeline

## 2.

i might need to run this script again and again, so i want to come up with a non-desctructive, immutable pipeline for data cleaning. now i got json as output, but my problem is, the survey csv is from a google form and it exports the data with all the long questions as keys, and in hungarian, which results in a super verbose, messy json (and even csv). what could be a good approach to clean this up and minimalise a bit, to get a much leaner, cleaner result i can feed into an LLM? i would do something like

extract the keys to a map, create a shorthand for each key, and use that shorthand key which would make the document much smaller
not sure where to store the keys map, the same document or externally
let me know if you have a better, more standard approach, i am not skilled in data science and data cleanup, just going after my gut feelings as an engineer.

the huge csv converted json looks something like this as an example record, see how messy it is:

{
""Időbélyeg"": ""2026/01/26 9:55:10 de. CET"",
""Kijelentem": ""Igen",
"hogy elmúltam 18 éves": " szeretnék részt venni a kutatásban"",
"a fenti tájékoztatót elolvastam": ""Férfi"",
"és hozzájárulok": ""35 - 44"",
"hogy válaszaimat kutatáshoz felhasználják."": ""Nem"",
""Milyen nemű vagy?"": ""Nem vagyok neurodivergens / nem tudok ilyesmiről"",
""Hány éves vagy?"": ""Napi szinten"",
""Jelenleg olyan munkakörben dolgozol": ""ChatGPT"",
"amely pszichológiai támogatást": ""Igen"",
"mentálhigiénés ellátást vagy tanácsadást foglal magában? (pl. terapeuta": ""Döntések meghozásában;Teendők",
"pszichológus": " hétköznapi élet megszervezésére;Önmagam",
"coach": " mintázataim megértésére"",
"segítő vagy) - Opcionális"": ""Kíváncsiság;Szeretném jobban",
""Mi jellemző rád az alábbiak közül?"": " strukturáltabban átlátni a kérdést;Nincs időm / lehetőségem szakember segítségére;Gyorsabb megoldás: kevés az időm"",
""Milyen gyakran használsz mesterséges intelligenciát? (ChatGPT": ""Feedbackre",
"...)"": " véleményre a gondolataimról;Ötletelésre",
""Milyen mesterséges intelligencia eszközöket használsz? (Jelölhetsz többet is)"": " brainstorming partnerként;Semleges másodvéleményként;Problémamegoldóként;Mint egy útmutató",
""Használtál-e már valaha AI-t pszichológiai témában": " következő lépések kitalálására"",
"személyes dolgaid megbeszélésére": ""A mesterséges intelligencia által írtakat csak javaslatoknak tekintem",
"a saját működésed / szociális helyzetek megértésére": " nem kész válaszoknak"",
"vagy akár ""terapeutaként""?"": ""Ha strukturáltnak vagy egyértelműnek",
""Milyen problémával fordultál az AI-hoz? (Jelöld mindet": " tisztának tűnik;Ha több lehetőséget mutat be"",
"ami szóba jöhet)"": ""Ha túl általánosnak hangzik;Ha az intuícióm azt mondja",
""Mi az": " hogy valami nem stimmel benne"",
"ami általában arra vezet": ""Nem"",
"hogy AI-t használj ilyen esetekben? (Válassz max hármat)"": ""4. Meglehetősen jól ismerem magam"",
""Amikor AI-t használsz": ""Körülbelül ugyanaz maradt"",
"hogyan használod a leggyakrabban? (Jelöld mindet": ""Nem"",
"ami megfelelő lehet)"": """",
""Melyik írja le legjobban az AI használatával kapcsolatos élményed?"": ""Egyik sem igaz"",
""Mi alapján bízol egy AI által kapott válaszban? (Jelöld az összes megfelelőt)"": ""nem gondoltam ilyenekre / nem tudom"",
""Mikor nem bízol egy mesterséges intelligencia által adott válaszban": ""A túlzott ráhagyatkozás;Félrevezető",
"vagy hagyod figyelmen kívül azt? (Jelöld az összes szóba jöhetőt) "": " fals információk;A gondolkodás készségének elvesztése"",
""Állítottál már fel személyes szabályokat vagy korlátokat a mesterséges intelligencia használatoddal kapcsolatban?"": """",
""Mielőtt mesterséges intelligenciát önreflexióra használtál volna": ""imreta@gmail.com""
},

## 3.

now i have the keys to questions and answer options of the survey, help me
Create a node.js data transformer that:

Reads the raw JSON via a path
Applies the key mapping
Fixes encoding/quote issues
Outputs a clean JSON

node transformer.js ./cleaned.json

## 4.

should i delete ambiguous values from the #file:keys.json ? i see many answers as "Igen", "Nem" or "Egyéb" - this could be misleading for the #file:transformer.js , isn't it? i might want to leave those as is and only transform the unique keys-values?

---

You're absolutely right! This is a critical issue. The current keys.json structure will cause problems because:

Ambiguous values - "Igen", "Nem", "Egyéb" appear multiple times, so the reverse mapping in the transformer will only keep the last occurrence
Wrong mapping target - In a typical Google Forms CSV:
Column headers = Question texts (these should be mapped)
Cell values = Answers respondents chose (these should stay as-is)
You should only map the question column headers, not the answer values. The answer data itself should remain untouched for analysis.

Let me check what you actually need to map by looking at a sample of your CSV structure. Can you share:

The first row (headers) of your original CSV, or
A few keys from the raw survey-source.json
This will tell us if you need to map:

Just questions (Q1, Q2, Q3...)
Or both questions AND their malformed variations
Most likely, you should remove all the Q1a, Q1b, etc. entries and only keep the Q1, Q2, Q3... question mappings, plus timestamp. The actual answer values ("Igen", "Nem", etc.) should appear in your clean output as-is since they're the respondent's data.

---

## 5.

the problem is at the first step, not in the transformer. The convert-csv-to-json library is mangling the CSV during parsing because it's not properly handling:

Commas inside quoted fields (your long question strings contain commas)
Escaped quotes inside fields (like ""terapeutaként"")
Let me propose a validation-first approach with a better CSV parser. Create a new script that validates the conversion quality:

Created validateCsv.js

Now create a better CSV parser that handles quoted fields correctly:

Created csvToJsonProper.js

Perfect! Now you have a better pipeline:

New workflow:

# Step 1: Convert CSV to JSON properly (handles quoted fields)

node csvToJsonProper.js "./your-survey.csv"

# Step 2: Validate the conversion quality

node validateCsv.js "./your-survey.json"

# Step 3: Only if validation passes, transform for mapping

node transformer.js "./your-survey.json"

What changed:

🔧 csvToJsonProper.js - Proper RFC 4180 CSV parser that handles:

Commas inside quoted fields ✅
Escaped quotes ("" → ") ✅
Multi-line fields ✅
🔍 validateCsv.js - Checks for data quality issues:

Detects fragmented headers (sign of bad parsing)
Warns about escaped quotes in keys
Validates key count matches expected questions
Provides clear pass/fail status
Try the new CSV parser first:

This should give you clean headers that the transformer can then work with properly!

## 6.

excellent, i seem to get clean conversion and key mapping now!

ok, as a next step, what i would really like to do is separate standard answers and non-standard, open ended questions. i had most of my answers standard, but at some places i left fields for answer like "Egyéb: ..." where users could phrase their own answers, which turned out to be quite popular, i see a lot of open answers. i have all the question-answer keys collected in #file:all-keys.json , help me suggest an approach where i can separate the open non-standard answers from the cleaned json output (the current end of our pipeline) from my standard pre-formatted answers

---

Great question! You need to distinguish between structured data (predefined choices) and qualitative data (open text responses). Here's the best approach:

Strategy:

Use all-keys.json to identify all valid predefined answers (Q1a, Q2a, etc.)
For each answer in your records, check if it matches a standard option
Separate into:
Standard answers - matches predefined options
Open answers - freeform text, including "Egyéb: ..." responses
Handle multi-select fields where users might pick both standard + "Egyéb"

Perfect! Now you have separateAnswers.js which:

What it does:

✅ Loads all predefined answer options from all-keys.json
✅ Classifies each answer as:
Standard - matches a predefined option exactly
Open - freeform text (including "Egyéb: ..." responses)
Mixed - multi-select with both standard + custom text
✅ Creates two output files:
_.separated.json - Full data with standard/open/mixed separation
_.open-answers.json - Only the qualitative open-ended responses for easy analysis

node separateAnswers.js ./survey-source.clean.json

This gives you clean separation for:

Quantitative analysis → use standard answers
Qualitative analysis → use open answers
Mixed responses → preserved with both parts
