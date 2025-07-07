'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShoppingCart, Star, Download, Eye, Filter, Search, ArrowRight, CheckCircle, DollarSign, Users, Zap, Shield, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AppMarket() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const translations = {
    en: {
      title: 'App Market',
      subtitle: 'Discover and purchase our premium applications built with cutting-edge technology and proven methodologies.',
      searchPlaceholder: 'Search apps, features...',
      filter: 'Filter:',
      allApps: 'All Apps',
      productivity: 'Productivity',
      analytics: 'Analytics',
      ecommerce: 'E-commerce',
      healthcare: 'Healthcare',
      finance: 'Finance',
      education: 'Education',
      addToCart: 'Add to Cart',
      buyNow: 'Buy Now',
      viewDemo: 'View Demo',
      features: 'Features',
      downloads: 'Downloads',
      rating: 'Rating',
      price: 'Price',
      category: 'Category',
      noApps: 'No apps found matching your criteria.',
      ctaTitle: 'Need a Custom Solution?',
      ctaSubtitle: 'Can\'t find what you\'re looking for? Let us build a custom application tailored to your specific needs.',
      getCustomQuote: 'Get Custom Quote',
      viewAllServices: 'View All Services',
      cart: 'Cart',
      items: 'items',
      total: 'Total',
      checkout: 'Checkout',
      freeTrialAvailable: 'Free Trial Available',
      oneTimePurchase: 'One-time Purchase',
      monthlySubscription: 'Monthly Subscription'
    },
    es: {
      title: 'Mercado de Apps',
      subtitle: 'Descubre y compra nuestras aplicaciones premium construidas con tecnología de vanguardia y metodologías probadas.',
      searchPlaceholder: 'Buscar apps, características...',
      filter: 'Filtrar:',
      allApps: 'Todas las Apps',
      productivity: 'Productividad',
      analytics: 'Analítica',
      ecommerce: 'Comercio Electrónico',
      healthcare: 'Salud',
      finance: 'Finanzas',
      education: 'Educación',
      addToCart: 'Agregar al Carrito',
      buyNow: 'Comprar Ahora',
      viewDemo: 'Ver Demo',
      features: 'Características',
      downloads: 'Descargas',
      rating: 'Calificación',
      price: 'Precio',
      category: 'Categoría',
      noApps: 'No se encontraron aplicaciones que coincidan con sus criterios.',
      ctaTitle: '¿Necesitas una Solución Personalizada?',
      ctaSubtitle: '¿No encuentras lo que buscas? Permítenos construir una aplicación personalizada adaptada a tus necesidades específicas.',
      getCustomQuote: 'Obtener Cotización Personalizada',
      viewAllServices: 'Ver Todos los Servicios',
      cart: 'Carrito',
      items: 'artículos',
      total: 'Total',
      checkout: 'Finalizar Compra',
      freeTrialAvailable: 'Prueba Gratuita Disponible',
      oneTimePurchase: 'Compra Única',
      monthlySubscription: 'Suscripción Mensual'
    },
    fr: {
      title: 'Marché d\'Applications',
      subtitle: 'Découvrez et achetez nos applications premium construites avec une technologie de pointe et des méthodologies éprouvées.',
      searchPlaceholder: 'Rechercher apps, fonctionnalités...',
      filter: 'Filtrer:',
      allApps: 'Toutes les Apps',
      productivity: 'Productivité',
      analytics: 'Analytique',
      ecommerce: 'E-commerce',
      healthcare: 'Santé',
      finance: 'Finance',
      education: 'Éducation',
      addToCart: 'Ajouter au Panier',
      buyNow: 'Acheter Maintenant',
      viewDemo: 'Voir Démo',
      features: 'Fonctionnalités',
      downloads: 'Téléchargements',
      rating: 'Note',
      price: 'Prix',
      category: 'Catégorie',
      noApps: 'Aucune application trouvée correspondant à vos critères.',
      ctaTitle: 'Besoin d\'une Solution Personnalisée?',
      ctaSubtitle: 'Vous ne trouvez pas ce que vous cherchez? Laissez-nous construire une application personnalisée adaptée à vos besoins spécifiques.',
      getCustomQuote: 'Obtenir un Devis Personnalisé',
      viewAllServices: 'Voir Tous les Services',
      cart: 'Panier',
      items: 'articles',
      total: 'Total',
      checkout: 'Commander',
      freeTrialAvailable: 'Essai Gratuit Disponible',
      oneTimePurchase: 'Achat Unique',
      monthlySubscription: 'Abonnement Mensuel'
    },
    de: {
      title: 'App-Marktplatz',
      subtitle: 'Entdecken und kaufen Sie unsere Premium-Anwendungen, die mit modernster Technologie und bewährten Methoden entwickelt wurden.',
      searchPlaceholder: 'Apps, Features suchen...',
      filter: 'Filter:',
      allApps: 'Alle Apps',
      productivity: 'Produktivität',
      analytics: 'Analytik',
      ecommerce: 'E-Commerce',
      healthcare: 'Gesundheitswesen',
      finance: 'Finanzen',
      education: 'Bildung',
      addToCart: 'In den Warenkorb',
      buyNow: 'Jetzt Kaufen',
      viewDemo: 'Demo Ansehen',
      features: 'Funktionen',
      downloads: 'Downloads',
      rating: 'Bewertung',
      price: 'Preis',
      category: 'Kategorie',
      noApps: 'Keine Apps gefunden, die Ihren Kriterien entsprechen.',
      ctaTitle: 'Benötigen Sie eine Maßgeschneiderte Lösung?',
      ctaSubtitle: 'Können Sie nicht finden, was Sie suchen? Lassen Sie uns eine maßgeschneiderte Anwendung für Ihre spezifischen Bedürfnisse entwickeln.',
      getCustomQuote: 'Individuelles Angebot Erhalten',
      viewAllServices: 'Alle Services Anzeigen',
      cart: 'Warenkorb',
      items: 'Artikel',
      total: 'Gesamt',
      checkout: 'Zur Kasse',
      freeTrialAvailable: 'Kostenlose Testversion Verfügbar',
      oneTimePurchase: 'Einmaliger Kauf',
      monthlySubscription: 'Monatliches Abonnement'
    },
    zh: {
      title: '应用市场',
      subtitle: '发现并购买我们使用尖端技术和经过验证的方法构建的高级应用程序。',
      searchPlaceholder: '搜索应用、功能...',
      filter: '筛选：',
      allApps: '所有应用',
      productivity: '生产力',
      analytics: '分析',
      ecommerce: '电子商务',
      healthcare: '医疗保健',
      finance: '金融',
      education: '教育',
      addToCart: '添加到购物车',
      buyNow: '立即购买',
      viewDemo: '查看演示',
      features: '功能',
      downloads: '下载量',
      rating: '评分',
      price: '价格',
      category: '类别',
      noApps: '未找到符合您条件的应用程序。',
      ctaTitle: '需要定制解决方案？',
      ctaSubtitle: '找不到您要找的内容？让我们为您的特定需求构建定制应用程序。',
      getCustomQuote: '获取定制报价',
      viewAllServices: '查看所有服务',
      cart: '购物车',
      items: '项目',
      total: '总计',
      checkout: '结账',
      freeTrialAvailable: '提供免费试用',
      oneTimePurchase: '一次性购买',
      monthlySubscription: '月度订阅'
    },
    ja: {
      title: 'アプリマーケット',
      subtitle: '最先端技術と実証済みの方法論で構築されたプレミアムアプリケーションを発見し、購入してください。',
      searchPlaceholder: 'アプリ、機能を検索...',
      filter: 'フィルター：',
      allApps: 'すべてのアプリ',
      productivity: '生産性',
      analytics: '分析',
      ecommerce: 'Eコマース',
      healthcare: 'ヘルスケア',
      finance: '金融',
      education: '教育',
      addToCart: 'カートに追加',
      buyNow: '今すぐ購入',
      viewDemo: 'デモを見る',
      features: '機能',
      downloads: 'ダウンロード数',
      rating: '評価',
      price: '価格',
      category: 'カテゴリー',
      noApps: '条件に一致するアプリが見つかりません。',
      ctaTitle: 'カスタムソリューションが必要ですか？',
      ctaSubtitle: 'お探しのものが見つかりませんか？お客様の特定のニーズに合わせたカスタムアプリケーションを構築いたします。',
      getCustomQuote: 'カスタム見積もりを取得',
      viewAllServices: 'すべてのサービスを見る',
      cart: 'カート',
      items: 'アイテム',
      total: '合計',
      checkout: 'チェックアウト',
      freeTrialAvailable: '無料トライアル利用可能',
      oneTimePurchase: '一回限りの購入',
      monthlySubscription: '月額サブスクリプション'
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  const categories = [
    { id: 'all', label: t.allApps, count: 15 },
    { id: 'productivity', label: t.productivity, count: 4 },
    { id: 'analytics', label: t.analytics, count: 3 },
    { id: 'ecommerce', label: t.ecommerce, count: 3 },
    { id: 'healthcare', label: t.healthcare, count: 2 },
    { id: 'finance', label: t.finance, count: 2 },
    { id: 'education', label: t.education, count: 1 }
  ];

  const apps = [
    {
      id: 1,
      name: 'TaskFlow Pro',
      category: 'productivity',
      description: 'Advanced project management and team collaboration platform with AI-powered insights.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.8,
      downloads: '25K+',
      features: [
        'AI-powered task prioritization',
        'Real-time team collaboration',
        'Advanced analytics dashboard',
        'Custom workflow automation',
        'Integration with 50+ tools'
      ],
      technologies: ['React', 'Node.js', 'AI/ML', 'WebSocket'],
      pricingType: 'monthly',
      freeTrialDays: 14,
      demoUrl: '#'
    },
    {
      id: 2,
      name: 'DataViz Analytics',
      category: 'analytics',
      description: 'Comprehensive business intelligence platform with real-time data visualization and predictive analytics.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 199.99,
      originalPrice: null,
      rating: 4.9,
      downloads: '15K+',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Custom dashboard builder',
        'Multi-source data integration',
        'Advanced reporting tools'
      ],
      technologies: ['React', 'D3.js', 'Python', 'Machine Learning'],
      pricingType: 'one-time',
      freeTrialDays: 7,
      demoUrl: '#'
    },
    {
      id: 3,
      name: 'ShopMaster Suite',
      category: 'ecommerce',
      description: 'Complete e-commerce solution with inventory management, payment processing, and customer analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.7,
      downloads: '30K+',
      features: [
        'Multi-channel inventory management',
        'Integrated payment processing',
        'Customer behavior analytics',
        'Automated marketing tools',
        'Mobile-responsive storefront'
      ],
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
      pricingType: 'monthly',
      freeTrialDays: 30,
      demoUrl: '#'
    },
    {
      id: 4,
      name: 'HealthTracker Pro',
      category: 'healthcare',
      description: 'Comprehensive health monitoring platform with patient management and telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 299.99,
      originalPrice: null,
      rating: 4.9,
      downloads: '8K+',
      features: [
        'Patient record management',
        'Telemedicine integration',
        'Health analytics dashboard',
        'Appointment scheduling',
        'HIPAA compliant security'
      ],
      technologies: ['React', 'Node.js', 'WebRTC', 'Encryption'],
      pricingType: 'one-time',
      freeTrialDays: 14,
      demoUrl: '#'
    },
    {
      id: 5,
      name: 'FinanceFlow',
      category: 'finance',
      description: 'Personal and business finance management with AI-powered insights and automated reporting.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.6,
      downloads: '20K+',
      features: [
        'Automated expense tracking',
        'AI-powered financial insights',
        'Multi-account management',
        'Custom budget planning',
        'Tax preparation tools'
      ],
      technologies: ['React Native', 'AI/ML', 'Blockchain', 'Security'],
      pricingType: 'monthly',
      freeTrialDays: 21,
      demoUrl: '#'
    },
    {
      id: 6,
      name: 'LearnHub Platform',
      category: 'education',
      description: 'Interactive e-learning platform with course creation tools and student progress tracking.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 149.99,
      originalPrice: null,
      rating: 4.8,
      downloads: '12K+',
      features: [
        'Interactive course builder',
        'Student progress analytics',
        'Video streaming platform',
        'Assessment and quiz tools',
        'Certificate generation'
      ],
      technologies: ['Vue.js', 'Node.js', 'Video Streaming', 'Analytics'],
      pricingType: 'one-time',
      freeTrialDays: 14,
      demoUrl: '#'
    },
    {
      id: 7,
      name: 'CRM Master',
      category: 'productivity',
      description: 'Advanced customer relationship management system with sales automation and lead tracking.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 69.99,
      originalPrice: 99.99,
      rating: 4.7,
      downloads: '18K+',
      features: [
        'Lead management system',
        'Sales pipeline automation',
        'Customer communication tools',
        'Performance analytics',
        'Integration with email platforms'
      ],
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Email APIs'],
      pricingType: 'monthly',
      freeTrialDays: 14,
      demoUrl: '#'
    },
    {
      id: 8,
      name: 'Inventory Pro',
      category: 'productivity',
      description: 'Smart inventory management system with predictive analytics and automated reordering.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 79.99,
      originalPrice: null,
      rating: 4.8,
      downloads: '22K+',
      features: [
        'Real-time inventory tracking',
        'Predictive reorder alerts',
        'Multi-location management',
        'Barcode scanning support',
        'Supplier management tools'
      ],
      technologies: ['React', 'Python', 'Machine Learning', 'IoT'],
      pricingType: 'monthly',
      freeTrialDays: 30,
      demoUrl: '#'
    },
    {
      id: 9,
      name: 'Social Analytics Pro',
      category: 'analytics',
      description: 'Comprehensive social media analytics platform with sentiment analysis and trend prediction.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.6,
      downloads: '10K+',
      features: [
        'Multi-platform social monitoring',
        'Sentiment analysis engine',
        'Trend prediction algorithms',
        'Competitor analysis tools',
        'Automated reporting'
      ],
      technologies: ['Python', 'NLP', 'Machine Learning', 'APIs'],
      pricingType: 'monthly',
      freeTrialDays: 7,
      demoUrl: '#'
    },
    {
      id: 10,
      name: 'WebStore Builder',
      category: 'ecommerce',
      description: 'Drag-and-drop e-commerce website builder with integrated payment and shipping solutions.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 59.99,
      originalPrice: 89.99,
      rating: 4.5,
      downloads: '35K+',
      features: [
        'Drag-and-drop website builder',
        'Integrated payment gateways',
        'Shipping calculator',
        'SEO optimization tools',
        'Mobile-responsive themes'
      ],
      technologies: ['React', 'Stripe', 'PayPal', 'SEO Tools'],
      pricingType: 'monthly',
      freeTrialDays: 14,
      demoUrl: '#'
    },
    {
      id: 11,
      name: 'Time Tracker Elite',
      category: 'productivity',
      description: 'Advanced time tracking and productivity analysis tool for teams and freelancers.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.7,
      downloads: '28K+',
      features: [
        'Automatic time tracking',
        'Productivity analytics',
        'Project time allocation',
        'Team performance metrics',
        'Invoice generation'
      ],
      technologies: ['Electron', 'React', 'Node.js', 'Analytics'],
      pricingType: 'monthly',
      freeTrialDays: 14,
      demoUrl: '#'
    },
    {
      id: 12,
      name: 'Market Research Hub',
      category: 'analytics',
      description: 'Comprehensive market research platform with survey tools and data analysis capabilities.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 179.99,
      originalPrice: null,
      rating: 4.8,
      downloads: '6K+',
      features: [
        'Survey creation tools',
        'Statistical analysis engine',
        'Market trend visualization',
        'Competitor benchmarking',
        'Custom report generation'
      ],
      technologies: ['Vue.js', 'Python', 'Statistics', 'Data Visualization'],
      pricingType: 'one-time',
      freeTrialDays: 14,
      demoUrl: '#'
    },
    {
      id: 13,
      name: 'Marketplace Connect',
      category: 'ecommerce',
      description: 'Multi-marketplace integration platform for managing products across different e-commerce channels.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 99.99,
      originalPrice: 149.99,
      rating: 4.6,
      downloads: '14K+',
      features: [
        'Multi-marketplace sync',
        'Centralized inventory management',
        'Automated pricing updates',
        'Order management system',
        'Performance analytics'
      ],
      technologies: ['Node.js', 'APIs', 'Database Sync', 'Automation'],
      pricingType: 'monthly',
      freeTrialDays: 21,
      demoUrl: '#'
    },
    {
      id: 14,
      name: 'MedRecord System',
      category: 'healthcare',
      description: 'Electronic health record system with patient portal and clinical decision support.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 399.99,
      originalPrice: null,
      rating: 4.9,
      downloads: '5K+',
      features: [
        'Electronic health records',
        'Patient portal access',
        'Clinical decision support',
        'Prescription management',
        'Medical imaging integration'
      ],
      technologies: ['React', 'FHIR', 'HL7', 'Security', 'Compliance'],
      pricingType: 'one-time',
      freeTrialDays: 30,
      demoUrl: '#'
    },
    {
      id: 15,
      name: 'CryptoTrader Pro',
      category: 'finance',
      description: 'Advanced cryptocurrency trading platform with AI-powered market analysis and automated trading.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.5,
      downloads: '9K+',
      features: [
        'AI-powered market analysis',
        'Automated trading bots',
        'Portfolio management',
        'Risk assessment tools',
        'Real-time market data'
      ],
      technologies: ['React', 'AI/ML', 'Blockchain', 'WebSocket', 'Security'],
      pricingType: 'monthly',
      freeTrialDays: 7,
      demoUrl: '#'
    }
  ];

  const filteredApps = apps.filter(app => {
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const addToCart = (appId: number) => {
    if (!cart.includes(appId)) {
      setCart([...cart, appId]);
    }
  };

  const removeFromCart = (appId: number) => {
    setCart(cart.filter(id => id !== appId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, appId) => {
      const app = apps.find(a => a.id === appId);
      return total + (app ? app.price : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 dark:bg-green-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-800 dark:text-green-300 font-medium mb-6">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Premium Applications
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.title.split(' ')[0]} <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">{t.title.split(' ')[1]}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">{t.filter}</span>
            </div>
          </motion.div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed top-20 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 border dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-900 dark:text-white">{t.cart}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cart.length} {t.items}</p>
              <p className="font-bold text-green-600">{t.total}: ${getCartTotal().toFixed(2)}</p>
              <Button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white text-sm">
                {t.checkout}
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* App Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                      {categories.find(c => c.id === app.category)?.label}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {app.freeTrialDays && (
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                        {t.freeTrialAvailable}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{app.rating}</span>
                      </div>
                      <div className="flex items-center text-white">
                        <Download className="h-4 w-4 mr-1" />
                        <span className="text-sm">{app.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{app.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">${app.price}</div>
                      {app.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">${app.originalPrice}</div>
                      )}
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {app.pricingType === 'monthly' ? t.monthlySubscription : t.oneTimePurchase}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{app.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t.features}:</h4>
                    <ul className="space-y-1">
                      {app.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {app.features.length > 3 && (
                        <li className="text-sm text-gray-500 dark:text-gray-400">
                          +{app.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        onClick={() => addToCart(app.id)}
                        disabled={cart.includes(app.id)}
                        className={`${
                          cart.includes(app.id)
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700'
                        } text-white text-sm`}
                      >
                        {cart.includes(app.id) ? 'In Cart' : t.addToCart}
                      </Button>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
                      >
                        {t.buyNow}
                      </Button>
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {t.viewDemo}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredApps.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t.noApps}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-green-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg">
                  {t.getCustomQuote}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300"
                >
                  {t.viewAllServices}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}