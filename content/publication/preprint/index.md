---
title: "SoK: What Have We Learned About Black-box Attacks Against Classifiers?"
authors:
- Suya Fnu
- Anshuman Suri
- Admin
- Jingtao Hong
- Yuan Tian
- David Evans
date: "2022-12-03T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2022-12-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Dozens of papers have been written to study the vulnerability of machine learning classifiers to adversarial examples in black-box settings in which the adversary only has API access to the target classifier. These papers propose attacks for settings spanning a wide range of assumptions, making it difficult to compare the attacks and understand their effectiveness. Further, attacks are often evaluated in simplified scenarios or against weak baselines, making it difficult to discern whether proposed attacks are useful improvements in important settings. Motivated by the two observations above, we systematize the knowledge of the black-box attacks against classifiers by 1) providing a new taxonomy of black-box attacks focused on considered threat models and 2) conducting a comprehensive evaluation of representative attacks in a variety of settings. Our taxonomy reveals that although many works have been published in this space, research concentrates on a few settings while leaving others largely under-explored. Our comprehensive evaluations show that attacks that perform well in simplified settings (e.g., finding untargeted adversarial examples) often fail in other settings (e.g., targeted adversarial examples). We also evaluate a few well-performing strategies from image domains in the malware space but find that these methods often lead to worse performance, indicating that the knowledge from image classification may not easily transfer to security-relevant domains. Our systematization reveals new directions worth exploring and emphasizes the importance of evaluating attacks carefully under diverse settings. 

# Summary. An optional shortened abstract.
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Source Themes
featured: false

links:
url_pdf: uploads/Oakland_SoK_on_Black_box_Attacks.pdf
url_code: 'https://github.com/Tingwei-Zhang'


# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
