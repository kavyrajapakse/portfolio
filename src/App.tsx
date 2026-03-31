import { useState } from 'react'
import './App.css'

type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ko' | 'pt' | 'ru' | 'ar' | 'hi' | 'it'

const translations = {
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      name: 'Kavithma',
      subtitle: 'Software Developer | Full-Stack Enthusiast | Android Developer',
      desc: 'I build beautiful, scalable applications across Android, web, and backend systems. Currently focused on Java, Spring Boot, React, and cloud technologies.',
      viewWork: 'View My Work',
      getInTouch: 'Get in Touch'
    },
    about: {
      title: 'About Me',
      text1: "I'm an undergraduate software developer passionate about creating impactful applications. My journey spans Android development, full-stack web applications, and backend systems.",
      text2: 'I love turning ideas into working systems and continuously improving through hands-on projects. My goal is to become a skilled full-stack/backend engineer capable of building scalable solutions.',
      text3: "When I'm not coding, I enjoy exploring new technologies, system design principles, and cloud technologies.",
      projects: 'Projects',
      years: 'Years',
      skills: 'Skills'
    },
    skills: { title: 'Skills & Technologies' },
    projects: {
      title: 'Featured Projects',
      ecommerce: 'E-Commerce Platform',
      ecommerceDesc: 'Full-stack e-commerce application built with React and MySQL, featuring responsive UI and dynamic product management',
      thriftsstop: 'ThriftsStop',
      thriftsstopDesc: 'Backend Java e-commerce specialization using Servlets and Hibernate CRM, integrated with MySQL database management',
      wanderloom: 'Wanderloom',
      wanderloomDesc: 'Clothing shop desktop management system developed in Java with MySQL integration for inventory and customer management',
      myideas: 'MyIdeasTracker',
      myideasDesc: 'Idea tracking application with React frontend and Java (Servlets + Hibernate) backend for organizing and managing ideas',
      viewProject: 'View Project →'
    },
    contact: {
      title: "Let's Connect",
      desc: 'I\'m always open to new opportunities and interesting conversations.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      connectMe: 'Connect with me',
      checkRepos: 'Check my repositories'
    },
    footer: '© 2026 Kavithma. Built with React & ❤️'
  },
  es: {
    nav: { home: 'Inicio', about: 'Acerca', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto' },
    hero: { name: 'Kavithma', subtitle: 'Desarrollador de Software | Entusiasta Full-Stack | Desarrollador Android', desc: 'Construyo aplicaciones hermosas y escalables en Android, web y sistemas backend. Actualmente enfocado en Java, Spring Boot, React y tecnologías en la nube.', viewWork: 'Ver Mi Trabajo', getInTouch: 'Ponerse en contacto' },
    about: { title: 'Acerca de Mí', text1: 'Soy un desarrollador de software de pregrado apasionado por crear aplicaciones impactantes. Mi viaje abarca desarrollo de Android, aplicaciones web full-stack y sistemas backend.', text2: 'Me encanta convertir ideas en sistemas funcionales y mejorar continuamente a través de proyectos prácticos. Mi objetivo es convertirme en un ingeniero full-stack/backend capacitado capaz de construir soluciones escalables.', text3: 'Cuando no estoy programando, disfruto explorando nuevas tecnologías, principios de diseño de sistemas y tecnologías en la nube.', projects: 'Proyectos', years: 'Años', skills: 'Habilidades' },
    skills: { title: 'Habilidades y Tecnologías' },
    projects: { title: 'Proyectos Destacados', ecommerce: 'Plataforma de Comercio Electrónico', ecommerceDesc: 'Aplicación de comercio electrónico full-stack construida con React y MySQL, con interfaz receptiva y gestión dinámica de productos', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'Especialización en comercio electrónico backend Java usando Servlets e Hibernate CRM, integrado con gestión de base de datos MySQL', wanderloom: 'Wanderloom', wanderloomDesc: 'Sistema de gestión de tienda de ropa de escritorio desarrollado en Java con integración MySQL para gestión de inventario y clientes', myideas: 'MyIdeasTracker', myideasDesc: 'Aplicación de seguimiento de ideas con frontend React y backend Java (Servlets + Hibernate) para organizar y gestionar ideas', viewProject: 'Ver Proyecto →' },
    contact: { title: 'Conectemos', desc: 'Siempre estoy abierto a nuevas oportunidades y conversaciones interesantes.', email: 'Correo electrónico', linkedin: 'LinkedIn', github: 'GitHub', connectMe: 'Conecta conmigo', checkRepos: 'Consulta mis repositorios' },
    footer: '© 2026 Kavithma. Construido con React & ❤️'
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', contact: 'Contact' },
    hero: { name: 'Kavithma', subtitle: 'Développeur Logiciel | Enthousiaste Full-Stack | Développeur Android', desc: 'Je crée des applications belles et évolutives sur Android, web et systèmes backend. Actuellement axé sur Java, Spring Boot, React et les technologies cloud.', viewWork: 'Voir Mon Travail', getInTouch: 'Prendre contact' },
    about: { title: 'À Propos de Moi', text1: 'Je suis un développeur logiciel de premier cycle passionné par la création d\'applications percutantes. Mon parcours couvre le développement Android, les applications web full-stack et les systèmes backend.', text2: 'J\'aime transformer des idées en systèmes fonctionnels et m\'améliorer continuellement par le biais de projets pratiques. Mon objectif est de devenir un ingénieur full-stack/backend compétent capable de construire des solutions évolutives.', text3: 'Quand je ne code pas, j\'aime explorer les nouvelles technologies, les principes de conception de systèmes et les technologies cloud.', projects: 'Projets', years: 'Années', skills: 'Compétences' },
    skills: { title: 'Compétences et Technologie' },
    projects: { title: 'Projets Vedette', ecommerce: 'Plateforme de Commerce Électronique', ecommerceDesc: 'Application de commerce électronique full-stack construite avec React et MySQL, avec interface réactive et gestion dynamique des produits', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'Spécialisation en commerce électronique backend Java utilisant Servlets et Hibernate CRM, intégrée à la gestion de base de données MySQL', wanderloom: 'Wanderloom', wanderloomDesc: 'Système de gestion de magasin de vêtements de bureau développé en Java avec intégration MySQL pour la gestion des stocks et des clients', myideas: 'MyIdeasTracker', myideasDesc: 'Application de suivi des idées avec frontend React et backend Java (Servlets + Hibernate) pour organiser et gérer les idées', viewProject: 'Voir le Projet →' },
    contact: { title: 'Connectons-nous', desc: 'Je suis toujours ouvert aux nouvelles opportunités et aux conversations intéressantes.', email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', connectMe: 'Connectez-vous avec moi', checkRepos: 'Consultez mes référentiels' },
    footer: '© 2026 Kavithma. Construit avec React & ❤️'
  },
  de: {
    nav: { home: 'Startseite', about: 'Über', skills: 'Fähigkeiten', projects: 'Projekte', contact: 'Kontakt' },
    hero: { name: 'Kavithma', subtitle: 'Softwareentwickler | Full-Stack-Enthusiast | Android-Entwickler', desc: 'Ich erstelle schöne und skalierbare Anwendungen für Android, Web und Backend-Systeme. Derzeit auf Java, Spring Boot, React und Cloud-Technologien ausgerichtet.', viewWork: 'Meine Arbeiten Ansehen', getInTouch: 'In Kontakt Treten' },
    about: { title: 'Über Mich', text1: 'Ich bin ein Student der Softwareentwicklung, der leidenschaftlich gerne wirkungsvolle Anwendungen erstellt. Meine Karriere umfasst Android-Entwicklung, Full-Stack-Webanwendungen und Backend-Systeme.', text2: 'Ich liebe es, Ideen in funktionsfähige Systeme umzuwandeln und mich durch praktische Projekte kontinuierlich zu verbessern. Mein Ziel ist es, ein qualifizierter Full-Stack-/Backend-Ingenieur zu werden, der skalierbare Lösungen entwickeln kann.', text3: 'Wenn ich nicht programmiere, erkundige ich gerne neue Technologien, Designprinzipien für Systeme und Cloud-Technologien.', projects: 'Projekte', years: 'Jahre', skills: 'Fähigkeiten' },
    skills: { title: 'Fähigkeiten und Technologien' },
    projects: { title: 'Ausgewählte Projekte', ecommerce: 'E-Commerce-Plattform', ecommerceDesc: 'Full-Stack-E-Commerce-Anwendung mit React und MySQL, mit responsivem UI und dynamischer Produktverwaltung', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'Spezialisierung auf Backend-Java-E-Commerce mit Servlets und Hibernate CRM, integriert mit MySQL-Datenbankverwaltung', wanderloom: 'Wanderloom', wanderloomDesc: 'In Java entwickeltes Desktop-Verwaltungssystem für Bekleidungsgeschäfte mit MySQL-Integration für Bestands- und Kundenverwaltung', myideas: 'MyIdeasTracker', myideasDesc: 'Ideen-Tracking-Anwendung mit React-Frontend und Java-Backend (Servlets + Hibernate) zur Verwaltung von Ideen', viewProject: 'Projekt Ansehen →' },
    contact: { title: 'Verbinden Wir Uns', desc: 'Ich bin immer offen für neue Möglichkeiten und interessante Gespräche.', email: 'E-Mail', linkedin: 'LinkedIn', github: 'GitHub', connectMe: 'Verbinden Sie sich mit mir', checkRepos: 'Überprüfen Sie meine Repositories' },
    footer: '© 2026 Kavithma. Erstellt mit React & ❤️'
  },
  zh: {
    nav: { home: '首页', about: '关于', skills: '技能', projects: '项目', contact: '联系' },
    hero: { name: 'Kavithma', subtitle: '软件开发人员 | 全栈爱好者 | Android 开发人员', desc: '我在 Android、Web 和后端系统中构建美观且可扩展的应用程序。目前专注于 Java、Spring Boot、React 和云技术。', viewWork: '查看我的工作', getInTouch: '联系我' },
    about: { title: '关于我', text1: '我是一名本科软件开发人员，热衷于创建有影响力的应用程序。我的经历包括 Android 开发、全栈 Web 应用程序和后端系统。', text2: '我喜欢将想法转化为工作系统，并通过动手项目不断完善。我的目标是成为一名熟练的全栈/后端工程师，能够构建可扩展的解决方案。', text3: '当我不编程时，我喜欢探索新技术、系统设计原则和云技术。', projects: '项目', years: '年份', skills: '技能' },
    skills: { title: '技能和技术' },
    projects: { title: '特色项目', ecommerce: '电子商务平台', ecommerceDesc: '使用 React 和 MySQL 构建的全栈电子商务应用程序，具有响应式 UI 和动态产品管理', thriftsstop: 'ThriftsStop', thriftsstopDesc: '使用 Servlets 和 Hibernate CRM 的后端 Java 电子商务专业化，集成 MySQL 数据库管理', wanderloom: 'Wanderloom', wanderloomDesc: '用 Java 开发的服装店桌面管理系统，具有 MySQL 集成，用于库存和客户管理', myideas: 'MyIdeasTracker', myideasDesc: '具有 React 前端和 Java 后端 (Servlets + Hibernate) 的想法跟踪应用程序，用于组织和管理想法', viewProject: '查看项目 →' },
    contact: { title: '让我们联系', desc: '我总是对新的机会和有趣的对话持开放态度。', email: '电子邮件', linkedin: 'LinkedIn', github: 'GitHub', connectMe: '与我联系', checkRepos: '查看我的存储库' },
    footer: '© 2026 Kavithma. 使用 React & ❤️ 构建'
  },
  ja: {
    nav: { home: 'ホーム', about: 'について', skills: 'スキル', projects: 'プロジェクト', contact: 'お問い合わせ' },
    hero: { name: 'Kavithma', subtitle: 'ソフトウェア開発者 | フルスタック愛好家 | Android開発者', desc: 'Android、Web、バックエンド システムにわたって、美しくスケーラブルなアプリケーションを構築します。現在、Java、Spring Boot、React、クラウド技術に重点を置いています。', viewWork: '私の作品を表示', getInTouch: '連絡してください' },
    about: { title: '自己紹介', text1: '影響力のあるアプリケーション作成に情熱を持つ学部ソフトウェア開発者です。Android開発、フルスタックWebアプリケーション、バックエンドシステムにわたる経験があります。', text2: 'アイデアを機能するシステムに変え、実践的なプロジェクトを通じて継続的に改善することが大好きです。スケーラブルなソリューションを構築できる熟練したフルスタック/バックエンドエンジニアになることが目標です。', text3: 'コーディング以外のときは、新しいテクノロジー、システム設計の原則、クラウドテクノロジーの探索を楽しんでいます。', projects: 'プロジェクト', years: '年', skills: 'スキル' },
    skills: { title: 'スキルと技術' },
    projects: { title: '特集プロジェクト', ecommerce: 'e コマースプラットフォーム', ecommerceDesc: 'React と MySQL で構築されたフルスタック e コマース アプリケーション。レスポンシブ UI と動的な製品管理機能を備えています', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'Servlets と Hibernate CRM を使用したバックエンド Java e コマース専門化。MySQL データベース管理と統合', wanderloom: 'Wanderloom', wanderloomDesc: 'Java で開発された衣料品店のデスクトップ管理システム。在庫と顧客管理用の MySQL 統合', myideas: 'MyIdeasTracker', myideasDesc: 'React フロントエンドと Java バックエンド (Servlets + Hibernate) を備えたアイデア追跡アプリケーション', viewProject: 'プロジェクトを表示 →' },
    contact: { title: 'つながりましょう', desc: '新しい機会と興味深い会話にいつでも対応する準備ができています。', email: 'メール', linkedin: 'LinkedIn', github: 'GitHub', connectMe: '私と繋がってください', checkRepos: 'リポジトリを確認してください' },
    footer: '© 2026 Kavithma。React & ❤️ で構築'
  },
  ko: {
    nav: { home: '홈', about: '소개', skills: '기술', projects: '프로젝트', contact: '연락처' },
    hero: { name: 'Kavithma', subtitle: '소프트웨어 개발자 | 풀 스택 애호가 | Android 개발자', desc: 'Android, 웹 및 백엔드 시스템에서 아름답고 확장 가능한 애플리케이션을 구축합니다. 현재 Java, Spring Boot, React 및 클라우드 기술에 중점을 두고 있습니다.', viewWork: '내 작업 보기', getInTouch: '연락처' },
    about: { title: '자기소개', text1: '영향력 있는 애플리케이션 개발에 열정적인 학부 소프트웨어 개발자입니다. Android 개발, 풀 스택 웹 애플리케이션 및 백엔드 시스템을 아우르는 경험이 있습니다.', text2: '아이디어를 작동하는 시스템으로 변환하고 실습 프로젝트를 통해 지속적으로 개선하는 것을 좋아합니다. 확장 가능한 솔루션을 구축할 수 있는 숙련된 풀 스택/백엔드 엔지니어가 되는 것이 목표입니다.', text3: '코딩하지 않을 때는 새로운 기술, 시스템 설계 원칙 및 클라우드 기술 탐색을 즐깁니다.', projects: '프로젝트', years: '년', skills: '기술' },
    skills: { title: '기술 및 기술' },
    projects: { title: '추천 프로젝트', ecommerce: '전자 상거래 플랫폼', ecommerceDesc: 'React 및 MySQL로 구축한 풀 스택 전자 상거래 애플리케이션. 반응형 UI 및 동적 제품 관리 기능', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'Servlets 및 Hibernate CRM을 사용한 백엔드 Java 전자상거래 전문화. MySQL 데이터베이스 관리 통합', wanderloom: 'Wanderloom', wanderloomDesc: 'Java로 개발한 의류점 데스크톱 관리 시스템. 재고 및 고객 관리를 위한 MySQL 통합', myideas: 'MyIdeasTracker', myideasDesc: 'React 프론트엔드 및 Java 백엔드(Servlets + Hibernate)가 있는 아이디어 추적 애플리케이션', viewProject: '프로젝트 보기 →' },
    contact: { title: '연락처', desc: '새로운 기회와 흥미로운 대화에 항상 열려 있습니다.', email: '이메일', linkedin: 'LinkedIn', github: 'GitHub', connectMe: '저와 연결하세요', checkRepos: '저장소 확인' },
    footer: '© 2026 Kavithma. React & ❤️로 구축'
  },
  pt: {
    nav: { home: 'Início', about: 'Sobre', skills: 'Habilidades', projects: 'Projetos', contact: 'Contato' },
    hero: { name: 'Kavithma', subtitle: 'Desenvolvedor de Software | Entusiasta Full-Stack | Desenvolvedor Android', desc: 'Construo aplicações bonitas e escaláveis em Android, web e sistemas backend. Atualmente focado em Java, Spring Boot, React e tecnologias em nuvem.', viewWork: 'Ver Meu Trabalho', getInTouch: 'Entre em Contato' },
    about: { title: 'Sobre Mim', text1: 'Sou um desenvolvedor de software apaixonado por criar aplicações impactantes. Minha experiência abrange desenvolvimento Android, aplicações web full-stack e sistemas backend.', text2: 'Adoro transformar ideias em sistemas funcionais e melhorar continuamente através de projetos práticos. Meu objetivo é me tornar um engenheiro full-stack/backend hábil e capaz de construir soluções escaláveis.', text3: 'Quando não estou programando, gosto de explorar novas tecnologias, princípios de design de sistemas e tecnologias em nuvem.', projects: 'Projetos', years: 'Anos', skills: 'Habilidades' },
    skills: { title: 'Habilidades e Tecnologias' },
    projects: { title: 'Projetos em Destaque', ecommerce: 'Plataforma de Comércio Eletrônico', ecommerceDesc: 'Aplicação de comércio eletrônico Full-stack construída com React e MySQL, com interface responsiva e gerenciamento dinâmico de produtos', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'Especialização em comércio eletrônico backend Java usando Servlets e Hibernate CRM, integrado com gerenciamento de banco de dados MySQL', wanderloom: 'Wanderloom', wanderloomDesc: 'Sistema de gerenciamento de loja de roupas de desktop desenvolvido em Java com integração MySQL para gerenciamento de inventário e clientes', myideas: 'MyIdeasTracker', myideasDesc: 'Aplicação de rastreamento de ideias com frontend React e backend Java (Servlets + Hibernate) para organizar e gerenciar ideias', viewProject: 'Ver Projeto →' },
    contact: { title: 'Vamos nos Conectar', desc: 'Estou sempre aberto a novas oportunidades e conversas interessantes.', email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', connectMe: 'Conecte-se comigo', checkRepos: 'Confira meus repositórios' },
    footer: '© 2026 Kavithma. Construído com React & ❤️'
  },
  ru: {
    nav: { home: 'Главная', about: 'О себе', skills: 'Навыки', projects: 'Проекты', contact: 'Контакты' },
    hero: { name: 'Kavithma', subtitle: 'Разработчик программного обеспечения | Full-Stack энтузиаст | Разработчик Android', desc: 'Я создаю красивые и масштабируемые приложения для Android, веб-систем и серверной части. В настоящее время сосредоточен на Java, Spring Boot, React и облачных технологиях.', viewWork: 'Посмотреть Мою Работу', getInTouch: 'Свяжитесь со Мной' },
    about: { title: 'Обо мне', text1: 'Я студент, разработчик программного обеспечения, увлеченный созданием влиятельных приложений. Мой опыт охватывает разработку Android, полнофункциональные веб-приложения и системы серверной части.', text2: 'Мне нравится преобразовывать идеи в работающие системы и постоянно совершенствоваться на практических проектах. Моя цель — стать квалифицированным инженером full-stack/backend, способным создавать масштабируемые решения.', text3: 'Когда я не программирую, я люблю исследовать новые технологии, принципы проектирования систем и облачные технологии.', projects: 'Проекты', years: 'Лет', skills: 'Навыки' },
    skills: { title: 'Навыки и технологии' },
    projects: { title: 'Избранные Проекты', ecommerce: 'Платформа электронной коммерции', ecommerceDesc: 'Полнофункциональное приложение электронной коммерции, построенное с помощью React и MySQL с отзывчивым интерфейсом и динамическим управлением товарами', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'Специализация на серверной части Java для электронной коммерции с использованием Servlets и Hibernate CRM, интегрированная с управлением базой данных MySQL', wanderloom: 'Wanderloom', wanderloomDesc: 'Система управления магазином одежды для рабочего стола, разработанная на Java с интеграцией MySQL для управления запасами и клиентами', myideas: 'MyIdeasTracker', myideasDesc: 'Приложение для отслеживания идей с фронтэндом React и бэкэндом Java (Servlets + Hibernate) для организации и управления идеями', viewProject: 'Просмотреть Проект →' },
    contact: { title: 'Давайте Свяжемся', desc: 'Я всегда открыт для новых возможностей и интересных разговоров.', email: 'Электронная почта', linkedin: 'LinkedIn', github: 'GitHub', connectMe: 'Свяжитесь со мной', checkRepos: 'Проверьте мои репозитории' },
    footer: '© 2026 Kavithma. Создано с React & ❤️'
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'عني', skills: 'المهارات', projects: 'المشاريع', contact: 'اتصل' },
    hero: { name: 'Kavithma', subtitle: 'مطور البرمجيات | متحمس Full-Stack | مطور Android', desc: 'أنا أبني تطبيقات جميلة وقابلة للتوسع عبر Android والويب وأنظمة الواجهة الخلفية. حاليا يركز على Java و Spring Boot و React وتقنيات السحابة.', viewWork: 'عرض عملي', getInTouch: 'تواصل معي' },
    about: { title: 'معلومات عني', text1: 'أنا مطور برمجيات جامعي متحمس لإنشاء تطبيقات مؤثرة. تغطي رحلتي تطوير Android وتطبيقات الويب Full-Stack وأنظمة الواجهة الخلفية.', text2: 'أحب تحويل الأفكار إلى أنظمة عاملة والتحسن المستمر من خلال المشاريع العملية. هدفي أن أصبح مهندسًا Full-Stack/Backend ماهرًا قادرًا على بناء حلول قابلة للتوسع.', text3: 'عندما لا أكون برمجة ، أستمتع باستكشاف التقنيات الجديدة ومبادئ تصميم الأنظمة وتقنيات السحابة.', projects: 'المشاريع', years: 'سنوات', skills: 'المهارات' },
    skills: { title: 'المهارات والتقنيات' },
    projects: { title: 'المشاريع المميزة', ecommerce: 'منصة التجارة الإلكترونية', ecommerceDesc: 'تطبيق تجارة إلكترونية Full-stack مبني باستخدام React و MySQL ، مع واجهة مستجيبة وإدارة منتجات ديناميكية', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'تخصص التجارة الإلكترونية الخلفية Java باستخدام Servlets و Hibernate CRM ، متكامل مع إدارة قاعدة بيانات MySQL', wanderloom: 'Wanderloom', wanderloomDesc: 'نظام إدارة متجر الملابس في سطح المكتب الذي تم تطويره بلغة Java مع دمج MySQL لإدارة المخزون والعملاء', myideas: 'MyIdeasTracker', myideasDesc: 'تطبيق تتبع الأفكار مع React Frontend و Java Backend (Servlets + Hibernate) لتنظيم وإدارة الأفكار', viewProject: 'عرض المشروع →' },
    contact: { title: 'فلنتواصل', desc: 'أنا دائما منفتح على فرص جديدة ومحادثات ممتعة.', email: 'بريد إلكتروني', linkedin: 'LinkedIn', github: 'GitHub', connectMe: 'تواصل معي', checkRepos: 'تحقق من مستودعاتي' },
    footer: '© 2026 Kavithma. تم بناؤه باستخدام React & ❤️'
  },
  hi: {
    nav: { home: 'होम', about: 'परिचय', skills: 'कौशल', projects: 'परियोजनाएं', contact: 'संपर्क' },
    hero: { name: 'Kavithma', subtitle: 'सॉफ्टवेयर डेवलपर | Full-Stack उत्साही | Android डेवलपर', desc: 'मैं Android, वेब और बैकएंड सिस्टम में सुंदर और स्केलेबल एप्लिकेशन बनाता हूं। वर्तमान में Java, Spring Boot, React और क्लाउड तकनीकों पर ध्यान केंद्रित हूं।', viewWork: 'मेरा काम देखें', getInTouch: 'संपर्क में रहें' },
    about: { title: 'मेरे बारे में', text1: 'मैं एक प्रभावशाली एप्लिकेशन बनाने के लिए उत्सुक एक स्नातक सॉफ्टवेयर डेवलपर हूं। मेरी यात्रा Android विकास, Full-Stack वेब एप्लिकेशन और बैकएंड सिस्टम को शामिल करती है।', text2: 'मुझे विचारों को कार्यशील प्रणालियों में बदलना और व्यावहारिक परियोजनाओं के माध्यम से निरंतर सुधार करना पसंद है। मेरा लक्ष्य एक कुशल Full-Stack/Backend इंजीनियर बनना है जो स्केलेबल समाधान बनाने में सक्षम हो।', text3: 'जब मैं प्रोग्रामिंग नहीं कर रहा हूं, तो मुझे नई तकनीकें, सिस्टम डिजाइन सिद्धांत और क्लाउड तकनीकों की खोज करना पसंद है।', projects: 'परियोजनाएं', years: 'वर्ष', skills: 'कौशल' },
    skills: { title: 'कौशल और तकनीकें' },
    projects: { title: 'विशेष परियोजनाएं', ecommerce: 'ई-कॉमर्स प्लेटफॉर्म', ecommerceDesc: 'React और MySQL के साथ निर्मित Full-stack ई-कॉमर्स एप्लिकेशन, प्रतिक्रियाशील UI और गतिशील उत्पाद प्रबंधन के साथ', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'Servlets और Hibernate CRM का उपयोग करके बैकएंड Java ई-कॉमर्स विशेषज्ञता, MySQL डेटाबेस प्रबंधन के साथ एकीकृत', wanderloom: 'Wanderloom', wanderloomDesc: 'Java में विकसित कपड़ों की दुकान के लिए डेस्कटॉप प्रबंधन प्रणाली, इन्वेंटरी और ग्राहक प्रबंधन के लिए MySQL एकीकरण', myideas: 'MyIdeasTracker', myideasDesc: 'विचारों को ट्रैक करने के लिए React Frontend और Java Backend (Servlets + Hibernate) के साथ विचार ट्रैकिंग एप्लिकेशन', viewProject: 'परियोजना देखें →' },
    contact: { title: 'हमसे जुड़ें', desc: 'मैं हमेशा नए अवसरों और दिलचस्प बातचीत के लिए खुला हूं।', email: 'ईमेल', linkedin: 'LinkedIn', github: 'GitHub', connectMe: 'मेरे से जुड़ें', checkRepos: 'मेरे रिपोजिटरी देखें' },
    footer: '© 2026 Kavithma. React & ❤️ के साथ निर्मित'
  },
  it: {
    nav: { home: 'Home', about: 'Chi Sono', skills: 'Abilità', projects: 'Progetti', contact: 'Contatti' },
    hero: { name: 'Kavithma', subtitle: 'Sviluppatore di Software | Appassionato Full-Stack | Sviluppatore Android', desc: 'Costruisco applicazioni belle e scalabili su Android, web e sistemi backend. Attualmente focalizzato su Java, Spring Boot, React e tecnologie cloud.', viewWork: 'Visualizza Il Mio Lavoro', getInTouch: 'Contattami' },
    about: { title: 'Chi Sono', text1: 'Sono uno sviluppatore di software laureando appassionato della creazione di applicazioni di impatto. Il mio percorso comprende lo sviluppo Android, applicazioni web full-stack e sistemi backend.', text2: 'Amo trasformare le idee in sistemi funzionanti e migliorare continuamente attraverso progetti pratici. Il mio obiettivo è diventare un ingegnere full-stack/backend abile in grado di costruire soluzioni scalabili.', text3: 'Quando non sto programmando, mi piace esplorare nuove tecnologie, principi di progettazione dei sistemi e tecnologie cloud.', projects: 'Progetti', years: 'Anni', skills: 'Abilità' },
    skills: { title: 'Abilità e Tecnologie' },
    projects: { title: 'Progetti in Evidenza', ecommerce: 'Piattaforma di E-commerce', ecommerceDesc: 'Applicazione di e-commerce full-stack costruita con React e MySQL, con interfaccia reattiva e gestione dinamica dei prodotti', thriftsstop: 'ThriftsStop', thriftsstopDesc: 'Specializzazione in e-commerce backend Java utilizzando Servlets e Hibernate CRM, integrata con gestione del database MySQL', wanderloom: 'Wanderloom', wanderloomDesc: 'Sistema di gestione desktop del negozio di abbigliamento sviluppato in Java con integrazione MySQL per la gestione dell\'inventario e dei clienti', myideas: 'MyIdeasTracker', myideasDesc: 'Applicazione di monitoraggio delle idee con frontend React e backend Java (Servlets + Hibernate) per organizzare e gestire le idee', viewProject: 'Visualizza Progetto →' },
    contact: { title: 'Connettiamoci', desc: 'Sono sempre aperto a nuove opportunità e conversazioni interessanti.', email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', connectMe: 'Connettiti con me', checkRepos: 'Controlla i miei repository' },
    footer: '© 2026 Kavithma. Costruito con React & ❤️'
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [language, setLanguage] = useState<Language>('en')

  const t = translations[language]

  const projects = [
    {
      title: t.projects.ecommerce,
      desc: t.projects.ecommerceDesc,
      tech: ['React', 'JavaScript', 'MySQL', 'Bootstrap'],
      link: 'https://github.com/kavyrajapakse/E-commerce'
    },
    {
      title: t.projects.thriftsstop,
      desc: t.projects.thriftsstopDesc,
      tech: ['Java', 'Servlets', 'Hibernate', 'MySQL'],
      link: 'https://github.com/kavyrajapakse/thrifteStop'
    },
    {
      title: t.projects.wanderloom,
      desc: t.projects.wanderloomDesc,
      tech: ['Java', 'MySQL', 'Swing'],
      link: 'https://github.com/kavyrajapakse/Wanderloom'
    },
    {
      title: t.projects.myideas,
      desc: t.projects.myideasDesc,
      tech: ['React', 'Java', 'Hibernate', 'MySQL'],
      link: 'https://github.com/kavyrajapakse/MyIdeaTracker'
    }
  ]

  const skills = [
    { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript'] },
    { category: 'Frontend', items: ['React', 'HTML/CSS', 'Bootstrap', 'Responsive Design'] },
    { category: 'Mobile', items: ['Android', 'React Native', 'Firebase'] },
    { category: 'Backend', items: ['Spring Boot', 'Servlets', 'Hibernate/JPA'] },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL'] },
    { category: 'DevOps', items: ['Git', 'GitHub', 'Docker basics'] }
  ]

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ]

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">K</div>
            <span>Kavithma</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => setActiveSection('home')}>{t.nav.home}</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')}>{t.nav.about}</a></li>
            <li><a href="#skills" onClick={() => setActiveSection('skills')}>{t.nav.skills}</a></li>
            <li><a href="#projects" onClick={() => setActiveSection('projects')}>{t.nav.projects}</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')}>{t.nav.contact}</a></li>
          </ul>
          <div className="language-selector">
            <select value={language} onChange={(e) => setLanguage(e.target.value as Language)} className="lang-dropdown">
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.flag} {lang.name}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm <span className="highlight">{t.hero.name}</span></h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-description">{t.hero.desc}</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">{t.hero.viewWork}</a>
              <a href="mailto:kavithmamethmanthi0@gmail.com" className="btn btn-secondary">{t.hero.getInTouch}</a>
            </div>
            <div className="social-icons">
              <a href="https://github.com/kavyrajapakse" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/kavithma-rajapakse-58b5a6272/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
              <a href="mailto:kavithmamethmanthi0@gmail.com" title="Email">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="gradient-blob">
              <div className="particle-1"></div>
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="glow"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
              <p>{t.about.text3}</p>
            </div>
            <div className="about-stats">
              <div className="stat"><div className="stat-number">8+</div><div className="stat-label">{t.about.projects}</div></div>
              <div className="stat"><div className="stat-number">3+</div><div className="stat-label">{t.about.years}</div></div>
              <div className="stat"><div className="stat-number">6</div><div className="stat-label">{t.about.skills}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-card">
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <svg className="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.viewProject}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="contact-content">
            <p>{t.contact.desc}</p>
            <div className="contact-methods">
              <a href="mailto:kavithmamethmanthi0@gmail.com" className="contact-card">
                <div className="contact-icon">✉</div>
                <div><h4>{t.contact.email}</h4><p>kavithmamethmanthi0@gmail.com</p></div>
              </a>
              <a href="https://www.linkedin.com/in/kavithma-rajapakse-58b5a6272/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">in</div>
                <div><h4>{t.contact.linkedin}</h4><p>{t.contact.connectMe}</p></div>
              </a>
              <a href="https://github.com/kavyrajapakse" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">⚡</div>
                <div><h4>{t.contact.github}</h4><p>{t.contact.checkRepos}</p></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
