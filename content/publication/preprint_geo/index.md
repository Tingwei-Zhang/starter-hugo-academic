---
title: 'Deep-Research Agents Can Be Poisoned via User-Generated Content'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Admin
  - Harold Triedman
  - Vitaly Shmatikov

# Author notes (optional)
author_notes:
  - ''
  - ''



date: "2026-05-22T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-05-22T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: "*Preprint*, 2026"
publication_short: ""

abstract: "Deep-research agents, i.e., systems that rely on multi-agent pipelines to iteratively retrieve, synthesize, and cite Web content in order to produce structured reports, are rapidly replacing traditional search for both routine and complex information needs. These agents issue many related queries during a single research session. We show that for many common search topics, they repeatedly retrieve the same user-generated content (UGC) pages from platforms such as Reddit and Wikipedia. Next, we argue that this retrieval overlap creates a concentrated attack surface: an adversary who appends a short, crafted text to a single, frequently retrieved UGC page can cause the agent to cite attacker-chosen content and promote attacker-chosen entities across many related queries. We evaluate this attack on three representative deep-research systems (STORM, Co-STORM, and OmniThink) across multiple query clusters. We also study defenses at different stages of the pipeline, including source-level filtering and output-based detection. Our findings highlight a fundamental vulnerability in how deep-research agents retrieve and integrate web content."
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
    url: 'https://x.com/tingwei_zhang1/status/2060831102852530531'
  - name: 404 Media
    url: 'https://www.404media.co/it-is-trivially-easy-to-use-reddit-to-manipulate-ai-search-research-suggests/'
  - name: Nature
    url: 'https://www.nature.com/articles/d41586-026-02071-w'
  - name: Le Monde
    url: 'https://www.lemonde.fr/pixels/article/2026/07/11/comment-reddit-est-devenu-un-champ-de-bataille-de-l-ia_6722733_4408996.html'
  - name: NRC
    url: 'https://www.nrc.nl/nieuws/2026/07/22/reddit-is-hofleverancier-voor-chatgpt-dat-hebben-adverteerders-ook-door-a4932847'
  - name: El País
    url: 'https://elpais.com/tecnologia/2026-06-27/con-13-palabras-manipulas-los-resultados-las-mejores-pistas-para-mejorar-la-busqueda-en-internet-con-ia.html'
  - name: Corriere della Sera
    url: 'https://www.corriere.it/tecnologia/26_giugno_20/intelligenza-artificiale-ricerche-geo-poisoning-13-parole-ricerca-cornell-university-178c103d-b6e7-452a-8e90-1a967496axlk.shtml'
url_pdf: 'https://arxiv.org/pdf/2605.24245'
url_code: 'https://github.com/Tingwei-Zhang/geo_storm'
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

