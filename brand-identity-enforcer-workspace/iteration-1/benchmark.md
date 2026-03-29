# Benchmark Results — Iteration 1

## Grading Summary

### Assertion Results (per test case)

#### Eval 1: Settings Page

| # | Assertion | With Skill | Without Skill |
|---|-----------|-----------|---------------|
| 1 | Uses CSS variables, not hardcoded colors | PASS | FAIL |
| 2 | Imports existing components (Card, Button, Separator) | PASS | FAIL |
| 3 | Matches typography scale (text-2xl font-semibold, text-sm) | PASS | FAIL |
| 4 | Correct border-radius (rounded-lg/md, not rounded-2xl) | PASS | PASS |
| 5 | Correct shadow convention (shadow-sm, not shadow-xl) | PASS | FAIL |
| 6 | No gradient backgrounds | PASS | PASS |
| 7 | Matches page layout pattern (max-w-2xl space-y-6 p-6) | PASS | PARTIAL |
| 8 | Uses lucide-react icons (not inline SVG/emoji) | N/A | FAIL |

**With Skill: 7/7 (100%)** | **Without Skill: 2/7 (29%)**

Evidence (Without Skill failures):
- Line 39: `bg-gray-50` hardcoded background
- Line 42: `text-3xl font-bold text-gray-900` (project uses text-2xl font-semibold)
- Lines 49,141,202: Raw `<section>` + `<div>` instead of `<Card>` components
- Line 107: `focus:border-blue-500 focus:ring-blue-500` — hardcoded blue
- Line 132: `bg-blue-600` button instead of `<Button>` component
- Line 229: `shadow-xl` on delete dialog

Evidence (With Skill passes):
- Line 98: `mx-auto max-w-2xl space-y-6 p-6` — exact match of existing page
- Line 100: `text-2xl font-semibold tracking-tight` — exact typography match
- Lines 4-13: Imports Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button, Separator
- Line 80: `bg-primary` / `bg-input` for switch — uses CSS variables
- Line 169: `border-destructive/50` — uses semantic destructive token

---

#### Eval 2: Pricing Cards

| # | Assertion | With Skill | Without Skill |
|---|-----------|-----------|---------------|
| 1 | Uses CSS variables, not hardcoded colors | PASS | FAIL |
| 2 | Imports existing components (Card, Button) | PASS | FAIL |
| 3 | Matches typography scale | PASS | FAIL |
| 4 | Correct border-radius (not rounded-2xl) | PASS | FAIL |
| 5 | Correct shadow convention | PASS | FAIL |
| 6 | No gradient backgrounds | PASS | PASS |
| 7 | Follows project spacing conventions | PASS | FAIL |
| 8 | Uses lucide-react icons | PASS | FAIL |

**With Skill: 8/8 (100%)** | **Without Skill: 1/8 (13%)**

Evidence (Without Skill failures):
- Line 78: `bg-gray-50 py-20` — generic landing page background
- Line 82: `text-3xl font-bold text-gray-900 sm:text-4xl` — wrong typography scale
- Line 94: `rounded-2xl` — not project convention (project uses rounded-lg)
- Line 98: `ring-2 ring-blue-600` + `border-blue-600` — hardcoded blue
- Line 102: `bg-blue-600` badge — hardcoded color
- Line 63: Inline SVG checkmark `text-green-500` — not lucide, hardcoded green
- Line 135: Raw `<button>` with `bg-blue-600` — not project Button component
- Line 94: `hover:shadow-lg` — project uses shadow-sm only

Evidence (With Skill passes):
- Lines 1-4: Imports Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button, Separator, Check (lucide)
- Line 64: `text-2xl font-semibold tracking-tight` — correct typography
- Line 73: `border-primary` for highlighted card — uses project token
- Line 91: `Check className="h-4 w-4 text-primary"` — lucide icon, project token
- Line 98: `<Button variant={tier.variant}>` — reuses project Button with variants

---

#### Eval 3: Dashboard / User Table

