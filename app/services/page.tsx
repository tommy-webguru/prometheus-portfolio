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
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
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

  const processSteps = [
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

  const whyChooseUs = [
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide end-to-end technology solutions that drive business growth and operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    activeService === index ? 'ring-2 ring-blue-500 dark:ring-red-500 scale-105' : 'hover:scale-105'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} dark:from-red-600 dark:to-red-800 flex items-center justify-center mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.shortDescription}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 dark:text-red-400">{service.pricing}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{service.timeline}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-blue-600 dark:text-red-400 font-medium">
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
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${services[activeService].gradient} dark:from-red-600 dark:to-red-800 flex items-center justify-center mr-4`}>
                    {(() => {
                      const Icon = services[activeService].icon;
                      return <Icon className="h-8 w-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{services[activeService].title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">Comprehensive solution</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{services[activeService].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Starting Price</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">{services[activeService].pricing}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Timeline</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">{services[activeService].timeline}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies We Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-red-900/30 text-blue-800 dark:text-red-300 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What's Included</h4>
                <div className="space-y-3 mb-6">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Benefits</h4>
                <div className="grid grid-cols-2 gap-3">
                  {services[activeService].benefits.map((benefit, index) => (
                    <div key={index} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <div className="text-sm font-medium text-green-800 dark:text-green-300">{benefit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-red-600 dark:to-red-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{step.description}</p>
                <span className="text-sm text-blue-600 dark:text-red-400 font-medium">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Prometheus?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-red-400" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 dark:text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 dark:text-red-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-red-600 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}