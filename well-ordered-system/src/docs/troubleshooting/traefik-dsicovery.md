---
sidebar_label: 'Traefik & Docker Handshake'
sidebar_position: 1
---

# Troubleshooting Traefik Discovery

When setting up the "Well-Ordered System," the Docusaurus container was running, but the Traefik Gateway was returning a 404.

### The Problem
The gateway could not "see" the documentation engine because of three primary disconnects:
1. **Network Isolation:** The containers weren't on the same Docker bridge network.
2. **Host Binding:** Docusaurus was listening on `127.0.0.1` (internal) instead of `0.0.0.0` (network).
3. **Internal Compass:** The `docusaurus.config.ts` was configured for a production URL rather than `localhost`.

### The Resolution
We implemented a shared network called `well-ordered-net` and forced the host binding in the `docker-compose.yml`:

```yaml
    environment:
      - HOST=0.0.0.0
    command: sh -c "npm install && npx docusaurus start --host 0.0.0.0 --port 3000"