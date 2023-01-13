---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.avatar
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      # Override your bio text from `authors/admin/_index.md`?
      text:
  - block: experience
    content:
      title: Work Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Research Assistant
          company: Security Research Group at the University of Virginia
          company_url: 'https://uvasrg.github.io/'
          company_logo: UVA
          location: Charlottesville, Virginia
          date_start: '2021-09-01'
          date_end: ''
          description: |2-
              Responsibilities include:

              * Analysing
              * Modelling
              * Deploying
        - title: Teaching Assistant
          company: CS 4102 Algorithm
          company_url: 'https://www.cs.virginia.edu/~njb2b/cs4102/f20/index.html'
          company_logo: UVA
          location: Charlottesville, Virginia
          date_start: '2022-01-19'
          date_end: '2022-06-01'
          description: |2-
              Responsibilities include:
              * Held three-hour office hours per week for answering questions of homework,
              * Graded coding assignments and exams.
        - title: Teaching Assistant
          company: CS 4774 Machine Learning
          company_url: 'https://www.cs.virginia.edu/~nn4pj/teaching'
          company_logo: UVA
          location: Charlottesville, Virginia
          date_start: '2022-08-19'
          date_end: '2022-12-11'
          description: |2-
              Responsibilities include:
              * Helped in the classroom when conducting in-class activities,
              * Held three-hour office hours per week for answering homework questions
              * Graded individual assignments, group projects, and exams
    design:
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Machine Learning
          tag: Deep Learning
        - name: Adversarial Example
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: true
  - block: collection
    id: featured
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '2'
      view: citation
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: The best way to contact me is through email :)
      # Contact (add or remove contact options as necessary)
      email: tz6rz[at]virginia[dot]edu
      appointment_url: 'https://calendly.com/tingweizhang/30min'
      address:
        street: Rice Hall
        city: Charlottesville
        region: VA
        postcode: '22904'
        country: United States
        country_code: US
      directions: Enter Rice Hall and take the stairs to Office 200 on Floor 3
      office_hours:
        - ' Weekdays 9:00 to 17:00'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: true
    design:
      columns: '2'
---
