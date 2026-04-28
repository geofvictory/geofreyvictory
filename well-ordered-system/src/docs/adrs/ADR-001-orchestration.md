# ADR 001: Containerized Service Orchestration

**Status:** Accepted  
**Date:** 2026-04-23

## 1. Context and Problem Statement
To demonstrate a "Well-Ordered-System," we need a way to manage multiple interconnected services (Gateway, Documentation Engine, Search) without manual setup. The system must be reproducible across different machines and ensure that service communication is isolated and secure.

## 2. Decision Drivers
* **Portability:** The system must run identically on any machine with Docker installed.
* **Decoupling:** Documentation content should remain independent of infrastructure logic.
* **Simplicity:** A single command (`docker-compose up`) should spin up the entire ecosystem.

## 3. Proposed Solution: Docker Compose
We will use a `docker-compose.yml` file to define the "wiring" of our infrastructure. This allows us to use **Infrastructure-as-Code (IaC)** to declare our system state.

## 4. Key Choices within the YAML
* **Traefik as Entrypoint:** Chosen for its native integration with Docker labels, allowing the system to self-configure without manual proxy restarts.
* **Network Isolation:** Services are connected via an internal virtual network, exposing only the Gateway to the external environment (Port 80).
* **Volume Mapping:** Local source files are mapped to the container to allow real-time documentation updates (hot-reloading).

## 5. Consequences
* **Positive:** Automated service discovery and consistent environments across the team.
* **Negative:** Requires local Docker installation and overhead for container management.
