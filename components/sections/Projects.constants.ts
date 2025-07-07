export const projects = [
    {
        id: 1,
        title: 'E-commerce Analytics Platform',
        category: 'ai',
        description: 'AI-powered analytics platform that provides real-time insights into customer behavior and sales patterns.',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS'],
        results: [
            { metric: 'Revenue Increase', value: '35%' },
            { metric: 'Analysis Speed', value: '10x Faster' },
            { metric: 'User Satisfaction', value: '95%' }
        ],
        duration: '4 months',
        team: '3 developers',
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'Healthcare Management System',
        category: 'web',
        description: 'Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine capabilities.',
        image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],
        results: [
            { metric: 'Patient Satisfaction', value: '92%' },
            { metric: 'Processing Time', value: '60% Faster' },
            { metric: 'Error Reduction', value: '80%' }
        ],
        duration: '6 months',
        team: '4 developers',
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'Supply Chain Automation',
        category: 'automation',
        description: 'End-to-end automation solution for inventory management, order processing, and supplier communications.',
        image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Python', 'RPA', 'API Integration', 'PostgreSQL', 'Redis'],
        results: [
            { metric: 'Manual Work Reduction', value: '75%' },
            { metric: 'Order Accuracy', value: '99.5%' },
            { metric: 'Cost Savings', value: '$500K/year' }
        ],
        duration: '3 months',
        team: '2 developers',
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Multi-Cloud Infrastructure',
        category: 'cloud',
        description: 'Scalable multi-cloud infrastructure with automated deployment, monitoring, and disaster recovery.',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Terraform', 'Kubernetes', 'AWS', 'Azure', 'Prometheus'],
        results: [
            { metric: 'Uptime', value: '99.9%' },
            { metric: 'Deployment Speed', value: '5x Faster' },
            { metric: 'Cost Optimization', value: '40%' }
        ],
        duration: '5 months',
        team: '3 developers',
        link: '#',
        github: '#'
    },
    {
        id: 5,
        title: 'Real-time Trading Platform',
        category: 'web',
        description: 'High-performance trading platform with real-time data processing and advanced charting capabilities.',
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'WebSocket', 'Node.js', 'Redis', 'Chart.js'],
        results: [
            { metric: 'Latency', value: '<50ms' },
            { metric: 'Concurrent Users', value: '10,000+' },
            { metric: 'Transaction Volume', value: '$2M+/day' }
        ],
        duration: '8 months',
        team: '5 developers',
        link: '#',
        github: '#'
    },
    {
        id: 6,
        title: 'Smart Document Processing',
        category: 'ai',
        description: 'AI-powered document processing system that extracts, analyzes, and categorizes business documents.',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Python', 'OpenCV', 'NLP', 'FastAPI', 'MongoDB'],
        results: [
            { metric: 'Processing Speed', value: '20x Faster' },
            { metric: 'Accuracy', value: '97%' },
            { metric: 'Cost Reduction', value: '60%' }
        ],
        duration: '4 months',
        team: '3 developers',
        link: '#',
        github: '#'
    }
];

export const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'web', label: 'Web Apps' },
    { id: 'automation', label: 'Automation' },
    { id: 'cloud', label: 'Cloud/DevOps' }
];