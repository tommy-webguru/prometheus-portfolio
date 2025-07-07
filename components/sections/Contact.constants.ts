import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const budgetOptions = [
  { value: '10k-25k', label: '$10K - $25K' },
  { value: '25k-50k', label: '$25K - $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k+', label: '$100K+' }
];

export const projectTypes = [
  { value: 'web-app', label: 'Web Application' },
  { value: 'ai-ml', label: 'AI/ML Solution' },
  { value: 'automation', label: 'Process Automation' },
  { value: 'cloud-devops', label: 'Cloud/DevOps' },
  { value: 'mobile-app', label: 'Mobile Application' },
  { value: 'consulting', label: 'Consulting' }
];

export const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri 9AM-6PM PST'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@prometheus.studio',
    description: 'We respond within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    description: 'Remote-first team'
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '< 24 hours',
    description: 'For all inquiries'
  }
];