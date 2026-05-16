# Well-Ordered System (Docs-as-Code Platform)

This platform serves as a production-grade documentation portal engineered to demonstrate scalable knowledge architecture, containerized environments, and modern Docs-as-Code practices.

## 🏗️ System Architecture

The platform splits the engineering lifecycle into two distinct, optimized tiers:
1. **Local Authoring Environment:** Uses a containerized stack (**Docker Compose** and **Traefik Proxy**) to isolate dependencies, manage network bindings, and guarantee environment reproducibility across developer workstations.
2. **Production Deployment Tier:** Utilizes a highly available, zero-maintenance static hosting model via a global Content Delivery Network (CDN) to ensure rapid loading speeds and an absolute elimination of server-side attack vectors.

## 🗂️ Taxonomy Structure

The top-level navigation has been custom-architected to align with enterprise-grade documentation frameworks:
* **ADRs (Architecture Decision Records):** Versioned history tracking the structural and tooling decisions of the platform.
* **Troubleshooting:** Technical post-mortems and technical recovery workflows mapping out resolved engineering hurdles.
* **Guides:** Foundational technical ecosystems documentation, style standards, and system-wide governance rules.

---

## 💻 Local Development (Containerized)

Local development is strictly container-driven to avoid local dependency drift. Ensure you are in the `/infrastructure` directory to manage the container lifecycle.

### Spin Up the Environment
```bash
docker compose up -d
docker compose down
docker compose up -d
yarn build
```

This spins up the Docusaurus application alongside a Traefik reverse proxy configuration. The local workspace hot-reloads dynamically at [http://localhost:3000](http://localhost:3000).

---

### 🛠️ Clearing the Build Registry (Technical Recovery)

If the information architecture undergoes directory changes, clear the cached manifest directly from the infrastructure node to prevent compilation mismatches:

```bash
docker compose down
rm -rf ../src/.docusaurus
docker compose up -d
```

---

### 🚀 Static Production Deployment

When content is ready for public deployment, the static asset engine compiles the codebase into pure, hyper-optimized HTML, CSS, and client-side JavaScript.

1. **Build the Static Assets**
	- To verify compilation and inspect the production bundle in the `src/build/` directory:

	```bash
	yarn build
	```

2. **Live Deployment**
	- To push changes live to the production global CDN:

	```bash
	USE_SSH=true yarn deploy
	```

	> **Note:** This command builds the optimized assets and securely forces them to the tracking deployment branch, instantly serving the public interface.