'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Zap, Target, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { stats, features, testimonials, projectHistory, agileMethodologies } from './page.constants';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStat, setCurrentStat] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectHistory.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-gray-600"></div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-600 dark:border-red-500 border-t-transparent animate-spin"></div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Prometheus Digital Studio</h1>
          <p className="text-gray-600 dark:text-gray-300">Igniting digital excellence through Agile innovation</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-red-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-red-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-200 dark:bg-red-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-red-900/30 rounded-full text-blue-800 dark:text-red-300 font-medium mb-6">
                    <Zap className="h-4 w-4 mr-2" />
                    Agile Full-Stack IT Solutions
                  </div>

                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Igniting
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent"> Digital</span>
                    <br />
                    Excellence
                  </h1>

                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                    We are a certified Agile team specializing in Scrum and Kanban methodologies.
                    Our expertise spans AI/ML, DevOps, automation, and full-stack development,
                    delivering scalable, secure, and innovative technology solutions that transform businesses.
                  </p>

                  <div className="bg-blue-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-blue-600 dark:border-red-400">
                    <p className="text-blue-800 dark:text-red-300 font-medium">
                      🏆 Certified Scrum Masters & Kanban Practitioners
                    </p>
                    <p className="text-blue-700 dark:text-red-400 text-sm mt-1">
                      Delivering projects with 98% client satisfaction through proven Agile methodologies
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                      Start Your Agile Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-red-600 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-red-400 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Our Process
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8"
                >
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        className={`text-center p-4 rounded-lg transition-all duration-300 ${currentStat === index
                            ? 'bg-white dark:bg-gray-800 shadow-lg scale-105'
                            : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
                          }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-red-400" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative"
                >
                  {/* Main Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-red-600 dark:to-red-800 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">P</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Prometheus Studio</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Agile Development</p>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sprint Status</span>
                          <span className="text-sm text-green-600 dark:text-green-400 font-medium">On Track</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Velocity</span>
                          <span className="text-sm text-blue-600 dark:text-red-400 font-medium">98% Score</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Deployment</span>
                          <span className="text-sm text-purple-600 dark:text-red-300 font-medium">Automated</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ready for Production</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-600 dark:to-red-800 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2, delay: 1 }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-6 -right-6 bg-orange-500 dark:bg-red-500 text-white p-3 rounded-full shadow-lg"
                  >
                    <Zap className="h-6 w-6" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-6 -left-6 bg-purple-500 dark:bg-red-600 text-white p-3 rounded-full shadow-lg"
                  >
                    <Target className="h-6 w-6" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Project History Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Project History</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Over 50 successful projects delivered across various industries, showcasing our expertise
                in Agile methodologies and cutting-edge technology solutions.
              </p>
            </motion.div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {projectHistory[currentProject].year} Projects
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {projectHistory[currentProject].projects.length} Projects Completed
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectHistory[currentProject].projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-gray-50 dark:bg-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{project.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                            }`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{project.client}</p>
                        <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-red-900/30 text-blue-800 dark:text-red-300 text-xs rounded-full">
                          {project.type}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Project Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {projectHistory.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentProject === index
                        ? 'bg-blue-600 dark:bg-red-400'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Agile Methodologies Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Agile</span> Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                As certified Agile practitioners, we master multiple methodologies to ensure your project's success.
                Our team holds certifications in Scrum Master, Product Owner, Kanban, and SAFe frameworks,
                delivering consistent results through proven iterative approaches.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {agileMethodologies.map((methodology, index) => {
                const Icon = methodology.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{methodology.symbol}</div>
                    <Icon className="h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-red-400" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{methodology.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{methodology.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Agile Works for Complex Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Our Agile approach ensures transparency, adaptability, and continuous value delivery.
                    We break down complex projects into manageable sprints, allowing for regular feedback
                    and course corrections that keep your project aligned with business objectives.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Daily standups for transparent communication
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Sprint reviews with stakeholder feedback
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Continuous integration and deployment
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Our certified Scrum Masters and Product Owners ensure that every sprint delivers
                    measurable value while maintaining the flexibility to adapt to changing requirements
                    and market conditions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Retrospectives for continuous improvement
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Burndown charts for progress tracking
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Risk mitigation through iterative delivery
                    </li>
                  </ul>
                </div>
              </div>
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
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Prometheus</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We combine deep technical expertise with proven Agile methodologies to deliver solutions
                that not only meet your current needs but scale with your business growth. Our approach
                ensures transparency, quality, and measurable results at every stage of development.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-red-600 dark:to-red-800 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our Agile approach and technical expertise have helped businesses across industries
                achieve remarkable results. Here's what our clients say about working with us.
              </p>
            </motion.div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto"
                >
                  <div className="flex items-start mb-6">
                    <Quote className="h-8 w-8 text-blue-600 dark:text-red-400 mr-4 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {testimonials[currentTestimonial].content}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {testimonials[currentTestimonial].author}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                          </p>
                          <div className="flex items-center mt-2">
                            <span className="text-sm text-blue-600 dark:text-red-400 font-medium mr-2">
                              {testimonials[currentTestimonial].project}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              • {testimonials[currentTestimonial].industry}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index
                        ? 'bg-blue-600 dark:bg-red-400'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Client Feedback CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Share Your Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We value your feedback and continuously improve our services based on client input.
                </p>
                <Link href="/contact?feedback=true">
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                    Leave Feedback
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
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
                Ready to Transform Your Business with Agile Excellence?
              </h2>
              <p className="text-xl text-blue-100 dark:text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our proven Agile methodologies and technical expertise can help you
                achieve your digital transformation goals. Our team is ready to deliver exceptional
                results through transparent, iterative development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-blue-600 dark:text-red-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                    Start Your Agile Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-red-600 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}