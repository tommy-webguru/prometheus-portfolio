import { Cloud, Server, GitBranch, Shield, Monitor, Database } from 'lucide-react';

export const features = [
    {
        icon: GitBranch,
        title: 'CI/CD Pipelines',
        description: 'Automated build, test, and deployment pipelines that ensure code quality and rapid delivery.'
    },
    {
        icon: Cloud,
        title: 'Cloud Infrastructure',
        description: 'Scalable cloud architecture on AWS, Azure, and GCP with auto-scaling and load balancing.'
    },
    {
        icon: Server,
        title: 'Container Orchestration',
        description: 'Docker and Kubernetes implementation for microservices architecture and container management.'
    },
    {
        icon: Monitor,
        title: 'Monitoring & Alerting',
        description: 'Comprehensive monitoring solutions with real-time alerts and performance dashboards.'
    },
    {
        icon: Shield,
        title: 'Security Integration',
        description: 'DevSecOps practices with automated security scanning and compliance monitoring.'
    },
    {
        icon: Database,
        title: 'Infrastructure as Code',
        description: 'Terraform and CloudFormation templates for reproducible infrastructure deployment.'
    }
];

export const technologies = [
    { name: 'AWS', category: 'Cloud Platform' },
    { name: 'Azure', category: 'Cloud Platform' },
    { name: 'Google Cloud', category: 'Cloud Platform' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'GitLab CI', category: 'CI/CD' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Ansible', category: 'Configuration' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Visualization' },
    { name: 'ELK Stack', category: 'Logging' }
];


export const caseStudies = [
    {
        title: 'E-commerce Platform Scaling',
        client: 'RetailMax',
        challenge: 'Handle 10x traffic increase during Black Friday sales',
        solution: 'Implemented auto-scaling Kubernetes clusters with load balancing',
        results: [
            '99.9% uptime during peak traffic',
            '50% reduction in infrastructure costs',
            '10x faster deployment cycles'
        ]
    },
    {
        title: 'Legacy System Migration',
        client: 'FinanceCore',
        challenge: 'Migrate monolithic application to cloud-native architecture',
        solution: 'Containerized services with microservices architecture on AWS',
        results: [
            '75% improvement in system performance',
            '90% reduction in deployment time',
            'Zero-downtime deployments achieved'
        ]
    },
    {
        title: 'Multi-Cloud Strategy',
        client: 'GlobalTech',
        challenge: 'Implement disaster recovery across multiple cloud providers',
        solution: 'Multi-cloud architecture with automated failover mechanisms',
        results: [
            '99.99% availability guarantee',
            '60% cost optimization',
            'Sub-5-minute recovery time'
        ]
    }
];

export const process = [
    {
        step: '01',
        title: 'Infrastructure Assessment',
        description: 'Comprehensive analysis of current infrastructure, identifying bottlenecks and optimization opportunities.',
        duration: '1-2 weeks'
    },
    {
        step: '02',
        title: 'Architecture Design',
        description: 'Design scalable, secure, and cost-effective cloud architecture tailored to your business needs.',
        duration: '2-3 weeks'
    },
    {
        step: '03',
        title: 'Implementation & Migration',
        description: 'Gradual implementation with zero-downtime migration strategies and comprehensive testing.',
        duration: '4-8 weeks'
    },
    {
        step: '04',
        title: 'Monitoring & Optimization',
        description: 'Continuous monitoring, performance optimization, and proactive maintenance.',
        duration: 'Ongoing'
    }
];

export const pricing = [
    {
        name: 'Starter',
        price: '$15,000',
        description: 'Perfect for small to medium applications',
        features: [
            'Basic CI/CD pipeline setup',
            'Single cloud provider',
            'Container orchestration',
            'Basic monitoring',
            '3 months support'
        ]
    },
    {
        name: 'Professional',
        price: '$35,000',
        description: 'Ideal for growing businesses',
        features: [
            'Advanced CI/CD with testing',
            'Multi-environment setup',
            'Auto-scaling configuration',
            'Comprehensive monitoring',
            'Security integration',
            '6 months support'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        price: '$75,000+',
        description: 'For large-scale operations',
        features: [
            'Multi-cloud architecture',
            'Advanced security & compliance',
            'Custom automation tools',
            'Disaster recovery setup',
            '24/7 monitoring',
            '12 months support'
        ]
    }
];