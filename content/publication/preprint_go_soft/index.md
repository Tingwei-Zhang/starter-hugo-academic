---
title: 'Soft Prompts Go Hard: Steering Visual Language Models with Hidden Meta-Instructions'

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

abstract: "We introduce a new type of indirect injection vulnerabilities in language models that operate on images: hidden meta-instructions that influence how the model interprets the image and steer the model's outputs to express an adversary-chosen style, sentiment, or point of view. 
We explain how to create meta-instructions by generating images that act as soft prompts. Unlike jailbreaking attacks and adversarial examples, the outputs resulting from these images are plausible and based on the visual content of the image, yet follow the adversary's (meta-)instructions. We describe the risks of these attacks, including misinformation and spin, evaluate their efficacy for multiple visual language models and adversarial meta-objectives, and demonstrate how they can unlock the capabilities of the underlying language models that are unavailable via explicit text instructions. Finally, we discuss defenses against these attacks."
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
url_pdf: 'https://arxiv.org/abs/2407.08970'
url_code: 'https://github.com/Tingwei-Zhang/Soft-Prompts-Go-Hard'
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

