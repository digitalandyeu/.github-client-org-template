# GitHub Organization public profile template

[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine)
[![GitPod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/digitalandyeu/.github-client-org-template)

A template to generate [@digitalandyeu](https://github.com/digitalandyeu) client's public GitHub organisation repository.

Generates the [`profile/README.md`](./profile/README.md) file based on the [`data.json`](./data.example.json) file.

```bash
# Install deps
npm install

# symlink data example for local development
ln -s data.example.json data.json
```

Make your changes to the [`data.json`](./data.json) file and push it to the repository.

```bash
# Commit and push the ignored data.js file changes
git add data.json -f && git commit -m "Add data.json" && git push
```
