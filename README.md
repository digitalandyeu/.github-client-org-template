# GitHub Organization public profile template

[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine)
[![GitPod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/digitalandyeu/.github-client-org-template)

A template to generate [@digitalandyeu](https://github.com/digitalandyeu) client's public GitHub organisation repository.

Generates the [`profile/README.md`](./profile/README.md) file based on the [`data.example.json`](./profile/public/data/github.json) file.

```bash
# Install deps
npm install

# symlink data example for local development
ln -s data.example.json public/data/org.json
```

Make your changes to the [`public/data/org.json`](profile/public/data/generated/org.json) file and push it to the repository.

```bash
# Commit and push the ignored data.example.js file changes
git add public/data/org.json -f && git commit -m "add public/data/org.json" && git push
```

[Tiny Figma design starter](https://www.figma.com/file/0AdHJVIm34eSJ0eRissQfe/Starter-%3A-Web?node-id=0%3A1&t=2H9vpif7XKQGlwfp-1)
