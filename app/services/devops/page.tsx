'use client';

import { motion } from 'framer-motion';
import { Cloud, Server, GitBranch, Shield, Zap, CheckCircle, ArrowRight, Users, Clock, DollarSign, Star, TrendingUp, Monitor, Database, Settings } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DevOpsPage() {
  const features = [
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

  const technologies = [
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

  const caseStudies = [
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

  const process = [
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

  const pricing = [
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 dark:bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-300 font-medium mb-6">
              <Cloud className="h-4 w-4 mr-2" />
              DevOps & Cloud Solutions
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              DevOps & <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Cloud Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your development lifecycle with our comprehensive DevOps and cloud solutions. 
              We implement scalable infrastructure, automated pipelines, and monitoring systems that 
              accelerate delivery while ensuring reliability and security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                Start Your DevOps Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
            >
              View Case Studies
            </Button>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { metric: 'Deployment Speed', value: '10x Faster', icon: Zap },
              { metric: 'Uptime Guarantee', value: '99.9%', icon: Shield },
              { metric: 'Cost Reduction', value: '40%', icon: DollarSign },
              { metric: 'Recovery Time', value: '<5 min', icon: Clock }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.metric}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our DevOps Capabilities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive DevOps solutions that streamline your development process and enhance operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Technologies We Master</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work with industry-leading tools and platforms to deliver robust DevOps solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Success Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our DevOps solutions have transformed businesses.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{study.client}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful DevOps transformation with minimal disruption.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{step.description}</p>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Pricing Plans</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the right DevOps package for your business needs and scale.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg relative ${
                  plan.popular ? 'ring-2 ring-blue-600 dark:ring-blue-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{plan.price}</div>
                  <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <Button 
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-900 dark:text-white'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our DevOps expertise can accelerate your development process 
              and improve your operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}