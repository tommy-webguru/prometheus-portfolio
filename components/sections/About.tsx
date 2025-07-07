'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Users, Target, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver solutions that work consistently and scale with your business growth.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology meets practical solutions for real-world challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with your team to ensure seamless integration and knowledge transfer.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Every project is measured by tangible outcomes and measurable business impact.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Founded Prometheus Digital Studio', highlight: true },
    { year: '2021', event: 'Delivered first AI/ML solution', highlight: false },
    { year: '2022', event: 'Expanded to full-stack development', highlight: false },
    { year: '2023', event: 'Achieved 98% client satisfaction', highlight: true },
    { year: '2024', event: 'Launched cloud automation services', highlight: false }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Prometheus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of five passionate technologists who believe in the power of clean, 
            scalable solutions. Our direct approach and commitment to excellence has helped 
            businesses transform their digital landscape.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600">
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

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Our Commitment</h4>
              </div>
              <p className="text-gray-700">
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
            <h3 className="text-3xl font-bold text-gray-900">Our Journey</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                    milestone.highlight 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    milestone.highlight ? 'bg-blue-600' : 'bg-gray-400'
                  }`}>
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  <div>
                    <p className={`font-medium ${
                      milestone.highlight ? 'text-blue-900' : 'text-gray-900'
                    }`}>
                      {milestone.event}
                    </p>
                  </div>
                  {milestone.highlight && (
                    <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide every decision we make and every solution we deliver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;