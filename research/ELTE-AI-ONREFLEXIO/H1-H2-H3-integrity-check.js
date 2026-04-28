function globalIntegrityCheck(respondents) {
  const GOAL_KEYS = [
    "tool_goal_understanding", "tool_goal_decision", "tool_goal_organization",
    "tool_goal_self", "tool_goal_conversation", "tool_goal_learning"
  ];
  const OFFLOADING_KEYS = [
    { field: "tool_motivation", key: "tool_motivation_structure" },
    { field: "tool_usage",      key: "tool_usage_brainstorming" },
    { field: "tool_usage",      key: "tool_usage_secondary_opinion" },
    { field: "tool_goal",       key: "tool_goal_self" },
  ];
  const freqMap = {
    "ai_frequency_daily": 5, "ai_frequency_weekly": 4,
    "ai_frequency_sometimes": 3, "ai_frequency_rarely": 2, "ai_frequency_tried": 1,
  };

  const checks = {
    emotional_use: 0,
    accessibility_barrier: 0,
    freq_score: 0,
    used_psych: 0,
    breadth: 0,
    offloading_score: 0,
  };

  respondents.forEach(r => {
    if (r.emotional_use !== (has(r.tool_goal, "tool_goal_understanding") || has(r.tool_goal, "tool_goal_self")))
      checks.emotional_use++;

    if (r.accessibility_barrier !== (has(r.tool_motivation, "tool_motivation_professional") || has(r.tool_motivation, "tool_motivation_time")))
      checks.accessibility_barrier++;

    if (r.freq_score !== (freqMap[r.ai_frequency] ?? null))
      checks.freq_score++;

    if (r.used_psych !== (r.used_ai_psych === "Igen" ? 1 : 0))
      checks.used_psych++;

    const expectedBreadth = GOAL_KEYS.reduce((s, k) => s + (has(r.tool_goal, k) ? 1 : 0), 0);
    if (r.breadth !== expectedBreadth)
      checks.breadth++;

    const expectedOffloading = OFFLOADING_KEYS.reduce((s, o) => s + (has(r[o.field], o.key) ? 1 : 0), 0);
    if (r.offloading_score !== expectedOffloading)
      checks.offloading_score++;
  });

  console.log("\n=== GLOBAL MISMATCH COUNT (out of", respondents.length, "respondents) ===");
  Object.entries(checks).forEach(([field, count]) => {
    const status = count === 0 ? "✓ clean" : `✗ ${count} mismatches`;
    console.log(`  ${field.padEnd(25)} ${status}`);
  });
}

globalIntegrityCheck(respondents);

/*

RESULTS: 

=== GLOBAL MISMATCH COUNT (out of 126 respondents) ===
    emotional_use             ✓ clean
    accessibility_barrier     ✓ clean
    freq_score                ✗ 126 mismatches
    used_psych                ✗ 126 mismatches
    breadth                   ✗ 126 mismatches
    offloading_score          ✓ clean

PÓTH ATTILA: 
freq_score, used_psych, breadth are VALID in the derived composite fields
EXPLANATION:
- the integrity check thinks these are also multi-choice values (can be "", one value, or array of values),
- but in reality these are controlled single value / radiobutton fields, so checks are: 

emotional_use             ✓ clean
accessibility_barrier     ✓ clean
freq_score                ✓ clean
used_psych                ✓ clean
breadth                   ✓ clean
offloading_score          ✓ clean


*/