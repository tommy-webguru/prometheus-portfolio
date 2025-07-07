'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Cloud, 
  Brain, 
  Settings, 
  Code, 
  Smartphone, 
  Shield, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      shortDescription: 'Scalable infrastructure and automated deployment pipelines',
      description: 'We architect and implement robust cloud solutions that scale with your business. From containerization to CI/CD pipelines, we ensure your applications are deployed efficiently and maintained reliably.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      features: [
        'Automated deployment pipelines',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring & alerting',
        'Security best practices'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      shortDescription: 'Intelligent solutions that learn and adapt to your business needs',
      description: 'Transform your data into actionable insights with our AI/ML solutions. We develop custom models, implement neural networks, and create intelligent systems that drive business growth.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI'],
      features: [
        'Custom model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI integration & deployment'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Process Automation',
      shortDescription: 'Streamline operations with intelligent automation solutions',
      description: 'Eliminate repetitive tasks and optimize workflows with our automation solutions. We design and implement systems that reduce manual effort while increasing accuracy and efficiency.',
      technologies: ['Python', 'RPA', 'Zapier', 'Power Automate', 'API Integration'],
      features: [
        'Workflow automation',
        'Data processing pipelines',
        'API integrations',
        'Business process optimization',
        'Custom automation tools'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Backend Development',
      shortDescription: 'Robust, scalable server-side solutions and APIs',
      description: 'Build powerful backend systems that handle your business logic efficiently. We create secure, scalable APIs and databases that serve as the foundation for your applications.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
      features: [
        'RESTful API development',
        'Database design & optimization',
        'Microservices architecture',
        'Real-time applications',
        'Performance optimization'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Frontend Development',
      shortDescription: 'Modern, responsive user interfaces that engage and convert',
      description: 'Create stunning user experiences with our frontend development services. We build responsive, accessible, and performant web applications using the latest technologies.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Responsive web design',
        'Progressive web apps',
        'Modern UI/UX implementation',
        'Performance optimization',
        'Accessibility compliance'
      ],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      shortDescription: 'Comprehensive security measures to protect your digital assets',
      description: 'Safeguard your applications and data with our comprehensive security solutions. We implement best practices, conduct security audits, and ensure your systems are protected against threats.',
      technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Penetration Testing', 'Security Audits'],
      features: [
        'Security architecture review',
        'Vulnerability assessments',
        'Authentication systems',
        'Data encryption',
        'Compliance consulting'
      ],
      gradient: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end technology solutions that drive business growth and operational efficiency.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  activeService === index ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-blue-600 font-medium">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Service View */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${services[activeService].gradient} flex items-center justify-center mr-4`}>
                  {(() => {
                    const Icon = services[activeService].icon;
                    return <Icon className="h-8 w-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                  <p className="text-gray-600">Comprehensive solution</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{services[activeService].description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h4>
              <div className="space-y-3">
                {services[activeService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;