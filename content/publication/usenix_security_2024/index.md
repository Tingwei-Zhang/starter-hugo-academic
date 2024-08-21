---
title: 'Adversarial Illusions in Multi-Modal Embeddings'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Admin
  - Rishi Jha
  - Eugene Bagdasaryan
  - Vitaly Shmatikov

# Author notes (optional)
author_notes:
  - 'Comparable contributions'
  - 'Comparable contributions'



date: "2024-01-26T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-10-26T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: "In USENIX Security Symposium (USENIX Security), 2024"
publication_short: '*USENIX Security*, 2024 (<span style="color: mediumblue;">**Distinguished Paper Award**</span>)'


abstract: "Multi-modal embeddings encode texts, images, thermal images, sounds, and videos into a single embedding space, aligning representations across different modalities (e.g., associate an image of a dog with a barking sound). In this paper, we show that multi-modal embeddings can be vulnerable to an attack we call adversarial illusions. Given an image or a sound, an adversary can perturb it to make its embedding close to an arbitrary, adversary-chosen input in another modality. 
These attacks are cross-modal and targeted: the adversary can align any image or sound with any target of his choice. Adversarial illusions exploit proximity in the embedding space and are thus agnostic to downstream tasks and modalities, enabling a wholesale compromise of current and future tasks, as well as modalities not available to the adversary. Using ImageBind and AudioCLIP embeddings, we demonstrate how adversarially aligned inputs, generated without knowledge of specific downstream tasks, mislead image generation, text generation, zero-shot classification, and audio retrieval. 
We investigate transferability of illusions across different embeddings and develop a black-box version of our method that we use to demonstrate the first adversarial alignment attack on Amazon's commercial, proprietary Titan embedding. Finally, we analyze countermeasures and evasion attacks."
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
url_pdf: 'https://arxiv.org/abs/2308.11804'
url_code: 'https://github.com/ebagdasa/adversarial_illusions'
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

