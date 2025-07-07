'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Award, Code, Users, Calendar, Star, Coffee } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Team() {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Full-Stack Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 8+ years of experience in full-stack development, Alex leads our team with expertise in scalable architecture and modern web technologies.',
      longBio: 'Alex founded Prometheus Digital Studio with a vision to create technology solutions that truly make a difference. With a background in computer science from Stanford and experience at leading tech companies, Alex brings both technical depth and business acumen to every project.',
      location: 'San Francisco, CA',
      experience: '8+ years',
      projects: '50+',
      specialties: ['System Architecture', 'Team Leadership', 'Full-Stack Development', 'Product Strategy'],
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'React/Next.js', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'System Architecture', level: 92 }
      ],
      achievements: ['AWS Certified Solutions Architect', 'React Expert Certification', 'Team Leadership Award'],
      interests: ['Open Source', 'Mentoring', 'Rock Climbing', 'Photography'],
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
      longBio: 'Dr. Sarah Rodriguez brings cutting-edge AI research to practical business applications. With her PhD from MIT and publications in top-tier conferences, she bridges the gap between academic research and real-world solutions.',
      location: 'Austin, TX',
      experience: '6+ years',
      projects: '30+',
      specialties: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
      skills: [
        { name: 'Python', level: 98 },
        { name: 'TensorFlow/PyTorch', level: 95 },
        { name: 'Machine Learning', level: 92 },
        { name: 'Data Science', level: 88 }
      ],
      achievements: ['PhD Computer Science MIT', 'Google AI Certified', 'ML Research Publications'],
      interests: ['AI Research', 'Teaching', 'Hiking', 'Classical Music'],
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
      longBio: 'Marcus is our infrastructure wizard, ensuring that every application we build is deployed reliably and scales effortlessly. His expertise in cloud platforms and automation has saved our clients millions in operational costs.',
      location: 'Seattle, WA',
      experience: '6+ years',
      projects: '40+',
      specialties: ['Cloud Infrastructure', 'Kubernetes', 'CI/CD', 'Monitoring'],
      skills: [
        { name: 'Docker/Kubernetes', level: 94 },
        { name: 'AWS/Azure', level: 90 },
        { name: 'CI/CD', level: 88 },
        { name: 'Infrastructure as Code', level: 85 }
      ],
      achievements: ['AWS Solutions Architect Professional', 'Kubernetes Expert', 'DevOps Master Certification'],
      interests: ['Automation', 'Gaming', 'Cooking', 'Basketball'],
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
      longBio: 'Emma combines technical expertise with an eye for design to create interfaces that users love. Her background in both development and UX design ensures that every application is not just functional, but delightful to use.',
      location: 'New York, NY',
      experience: '5+ years',
      projects: '35+',
      specialties: ['UI/UX Design', 'React Development', 'Responsive Design', 'Accessibility'],
      skills: [
        { name: 'React/Vue.js', level: 92 },
        { name: 'UI/UX Design', level: 88 },
        { name: 'CSS/Tailwind', level: 95 },
        { name: 'JavaScript', level: 90 }
      ],
      achievements: ['UI/UX Design Certification', 'Design Systems Expert', 'Frontend Master'],
      interests: ['Design', 'Art', 'Travel', 'Yoga'],
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
      longBio: 'David is our backend specialist who ensures that every system we build is rock-solid and performs at scale. His expertise in database optimization and API design has helped our clients handle millions of users without breaking a sweat.',
      location: 'Los Angeles, CA',
      experience: '7+ years',
      projects: '45+',
      specialties: ['API Development', 'Database Design', 'Performance Optimization', 'Security'],
      skills: [
        { name: 'Node.js/Python', level: 90 },
        { name: 'Database Design', level: 88 },
        { name: 'API Development', level: 92 },
        { name: 'Performance Optimization', level: 85 }
      ],
      achievements: ['Backend Expert Certification', 'Database Specialist', 'API Design Master'],
      interests: ['Performance Tuning', 'Music Production', 'Cycling', 'Coffee'],
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
    { number: '150+', label: 'Projects Delivered', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  const teamValues = [
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve by constantly learning new technologies and methodologies.',
      icon: Code
    },
    {
      title: 'Collaborative Spirit',
      description: 'We believe the best solutions come from diverse perspectives and open collaboration.',
      icon: Users
    },
    {
      title: 'Quality Focus',
      description: 'We never compromise on quality and always strive for excellence in everything we do.',
      icon: Award
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by your business outcomes.',
      icon: Star
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
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Five passionate technologists dedicated to delivering exceptional results and building lasting partnerships.
            </p>
          </motion.div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-red-400" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Experience</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{member.experience}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{member.projects}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                      <div className="font-semibold text-gray-900 dark:text-white text-xs">{member.location}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">{member.bio}</p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-red-900/30 text-blue-800 dark:text-red-300 text-xs rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Top Skills</h4>
                    <div className="space-y-2">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-600 dark:to-red-800 h-2 rounded-full"
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
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Achievements</h4>
                    <div className="space-y-2">
                      {member.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center">
                          <Award className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.interests.map((interest, interestIndex) => (
                        <span
                          key={interestIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t dark:border-gray-600">
                    <a
                      href={member.social.github}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-red-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Team Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that unite us and drive our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-red-400" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-600 dark:to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-blue-100 dark:text-red-100 mb-8 max-w-2xl mx-auto">
              Our diverse skill set and collaborative approach ensure your project's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 dark:text-red-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                  Let's Collaborate
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