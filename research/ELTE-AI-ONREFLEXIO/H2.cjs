// Kruskal-Wallis requires a library — use 'simple-statistics' in Node:
// npm install simple-statistics
var kruskalTest = require( '@stdlib/stats-kruskal-test' );
const enriched = require('./processed/source-enriched.json');

const ANALYSIS_GROUPS = [
  "diagnosed_nd",
  "suspected_nd",
  "neurotypical",
  "other_psych",
];

// Build one array of scores per group
const freqByGroup = ANALYSIS_GROUPS.map(group =>
  enriched
    .filter(r => r.nd_group === group && r.freq_score !== null)
    .map(r => r.freq_score)
);
/*
freqByGroup: 
[
  [
    5, 4, 3, 3, 1, 4, 5, 4, 4, 4,
    4, 5, 4, 5, 4, 5, 5, 4, 4, 5,
    1, 5, 4, 5, 3, 5, 5, 5, 1, 5,
    4, 3, 5, 4, 5, 3, 5
  ],
  [
    4, 2, 5, 4, 3, 5, 4, 5, 3,
    1, 1, 4, 5, 5, 4, 5, 3, 5,
    5, 4, 2, 5, 5, 4, 4, 5, 4,
    4, 5, 4, 2, 4
  ],
  [
    5, 4, 4, 5, 4, 4, 4, 1, 4, 5,
    5, 5, 2, 5, 5, 5, 5, 5, 5, 4,
    3, 4, 4, 5, 5, 5, 5, 5, 5, 5,
    1, 3, 4, 5, 4, 5, 3, 1, 4, 5,
    5, 3
  ],
  [
    4, 5, 2, 3, 3,
    3, 5, 4, 5
  ]
]

*/

// ss.kruskalWallis expects an array of arrays (one per group)
const out = kruskalTest(freqByGroup[0], freqByGroup[1], freqByGroup[2], freqByGroup[3]);

// This gives you the H value. To get a p-value you need a chi-square
// table with (number_of_groups - 1) degrees of freedom,
// or use a p-value lookup library.
// For 4 groups: df = 3. If H > 7.81, p < 0.05 (significant).
// If H > 11.34, p < 0.01 (more significant).
console.log("Kruskal-Wallis H statistic:", out.print());


/*
out result: 

Kruskal-Wallis H statistic: Kruskal-Wallis Test

Null hypothesis: the medians of all groups are the same

    pValue: 0.4982
    statistic: 2.3755    df: 3

Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/