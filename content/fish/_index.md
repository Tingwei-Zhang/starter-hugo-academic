---
title: Fish I've caught
summary: A log of fish I've caught.
share: false
# Keep this page reachable at /fish/ but out of search, sitemap, and all list pages.
private: true
_build:
  list: never
# Individual catches are data for the gallery, not pages of their own.
cascade:
  private: true
  _build:
    render: never
    list: local
    # Publish only the generated thumbnails, not the full-size originals.
    publishResources: false
---
