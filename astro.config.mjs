// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://igfurlan.github.io',
	base: '/k8s-portfolio',
	integrations: [
		starlight({
			title: 'Kubernetes Homelab',
			description: 'A production-grade Kubernetes homelab running on a single node — showcasing GitOps, observability, security, and cloud-native patterns.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/igfurlan' },
			],
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Home', slug: 'index' },
					],
				},
				{
					label: '🖥️ Cluster',
					items: [
						{ label: 'Architecture Overview', slug: 'cluster/architecture' },
					],
				},
				{
					label: '🔄 GitOps',
					items: [
						{ label: 'GitOps with ArgoCD & Argo Rollouts', slug: 'gitops/overview' },
					],
				},
				{
					label: '📊 Observability',
					items: [
						{ label: 'Observability Stack', slug: 'observability/stack' },
					],
				},
				{
					label: '🔒 Security',
					items: [
						{ label: 'Cluster Security', slug: 'security/overview' },
					],
				},
				{
					label: '💾 Backup',
					items: [
						{ label: 'Backup Strategy & Monitoring', slug: 'backup/strategy' },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
