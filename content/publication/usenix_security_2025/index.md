---
title: 'Self-interpreting Adversarial Images'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Admin
  - Collin Zhang
  - John X Morris
  - Eugene Bagdasaryan
  - Vitaly Shmatikov

# Author notes (optional)
author_notes:
  - ''
  - ''



date: "2025-08-26T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-10-26T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: "In USENIX Security Symposium (USENIX Security), 2025"
publication_short: "*USENIX Security*, 2025"

abstract: "We introduce a new type of indirect, cross-modal injection attacks against visual language models that enable creation of self-interpreting images. These images contain hidden \"meta-instructions\" that control how models answer users' questions about the image and steer their outputs to express an adversary-chosen style, sentiment, or point of view.\n

Self-interpreting images act as soft prompts, conditioning the model to satisfy the adversary's (meta-)objective while still producing answers based on the image's visual content. Meta-instructions are thus a stronger form of prompt injection. Adversarial images look natural and the model's answers are coherent and plausible—yet they also follow the adversary-chosen interpretation, e.g., political spin, or even objectives that are not achievable with explicit text instructions.\n

We evaluate the efficacy of self-interpreting images for a variety of models, interpretations, and user prompts. We describe how these attacks could cause harm by enabling creation of self-interpreting content that carries spam, misinformation, or spin. Finally, we discuss defenses."
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
url_pdf: 'https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-tingwei'
url_code: 'https://github.com/Tingwei-Zhang/Soft-Prompts-Go-Hard'
url_slides: 
url_video: 


links:
  - name: Appendix
    url: 'https://www.usenix.org/system/files/usenixsecurity25-appendix-zhang-tingwei.pdf'
  - name: USENIX Website
    url: 'https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-tingwei'


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

