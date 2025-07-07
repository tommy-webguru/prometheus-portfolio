export const projects = [
    // 2024 Projects (12 projects)
    {
      id: 1,
      title: 'AI-Powered Trading Platform',
      category: 'ai',
      description: 'High-frequency trading platform with machine learning algorithms for market prediction and risk management.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'React', 'WebSocket', 'Redis'],
      results: [
        { metric: 'Latency', value: '<50ms' },
        { metric: 'Accuracy', value: '94%' },
        { metric: 'Volume', value: '$2M+/day' }
      ],
      duration: '8 months',
      team: '5 developers',
      client: 'FinTech Pro',
      industry: 'Financial Services',
      status: 'Completed',
      year: 2024
    },
    {
      id: 2,
      title: 'Multi-Cloud Infrastructure',
      category: 'cloud',
      description: 'Scalable multi-cloud architecture with automated deployment and disaster recovery capabilities.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Terraform', 'Kubernetes', 'AWS', 'Azure', 'Prometheus'],
      results: [
        { metric: 'Uptime', value: '99.9%' },
        { metric: 'Cost Reduction', value: '40%' },
        { metric: 'Recovery Time', value: '<5min' }
      ],
      duration: '5 months',
      team: '3 developers',
      client: 'CloudScale Tech',
      industry: 'Technology',
      status: 'Completed',
      year: 2024
    },
    {
      id: 3,
      title: 'Smart Document Processing',
      category: 'ai',
      description: 'AI-powered document analysis system using computer vision and NLP for automated data extraction.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenCV', 'spaCy', 'FastAPI', 'MongoDB'],
      results: [
        { metric: 'Processing Speed', value: '20x Faster' },
        { metric: 'Accuracy', value: '97%' },
        { metric: 'Cost Reduction', value: '60%' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'DocuFlow Systems',
      industry: 'Document Management',
      status: 'In Progress',
      year: 2024
    },
    {
      id: 4,
      title: 'E-commerce Analytics Dashboard',
      category: 'web',
      description: 'Real-time analytics platform for e-commerce businesses with predictive insights and recommendations.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
      results: [
        { metric: 'Revenue Increase', value: '35%' },
        { metric: 'User Engagement', value: '85%' },
        { metric: 'Load Time', value: '<2s' }
      ],
      duration: '6 months',
      team: '4 developers',
      client: 'RetailMax',
      industry: 'E-commerce',
      status: 'Completed',
      year: 2024
    },
    {
      id: 5,
      title: 'Healthcare Management Portal',
      category: 'web',
      description: 'Comprehensive healthcare management system with patient records and telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'WebRTC', 'Stripe'],
      results: [
        { metric: 'Patient Satisfaction', value: '92%' },
        { metric: 'Processing Time', value: '60% Faster' },
        { metric: 'Error Reduction', value: '80%' }
      ],
      duration: '7 months',
      team: '4 developers',
      client: 'MedCare Plus',
      industry: 'Healthcare',
      status: 'Completed',
      year: 2024
    },
    {
      id: 6,
      title: 'Supply Chain Automation',
      category: 'automation',
      description: 'End-to-end automation solution for inventory management and supplier communications.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'RPA', 'API Integration', 'PostgreSQL', 'Celery'],
      results: [
        { metric: 'Manual Work Reduction', value: '75%' },
        { metric: 'Accuracy', value: '99.5%' },
        { metric: 'Cost Savings', value: '$500K/year' }
      ],
      duration: '3 months',
      team: '2 developers',
      client: 'LogiFlow Corp',
      industry: 'Logistics',
      status: 'Completed',
      year: 2024
    },
    {
      id: 7,
      title: 'Real-time Chat Application',
      category: 'web',
      description: 'Scalable messaging platform with end-to-end encryption and multimedia support.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis', 'MongoDB'],
      results: [
        { metric: 'Concurrent Users', value: '50K+' },
        { metric: 'Message Latency', value: '<100ms' },
        { metric: 'Uptime', value: '99.8%' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'ConnectNow',
      industry: 'Communication',
      status: 'Completed',
      year: 2024
    },
    {
      id: 8,
      title: 'Predictive Maintenance System',
      category: 'ai',
      description: 'IoT-based predictive maintenance solution using machine learning for industrial equipment.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'IoT', 'InfluxDB', 'Grafana'],
      results: [
        { metric: 'Downtime Reduction', value: '70%' },
        { metric: 'Maintenance Cost', value: '45% Lower' },
        { metric: 'Prediction Accuracy', value: '91%' }
      ],
      duration: '6 months',
      team: '4 developers',
      client: 'IndustrialTech',
      industry: 'Manufacturing',
      status: 'Completed',
      year: 2024
    },
    {
      id: 9,
      title: 'Cloud Migration Project',
      category: 'cloud',
      description: 'Complete migration of legacy systems to cloud-native architecture with zero downtime.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      results: [
        { metric: 'Performance Improvement', value: '3x' },
        { metric: 'Cost Reduction', value: '50%' },
        { metric: 'Deployment Speed', value: '10x Faster' }
      ],
      duration: '8 months',
      team: '5 developers',
      client: 'LegacySoft',
      industry: 'Software',
      status: 'Completed',
      year: 2024
    },
    {
      id: 10,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Stripe'],
      results: [
        { metric: 'User Adoption', value: '85%' },
        { metric: 'Transaction Speed', value: '<3s' },
        { metric: 'Security Score', value: '99.9%' }
      ],
      duration: '10 months',
      team: '6 developers',
      client: 'SecureBank',
      industry: 'Banking',
      status: 'Completed',
      year: 2024
    },
    {
      id: 11,
      title: 'IoT Data Processing Platform',
      category: 'cloud',
      description: 'Real-time data processing platform for IoT devices with edge computing capabilities.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Apache Kafka', 'Spark', 'AWS', 'InfluxDB', 'Grafana'],
      results: [
        { metric: 'Data Throughput', value: '1M events/sec' },
        { metric: 'Latency', value: '<50ms' },
        { metric: 'Cost Efficiency', value: '60% Better' }
      ],
      duration: '5 months',
      team: '4 developers',
      client: 'SmartDevices Inc',
      industry: 'IoT',
      status: 'Completed',
      year: 2024
    },
    {
      id: 12,
      title: 'Customer Service Chatbot',
      category: 'ai',
      description: 'AI-powered customer service chatbot with natural language understanding and sentiment analysis.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'React', 'PostgreSQL'],
      results: [
        { metric: 'Response Accuracy', value: '93%' },
        { metric: 'Resolution Rate', value: '78%' },
        { metric: 'Customer Satisfaction', value: '89%' }
      ],
      duration: '3 months',
      team: '3 developers',
      client: 'ServiceFirst',
      industry: 'Customer Service',
      status: 'Completed',
      year: 2024
    },

    // 2023 Projects (14 projects)
    {
      id: 13,
      title: 'Enterprise Resource Planning',
      category: 'web',
      description: 'Comprehensive ERP system for large enterprises with modules for finance, HR, and operations.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
      results: [
        { metric: 'Process Efficiency', value: '65% Better' },
        { metric: 'Data Accuracy', value: '98%' },
        { metric: 'User Adoption', value: '92%' }
      ],
      duration: '12 months',
      team: '8 developers',
      client: 'GlobalCorp',
      industry: 'Enterprise',
      status: 'Completed',
      year: 2023
    },
    {
      id: 14,
      title: 'Machine Learning Pipeline',
      category: 'ai',
      description: 'Automated ML pipeline for data preprocessing, model training, and deployment.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'MLflow', 'Kubeflow', 'TensorFlow', 'Apache Airflow'],
      results: [
        { metric: 'Model Training Time', value: '80% Faster' },
        { metric: 'Deployment Speed', value: '5x Faster' },
        { metric: 'Model Accuracy', value: '96%' }
      ],
      duration: '6 months',
      team: '4 developers',
      client: 'DataInsights',
      industry: 'Data Science',
      status: 'Completed',
      year: 2023
    },
    {
      id: 15,
      title: 'Kubernetes Orchestration',
      category: 'cloud',
      description: 'Container orchestration platform with auto-scaling and service mesh implementation.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kubernetes', 'Istio', 'Helm', 'Prometheus', 'Grafana'],
      results: [
        { metric: 'Resource Utilization', value: '70% Better' },
        { metric: 'Deployment Time', value: '90% Faster' },
        { metric: 'System Reliability', value: '99.9%' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'ScaleTech',
      industry: 'Technology',
      status: 'Completed',
      year: 2023
    },
    {
      id: 16,
      title: 'Inventory Management System',
      category: 'web',
      description: 'Real-time inventory tracking system with predictive analytics and automated reordering.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      results: [
        { metric: 'Inventory Accuracy', value: '99.2%' },
        { metric: 'Stock-out Reduction', value: '85%' },
        { metric: 'Cost Savings', value: '$300K/year' }
      ],
      duration: '5 months',
      team: '4 developers',
      client: 'WareHouse Pro',
      industry: 'Logistics',
      status: 'Completed',
      year: 2023
    },
    {
      id: 17,
      title: 'Fraud Detection Algorithm',
      category: 'ai',
      description: 'Real-time fraud detection system using ensemble learning and anomaly detection.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'Apache Kafka', 'Redis', 'FastAPI'],
      results: [
        { metric: 'Fraud Detection Rate', value: '94%' },
        { metric: 'False Positives', value: '75% Reduction' },
        { metric: 'Processing Time', value: '<100ms' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'SecurePay',
      industry: 'FinTech',
      status: 'Completed',
      year: 2023
    },
    {
      id: 18,
      title: 'API Gateway Implementation',
      category: 'cloud',
      description: 'Centralized API gateway with rate limiting, authentication, and monitoring.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kong', 'Docker', 'PostgreSQL', 'Prometheus', 'Grafana'],
      results: [
        { metric: 'API Response Time', value: '50% Faster' },
        { metric: 'Security Score', value: '99.8%' },
        { metric: 'Throughput', value: '10K req/sec' }
      ],
      duration: '3 months',
      team: '2 developers',
      client: 'MicroServices Ltd',
      industry: 'Technology',
      status: 'Completed',
      year: 2023
    },
    {
      id: 19,
      title: 'Content Management Platform',
      category: 'web',
      description: 'Headless CMS with multi-channel publishing and advanced content workflows.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Strapi', 'GraphQL', 'PostgreSQL', 'AWS S3'],
      results: [
        { metric: 'Content Publishing', value: '5x Faster' },
        { metric: 'User Productivity', value: '80% Better' },
        { metric: 'System Performance', value: '3x Faster' }
      ],
      duration: '6 months',
      team: '5 developers',
      client: 'MediaFlow',
      industry: 'Media',
      status: 'Completed',
      year: 2023
    },
    {
      id: 20,
      title: 'Automated Testing Framework',
      category: 'automation',
      description: 'Comprehensive test automation framework with CI/CD integration and reporting.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Selenium', 'Cypress', 'Jest', 'Jenkins', 'Allure'],
      results: [
        { metric: 'Test Coverage', value: '95%' },
        { metric: 'Testing Time', value: '70% Reduction' },
        { metric: 'Bug Detection', value: '85% Earlier' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'QualityFirst',
      industry: 'Software Testing',
      status: 'Completed',
      year: 2023
    },
    {
      id: 21,
      title: 'Data Visualization Dashboard',
      category: 'web',
      description: 'Interactive business intelligence dashboard with real-time data visualization.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      results: [
        { metric: 'Decision Speed', value: '60% Faster' },
        { metric: 'Data Accuracy', value: '99.5%' },
        { metric: 'User Engagement', value: '90%' }
      ],
      duration: '5 months',
      team: '4 developers',
      client: 'AnalyticsPro',
      industry: 'Analytics',
      status: 'Completed',
      year: 2023
    },
    {
      id: 22,
      title: 'Blockchain Integration',
      category: 'cloud',
      description: 'Blockchain-based supply chain tracking system with smart contracts.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
      results: [
        { metric: 'Transparency', value: '100%' },
        { metric: 'Transaction Speed', value: '5x Faster' },
        { metric: 'Cost Reduction', value: '40%' }
      ],
      duration: '7 months',
      team: '4 developers',
      client: 'CryptoTech',
      industry: 'Blockchain',
      status: 'Completed',
      year: 2023
    },
    {
      id: 23,
      title: 'Performance Monitoring Tool',
      category: 'cloud',
      description: 'Application performance monitoring with alerting and automated scaling.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Prometheus', 'Grafana', 'Kubernetes', 'Helm', 'AlertManager'],
      results: [
        { metric: 'Issue Detection', value: '95% Faster' },
        { metric: 'System Uptime', value: '99.95%' },
        { metric: 'Response Time', value: '50% Better' }
      ],
      duration: '3 months',
      team: '2 developers',
      client: 'MonitorMax',
      industry: 'DevOps',
      status: 'Completed',
      year: 2023
    },
    {
      id: 24,
      title: 'Social Media Analytics',
      category: 'ai',
      description: 'AI-powered social media sentiment analysis and trend prediction platform.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'NLTK', 'TensorFlow', 'Apache Spark', 'Elasticsearch'],
      results: [
        { metric: 'Sentiment Accuracy', value: '92%' },
        { metric: 'Processing Speed', value: '100K posts/min' },
        { metric: 'Trend Prediction', value: '87% Accuracy' }
      ],
      duration: '5 months',
      team: '4 developers',
      client: 'SocialInsights',
      industry: 'Social Media',
      status: 'Completed',
      year: 2023
    },
    {
      id: 25,
      title: 'Video Streaming Platform',
      category: 'web',
      description: 'Scalable video streaming platform with adaptive bitrate and CDN integration.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'FFmpeg', 'AWS CloudFront', 'Redis'],
      results: [
        { metric: 'Concurrent Viewers', value: '100K+' },
        { metric: 'Video Quality', value: '4K Support' },
        { metric: 'Buffering Time', value: '90% Reduction' }
      ],
      duration: '8 months',
      team: '6 developers',
      client: 'StreamTech',
      industry: 'Media',
      status: 'Completed',
      year: 2023
    },
    {
      id: 26,
      title: 'Recommendation Engine',
      category: 'ai',
      description: 'Personalized recommendation system using collaborative filtering and deep learning.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Apache Spark', 'Redis', 'FastAPI'],
      results: [
        { metric: 'Click-through Rate', value: '45% Increase' },
        { metric: 'User Engagement', value: '60% Better' },
        { metric: 'Revenue Impact', value: '$1.2M Increase' }
      ],
      duration: '6 months',
      team: '4 developers',
      client: 'ShopSmart',
      industry: 'E-commerce',
      status: 'Completed',
      year: 2023
    },

    // 2022 Projects (12 projects)
    {
      id: 27,
      title: 'Digital Transformation Suite',
      category: 'web',
      description: 'Complete digital transformation platform for traditional businesses.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      results: [
        { metric: 'Process Digitization', value: '90%' },
        { metric: 'Efficiency Gain', value: '75%' },
        { metric: 'Cost Reduction', value: '$800K/year' }
      ],
      duration: '10 months',
      team: '7 developers',
      client: 'TraditionCorp',
      industry: 'Traditional Business',
      status: 'Completed',
      year: 2022
    },
    {
      id: 28,
      title: 'Computer Vision System',
      category: 'ai',
      description: 'Advanced computer vision system for quality control in manufacturing.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      results: [
        { metric: 'Defect Detection', value: '98% Accuracy' },
        { metric: 'Inspection Speed', value: '10x Faster' },
        { metric: 'Quality Improvement', value: '85%' }
      ],
      duration: '6 months',
      team: '4 developers',
      client: 'VisionTech',
      industry: 'Manufacturing',
      status: 'Completed',
      year: 2022
    },
    {
      id: 29,
      title: 'CI/CD Pipeline Setup',
      category: 'cloud',
      description: 'Comprehensive CI/CD pipeline with automated testing and deployment.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'SonarQube', 'Nexus'],
      results: [
        { metric: 'Deployment Frequency', value: '20x More' },
        { metric: 'Lead Time', value: '80% Reduction' },
        { metric: 'Failure Rate', value: '90% Lower' }
      ],
      duration: '3 months',
      team: '2 developers',
      client: 'DevOps Masters',
      industry: 'Software Development',
      status: 'Completed',
      year: 2022
    },
    {
      id: 30,
      title: 'Customer Portal Redesign',
      category: 'web',
      description: 'Modern customer portal with improved UX and self-service capabilities.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
      results: [
        { metric: 'User Satisfaction', value: '95%' },
        { metric: 'Support Tickets', value: '60% Reduction' },
        { metric: 'Task Completion', value: '85% Faster' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'ClientFirst',
      industry: 'Customer Service',
      status: 'Completed',
      year: 2022
    },
    {
      id: 31,
      title: 'Natural Language Processing',
      category: 'ai',
      description: 'NLP system for document classification and information extraction.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'spaCy', 'NLTK', 'TensorFlow', 'Elasticsearch'],
      results: [
        { metric: 'Classification Accuracy', value: '94%' },
        { metric: 'Processing Speed', value: '15x Faster' },
        { metric: 'Data Extraction', value: '92% Accuracy' }
      ],
      duration: '5 months',
      team: '3 developers',
      client: 'TextAnalytics',
      industry: 'Document Processing',
      status: 'Completed',
      year: 2022
    },
    {
      id: 32,
      title: 'Microservices Architecture',
      category: 'cloud',
      description: 'Migration from monolith to microservices architecture with service mesh.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'Docker', 'Kubernetes', 'Istio', 'PostgreSQL'],
      results: [
        { metric: 'Scalability', value: '10x Better' },
        { metric: 'Development Speed', value: '3x Faster' },
        { metric: 'System Reliability', value: '99.9%' }
      ],
      duration: '8 months',
      team: '5 developers',
      client: 'ModularSoft',
      industry: 'Software Architecture',
      status: 'Completed',
      year: 2022
    },
    {
      id: 33,
      title: 'Project Management Tool',
      category: 'web',
      description: 'Agile project management platform with team collaboration features.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      results: [
        { metric: 'Team Productivity', value: '70% Better' },
        { metric: 'Project Delivery', value: '40% Faster' },
        { metric: 'User Adoption', value: '95%' }
      ],
      duration: '6 months',
      team: '4 developers',
      client: 'TaskMaster',
      industry: 'Project Management',
      status: 'Completed',
      year: 2022
    },
    {
      id: 34,
      title: 'Database Optimization',
      category: 'cloud',
      description: 'Database performance optimization and migration to cloud infrastructure.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PostgreSQL', 'Redis', 'AWS RDS', 'ElastiCache', 'Monitoring'],
      results: [
        { metric: 'Query Performance', value: '5x Faster' },
        { metric: 'Database Size', value: '60% Reduction' },
        { metric: 'Availability', value: '99.95%' }
      ],
      duration: '3 months',
      team: '2 developers',
      client: 'DataSpeed',
      industry: 'Database',
      status: 'Completed',
      year: 2022
    },
    {
      id: 35,
      title: 'Security Audit Platform',
      category: 'security',
      description: 'Automated security audit platform with vulnerability assessment.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OWASP ZAP', 'Nmap', 'React', 'PostgreSQL'],
      results: [
        { metric: 'Vulnerability Detection', value: '98%' },
        { metric: 'Audit Speed', value: '10x Faster' },
        { metric: 'Security Score', value: '95% Improvement' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'SecureAudit',
      industry: 'Cybersecurity',
      status: 'Completed',
      year: 2022
    },
    {
      id: 36,
      title: 'Mobile App Development',
      category: 'mobile',
      description: 'Cross-platform mobile application with offline capabilities.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Redux', 'SQLite', 'Firebase', 'Push Notifications'],
      results: [
        { metric: 'User Rating', value: '4.8/5' },
        { metric: 'Download Rate', value: '50K+/month' },
        { metric: 'Crash Rate', value: '<0.1%' }
      ],
      duration: '7 months',
      team: '4 developers',
      client: 'AppInnovate',
      industry: 'Mobile Apps',
      status: 'Completed',
      year: 2022
    },
    {
      id: 37,
      title: 'Cloud Storage Solution',
      category: 'cloud',
      description: 'Secure cloud storage platform with file sharing and collaboration features.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS S3', 'Lambda', 'API Gateway', 'React', 'DynamoDB'],
      results: [
        { metric: 'Storage Efficiency', value: '80% Better' },
        { metric: 'Access Speed', value: '3x Faster' },
        { metric: 'Security Rating', value: '99.9%' }
      ],
      duration: '5 months',
      team: '3 developers',
      client: 'CloudStore',
      industry: 'Cloud Storage',
      status: 'Completed',
      year: 2022
    },
    {
      id: 38,
      title: 'Business Intelligence Dashboard',
      category: 'web',
      description: 'Executive dashboard with KPI tracking and predictive analytics.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'Pandas', 'PostgreSQL'],
      results: [
        { metric: 'Decision Speed', value: '50% Faster' },
        { metric: 'Data Accuracy', value: '99%' },
        { metric: 'Executive Adoption', value: '100%' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'BITech',
      industry: 'Business Intelligence',
      status: 'Completed',
      year: 2022
    },

    // 2021 Projects (12 projects)
    {
      id: 39,
      title: 'Legacy System Modernization',
      category: 'web',
      description: 'Complete modernization of legacy COBOL system to modern web architecture.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes'],
      results: [
        { metric: 'Performance', value: '10x Faster' },
        { metric: 'Maintenance Cost', value: '70% Reduction' },
        { metric: 'User Experience', value: '95% Better' }
      ],
      duration: '12 months',
      team: '6 developers',
      client: 'OldTech Inc',
      industry: 'Legacy Systems',
      status: 'Completed',
      year: 2021
    },
    {
      id: 40,
      title: 'Predictive Analytics Engine',
      category: 'ai',
      description: 'Machine learning engine for sales forecasting and demand prediction.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Apache Spark', 'Kafka'],
      results: [
        { metric: 'Forecast Accuracy', value: '91%' },
        { metric: 'Inventory Optimization', value: '45%' },
        { metric: 'Revenue Impact', value: '$2.5M' }
      ],
      duration: '7 months',
      team: '4 developers',
      client: 'FutureCast',
      industry: 'Retail',
      status: 'Completed',
      year: 2021
    },
    {
      id: 41,
      title: 'Container Orchestration',
      category: 'cloud',
      description: 'Kubernetes-based container orchestration with auto-scaling and monitoring.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana'],
      results: [
        { metric: 'Resource Efficiency', value: '60% Better' },
        { metric: 'Deployment Speed', value: '8x Faster' },
        { metric: 'System Uptime', value: '99.8%' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'ContainerPro',
      industry: 'DevOps',
      status: 'Completed',
      year: 2021
    },
    {
      id: 42,
      title: 'E-learning Platform',
      category: 'web',
      description: 'Comprehensive e-learning platform with video streaming and assessments.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS S3'],
      results: [
        { metric: 'Student Engagement', value: '85%' },
        { metric: 'Course Completion', value: '78%' },
        { metric: 'Platform Uptime', value: '99.5%' }
      ],
      duration: '8 months',
      team: '5 developers',
      client: 'EduTech',
      industry: 'Education',
      status: 'Completed',
      year: 2021
    },
    {
      id: 43,
      title: 'Image Recognition System',
      category: 'ai',
      description: 'Deep learning system for automated image classification and tagging.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'Redis'],
      results: [
        { metric: 'Classification Accuracy', value: '96%' },
        { metric: 'Processing Speed', value: '100 images/sec' },
        { metric: 'Cost Reduction', value: '80%' }
      ],
      duration: '5 months',
      team: '3 developers',
      client: 'PhotoAI',
      industry: 'Computer Vision',
      status: 'Completed',
      year: 2021
    },
    {
      id: 44,
      title: 'REST API Development',
      category: 'cloud',
      description: 'Scalable REST API with authentication, rate limiting, and documentation.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
      results: [
        { metric: 'API Performance', value: '5x Faster' },
        { metric: 'Developer Adoption', value: '95%' },
        { metric: 'Uptime', value: '99.9%' }
      ],
      duration: '3 months',
      team: '2 developers',
      client: 'APIFirst',
      industry: 'API Development',
      status: 'Completed',
      year: 2021
    },
    {
      id: 45,
      title: 'Progressive Web App',
      category: 'web',
      description: 'PWA with offline capabilities and native app-like experience.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Service Workers', 'IndexedDB', 'PWA', 'Workbox'],
      results: [
        { metric: 'Load Time', value: '70% Faster' },
        { metric: 'User Engagement', value: '60% Better' },
        { metric: 'Offline Usage', value: '40%' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'WebForward',
      industry: 'Web Development',
      status: 'Completed',
      year: 2021
    },
    {
      id: 46,
      title: 'Automated Deployment',
      category: 'automation',
      description: 'Fully automated deployment pipeline with rollback capabilities.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jenkins', 'Ansible', 'Docker', 'Terraform', 'AWS'],
      results: [
        { metric: 'Deployment Time', value: '95% Reduction' },
        { metric: 'Error Rate', value: '90% Lower' },
        { metric: 'Team Productivity', value: '3x Better' }
      ],
      duration: '3 months',
      team: '2 developers',
      client: 'DeployFast',
      industry: 'DevOps',
      status: 'Completed',
      year: 2021
    },
    {
      id: 47,
      title: 'Data Migration Tool',
      category: 'automation',
      description: 'Automated data migration tool with validation and error handling.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Pandas', 'SQLAlchemy', 'Apache Airflow', 'PostgreSQL'],
      results: [
        { metric: 'Migration Speed', value: '10x Faster' },
        { metric: 'Data Accuracy', value: '99.9%' },
        { metric: 'Downtime', value: '90% Reduction' }
      ],
      duration: '2 months',
      team: '2 developers',
      client: 'DataMove',
      industry: 'Data Migration',
      status: 'Completed',
      year: 2021
    },
    {
      id: 48,
      title: 'User Authentication System',
      category: 'security',
      description: 'Multi-factor authentication system with SSO and role-based access.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['OAuth 2.0', 'JWT', 'LDAP', 'React', 'Node.js'],
      results: [
        { metric: 'Security Score', value: '99.8%' },
        { metric: 'Login Speed', value: '3x Faster' },
        { metric: 'User Satisfaction', value: '92%' }
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'SecureLogin',
      industry: 'Security',
      status: 'Completed',
      year: 2021
    },
    {
      id: 49,
      title: 'Real-time Notifications',
      category: 'web',
      description: 'Real-time notification system with multiple delivery channels.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Socket.io', 'Redis', 'Node.js', 'Push API', 'WebSockets'],
      results: [
        { metric: 'Delivery Speed', value: '<100ms' },
        { metric: 'Delivery Rate', value: '99.5%' },
        { metric: 'User Engagement', value: '75% Better' }
      ],
      duration: '3 months',
      team: '2 developers',
      client: 'NotifyNow',
      industry: 'Communication',
      status: 'Completed',
      year: 2021
    },
    {
      id: 50,
      title: 'Analytics Dashboard',
      category: 'web',
      description: 'Real-time analytics dashboard with customizable widgets and reports.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'Node.js', 'InfluxDB', 'Grafana'],
      results: [
        { metric: 'Data Processing', value: '1M events/sec' },
        { metric: 'Dashboard Load', value: '5x Faster' },
        { metric: 'User Adoption', value: '98%' }
      ],
      duration: '5 months',
      team: '4 developers',
      client: 'MetricsPro',
      industry: 'Analytics',
      status: 'Completed',
      year: 2021
    }
  ];

