// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://igfurlan.github.io',
	base: '/k8s-portfolio',
	integrations: [
		starlight({
			title: 'Igor Furlan',
			logo: {
				light: './src/assets/enso-light.svg',
				dark: './src/assets/enso-dark.svg',
				alt: 'Ensō mark',
			},
			description:
				'Platform engineering, measured rather than asserted. Two labs: a production-pattern Kubernetes homelab, and a distributed AI inference cluster running llm-d.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/igfurlan' },
			],
			// Grouped by LAB, not by topic. Each lab is a different machine, a
			// different problem and a different set of decisions — flattening them
			// into shared topic groups would blur exactly what distinguishes them.
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Overview', slug: 'index' },
					],
				},
				{
					label: 'Kubernetes Homelab',
					collapsed: false,
					items: [
						{ label: 'Cluster Architecture', slug: 'cluster/architecture' },
						{ label: 'GitOps & Progressive Delivery', slug: 'gitops/overview' },
						{ label: 'Observability Stack', slug: 'observability/stack' },
						{ label: 'Cluster Security', slug: 'security/overview' },
						{ label: 'Backup & Recovery', slug: 'backup/strategy' },
					],
				},
				{
					label: 'AI Inference Lab',
					collapsed: false,
					items: [
						{ label: 'Overview & Findings', slug: 'ai-lab/overview' },
						{ label: 'Architecture', slug: 'ai-lab/architecture' },
						{ label: 'How Routing Works', slug: 'ai-lab/routing' },
						{ label: 'The Experiment', slug: 'ai-lab/experiment' },
						{ label: 'Observability', slug: 'ai-lab/observability' },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
