'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon, Globe, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const pathname = usePathname();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      team: 'Team',
      market: 'App Market',
      contact: 'Contact',
      getStarted: 'Get Started',
      agileStudio: 'Agile Digital Studio',
      devopsCloud: 'DevOps & Cloud',
      aiMl: 'AI & Machine Learning',
      processAutomation: 'Process Automation',
      backendDev: 'Backend Development',
      frontendDev: 'Frontend Development',
      security: 'Security Solutions'
    },
    es: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      projects: 'Proyectos',
      team: 'Equipo',
      market: 'Mercado de Apps',
      contact: 'Contacto',
      getStarted: 'Comenzar',
      agileStudio: 'Estudio Digital Ágil',
      devopsCloud: 'DevOps y Nube',
      aiMl: 'IA y Aprendizaje Automático',
      processAutomation: 'Automatización de Procesos',
      backendDev: 'Desarrollo Backend',
      frontendDev: 'Desarrollo Frontend',
      security: 'Soluciones de Seguridad'
    },
    fr: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      projects: 'Projets',
      team: 'Équipe',
      market: 'Marché d\'Apps',
      contact: 'Contact',
      getStarted: 'Commencer',
      agileStudio: 'Studio Numérique Agile',
      devopsCloud: 'DevOps et Cloud',
      aiMl: 'IA et Apprentissage Automatique',
      processAutomation: 'Automatisation des Processus',
      backendDev: 'Développement Backend',
      frontendDev: 'Développement Frontend',
      security: 'Solutions de Sécurité'
    },
    de: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Dienstleistungen',
      projects: 'Projekte',
      team: 'Team',
      market: 'App-Marktplatz',
      contact: 'Kontakt',
      getStarted: 'Loslegen',
      agileStudio: 'Agiles Digital Studio',
      devopsCloud: 'DevOps & Cloud',
      aiMl: 'KI & Maschinelles Lernen',
      processAutomation: 'Prozessautomatisierung',
      backendDev: 'Backend-Entwicklung',
      frontendDev: 'Frontend-Entwicklung',
      security: 'Sicherheitslösungen'
    },
    zh: {
      home: '首页',
      about: '关于我们',
      services: '服务',
      projects: '项目',
      team: '团队',
      market: '应用市场',
      contact: '联系我们',
      getStarted: '开始',
      agileStudio: '敏捷数字工作室',
      devopsCloud: 'DevOps与云服务',
      aiMl: '人工智能与机器学习',
      processAutomation: '流程自动化',
      backendDev: '后端开发',
      frontendDev: '前端开发',
      security: '安全解决方案'
    },
    ja: {
      home: 'ホーム',
      about: '会社概要',
      services: 'サービス',
      projects: 'プロジェクト',
      team: 'チーム',
      market: 'アプリマーケット',
      contact: 'お問い合わせ',
      getStarted: '始める',
      agileStudio: 'アジャイルデジタルスタジオ',
      devopsCloud: 'DevOps & クラウド',
      aiMl: 'AI & 機械学習',
      processAutomation: 'プロセス自動化',
      backendDev: 'バックエンド開発',
      frontendDev: 'フロントエンド開発',
      security: 'セキュリティソリューション'
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language') || 'en';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    setCurrentLanguage(savedLanguage);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('language', langCode);
    setIsLanguageMenuOpen(false);
    // Trigger a page reload to update all content
    window.location.reload();
  };

  const navigationItems = [
    { name: t.home, href: '/' },
    { name: t.about, href: '/about' },
    { 
      name: t.services, 
      href: '/services',
      submenu: [
        { name: t.devopsCloud, href: '/services/devops' },
        { name: t.aiMl, href: '/services/ai-ml' },
        { name: t.processAutomation, href: '/services/automation' },
        { name: t.backendDev, href: '/services/backend' },
        { name: t.frontendDev, href: '/services/frontend' },
        { name: t.security, href: '/services/security' }
      ]
    },
    { name: t.projects, href: '/projects' },
    { name: t.team, href: '/team' },
    { name: t.market, href: '/market' },
    { name: t.contact, href: '/contact' },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-red-600 dark:to-red-800 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-800 dark:text-white">Prometheus</span>
                <div className="text-xs text-gray-600 dark:text-gray-400">{t.agileStudio}</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link href={item.href}>
                  <motion.div
                    className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-red-400 transition-colors font-medium relative ${
                      pathname === item.href ? 'text-blue-600 dark:text-red-400' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-red-400"
                        layoutId="activeTab"
                      />
                    )}
                  </motion.div>
                </Link>
                
                {/* Submenu for Services */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href}>
                        <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          {subItem.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector, Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-1" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {currentLang?.flag} {currentLang?.code.toUpperCase()}
                </span>
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-2"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center ${
                          currentLanguage === lang.code ? 'bg-blue-50 dark:bg-red-900/20 text-blue-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="mr-3">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            <Link href="/market">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </Link>

            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg">
                {t.getStarted}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
            <Link href="/market">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Menu */}
      <AnimatePresence>
        {isLanguageMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="px-4 py-4 grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-left p-2 rounded-lg transition-colors flex items-center ${
                    currentLanguage === lang.code 
                      ? 'bg-blue-50 dark:bg-red-900/20 text-blue-600 dark:text-red-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link href={item.href}>
                    <motion.div
                      className={`block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-red-400 transition-colors font-medium ${
                        pathname === item.href ? 'text-blue-600 dark:text-red-400' : ''
                      }`}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href}>
                          <div 
                            className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-red-400 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.getStarted}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;