import { Award, Code, Users, Star } from 'lucide-react';

export const team = [
    {
        name: 'Tomislav Sokac',
        role: 'CTO Leader Fullstack & DevOps Engineer',
        image: '/image/tomislav.png',
        bio: 'With 8+ years of experience in full-stack development, Alex leads our team with expertise in scalable architecture and modern web technologies.',
        longBio: 'Alex founded Prometheus Digital Studio with a vision to create technology solutions that truly make a difference. With a background in computer science from Stanford and experience at leading tech companies, Alex brings both technical depth and business acumen to every project.',
        location: 'San Francisco, CA',
        experience: '8+ years',
        projects: '50+',
        specialties: ['System Architecture', 'Team Leadership', 'Full-Stack Development', 'Product Strategy'],
        skills: [
            { name: 'JavaScript/TypeScript', level: 95 },
            { name: 'React/Next.js', level: 90 },
            { name: 'Node.js', level: 92 },
            { name: 'Python', level: 94 },
            { name: 'System Architecture', level: 92 }
        ],
        achievements: ['AWS Certified Solutions Architect', 'React Expert Certification', 'Team Leadership Award'],
        interests: ['Open Source', 'Mentoring', 'Rock Climbing', 'Photography'],
        social: {
            github: '#',
            linkedin: '#',
            email: 'alex@prometheus.studio'
        },
        cv: '/cv/Tomislav-Sokac.pdf'
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
        },
        cv: '/cv/sarah-rodriguez.pdf'
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
        },
        cv: '/cv/marcus-thompson.pdf'
    },
    {
        name: 'Sam Issa',
        role: 'Frontend Developer & IoT Engineer',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
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
            { name: 'JavaScript', level: 90 },
            { name: 'Python', level: 93 },
            { name: 'ESP32, RasberryPI', level: 85 }
        ],
        achievements: ['UI/UX Design Certification', 'Design Systems Expert', 'Frontend Master'],
        interests: ['Design', 'Art', 'Travel', 'Yoga'],
        social: {
            github: '#',
            linkedin: '#',
            email: 'emma@prometheus.studio'
        },
        cv: '/cv/sam-issa.pdf'
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
        },
        cv: '/cv/david-kim.pdf'
    }
];


export const stats = [
    { number: '5+', label: 'Combined Years Experience', icon: Award },
    { number: '15+', label: 'Technologies Mastered', icon: Code },
    { number: '50+', label: 'Projects Delivered', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
];

export const teamValues = [
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