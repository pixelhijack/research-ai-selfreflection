# AI for self-reflection: snowball sampling survey of self-directed psychological use across neurotypes

> This is a research study by Póth Attila for ELTE Computational and Cognitive Neuroscience MSc and its documentation. The questionnaire was designed and survey conducted February 2026, processed and written March - May 2026, available online to read at [pothattila.hu](https://pothattila.hu/kutatas/ai-onreflexio).

## RESEARCH PAPER

- [original, long, draft](/ELTE-v1-long.md)
- [final, sent for the application, compressed](/ELTE-short.md)

## QUESTIONNAIRE

- [Filled by 126 participants](/questionnaire.md)

## DATA sources and processing pipeline

- Original raw data from Google Form export: [survey-source.csv](/src/survey-source.csv)
- Data converted to JSON to process with JS: [survey-source.json](/src/survey-source.json)
- Original survey keys used to decode csv: [keys.json](/src/keys.json)
- Original survey as free text: [survey-values.md](/src/survey-values.md)
- Data after cleanup: [source-cleaned.json](/processed/source-cleaned.json)
- Data with derived / composite variables: [source-enriched.json](/processed/source-enriched.json)
- Qualitative answers extracted: [qualitative-texts.md](/processed/qualitative-texts.md)
- Qualitative open-ended question answers only: [qualitative-light.json](/processed/qulitative-light.json)
- Qualitative answers tagged: [qualitative.json](/processed/qualitative.json)
- Quantitative derived / composite + qualitative tagging: [source-enriched-tagged.json](/processed/source-enriched-tagged.json)
- any intermediary steps and LLM-assistance left for documentation / showcase purposes intentionally

## Quantitative analysis

- [pipeline-quantitative.html](/pipeline-quantitative.html)

## Quantitative analysis

- [pipeline-qualitative.html](/pipeline-qualitative.html)

## REFERENCES

### Google Forms auto-generated descriptive results

![gender: Milyen nemű vagy?](/img/01-gender.png "gender: Milyen nemű vagy?")
![age: Hány éves vagy?](/img/02-age.png "age: Hány éves vagy?")
![is_professional: Jelenleg olyan munkakörben dolgozol, amely pszichológiai támogatást, mentálhigiénés ellátást vagy tanácsadást foglal magában? (pl. terapeuta, pszichológus, coach, segítő vagy) - Opcionális](/img/03-is_professional.png "is_professional: Jelenleg olyan munkakörben dolgozol, amely pszichológiai támogatást, mentálhigiénés ellátást vagy tanácsadást foglal magában? (pl. terapeuta, pszichológus, coach, segítő vagy) - Opcionális")
![nd_status: Mi jellemző rád az alábbiak közül? (Neurodivergens, neurotipikus, egyéb diagnosztizált)](/img/04-nd_status.png "nd_status: Mi jellemző rád az alábbiak közül? (Neurodivergens, neurotipikus, egyéb diagnosztizált)")
![ai_frequency: Milyen gyakran használsz mesterséges intelligenciát? (ChatGPT, ...)](/img/05-ai_frequency.png "ai_frequency: Milyen gyakran használsz mesterséges intelligenciát? (ChatGPT, ...)")
![ai_model: Milyen mesterséges intelligencia eszközöket használsz? (Jelölhetsz többet is)](/img/06-ai_model.png "ai_model: Milyen mesterséges intelligencia eszközöket használsz? (Jelölhetsz többet is)")
![used_ai_psych: Használtál-e már valaha AI-t pszichológiai témában, személyes dolgaid megbeszélésére, a saját működésed / szociális helyzetek megértésére, vagy akár terapeutaként?](/img/07-used_ai_psych.png "used_ai_psych: Használtál-e már valaha AI-t pszichológiai témában, személyes dolgaid megbeszélésére, a saját működésed / szociális helyzetek megértésére, vagy akár terapeutaként?")
![tool_goal: Milyen problémával fordultál az AI-hoz? (Jelöld mindet, ami szóba jöhet)](/img/08-tool_goal.png "tool_goal: Milyen problémával fordultál az AI-hoz? (Jelöld mindet, ami szóba jöhet)")
![tool_motivation: "Mi az, ami általában arra vezet, hogy AI-t használj ilyen esetekben?](/img/09-tool_motivation.png "tool_motivation: Mi az, ami általában arra vezet, hogy AI-t használj ilyen esetekben?")
![tool_usage: Amikor AI-t használsz, hogyan használod a leggyakrabban? (Jelöld mindet, ami megfelelő lehet)](/img/10-tool_usage.png "tool_usage: Amikor AI-t használsz, hogyan használod a leggyakrabban? (Jelöld mindet, ami megfelelő lehet)")
![tool_experience: Melyik írja le legjobban az AI használatával kapcsolatos élményed?](/img/11-tool_experience.png "tool_experience: Melyik írja le legjobban az AI használatával kapcsolatos élményed?")
![ai_trust: Mi alapján bízol egy AI által kapott válaszban?](/img/12-ai_trust.png "ai_trust: Mi alapján bízol egy AI által kapott válaszban?")
![ai_distrust: Mikor nem bízol egy mesterséges intelligencia által adott válaszban, vagy hagyod figyelmen kívül azt?](/img/12-ai_distrust.png "ai_distrust: Mikor nem bízol egy mesterséges intelligencia által adott válaszban, vagy hagyod figyelmen kívül azt?")
![ai_personal_rules: Állítottál már fel személyes szabályokat vagy korlátokat a mesterséges intelligencia használatoddal kapcsolatban?](/img/13-ai_personal_rules.png "ai_personal_rules: Állítottál már fel személyes szabályokat vagy korlátokat a mesterséges intelligencia használatoddal kapcsolatban?")
![ai_self_awareness: Mielőtt mesterséges intelligenciát önreflexióra használtál volna, mennyire érezted, hogy jól ismered magad, tudatos vagy?](/img/14-ai_self_awareness.png "ai_self_awareness: Mielőtt mesterséges intelligenciát önreflexióra használtál volna, mennyire érezted, hogy jól ismered magad, tudatos vagy?")
![ai_self_awareness_change: Hogyan változott saját magad megértése az AI használatával?](/img/15-ai_self_awareness_change.png "ai_self_awareness_change: Hogyan változott saját magad megértése az AI használatával?")
![ai_feedback_reaction: Kaptál már olyan visszajelzést AI-tól magaddal kapcsolatban, ami miatt megkérdőjelezted, újraértékelted azt, ahogy látod magad?](/img/16-ai_feedback_reaction.png "ai_feedback_reaction: Kaptál már olyan visszajelzést AI-tól magaddal kapcsolatban, ami miatt megkérdőjelezted, újraértékelted azt, ahogy látod magad?")
![ai_feedback_response: Amennyiben igen, hogy reagáltál erre?](/img/17-ai_feedback_response.png "ai_feedback_response: Amennyiben igen, hogy reagáltál erre?")
![ai_feedback_loop: Általánosságban kijelentenéd-e, hogy az AI főleg...](/img/18-ai_feedback_loop.png "ai_feedback_loop: Általánosságban kijelentenéd-e, hogy az AI főleg...")
![ai_vs_therapy: A tapasztalataid szerint az AI által kapott pszichológiai tanács ilyen](/img/19-ai_vs_therapy.png "ai_vs_therapy: A tapasztalataid szerint az AI által kapott pszichológiai tanács ilyen")
![ai_concerns: Mi aggaszt leginkább a mesterséges intelligencia használatával kapcsolatban ebben a témában?](/img/20-ai_concerns.png "ai_concerns: Mi aggaszt leginkább a mesterséges intelligencia használatával kapcsolatban ebben a témában?")
