import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const budgetOptions = [
  { value: '10k-25k', label: '$10K - $25K' },
  { value: '25k-50k', label: '$25K - $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k-250k', label: '$100K - $250K' },
  { value: '250k+', label: '$250K+' }
];

export const projectTypes = [
  { value: 'web-app', label: 'Web Application' },
  { value: 'ai-ml', label: 'AI/ML Solution' },
  { value: 'automation', label: 'Process Automation' },
  { value: 'cloud-devops', label: 'Cloud/DevOps' },
  { value: 'mobile-app', label: 'Mobile Application' },
  { value: 'consulting', label: 'Agile Consulting' },
  { value: 'other', label: 'Other' }
];

export const timelineOptions = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-3months', label: '1-3 months' },
  { value: '3-6months', label: '3-6 months' },
  { value: '6-12months', label: '6-12 months' },
  { value: 'flexible', label: 'Flexible' }
];

export const sourceOptions = [
  { value: 'google', label: 'Google Search' },
  { value: 'referral', label: 'Referral' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'github', label: 'GitHub' },
  { value: 'conference', label: 'Conference/Event' },
  { value: 'other', label: 'Other' }
];

export const contactInfo = [
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

export const faqs = [
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
