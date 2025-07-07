'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Users, Target, Award, CheckCircle, Calendar, TrendingUp, Globe, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver solutions that work consistently and scale with your business growth.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology meets practical solutions for real-world challenges.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with your team to ensure seamless integration and knowledge transfer.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Every project is measured by tangible outcomes and measurable business impact.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const milestones = [
    { 
      year: '2020', 
      event: 'Founded Prometheus Digital Studio', 
      description: 'Started with a vision to transform businesses through technology',
      highlight: true 
    },
    { 
      year: '2021', 
      event: 'Delivered first AI/ML solution', 
      description: 'Launched our first machine learning project for e-commerce analytics',
      highlight: false 
    },
    { 
      year: '2022', 
      event: 'Expanded to full-stack development', 
      description: 'Added comprehensive web and mobile development services',
      highlight: false 
    },
    { 
      year: '2023', 
      event: 'Achieved 98% client satisfaction', 
      description: 'Reached industry-leading satisfaction rates through quality delivery',
      highlight: true 
    },
    { 
      year: '2024', 
      event: 'Launched cloud automation services', 
      description: 'Introduced advanced DevOps and cloud infrastructure solutions',
      highlight: false 
    }
  ];

  const achievements = [
    { metric: 'Projects Completed', value: '150+', icon: CheckCircle },
    { metric: 'Client Satisfaction', value: '98%', icon: Heart },
    { metric: 'Years Experience', value: '50+', icon: Calendar },
    { metric: 'Technologies Mastered', value: '25+', icon: TrendingUp },
    { metric: 'Countries Served', value: '12', icon: Globe },
    { metric: 'Team Members', value: '5', icon: Users }
  ];

  const principles = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every line of code, every design decision, and every solution is crafted with meticulous attention to detail.',
      icon: Award
    },
    {
      title: 'Transparent Communication',
      description: 'Clear, honest communication is the foundation of successful partnerships. We keep you informed every step of the way.',
      icon: Users
    },
    {
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and so do we. Our team stays ahead of the curve with continuous learning and skill development.',
      icon: TrendingUp
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the tangible value we deliver to your business.',
      icon: Target
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
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Prometheus</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're a team of five passionate technologists who believe in the power of clean, 
              scalable solutions. Our direct approach and commitment to excellence has helped 
              businesses transform their digital landscape.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-red-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{achievement.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{achievement.metric}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2020, Prometheus Digital Studio emerged from a simple belief: 
                  technology should solve real problems, not create new ones. We started as 
                  a small team with big ambitions and a commitment to delivering exceptional results.
                </p>
                <p>
                  Today, we're proud to have delivered over 150 projects, maintaining a 98% 
                  client satisfaction rate while staying true to our core values of reliability, 
                  innovation, and transparency.
                </p>
                <p>
                  Our minimum project budget reflects our commitment to quality over quantity. 
                  We prefer to work on meaningful projects where we can make a real difference, 
                  rather than spreading ourselves thin across numerous small tasks.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-red-900/20 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 dark:text-red-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Commitment</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Every project we undertake is backed by our guarantee of excellence. 
                  We don't just deliver code; we deliver solutions that drive business growth 
                  and operational efficiency.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-start p-4 rounded-lg transition-all duration-300 ${
                      milestone.highlight 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-red-900/20 dark:to-red-800/20 border-l-4 border-blue-600 dark:border-red-400' 
                        : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                      milestone.highlight ? 'bg-blue-600 dark:bg-red-600' : 'bg-gray-400 dark:bg-gray-600'
                    }`}>
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium mb-1 ${
                        milestone.highlight ? 'text-blue-900 dark:text-red-300' : 'text-gray-900 dark:text-white'
                      }`}>
                        {milestone.event}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                    {milestone.highlight && (
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${value.color} dark:from-red-600 dark:to-red-800 rounded-full flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Principles</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The fundamental beliefs that shape how we work and deliver value to our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-red-600 dark:to-red-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{principle.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{principle.description}</p>
                  </div>
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-blue-100 dark:text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our values and expertise can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 dark:text-red-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                  Get Started
                </Button>
              </Link>
              <Link href="/team">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-red-600 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}