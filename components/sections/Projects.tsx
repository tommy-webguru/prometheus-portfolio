'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Calendar, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'web', label: 'Web Apps' },
    { id: 'automation', label: 'Automation' },
    { id: 'cloud', label: 'Cloud/DevOps' }
  ];

  const projects = [
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

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have delivered measurable results and business value.
          </p>
        </motion.div>

        {/* Category Filter */}
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
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {project.team}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Key Results
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-700">{result.metric}</span>
                        <span className="text-sm font-semibold text-blue-600">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;