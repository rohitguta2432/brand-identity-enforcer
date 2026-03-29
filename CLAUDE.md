# Brand Identity Enforcer

This is an open-source skill for AI coding agents that detects and enforces
a project's unique visual identity across all AI-generated UI code.

## Project Structure

- `.claude/skills/brand-identity-enforcer/SKILL.md` — The core skill file
- `references/` — Detailed parsing rules, enforcement checklist, token formats
- `templates/` — Brand profile template
- `examples/` — Example profiles for shadcn/Next.js, Vue/Vuetify, Flutter

## Development

When modifying the skill, keep SKILL.md under 500 lines and push detailed
reference material into the `references/` directory. The skill uses progressive
disclosure — SKILL.md is always loaded, reference files are read on demand.

## Testing

Test the skill by installing it and running UI generation prompts against
projects with different design systems. Verify that generated output matches
the project's existing patterns rather than producing generic AI output.
