#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NODE="${MIMO_NODE:-node}"
NPM="${MIMO_NPM:-npm}"
cd "$ROOT"
"$NODE" "$NPM" "$@"
