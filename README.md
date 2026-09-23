# igfurlan.github.io/k8s-portfolio

The source of my infrastructure portfolio: two labs I run on my own hardware, written up with
the measurements that produced them.

**[Read it →](https://igfurlan.github.io/k8s-portfolio/)**

| Lab | What it is |
|---|---|
| **Kubernetes Homelab** | A single bare-metal node running production patterns: GitOps with ArgoCD, Prometheus-gated canary deployments, full-stack observability, encrypted secrets in git, and a four-layer backup strategy |
| **AI Inference Lab** | Three VMs running [llm-d](https://llm-d.ai) — Gateway API with the Inference Extension, KV-cache-aware routing and prefill/decode disaggregation — built to measure whether smart routing beats round-robin. Source: [k3s-llmd-lab](https://github.com/igfurlan/k3s-llmd-lab) |

Everything published here was measured on a running cluster. Where a measurement contradicted
what I expected, that is written up too — those are the parts worth reading.

## Running it locally

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

```bash
npm install
npm run dev      # http://localhost:4321/k8s-portfolio
npm run build    # production build into ./dist
```

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

## Layout

```
src/content/docs/
├── index.mdx              landing page
├── cluster/ gitops/       the Kubernetes homelab
├── observability/ security/ backup/
└── ai-lab/                the AI inference lab
public/
├── images/                screenshots from the running clusters
└── diagrams/              the interactive llm-d request-flow diagram
```

The Kubernetes mark in the hero is the official CNCF artwork, used unmodified.
