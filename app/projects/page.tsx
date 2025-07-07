'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Calendar, Users, TrendingUp, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Projects', count: 6 },
    { id: 'ai', label: 'AI/ML', count: 2 },
    { id: 'web', label: 'Web Apps', count: 2 },
    { id: 'automation', label: 'Automation', count: 1 },
    { id: 'cloud', label: 'Cloud/DevOps', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Analytics Platform',
      category: 'ai',
      description: 'AI-powered analytics platform that provides real-time insights into customer behavior and sales patterns.',
      longDescription: 'A comprehensive analytics solution that leverages machine learning algorithms to analyze customer behavior, predict sales trends, and optimize inventory management. The platform processes over 1 million data points daily and provides actionable insights through an intuitive dashboard.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS', 'Redis', 'Docker'],
      results: [
        { metric: 'Revenue Increase', value: '35%' },
        { metric: 'Analysis Speed', value: '10x Faster' },
        { metric: 'User Satisfaction', value: '95%' },
        { metric: 'Data Processing', value: '1M+ points/day' }
      ],
      challenges: [
        'Processing large volumes of real-time data',
        'Creating accurate predictive models',
        'Ensuring scalable architecture',
        'Implementing real-time dashboards'
      ],
      solutions: [
        'Implemented distributed data processing with Apache Kafka',
        'Developed custom ML models with 95% accuracy',
        'Built microservices architecture on AWS',
        'Created real-time WebSocket connections'
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'web',
      description: 'Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine capabilities.',
      longDescription: 'A full-featured healthcare management system that streamlines patient care, appointment scheduling, and telemedicine consultations. The platform includes secure patient portals, doctor dashboards, and integrated billing systems.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'Docker', 'Stripe', 'WebRTC'],
      results: [
        { metric: 'Patient Satisfaction', value: '92%' },
        { metric: 'Processing Time', value: '60% Faster' },
        { metric: 'Error Reduction', value: '80%' },
        { metric: 'Cost Savings', value: '$200K/year' }
      ],
      challenges: [
        'HIPAA compliance requirements',
        'Real-time video consultations',
        'Complex appointment scheduling',
        'Secure data transmission'
      ],
      solutions: [
        'Implemented end-to-end encryption',
        'Built custom WebRTC solution',
        'Created intelligent scheduling algorithm',
        'Achieved HIPAA compliance certification'
      ],
      duration: '6 months',
      team: '4 developers',
      client: 'MedCare Clinic',
      industry: 'Healthcare',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Supply Chain Automation',
      category: 'automation',
      description: 'End-to-end automation solution for inventory management, order processing, and supplier communications.',
      longDescription: 'A comprehensive automation platform that revolutionizes supply chain operations by automating inventory tracking, order processing, and supplier communications. The system integrates with multiple ERP systems and provides real-time visibility across the entire supply chain.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'RPA', 'API Integration', 'PostgreSQL', 'Redis', 'Celery', 'FastAPI'],
      results: [
        { metric: 'Manual Work Reduction', value: '75%' },
        { metric: 'Order Accuracy', value: '99.5%' },
        { metric: 'Cost Savings', value: '$500K/year' },
        { metric: 'Processing Speed', value: '5x Faster' }
      ],
      challenges: [
        'Integrating legacy systems',
        'Complex business rules',
        'Real-time inventory tracking',
        'Multi-vendor coordination'
      ],
      solutions: [
        'Built custom API adapters',
        'Implemented rule engine',
        'Created real-time tracking system',
        'Developed vendor portal'
      ],
      duration: '3 months',
      team: '2 developers',
      client: 'LogiFlow Corp',
      industry: 'Logistics',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Multi-Cloud Infrastructure',
      category: 'cloud',
      description: 'Scalable multi-cloud infrastructure with automated deployment, monitoring, and disaster recovery.',
      longDescription: 'A robust multi-cloud infrastructure solution that spans AWS, Azure, and GCP. The platform includes automated deployment pipelines, comprehensive monitoring, and disaster recovery capabilities to ensure 99.9% uptime.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Terraform', 'Kubernetes', 'AWS', 'Azure', 'Prometheus', 'Grafana', 'Helm'],
      results: [
        { metric: 'Uptime', value: '99.9%' },
        { metric: 'Deployment Speed', value: '5x Faster' },
        { metric: 'Cost Optimization', value: '40%' },
        { metric: 'Recovery Time', value: '<5 minutes' }
      ],
      challenges: [
        'Multi-cloud complexity',
        'Automated failover',
        'Cost optimization',
        'Security compliance'
      ],
      solutions: [
        'Implemented Infrastructure as Code',
        'Built automated failover system',
        'Created cost monitoring dashboard',
        'Achieved SOC 2 compliance'
      ],
      duration: '5 months',
      team: '3 developers',
      client: 'TechScale Inc',
      industry: 'Technology',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Real-time Trading Platform',
      category: 'web',
      description: 'High-performance trading platform with real-time data processing and advanced charting capabilities.',
      longDescription: 'A sophisticated trading platform that handles high-frequency trading with microsecond latency. The platform includes advanced charting, risk management, and portfolio analytics with support for multiple asset classes.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'WebSocket', 'Node.js', 'Redis', 'Chart.js', 'PostgreSQL', 'Docker'],
      results: [
        { metric: 'Latency', value: '<50ms' },
        { metric: 'Concurrent Users', value: '10,000+' },
        { metric: 'Transaction Volume', value: '$2M+/day' },
        { metric: 'Uptime', value: '99.95%' }
      ],
      challenges: [
        'Ultra-low latency requirements',
        'High-frequency data processing',
        'Real-time risk management',
        'Regulatory compliance'
      ],
      solutions: [
        'Optimized WebSocket connections',
        'Implemented in-memory caching',
        'Built real-time risk engine',
        'Achieved regulatory approval'
      ],
      duration: '8 months',
      team: '5 developers',
      client: 'FinTech Pro',
      industry: 'Financial Services',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Smart Document Processing',
      category: 'ai',
      description: 'AI-powered document processing system that extracts, analyzes, and categorizes business documents.',
      longDescription: 'An intelligent document processing solution that uses computer vision and NLP to automatically extract data from various document types, classify them, and integrate the information into business systems.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenCV', 'NLP', 'FastAPI', 'MongoDB', 'Tesseract', 'spaCy'],
      results: [
        { metric: 'Processing Speed', value: '20x Faster' },
        { metric: 'Accuracy', value: '97%' },
        { metric: 'Cost Reduction', value: '60%' },
        { metric: 'Documents/Day', value: '10,000+' }
      ],
      challenges: [
        'Various document formats',
        'Handwriting recognition',
        'Data validation',
        'System integration'
      ],
      solutions: [
        'Built multi-format parser',
        'Implemented OCR with ML',
        'Created validation rules engine',
        'Developed REST API integration'
      ],
      duration: '4 months',
      team: '3 developers',
      client: 'DocuFlow Systems',
      industry: 'Document Management',
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-red-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 dark:bg-red-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that have delivered measurable results and business value.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Filter:</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 dark:bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-600 dark:bg-red-600 text-white text-sm rounded-full">
                        {categories.find(c => c.id === project.category)?.label}
                      </span>
                      <div className="flex space-x-2">
                        <a
                          href={project.link}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a
                          href={project.github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.industry}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {project.team}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Key Results
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-gray-50 dark:bg-gray-600 rounded p-2">
                          <div className="text-xs text-gray-600 dark:text-gray-400">{result.metric}</div>
                          <div className="text-sm font-semibold text-blue-600 dark:text-red-400">{result.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button 
                    className="w-full bg-blue-600 dark:bg-red-600 hover:bg-blue-700 dark:hover:bg-red-700 text-white"
                    onClick={() => {
                      // In a real app, this would navigate to a detailed project page
                      console.log('View project details:', project.id);
                    }}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-600 dark:to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 dark:text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 dark:text-red-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-red-600 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}