export const translations = {
    en: {
        title: 'Our Projects',
        subtitle: 'Explore our portfolio of 50+ successful projects that have delivered measurable results and business value across various industries.',
        searchPlaceholder: 'Search projects, technologies...',
        filter: 'Filter:',
        allProjects: 'All Projects',
        aiMl: 'AI/ML',
        webApps: 'Web Apps',
        automation: 'Automation',
        cloudDevops: 'Cloud/DevOps',
        mobile: 'Mobile',
        security: 'Security',
        viewDetails: 'View Details',
        keyResults: 'Key Results',
        technologies: 'Technologies',
        duration: 'Duration',
        team: 'Team',
        client: 'Client',
        industry: 'Industry',
        status: 'Status',
        completed: 'Completed',
        inProgress: 'In Progress',
        noProjects: 'No projects found matching your criteria.',
        ctaTitle: 'Ready to Start Your Project?',
        ctaSubtitle: 'Let\'s discuss how we can help you achieve similar results for your business.',
        getStarted: 'Get Started Today',
        viewServices: 'View Services'
    },
    es: {
        title: 'Nuestros Proyectos',
        subtitle: 'Explora nuestro portafolio de más de 50 proyectos exitosos que han entregado resultados medibles y valor comercial en diversas industrias.',
        searchPlaceholder: 'Buscar proyectos, tecnologías...',
        filter: 'Filtrar:',
        allProjects: 'Todos los Proyectos',
        aiMl: 'IA/ML',
        webApps: 'Aplicaciones Web',
        automation: 'Automatización',
        cloudDevops: 'Nube/DevOps',
        mobile: 'Móvil',
        security: 'Seguridad',
        viewDetails: 'Ver Detalles',
        keyResults: 'Resultados Clave',
        technologies: 'Tecnologías',
        duration: 'Duración',
        team: 'Equipo',
        client: 'Cliente',
        industry: 'Industria',
        status: 'Estado',
        completed: 'Completado',
        inProgress: 'En Progreso',
        noProjects: 'No se encontraron proyectos que coincidan con sus criterios.',
        ctaTitle: '¿Listo para Comenzar tu Proyecto?',
        ctaSubtitle: 'Hablemos sobre cómo podemos ayudarte a lograr resultados similares para tu negocio.',
        getStarted: 'Comenzar Hoy',
        viewServices: 'Ver Servicios'
    },
    fr: {
        title: 'Nos Projets',
        subtitle: 'Explorez notre portefeuille de plus de 50 projets réussis qui ont livré des résultats mesurables et une valeur commerciale dans diverses industries.',
        searchPlaceholder: 'Rechercher projets, technologies...',
        filter: 'Filtrer:',
        allProjects: 'Tous les Projets',
        aiMl: 'IA/ML',
        webApps: 'Applications Web',
        automation: 'Automatisation',
        cloudDevops: 'Cloud/DevOps',
        mobile: 'Mobile',
        security: 'Sécurité',
        viewDetails: 'Voir Détails',
        keyResults: 'Résultats Clés',
        technologies: 'Technologies',
        duration: 'Durée',
        team: 'Équipe',
        client: 'Client',
        industry: 'Industrie',
        status: 'Statut',
        completed: 'Terminé',
        inProgress: 'En Cours',
        noProjects: 'Aucun projet trouvé correspondant à vos critères.',
        ctaTitle: 'Prêt à Commencer Votre Projet?',
        ctaSubtitle: 'Discutons de la façon dont nous pouvons vous aider à obtenir des résultats similaires pour votre entreprise.',
        getStarted: 'Commencer Aujourd\'hui',
        viewServices: 'Voir Services'
    },
    de: {
        title: 'Unsere Projekte',
        subtitle: 'Entdecken Sie unser Portfolio von über 50 erfolgreichen Projekten, die messbare Ergebnisse und Geschäftswert in verschiedenen Branchen geliefert haben.',
        searchPlaceholder: 'Projekte, Technologien suchen...',
        filter: 'Filter:',
        allProjects: 'Alle Projekte',
        aiMl: 'KI/ML',
        webApps: 'Web-Apps',
        automation: 'Automatisierung',
        cloudDevops: 'Cloud/DevOps',
        mobile: 'Mobil',
        security: 'Sicherheit',
        viewDetails: 'Details Anzeigen',
        keyResults: 'Wichtige Ergebnisse',
        technologies: 'Technologien',
        duration: 'Dauer',
        team: 'Team',
        client: 'Kunde',
        industry: 'Branche',
        status: 'Status',
        completed: 'Abgeschlossen',
        inProgress: 'In Bearbeitung',
        noProjects: 'Keine Projekte gefunden, die Ihren Kriterien entsprechen.',
        ctaTitle: 'Bereit, Ihr Projekt zu Starten?',
        ctaSubtitle: 'Lassen Sie uns besprechen, wie wir Ihnen helfen können, ähnliche Ergebnisse für Ihr Unternehmen zu erzielen.',
        getStarted: 'Heute Beginnen',
        viewServices: 'Services Anzeigen'
    },
    zh: {
        title: '我们的项目',
        subtitle: '探索我们50多个成功项目的作品集，这些项目在各个行业中提供了可衡量的结果和商业价值。',
        searchPlaceholder: '搜索项目、技术...',
        filter: '筛选：',
        allProjects: '所有项目',
        aiMl: '人工智能/机器学习',
        webApps: 'Web应用',
        automation: '自动化',
        cloudDevops: '云/DevOps',
        mobile: '移动应用',
        security: '安全',
        viewDetails: '查看详情',
        keyResults: '关键结果',
        technologies: '技术',
        duration: '持续时间',
        team: '团队',
        client: '客户',
        industry: '行业',
        status: '状态',
        completed: '已完成',
        inProgress: '进行中',
        noProjects: '未找到符合您条件的项目。',
        ctaTitle: '准备开始您的项目？',
        ctaSubtitle: '让我们讨论如何帮助您为您的业务实现类似的结果。',
        getStarted: '今天开始',
        viewServices: '查看服务'
    },
    ja: {
        title: '私たちのプロジェクト',
        subtitle: '様々な業界で測定可能な結果とビジネス価値を提供した50以上の成功プロジェクトのポートフォリオをご覧ください。',
        searchPlaceholder: 'プロジェクト、技術を検索...',
        filter: 'フィルター：',
        allProjects: 'すべてのプロジェクト',
        aiMl: 'AI/ML',
        webApps: 'Webアプリ',
        automation: '自動化',
        cloudDevops: 'クラウド/DevOps',
        mobile: 'モバイル',
        security: 'セキュリティ',
        viewDetails: '詳細を見る',
        keyResults: '主要な結果',
        technologies: '技術',
        duration: '期間',
        team: 'チーム',
        client: 'クライアント',
        industry: '業界',
        status: 'ステータス',
        completed: '完了',
        inProgress: '進行中',
        noProjects: '条件に一致するプロジェクトが見つかりません。',
        ctaTitle: 'プロジェクトを始める準備はできましたか？',
        ctaSubtitle: 'あなたのビジネスで同様の結果を達成するお手伝いについて話し合いましょう。',
        getStarted: '今日始める',
        viewServices: 'サービスを見る'
    }
};