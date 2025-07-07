'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, MessageSquare, Calendar, Users, Star, ThumbsUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    project: '',
    timeline: '',
    message: '',
    source: '',
    feedback: '',
    rating: 5,
    projectExperience: '',
    recommendation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState('contact');

  useEffect(() => {
    // Check if this is a feedback request
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('feedback') === 'true') {
      setActiveTab('feedback');
    }
  }, []);

  const budgetOptions = [
    { value: '10k-25k', label: '$10K - $25K' },
    { value: '25k-50k', label: '$25K - $50K' },
    { value: '50k-100k', label: '$50K - $100K' },
    { value: '100k-250k', label: '$100K - $250K' },
    { value: '250k+', label: '$250K+' }
  ];

  const projectTypes = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'ai-ml', label: 'AI/ML Solution' },
    { value: 'automation', label: 'Process Automation' },
    { value: 'cloud-devops', label: 'Cloud/DevOps' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'consulting', label: 'Agile Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3months', label: '1-3 months' },
    { value: '3-6months', label: '3-6 months' },
    { value: '6months+', label: '6+ months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const sourceOptions = [
    { value: 'google', label: 'Google Search' },
    { value: 'referral', label: 'Referral' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'github', label: 'GitHub' },
    { value: 'conference', label: 'Conference/Event' },
    { value: 'other', label: 'Other' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST',
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@prometheus.studio',
      description: 'We respond within 24 hours',
      action: 'mailto:hello@prometheus.studio'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      description: 'Remote-first Agile team',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'For all inquiries',
      action: '#'
    }
  ];

  const faqs = [
    {
      question: 'What is your minimum project budget?',
      answer: 'Our minimum project budget is $10,000. This ensures we can dedicate the necessary time and resources to deliver high-quality solutions using our proven Agile methodologies. This budget allows for proper sprint planning, daily standups, and iterative development that characterizes our approach.'
    },
    {
      question: 'How do you implement Agile methodologies in projects?',
      answer: 'We are certified Scrum Masters and Kanban practitioners. Every project begins with sprint planning, includes daily standups, sprint reviews, and retrospectives. We use tools like Jira for backlog management and provide transparent burndown charts and velocity tracking throughout the project lifecycle.'
    },
    {
      question: 'How long does a typical Agile project take?',
      answer: 'Project timelines vary based on complexity and scope. We work in 2-week sprints, with simple projects taking 3-6 sprints (6-12 weeks), while complex enterprise solutions may require 12-24 sprints (6-12 months). Our Agile approach allows for early delivery of working software and continuous feedback.'
    },
    {
      question: 'Do you work with startups using Agile methods?',
      answer: 'Absolutely! Agile methodologies are perfect for startups due to their iterative nature and ability to adapt to changing requirements. We help startups build MVPs using Scrum, allowing for rapid prototyping, user feedback integration, and pivot capabilities when needed.'
    },
    {
      question: 'What Agile frameworks do you specialize in?',
      answer: 'Our team is certified in multiple Agile frameworks including Scrum, Kanban, SAFe (Scaled Agile Framework), and DevOps practices. We also implement Lean principles and continuous integration/continuous deployment (CI/CD) pipelines to ensure efficient delivery.'
    },
    {
      question: 'How do you handle changing requirements during development?',
      answer: 'Agile methodologies are designed for change. We maintain a prioritized product backlog, conduct regular sprint reviews with stakeholders, and use retrospectives to continuously improve our process. Changes are welcomed and incorporated through proper backlog refinement and sprint planning.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive support packages including maintenance, updates, monitoring, and feature enhancements. Our DevOps practices ensure continuous monitoring, and we can provide ongoing Agile coaching to help your internal teams adopt these methodologies.'
    },
    {
      question: 'How do you ensure transparency in Agile projects?',
      answer: 'Transparency is core to Agile. We provide access to our project management tools, conduct regular demos, share burndown charts and velocity metrics, and maintain open communication channels. Stakeholders have real-time visibility into project progress and can participate in sprint reviews.'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        project: '',
        timeline: '',
        message: '',
        source: '',
        feedback: '',
        rating: 5,
        projectExperience: '',
        recommendation: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Let's Build Something <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Amazing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology and proven Agile methodologies? 
              Get in touch to discuss your project or share your experience working with us. Our certified 
              Scrum Masters and technical experts are here to help you succeed.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  activeTab === 'contact'
                    ? 'bg-blue-600 dark:bg-red-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Start a Project
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  activeTab === 'feedback'
                    ? 'bg-blue-600 dark:bg-red-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Heart className="h-5 w-5 mr-2" />
                Share Feedback
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact/Feedback Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                  {activeTab === 'contact' ? 'Start Your Agile Project' : 'Share Your Experience'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {activeTab === 'contact' ? (
                    <>
                      {/* Contact Form Fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Your company name"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Project Budget *
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="">Select budget range</option>
                            {budgetOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Project Type *
                          </label>
                          <select
                            id="project"
                            name="project"
                            value={formData.project}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="source" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            How did you find us?
                          </label>
                          <select
                            id="source"
                            name="source"
                            value={formData.source}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="">Select source</option>
                            {sourceOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Description *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Tell us about your project, goals, requirements, and how you'd like to implement Agile methodologies..."
                        />
                      </div>

                      <div className="bg-blue-50 dark:bg-red-900/20 rounded-lg p-4">
                        <p className="text-sm text-blue-800 dark:text-red-300">
                          <strong>Agile Project Approach:</strong> We work with businesses that have a minimum budget of $10,000 
                          to ensure we can implement proper Agile methodologies including sprint planning, daily standups, 
                          and iterative development that delivers quality results.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Feedback Form Fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Your company or organization"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Overall Rating *
                        </label>
                        <div className="flex items-center space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleRatingChange(star)}
                              className={`p-1 transition-colors ${
                                star <= formData.rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300 dark:text-gray-600 hover:text-yellow-300'
                              }`}
                            >
                              <Star className="h-8 w-8 fill-current" />
                            </button>
                          ))}
                          <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                            {formData.rating} out of 5 stars
                          </span>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="projectExperience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Experience *
                        </label>
                        <textarea
                          id="projectExperience"
                          name="projectExperience"
                          value={formData.projectExperience}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Tell us about your experience working with our team, the Agile process, and the results achieved..."
                        />
                      </div>

                      <div>
                        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Additional Feedback
                        </label>
                        <textarea
                          id="feedback"
                          name="feedback"
                          value={formData.feedback}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Any suggestions for improvement or additional comments..."
                        />
                      </div>

                      <div>
                        <label htmlFor="recommendation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Would you recommend us?
                        </label>
                        <select
                          id="recommendation"
                          name="recommendation"
                          value={formData.recommendation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="">Select recommendation level</option>
                          <option value="definitely">Definitely recommend</option>
                          <option value="likely">Likely to recommend</option>
                          <option value="neutral">Neutral</option>
                          <option value="unlikely">Unlikely to recommend</option>
                          <option value="definitely-not">Definitely not recommend</option>
                        </select>
                      </div>
                    </>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 dark:bg-red-600 hover:bg-blue-700 dark:hover:bg-red-700 text-white font-medium py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {activeTab === 'contact' ? 'Sending...' : 'Submitting Feedback...'}
                      </>
                    ) : (
                      <>
                        {activeTab === 'contact' ? 'Send Message' : 'Submit Feedback'}
                        {activeTab === 'contact' ? <Send className="ml-2 h-5 w-5" /> : <ThumbsUp className="ml-2 h-5 w-5" />}
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <p className="text-green-800 dark:text-green-300">
                        {activeTab === 'contact' 
                          ? "Thank you! We'll get back to you within 24 hours to discuss your Agile project."
                          : "Thank you for your feedback! We appreciate your input and will use it to improve our services."
                        }
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                    >
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                      <p className="text-red-800 dark:text-red-300">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  We're here to help you transform your business with innovative technology solutions 
                  and proven Agile methodologies. Our certified Scrum Masters and technical experts 
                  are ready to discuss your project requirements and provide personalized recommendations.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.action}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="w-12 h-12 bg-blue-600 dark:bg-red-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                        <p className="text-blue-600 dark:text-red-400 font-medium">{info.value}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Why Choose Our Agile Approach?</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    98% client satisfaction with Agile delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Certified Scrum Masters & Kanban practitioners
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    150+ successful Agile projects delivered
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Transparent communication & regular demos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Continuous integration & deployment
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get answers to common questions about our Agile services, methodologies, and development process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 dark:text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a free consultation to discuss your project requirements and learn how our 
              Agile methodologies can accelerate your development timeline while ensuring quality results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 dark:text-red-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-red-600 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
                >
                  View Agile Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}