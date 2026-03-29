# Brand Identity Enforcer

**Stop AI from making every app look the same.**

An open-source skill for AI coding agents that reads your project's design identity and enforces it across all generated UI code. Works with Claude Code, Cursor, Codex CLI, Gemini CLI, GitHub Copilot, and any agent that supports the SKILL.md format.

## The Problem

Every AI coding agent produces the same output:

- Purple-to-blue gradients
- `rounded-2xl shadow-xl` cards
- Inter font, `text-gray-900`
- Generic hero → features grid → CTA layout

Your app has its own design system, its own palette, its own component library. But the AI doesn't know that. It generates from its training distribution, not from your codebase.

## The Solution

This skill teaches your AI agent to **detect, learn, and enforce your project's visual identity**.

```
Your Project Files              Brand Profile              AI Output
─────────────────              ─────────────              ─────────
tailwind.config.ts ──┐
globals.css ─────────┤
.tokens.json ────────┼──→ .brand-identity/profile.md ──→ Code that matches
components/ui/* ─────┤                                    YOUR app
package.json ────────┤
overrides.md ────────┘
```

### Before (generic AI output)
```tsx
<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-4xl mx-auto p-8">
    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
    <div className="mt-6 bg-white rounded-2xl shadow-xl p-6">
```

### After (brand-aware AI output)
```tsx
<Shell>
  <PageHeader title="Settings" />
  <div className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
```

## Features

- **Auto-detection** — Scans tailwind.config, CSS variables, design tokens, existing components, and package.json to build a brand profile
- **Design token aware** — Supports W3C Design Tokens, Tokens Studio, and Style Dictionary formats
- **Multi-framework** — React, Vue, Svelte, Flutter, SwiftUI, vanilla HTML/CSS
- **Component reuse** — Ensures AI uses your existing components instead of reinventing them
- **Design memory** — Remembers design decisions and enforces them across sessions
- **User overrides** — Add explicit brand rules in `.brand-identity/overrides.md`
- **Dark mode aware** — Detects and follows your dark mode strategy
- **Zero config** — Works immediately on any project with a design system

## Installation

### Claude Code (recommended)
```bash
# Install from GitHub
claude skill install github:t0266li/brand-identity-enforcer

# Or manually copy the skill
cp -r .claude/skills/brand-identity-enforcer ~/.claude/skills/
```

### Cursor / VS Code
Copy the `.claude/skills/brand-identity-enforcer/SKILL.md` file into your project's `.cursor/skills/` or `.claude/skills/` directory.

### Manual Installation
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/brand-identity-enforcer.git

# Run the install script
cd brand-identity-enforcer
chmod +x install.sh
./install.sh
```

### Global Installation (all projects)
```bash
./install.sh --global
```

## Usage

Once installed, the skill triggers automatically whenever you ask your AI agent to create, modify, or review UI code.

### First Run
The skill will scan your project and generate `.brand-identity/profile.md`. Review it and commit it to your repo so the whole team benefits.

### Customization
Create `.brand-identity/overrides.md` to add explicit brand rules:

```markdown
# Brand Overrides

- Never use gradients
- Always use border-based elevation, never shadow-xl
- Our brand green is exactly #00A651, not Tailwind green-600
- Use Geist Mono for all numerical data, not just code blocks
- Minimum touch target size: 44x44px
```

### Design Decisions
As you work, the skill tracks design decisions in `.brand-identity/decisions.md`. This creates institutional knowledge that persists across sessions.

## Project Structure

```
brand-identity-enforcer/
├── .claude/skills/brand-identity-enforcer/
│   └── SKILL.md                    # Core skill file
├── references/
│   ├── detection-rules.md          # Detailed parsing rules
│   ├── enforcement-checklist.md    # Full verification checklist
│   └── token-formats.md           # W3C, Tokens Studio, Style Dictionary
├── templates/
│   └── brand-profile-template.md  # Template for brand profiles
├── examples/
│   ├── shadcn-nextjs-profile.md   # Example: Next.js + shadcn/ui
│   ├── vue-vuetify-profile.md     # Example: Vue 3 + Vuetify 3
│   └── flutter-material-profile.md # Example: Flutter + Material 3
├── README.md
├── LICENSE
└── install.sh
```

## Supported Frameworks

| Framework | UI Library | Status |
|-----------|-----------|--------|
| React / Next.js | shadcn/ui, Radix, MUI, Mantine, Chakra | Full support |
| Vue 3 | Vuetify, PrimeVue, custom | Full support |
| Svelte / SvelteKit | Skeleton UI, shadcn-svelte, custom | Full support |
| Flutter | Material 3, Cupertino | Full support |
| SwiftUI | Native | Full support |
| Vanilla HTML/CSS | Any | Full support |
| Angular | Angular Material, PrimeNG | Full support |
| React Native | NativeWind, Tamagui, custom | Full support |

## Supported Token Formats

| Format | File | Status |
|--------|------|--------|
| W3C Design Tokens | `.tokens.json` | Full support |
| Tokens Studio | `tokens.json` | Full support |
| Style Dictionary | `tokens/*.json` + config | Full support |
| Tailwind Config | `tailwind.config.ts` | Full support |
| CSS Custom Properties | `globals.css` | Full support |

## How It Compares

| Feature | frontend-design (Anthropic) | UI/UX Pro Max | interface-design | **brand-identity-enforcer** |
|---------|----------------------------|---------------|------------------|---------------------------|
| Project-specific | No (one aesthetic) | No (static DB) | Partial | **Yes (auto-detects)** |
| Design token aware | No | No | No | **Yes (W3C, Tokens Studio)** |
| Component reuse | No | No | Yes | **Yes** |
| Multi-framework | React only | 10 stacks | React only | **All major frameworks** |
| Design memory | No | No | Yes | **Yes** |
| Auto-detection | No | No | No | **Yes (zero config)** |
| Dark mode aware | No | No | No | **Yes** |

## Contributing

Contributions welcome! Areas where help is needed:

- [ ] More example profiles (Angular, React Native, Astro)
- [ ] Token format parsers for additional tools
- [ ] Integration tests with different AI agents
- [ ] Documentation improvements
- [ ] Translations

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- [Anthropic's frontend-design skill](https://github.com/anthropics/skills) — proved the demand (277K+ installs)
- [Dammyjay93's interface-design](https://github.com/Dammyjay93/interface-design) — pioneered design memory
- [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — showed the scale of the community
- [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/) — standardized the token format
