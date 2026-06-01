import { createContext, useContext, useEffect, useState } from 'react'

export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', work: 'Work', education: 'Education', learning: 'Learning', contact: 'Contact' },
    hero: {
      greeting: "Hi, I'm",
      role: 'Engineering Science Student',
      roleConnector: '& Junior ',
      roleAccent: 'Web Developer',
      description:
        'I design and build modern websites, using innovative tools to create smarter solutions for businesses.',
      aboutBtn: 'About Me',
      contactBtn: 'Contact Me',
      locationLabel: 'Location',
      locationValue: 'Rome, Italy',
      emailLabel: 'Email',
    },
    about: {
      lead: 'About', accent: 'Me',
      p1: "I'm an Engineering Science student who loves technology, innovation, and continuous learning. I enjoy solving problems, exploring new ideas, and turning concepts into real solutions.",
      p2: 'My goal is to combine engineering and creativity to build practical, user-friendly websites and digital experiences that make a real difference.',
      birthdayLabel: 'Birthday', birthdayValue: '17 December 2004',
      studyLabel: 'Study', studyValue: 'Engineering Science',
      locationLabel: 'Location', locationValue: 'Rome, Italy',
      focusLabel: 'Focus', focusValue: 'Web Development',
    },
    skills: {
      lead: 'My', accent: 'Skills',
      programming: 'Programming', tools: 'Tools', web: 'Web', database: 'Database',
      exploring: 'Exploring',
      exploringItems: ['Artificial Intelligence', 'Machine Learning', 'Data Analysis', 'CRM Systems'],
    },
    work: {
      lead: 'My', accent: 'Work',
      cards: [
        {
          title: 'University Projects',
          state: 'live',
          status: 'Live',
          desc: 'A collection of engineering and academic projects completed during my studies at the University of Rome Tor Vergata.',
          tags: ['Engineering', 'Research', 'Academic'],
        },
        {
          title: 'Web Development Projects',
          state: 'progress',
          status: 'In Progress',
          desc: 'Modern websites and web applications built using current technologies and innovative design approaches.',
          tags: ['Next.js', 'React', 'Framer Motion'],
        },
        {
          title: 'Applications',
          state: 'progress',
          status: 'In Progress',
          desc: 'Future software and application projects currently under development and research.',
          tags: ['Apps', 'Software', 'Innovation'],
        },
      ],
    },
    education: {
      lead: 'My', accent: 'Education',
      uniTitle: 'Engineering Science Student',
      uniSchool: 'University of Rome Tor Vergata',
      uniLocation: 'Rome, Italy',
      uniDesc: 'Studying mathematics, physics, programming, and engineering fundamentals while developing analytical and problem-solving skills.',
      uniBadge: 'Currently Enrolled',
      dipTitle: 'Diploma in Aircraft Maintenance',
      dipLocation: 'Iran',
      dipDesc: 'Learned aircraft systems, engines, maintenance procedures, aviation safety, and technical fundamentals — the foundation of an engineering mindset built around precision and reliability.',
      dipBadge: 'Completed',
    },
    learning: {
      lead: "What I'm", accent: 'Learning',
      items: [
        { title: 'Web Development', text: 'Learning to build responsive and modern websites using HTML, CSS, and JavaScript.' },
        { title: 'Python Programming', text: 'Improving Python skills by solving problems and building small projects.' },
        { title: 'UI/UX Design', text: 'Learning the basics of UI/UX to create clean and user-friendly interfaces.' },
        { title: 'AI Tools', text: 'Exploring AI tools to boost creativity and productivity in development.' },
        { title: 'Problem Solving', text: 'Strengthening logical thinking and problem-solving through practice and challenges.' },
        { title: 'Engineering Studies', text: 'Continuing engineering studies to build a strong technical foundation.' },
      ],
    },
    contact: {
      lead: 'Contact', accent: 'Me', glue: false,
      intro: "I'm available for freelance work, internships, and collaborations. Feel free to reach out!",
      emailLabel: 'Email',
      connect: 'Connect With Me',
      formTitle: 'Send Me a Message',
      nameLabel: 'Your Name', emailFieldLabel: 'Your Email', subjectLabel: 'Subject', messageLabel: 'Message',
      send: 'Send Message',
      success: 'Thanks! Your message has been recorded.',
      errName: 'Please enter your name.',
      errEmail: 'Please enter your email.',
      errEmailValid: 'Enter a valid email.',
      errSubject: 'Please add a subject.',
      errMessage: 'Please write a message.',
    },
    footer: {
      tagline: 'Engineering Science Student & Web Developer',
      built: 'Built with React, Framer Motion & Tailwind CSS',
    },
    a11y: { theme: 'Toggle theme', lang: 'Switch language', menu: 'Toggle menu' },
  },

  it: {
    nav: { home: 'Home', about: 'Chi sono', skills: 'Competenze', work: 'Lavori', education: 'Istruzione', learning: 'Apprendimento', contact: 'Contatti' },
    hero: {
      greeting: 'Ciao, sono',
      role: 'Studentessa di Ingegneria',
      roleConnector: '& Junior ',
      roleAccent: 'Web Developer',
      description:
        'Progetto e sviluppo siti web moderni, utilizzando strumenti innovativi per creare soluzioni più intelligenti per le aziende.',
      aboutBtn: 'Chi sono',
      contactBtn: 'Contattami',
      locationLabel: 'Località',
      locationValue: 'Roma, Italia',
      emailLabel: 'Email',
    },
    about: {
      lead: 'Chi', accent: 'sono',
      p1: "Sono una studentessa di Scienze dell'Ingegneria che ama la tecnologia, l'innovazione e l'apprendimento continuo. Mi piace risolvere problemi, esplorare nuove idee e trasformare i concetti in soluzioni reali.",
      p2: 'Il mio obiettivo è unire ingegneria e creatività per costruire siti web pratici e intuitivi ed esperienze digitali che facciano davvero la differenza.',
      birthdayLabel: 'Data di nascita', birthdayValue: '17 dicembre 2004',
      studyLabel: 'Studi', studyValue: "Scienze dell'Ingegneria",
      locationLabel: 'Località', locationValue: 'Roma, Italia',
      focusLabel: 'Focus', focusValue: 'Sviluppo Web',
    },
    skills: {
      lead: 'Le mie', accent: 'Competenze',
      programming: 'Programmazione', tools: 'Strumenti', web: 'Web', database: 'Database',
      exploring: 'Sto esplorando',
      exploringItems: ['Intelligenza Artificiale', 'Machine Learning', 'Analisi dei Dati', 'Sistemi CRM'],
    },
    work: {
      lead: 'I miei', accent: 'Lavori',
      cards: [
        {
          title: 'Progetti Universitari',
          state: 'live',
          status: 'Live',
          desc: "Una raccolta di progetti ingegneristici e accademici realizzati durante i miei studi all'Università di Roma Tor Vergata.",
          tags: ['Ingegneria', 'Ricerca', 'Accademico'],
        },
        {
          title: 'Progetti di Sviluppo Web',
          state: 'progress',
          status: 'In corso',
          desc: 'Siti web e applicazioni moderne realizzati con tecnologie attuali e approcci di design innovativi.',
          tags: ['Next.js', 'React', 'Framer Motion'],
        },
        {
          title: 'Applicazioni',
          state: 'progress',
          status: 'In corso',
          desc: 'Futuri progetti software e applicazioni attualmente in fase di sviluppo e ricerca.',
          tags: ['App', 'Software', 'Innovazione'],
        },
      ],
    },
    education: {
      lead: 'La mia', accent: 'Istruzione',
      uniTitle: "Studentessa di Scienze dell'Ingegneria",
      uniSchool: 'Università di Roma Tor Vergata',
      uniLocation: 'Roma, Italia',
      uniDesc: 'Studio matematica, fisica, programmazione e fondamenti di ingegneria, sviluppando capacità analitiche e di problem solving.',
      uniBadge: 'Attualmente iscritta',
      dipTitle: 'Diploma in Manutenzione Aeronautica',
      dipLocation: 'Iran',
      dipDesc: 'Ho studiato sistemi aeronautici, motori, procedure di manutenzione, sicurezza aerea e fondamenti tecnici — le basi di una mentalità ingegneristica fondata su precisione e affidabilità.',
      dipBadge: 'Completato',
    },
    learning: {
      lead: 'Cosa sto', accent: 'Imparando',
      items: [
        { title: 'Sviluppo Web', text: 'Sto imparando a creare siti web moderni e responsivi con HTML, CSS e JavaScript.' },
        { title: 'Programmazione Python', text: 'Miglioro le mie competenze in Python risolvendo problemi e creando piccoli progetti.' },
        { title: 'UI/UX Design', text: "Imparo le basi dell'UI/UX per creare interfacce pulite e intuitive." },
        { title: 'Strumenti AI', text: 'Esploro strumenti di AI per aumentare creatività e produttività nello sviluppo.' },
        { title: 'Problem Solving', text: 'Rafforzo il pensiero logico e il problem solving con pratica e sfide.' },
        { title: 'Studi di Ingegneria', text: 'Continuo gli studi di ingegneria per costruire solide basi tecniche.' },
      ],
    },
    contact: {
      lead: 'Contatta', accent: 'mi', glue: true,
      intro: 'Sono disponibile per lavori freelance, tirocini e collaborazioni. Non esitare a contattarmi!',
      emailLabel: 'Email',
      connect: 'Connettiti con me',
      formTitle: 'Inviami un messaggio',
      nameLabel: 'Il tuo nome', emailFieldLabel: 'La tua email', subjectLabel: 'Oggetto', messageLabel: 'Messaggio',
      send: 'Invia messaggio',
      success: 'Grazie! Il tuo messaggio è stato registrato.',
      errName: 'Inserisci il tuo nome.',
      errEmail: 'Inserisci la tua email.',
      errEmailValid: "Inserisci un'email valida.",
      errSubject: 'Aggiungi un oggetto.',
      errMessage: 'Scrivi un messaggio.',
    },
    footer: {
      tagline: 'Studentessa di Ingegneria & Web Developer',
      built: 'Realizzato con React, Framer Motion & Tailwind CSS',
    },
    a11y: { theme: 'Cambia tema', lang: 'Cambia lingua', menu: 'Apri menu' },
  },
}

const LangContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'it' : 'en'))
  const value = { lang, setLang, toggleLang, t: translations[lang] }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
