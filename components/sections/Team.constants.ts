import { Github, Linkedin, Mail, MapPin, Award, Code, Users } from 'lucide-react';

export const team = [
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

export const stats = [
    { number: '50+', label: 'Combined Years Experience', icon: Award },
    { number: '15+', label: 'Technologies Mastered', icon: Code },
    { number: '100+', label: 'Projects Delivered', icon: Users }
];