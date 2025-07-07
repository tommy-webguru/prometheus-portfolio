'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Target, Eye, MessageSquare, BarChart3, CheckCircle, ArrowRight, Users, Clock, DollarSign, Star, TrendingUp, Database, Cpu, Network } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AIMLPage() {
  const features = [
    {
      icon: Brain,
      title: 'Custom Model Development',
      description: 'Tailored machine learning models designed specifically for your business requirements and data.'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for object detection, facial recognition, and visual inspection.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, chatbots, and language understanding systems.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast trends, predict customer behavior, and optimize business operations with data-driven insights.'
    },
    {
      icon: Target,
      title: 'Recommendation Systems',
      description: 'Personalized recommendation engines that increase engagement and drive conversions.'
    },
    {
      icon: Network,
      title: 'Deep Learning Solutions',
      description: 'Neural networks and deep learning architectures for complex pattern recognition tasks.'
    }
  ];

  const technologies = [
    { name: 'TensorFlow', category: 'Framework' },
    { name: 'PyTorch', category: 'Framework' },
    { name: 'Scikit-learn', category: 'Library' },
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'NLTK', category: 'NLP' },
    { name: 'spaCy', category: 'NLP' },
    { name: 'Hugging Face', category: 'Transformers' },
    { name: 'OpenAI GPT', category: 'Language Models' },
    { name: 'Apache Spark', category: 'Big Data' },
    { name: 'MLflow', category: 'MLOps' },
    { name: 'Kubeflow', category: 'ML Pipeline' },
    { name: 'Docker', category: 'Deployment' }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Recommendation Engine',
      client: 'ShopSmart',
      challenge: 'Increase customer engagement and sales through personalized recommendations',
      solution: 'Collaborative filtering and deep learning recommendation system',
      results: [
        '35% increase in click-through rates',
        '28% boost in average order value',
        '42% improvement in customer retention'
      ]
    },
    {
      title: 'Medical Image Analysis',
      client: 'HealthTech Solutions',
      challenge: 'Automate detection of anomalies in medical imaging',
      solution: 'Convolutional neural networks for image classification and segmentation',
      results: [
        '94% accuracy in anomaly detection',
        '60% reduction in diagnosis time',
        '99.2% sensitivity in critical cases'
      ]
    },
    {
      title: 'Fraud Detection System',
      client: 'SecurePay',
      challenge: 'Real-time fraud detection with minimal false positives',
      solution: 'Ensemble learning with anomaly detection algorithms',
      results: [
        '89% fraud detection accuracy',
        '75% reduction in false positives',
        '$2M+ in prevented fraudulent transactions'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Data Assessment',
      description: 'Analyze your data quality, volume, and structure to determine the best AI/ML approach.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Model Design',
      description: 'Design and prototype machine learning models tailored to your specific use case.',
      duration: '2-4 weeks'
    },
    {
      step: '03',
      title: 'Training & Validation',
      description: 'Train models with your data and validate performance using rigorous testing methodologies.',
      duration: '3-6 weeks'
    },
    {
      step: '04',
      title: 'Deployment & Monitoring',
      description: 'Deploy models to production with continuous monitoring and performance optimization.',
      duration: 'Ongoing'
    }
  ];

  const pricing = [
    {
      name: 'Proof of Concept',
      price: '$25,000',
      description: 'Validate AI/ML feasibility for your use case',
      features: [
        'Data analysis and feasibility study',
        'Prototype model development',
        'Performance evaluation',
        'Technical recommendations',
        '4 weeks delivery'
      ]
    },
    {
      name: 'Production Ready',
      price: '$75,000',
      description: 'Complete AI/ML solution deployment',
      features: [
        'Custom model development',
        'Data pipeline setup',
        'Model training and optimization',
        'Production deployment',
        'API integration',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise AI',
      price: '$150,000+',
      description: 'Comprehensive AI transformation',
      features: [
        'Multiple AI/ML models',
        'Advanced MLOps pipeline',
        'Real-time inference',
        'A/B testing framework',
        'Continuous learning',
        '12 months support'
      ]
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Supervised, unsupervised, and reinforcement learning algorithms',
      icon: Cpu,
      applications: ['Classification', 'Regression', 'Clustering', 'Dimensionality Reduction']
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks for complex pattern recognition and prediction',
      icon: Network,
      applications: ['Image Recognition', 'Speech Processing', 'Time Series', 'Generative Models']
    },
    {
      title: 'Data Science',
      description: 'Statistical analysis and data mining for business insights',
      icon: Database,
      applications: ['Exploratory Analysis', 'Feature Engineering', 'Statistical Modeling', 'Data Visualization']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-800 dark:text-purple-300 font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              AI & Machine Learning Solutions
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              AI & <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Machine Learning</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business. Our AI/ML solutions 
              provide intelligent automation, predictive insights, and data-driven decision making that 
              drive growth and competitive advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-purple-600 dark:hover:border-purple-400 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
            >
              View AI Demos
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
              { metric: 'Model Accuracy', value: '95%+', icon: Target },
              { metric: 'Processing Speed', value: '10x Faster', icon: Zap },
              { metric: 'Cost Reduction', value: '60%', icon: DollarSign },
              { metric: 'ROI Increase', value: '300%', icon: TrendingUp }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.metric}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">AI Capabilities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and machine learning capabilities to solve complex business challenges.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
                >
                  <Icon className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.applications.map((app, appIndex) => (
                      <span key={appIndex} className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {app}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our AI/ML Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              End-to-end AI and machine learning solutions tailored to your business needs.
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
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">AI/ML Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge AI frameworks and tools to build robust machine learning solutions.
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
                className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">AI Success Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our AI solutions have delivered measurable business value.
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
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{study.client}</p>
                
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our AI Development Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach to AI development that ensures successful model deployment and business impact.
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{step.description}</p>
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">AI/ML Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to match your AI project scope and business requirements.
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
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg relative ${
                  plan.popular ? 'ring-2 ring-purple-600 dark:ring-purple-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">{plan.price}</div>
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
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Harness AI for Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's explore how artificial intelligence can transform your operations, 
              improve decision-making, and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
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