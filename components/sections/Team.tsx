'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Award, Code, Users } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Full-Stack Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 8+ years of experience in full-stack development, Alex leads our team with expertise in scalable architecture and modern web technologies.',
      location: 'San Francisco, CA',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'React/Next.js', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'System Architecture', level: 92 }
      ],
      achievements: ['AWS Certified', 'React Expert', 'Team Leader'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'alex@prometheus.studio'
      }
    },
    {
      name: 'Sarah Rodriguez',
      role: 'AI/ML Engineer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sarah specializes in machine learning and AI solutions, with a PhD in Computer Science and expertise in neural networks and deep learning.',
      location: 'Austin, TX',
      skills: [
        { name: 'Python', level: 98 },
        { name: 'TensorFlow/PyTorch', level: 95 },
        { name: 'Machine Learning', level: 92 },
        { name: 'Data Science', level: 88 }
      ],
      achievements: ['PhD Computer Science', 'Google AI Certified', 'ML Expert'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'sarah@prometheus.studio'
      }
    },
    {
      name: 'Marcus Thompson',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marcus brings 6+ years of DevOps experience, specializing in cloud infrastructure, containerization, and automated deployment pipelines.',
      location: 'Seattle, WA',
      skills: [
        { name: 'Docker/Kubernetes', level: 94 },
        { name: 'AWS/Azure', level: 90 },
        { name: 'CI/CD', level: 88 },
        { name: 'Infrastructure as Code', level: 85 }
      ],
      achievements: ['AWS Solutions Architect', 'Kubernetes Expert', 'DevOps Master'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'marcus@prometheus.studio'
      }
    },
    {
      name: 'Emma Wilson',
      role: 'Frontend Developer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emma creates beautiful, responsive user interfaces with a focus on user experience and modern design principles.',
      location: 'New York, NY',
      skills: [
        { name: 'React/Vue.js', level: 92 },
        { name: 'UI/UX Design', level: 88 },
        { name: 'CSS/Tailwind', level: 95 },
        { name: 'JavaScript', level: 90 }
      ],
      achievements: ['UI/UX Certified', 'Design Systems Expert', 'Frontend Master'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'emma@prometheus.studio'
      }
    },
    {
      name: 'David Kim',
      role: 'Backend Developer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David specializes in building robust backend systems and APIs, with expertise in database design and performance optimization.',
      location: 'Los Angeles, CA',
      skills: [
        { name: 'Node.js/Python', level: 90 },
        { name: 'Database Design', level: 88 },
        { name: 'API Development', level: 92 },
        { name: 'Performance Optimization', level: 85 }
      ],
      achievements: ['Backend Expert', 'Database Specialist', 'API Master'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'david@prometheus.studio'
      }
    }
  ];

  const stats = [
    { number: '50+', label: 'Combined Years Experience', icon: Award },
    { number: '15+', label: 'Technologies Mastered', icon: Code },
    { number: '100+', label: 'Projects Delivered', icon: Users }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
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
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five passionate technologists dedicated to delivering exceptional results and building lasting partnerships.
          </p>
        </motion.div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <Icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-200">{member.role}</p>
                </div>
              </div>

              {/* Member Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{member.location}</span>
                </div>

                <p className="text-gray-700 mb-6">{member.bio}</p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Skills</h4>
                  <div className="space-y-2">
                    {member.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <span
                        key={achievementIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t">
                  <a
                    href={member.social.github}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Work with Our Team?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Our diverse skill set and collaborative approach ensure your project's success.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg"
          >
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;