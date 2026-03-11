---
title: 'How to Steal Reasoning Without Reasoning Traces'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Admin
  - John X. Morris
  - Vitaly Shmatikov

# Author notes (optional)
author_notes:
  - ''
  - ''



date: "2026-03-11T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-03-11T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: "*Preprint*, 2026"
publication_short: ""

abstract: "Many large language models (LLMs) use reasoning to generate responses but do not reveal their full reasoning traces (a.k.a. chains of thought), instead outputting only final answers and brief reasoning summaries. To demonstrate that hiding reasoning traces does not prevent users from \"stealing\" a model's reasoning capabilities, we introduce trace inversion models that, given only the inputs, answers, and (optionally) reasoning summaries exposed by a target model, generate detailed, synthetic reasoning traces. We show that (1) traces synthesized by trace inversion have high overlap with the ground-truth reasoning traces (when available), and (2) fine-tuning student models on inverted traces substantially improves their reasoning. For example, fine-tuning Qwen-2.5-7B-Instruct on traces inverted from the answers and summaries of GPT-5 mini, a commercial black-box LLM, improves its performance from 56.8% to 77.6% on MATH500 and from 11.7% to 42.3% on JEEBench, compared to fine-tuning on just the answers and summaries."
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
  - name: Tweet
    url: 'https://x.com/tingwei_zhang1/status/2031402380558790857'
url_pdf: 'https://arxiv.org/pdf/2603.07267'
url_code: ''
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

