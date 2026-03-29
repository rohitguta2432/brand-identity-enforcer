#!/usr/bin/env bash
set -euo pipefail

# Brand Identity Enforcer - Installer
# Installs the skill for Claude Code, Cursor, or other SKILL.md-compatible agents.

SKILL_NAME="brand-identity-enforcer"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_SOURCE="$SCRIPT_DIR/.claude/skills/$SKILL_NAME"
REFS_SOURCE="$SCRIPT_DIR/references"
TEMPLATES_SOURCE="$SCRIPT_DIR/templates"
EXAMPLES_SOURCE="$SCRIPT_DIR/examples"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

usage() {
    echo "Usage: ./install.sh [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --global       Install to ~/.claude/skills/ (all projects)"
    echo "  --cursor       Install to .cursor/skills/ (current project)"
    echo "  --project      Install to .claude/skills/ (current project, default)"
    echo "  --path PATH    Install to a custom path"
    echo "  --help         Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./install.sh                    # Install to current project"
    echo "  ./install.sh --global           # Install for all projects"
    echo "  ./install.sh --cursor           # Install for Cursor"
    echo "  ./install.sh --path ~/my-agent/skills/"
}

install_skill() {
    local target_dir="$1"
    local skill_dir="$target_dir/$SKILL_NAME"

    echo -e "${GREEN}Installing $SKILL_NAME...${NC}"

    # Create target directory
    mkdir -p "$skill_dir"
    mkdir -p "$skill_dir/references"
    mkdir -p "$skill_dir/templates"
    mkdir -p "$skill_dir/examples"

    # Copy skill file
    cp "$SKILL_SOURCE/SKILL.md" "$skill_dir/SKILL.md"

    # Copy reference files
    if [ -d "$REFS_SOURCE" ]; then
        cp "$REFS_SOURCE"/*.md "$skill_dir/references/"
    fi

    # Copy templates
    if [ -d "$TEMPLATES_SOURCE" ]; then
        cp "$TEMPLATES_SOURCE"/*.md "$skill_dir/templates/"
    fi

    # Copy examples
    if [ -d "$EXAMPLES_SOURCE" ]; then
        cp "$EXAMPLES_SOURCE"/*.md "$skill_dir/examples/"
    fi

    echo -e "${GREEN}Installed to: $skill_dir${NC}"
    echo ""
    echo "The skill will activate automatically when you work on UI code."
    echo "On first use, it will scan your project and generate a brand profile."
    echo ""
    echo -e "${YELLOW}Tip:${NC} Create .brand-identity/overrides.md to add explicit brand rules."
}

# Parse arguments
TARGET="project"
CUSTOM_PATH=""

while [[ $# -gt 0 ]]; do
    case $1 in
        --global)
            TARGET="global"
            shift
            ;;
        --cursor)
            TARGET="cursor"
            shift
            ;;
        --project)
            TARGET="project"
            shift
            ;;
        --path)
            TARGET="custom"
            CUSTOM_PATH="$2"
            shift 2
            ;;
        --help)
            usage
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            usage
            exit 1
            ;;
    esac
done

# Verify source exists
if [ ! -f "$SKILL_SOURCE/SKILL.md" ]; then
    echo -e "${RED}Error: SKILL.md not found at $SKILL_SOURCE${NC}"
    echo "Make sure you're running this from the brand-identity-enforcer directory."
    exit 1
fi

# Determine target directory
case $TARGET in
    global)
        install_skill "$HOME/.claude/skills"
        ;;
    cursor)
        install_skill ".cursor/skills"
        ;;
    project)
        install_skill ".claude/skills"
        ;;
    custom)
        if [ -z "$CUSTOM_PATH" ]; then
            echo -e "${RED}Error: --path requires a directory argument${NC}"
            exit 1
        fi
        install_skill "$CUSTOM_PATH"
        ;;
esac

echo -e "${GREEN}Done!${NC}"
