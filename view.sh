#!/usr/bin/env bash
set -euo pipefail

# Serve the site locally at http://localhost:1313 with live reload.
hugo server --printI18nWarnings --buildFuture