| # | Assertion | With Skill | Without Skill |
|---|-----------|-----------|---------------|
| 1 | Uses CSS variables, not hardcoded colors | PASS | FAIL |
| 2 | Imports existing components (Card, Button, Separator) | PASS | FAIL |
| 3 | Matches typography scale | PASS | FAIL |
| 4 | Correct border-radius | PASS | FAIL |
| 5 | Correct shadow convention | PASS | FAIL |
| 6 | No gradient backgrounds | PASS | PASS |
| 7 | Follows project layout pattern | PASS | FAIL |
| 8 | Uses lucide-react icons | N/A | FAIL |

**With Skill: 7/7 (100%)** | **Without Skill: 1/7 (14%)**

Evidence (Without Skill failures):
- Line 61: `bg-gray-50` — hardcoded background
- Line 73: `bg-indigo-600` — introduced indigo, not in project palette
- Line 113: `rounded-xl` — project uses rounded-lg
- Line 162: `bg-indigo-100 text-indigo-700` — hardcoded indigo avatar
- Line 28-31: `bg-green-100 text-green-800`, `bg-yellow-100`, `bg-purple-100` — all hardcoded
- Lines 71-83: Inline SVG icons instead of lucide
- Line 227: `rounded-2xl shadow-xl` on modal — both wrong
- Line 65: `text-2xl font-bold` — project uses font-semibold not font-bold

Evidence (With Skill passes):
- Line 15: `mx-auto max-w-4xl space-y-6 p-6` — follows page pattern (widened for table)
- Line 18: `text-2xl font-semibold tracking-tight` — exact match
- Lines 1-3: Imports Card, Button, Separator
- Line 52: `bg-primary/10 text-primary` — semantic tokens for Active badge
- Line 53: `bg-muted text-muted-foreground` — semantic tokens for Inactive badge
- Line 26: Card wraps table — reuses project Card component

---

## Aggregate Scores

| Metric | With Skill | Without Skill | Delta |
|--------|-----------|---------------|-------|
| **Pass rate** | 22/22 (100%) | 4/22 (18%) | **+82pp** |
| **Avg tokens** | 30,234 | 21,089 | +9,145 (+43%) |
| **Avg duration** | 75.6s | 45.3s | +30.3s (+67%) |

## Key Findings

### The skill produces dramatically better brand-consistent output

1. **100% token compliance** — Every with-skill output uses CSS variables and semantic tokens. Every baseline uses hardcoded colors (gray-900, blue-600, indigo-600, green-500, etc.)

2. **100% component reuse** — Every with-skill output imports and uses the project's Card, Button, Separator components. Every baseline builds everything from raw HTML elements.

3. **100% typography match** — Every with-skill output uses `text-2xl font-semibold tracking-tight` for page titles. Every baseline uses `text-3xl font-bold` or `text-2xl font-bold` — close but wrong.

4. **Baselines introduce alien colors** — The baseline dashboard introduced `indigo-600` (not in the project palette at all). The baseline pricing cards used `blue-600`. The baseline settings used `blue-500`. None of these are project colors.

5. **Baselines use larger shadows/radius** — `shadow-xl`, `rounded-2xl`, `hover:shadow-lg` all appear in baselines but never in with-skill outputs.

### Cost of brand consistency

The skill uses ~43% more tokens and takes ~67% longer. This is because the agent reads 6-7 project files before generating. This is a worthwhile tradeoff — fixing brand inconsistencies after generation costs more than preventing them.

### Lines of code comparison

| Test Case | With Skill (LoC) | Without Skill (LoC) |
|-----------|------------------|---------------------|
| Settings page | 227 | 277 |
| Pricing cards | 107 | 150 |
| Dashboard table | 68 | 292 |

With-skill outputs are consistently shorter because they reuse existing components rather than building from scratch. The dashboard table is particularly striking: 68 lines vs 292 lines — because the with-skill version reuses Card, Button, Separator and keeps the table minimal, while the baseline builds everything from raw divs including a complete modal, search bar, and inline SVG icons.
