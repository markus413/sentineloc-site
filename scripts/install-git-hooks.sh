#!/usr/bin/env bash
# scripts/install-git-hooks.sh
#
# Copies the tracked git hooks from scripts/git-hooks/ into the
# local .git/hooks/ directory and makes them executable. Run this
# once after a fresh clone, or any time the hook source under
# scripts/git-hooks/ is updated and you want the new version active.
#
# Why not just check the hooks INTO .git/hooks/: git doesn't track
# .git/. The convention is to keep the canonical hook source under
# version control (scripts/git-hooks/) and have an installer that
# wires it up locally.
#
# Hooks currently shipped:
#   pre-commit — runs gitleaks against the staged index; blocks the
#                commit on any secrets finding. Requires gitleaks
#                installed on PATH (brew install gitleaks).

set -e

REPO_ROOT=$(git rev-parse --show-toplevel)
SRC_DIR="$REPO_ROOT/scripts/git-hooks"
DEST_DIR="$REPO_ROOT/.git/hooks"

if [ ! -d "$SRC_DIR" ]; then
  echo "[install-git-hooks] $SRC_DIR not found — nothing to install" >&2
  exit 1
fi

# Soft-check for gitleaks so the install message is actionable rather
# than just failing at first commit.
if ! command -v gitleaks >/dev/null 2>&1; then
  echo "[install-git-hooks] WARN: gitleaks not on PATH. Install with:" >&2
  echo "  brew install gitleaks      # macOS" >&2
  echo "  apt install gitleaks       # Linux (recent distros)" >&2
  echo "  Otherwise: https://github.com/gitleaks/gitleaks/releases" >&2
fi

for hook in "$SRC_DIR"/*; do
  name=$(basename "$hook")
  cp -v "$hook" "$DEST_DIR/$name"
  chmod +x "$DEST_DIR/$name"
done

echo "[install-git-hooks] done — installed into $DEST_DIR"
