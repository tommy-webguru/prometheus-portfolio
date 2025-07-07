import { Cloud, Brain, Settings, Code, Smartphone, Shield, ArrowRight, CheckCircle, Star, Clock, DollarSign, Users } from 'lucide-react';

export const services = [
    {
        icon: Cloud,
        title: 'DevOps & Cloud',
        shortDescription: 'Scalable infrastructure and automated deployment pipelines',
        description: 'We architect and implement robust cloud solutions that scale with your business. From containerization to CI/CD pipelines, we ensure your applications are deployed efficiently and maintained reliably.',
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Azure', 'GCP'],
        features: [
            'Automated deployment pipelines',
            'Container orchestration',
            'Infrastructure as Code',
            'Monitoring & alerting',
            'Security best practices',
            'Cost optimization',
            'Disaster recovery planning'
        ],
        benefits: [
            '99.9% uptime guarantee',
            '50% faster deployments',
            '40% cost reduction',
            '24/7 monitoring'
        ],
        pricing: 'Starting at $15,000',
        timeline: '4-8 weeks',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Brain,
        title: 'AI & Machine Learning',
        shortDescription: 'Intelligent solutions that learn and adapt to your business needs',
        description: 'Transform your data into actionable insights with our AI/ML solutions. We develop custom models, implement neural networks, and create intelligent systems that drive business growth.',
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face', 'MLflow'],
        features: [
            'Custom model development',
            'Natural language processing',
            'Computer vision solutions',
            'Predictive analytics',
            'AI integration & deployment',
            'Model optimization',
            'Real-time inference'
        ],
        benefits: [
            '35% increase in efficiency',
            '90% accuracy rates',
            'Real-time predictions',
            'Scalable AI infrastructure'
        ],
        pricing: 'Starting at $25,000',
        timeline: '6-12 weeks',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: Settings,
        title: 'Process Automation',
        shortDescription: 'Streamline operations with intelligent automation solutions',
        description: 'Eliminate repetitive tasks and optimize workflows with our automation solutions. We design and implement systems that reduce manual effort while increasing accuracy and efficiency.',
        technologies: ['Python', 'RPA', 'Zapier', 'Power Automate', 'API Integration', 'Selenium', 'UiPath'],
        features: [
            'Workflow automation',
            'Data processing pipelines',
            'API integrations',
            'Business process optimization',
            'Custom automation tools',
            'Legacy system integration',
            'Performance monitoring'
        ],
        benefits: [
            '75% reduction in manual work',
            '99.5% accuracy improvement',
            '$500K annual savings',
            'ROI within 6 months'
        ],
        pricing: 'Starting at $12,000',
        timeline: '3-6 weeks',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        icon: Code,
        title: 'Backend Development',
        shortDescription: 'Robust, scalable server-side solutions and APIs',
        description: 'Build powerful backend systems that handle your business logic efficiently. We create secure, scalable APIs and databases that serve as the foundation for your applications.',
        technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'MongoDB', 'Express'],
        features: [
            'RESTful API development',
            'Database design & optimization',
            'Microservices architecture',
            'Real-time applications',
            'Performance optimization',
            'Security implementation',
            'Third-party integrations'
        ],
        benefits: [
            '10x faster response times',
            'Handles 100K+ requests/sec',
            '99.9% uptime',
            'Enterprise-grade security'
        ],
        pricing: 'Starting at $18,000',
        timeline: '4-10 weeks',
        gradient: 'from-green-500 to-teal-500'
    },
    {
        icon: Smartphone,
        title: 'Frontend Development',
        shortDescription: 'Modern, responsive user interfaces that engage and convert',
        description: 'Create stunning user experiences with our frontend development services. We build responsive, accessible, and performant web applications using the latest technologies.',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js', 'Angular'],
        features: [
            'Responsive web design',
            'Progressive web apps',
            'Modern UI/UX implementation',
            'Performance optimization',
            'Accessibility compliance',
            'Cross-browser compatibility',
            'SEO optimization'
        ],
        benefits: [
            '40% increase in conversions',
            '98% mobile compatibility',
            'Lightning-fast loading',
            'WCAG 2.1 compliant'
        ],
        pricing: 'Starting at $15,000',
        timeline: '4-8 weeks',
        gradient: 'from-indigo-500 to-blue-500'
    },
    {
        icon: Shield,
        title: 'Security Solutions',
        shortDescription: 'Comprehensive security measures to protect your digital assets',
        description: 'Safeguard your applications and data with our comprehensive security solutions. We implement best practices, conduct security audits, and ensure your systems are protected against threats.',
        technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Penetration Testing', 'Security Audits', 'OWASP', 'Encryption'],
        features: [
            'Security architecture review',
            'Vulnerability assessments',
            'Authentication systems',
            'Data encryption',
            'Compliance consulting',
            'Incident response planning',
            'Security training'
        ],
        benefits: [
            '100% compliance achievement',
            'Zero security breaches',
            'Risk reduction by 95%',
            '24/7 threat monitoring'
        ],
        pricing: 'Starting at $20,000',
        timeline: '3-8 weeks',
        gradient: 'from-gray-600 to-gray-800'
    }
];

export const processSteps = [
    {
        step: '01',
        title: 'Discovery & Planning',
        description: 'We analyze your requirements, understand your business goals, and create a detailed project roadmap.',
        duration: '1-2 weeks'
    },
    {
        step: '02',
        title: 'Design & Architecture',
        description: 'Our team designs the solution architecture and creates detailed technical specifications.',
        duration: '1-3 weeks'
    },
    {
        step: '03',
        title: 'Development & Testing',
        description: 'We build your solution using agile methodologies with continuous testing and quality assurance.',
        duration: '2-8 weeks'
    },
    {
        step: '04',
        title: 'Deployment & Support',
        description: 'We deploy your solution and provide ongoing support, maintenance, and optimization.',
        duration: 'Ongoing'
    }
];

export const whyChooseUs = [
    {
        icon: Star,
        title: '98% Client Satisfaction',
        description: 'Industry-leading satisfaction rates through quality delivery and exceptional service.'
    },
    {
        icon: Clock,
        title: 'On-Time Delivery',
        description: 'We deliver projects on schedule with transparent communication throughout the process.'
    },
    {
        icon: DollarSign,
        title: 'Transparent Pricing',
        description: 'No hidden costs or surprise fees. Clear, upfront pricing for all our services.'
    },
    {
        icon: Users,
        title: 'Expert Team',
        description: 'Five seasoned professionals with proven track records in their respective domains.'
    }
];