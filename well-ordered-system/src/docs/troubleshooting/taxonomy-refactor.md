---
sidebar_label: 'Customizing Content Taxonomy'
sidebar_position: 2
---

# Refactoring Top-Level Taxonomy

When moving from the Docusaurus "Tutorial" template to a professional project structure, several build-breaking hurdles emerged.

### The Problem
Simply deleting the `blog` and `tutorial` folders caused the build to fail with `Cannot find module` errors in the `registry.js` file.

### The Solution
The refactor required a three-step synchronization:
1. **Config Cleanup:** Disabling the blog plugin in `docusaurus.config.ts` (`blog: false`).
2. **Sidebar Alignment:** Updating `sidebars.ts` to match the new directory names (`adr`, `guide`, `troubleshooting`).
3. **Cache Purge:** Deleting the local `.docusaurus` folder to clear the build manifest.

### Impact
The site now reflects a custom, purposeful architecture (ADRs, Troubleshooting, and Guides) rather than a generic template.