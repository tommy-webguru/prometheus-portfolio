import { Shield, Zap, Users, Target, Award, CheckCircle, Calendar, TrendingUp, Globe, Heart } from 'lucide-react';

export const values = [
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

export const milestones = [
    {
        year: '2020',
        event: 'Founded Prometheus Digital Studio',
        description: 'Started with a vision to transform businesses through technology',
        highlight: true
    },
    {
        year: '2021',
        event: 'Expanded to full-stack development',
        description: 'Added comprehensive web and mobile development services',
        highlight: false
    },
    {
        year: '2022',
        event: 'Delivered first AI/ML solution',
        description: 'Launched our first machine learning project for e-commerce analytics',
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
        highlight: true
    },
    {
        year: '2025',
        event: 'More scalable productions with mixed techs',
        description: 'In progress ...'
    }
];

export const achievements = [
    { metric: 'Projects Completed', value: '550+', icon: CheckCircle },
    { metric: 'Client Satisfaction', value: '98%', icon: Heart },
    { metric: 'Years Experience', value: '5+', icon: Calendar },
    { metric: 'Technologies Mastered', value: '25+', icon: TrendingUp },
    { metric: 'Countries Served', value: '12', icon: Globe },
    { metric: 'Team Members', value: '5', icon: Users }
];

export const principles = [
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
