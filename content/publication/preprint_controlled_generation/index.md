---
title: 'Controlled Generation of Natural Adversarial Documents for Stealthy Retrieval Poisoning'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Collin Zhang
  - Admin
  - Vitaly Shmatikov

# Author notes (optional)
author_notes:
  - ''
  - ''



date: "2024-01-26T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-10-26T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: "*Preprint*, 2024"
publication_short: ""

abstract: "Recent work showed that retrieval based on embedding similarity (e.g., for retrieval-augmented generation) is vulnerable to poisoning: an adversary can craft malicious documents that are retrieved in response to broad classes of queries. We demonstrate that previous, HotFlip-based techniques produce documents that are very easy to detect using perplexity filtering. Even if generation is constrained to produce low-perplexity text, the resulting documents are recognized as unnatural by LLMs and can be automatically filtered from the retrieval corpus.\n

We design, implement, and evaluate a new controlled generation technique that combines an adversarial objective (embedding similarity) with a \"naturalness\" objective based on soft scores computed using an open-source, surrogate LLM. The resulting adversarial documents (1) cannot be automatically detected using perplexity filtering and/or other LLMs, except at the cost of significant false positives in the retrieval corpus, yet (2) achieve similar poisoning efficacy to easily-detectable documents generated using HotFlip, and (3) are significantly more effective than prior methods for energy-guided generation, such as COLD."
# Summary. An optional shortened abstract.
summary: ""
tags: []
categories: [] #["Machine Learning", "Trustworhy Machine Learning"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org


links:
#- name: Post
#  url: https://uvasrg.github.io/sok-pitfalls-in-evaluating-black-box-attacks/
url_pdf: 'https://arxiv.org/pdf/2410.02163'
url_code: 'https://github.com/collinzrj/adversarial_decoding'
url_dataset: ''
#url_poster: 'files/sok_NDSS.pdf'
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
research: []
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""


# add "### Abstract" in following
---
<style>body {text-align: justify}</style>

