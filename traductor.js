const translations = {
  en: {
    "nav_inicio": "HOME",
    "nav_sobremi": "ABOUT ME",
    "nav_edu_exp": "EDUCATION/EXP",
    "nav_proyectos": "PROJECTS",
    "nav_contacto": "CONTACT",
    "hero_role": "Developer",
    "about_title": "About Me",
    "about_text": "<span>Hello, I am Gonzalo Copes</span> a passionate software and web developer with work experience and a focus on continuous learning and constant improvement. My goal is to continue growing as a professional and contribute successfully to the company. I am looking for future opportunities and ready to face new challenges. Thank you for visiting my portfolio and getting to know a little more about me!",
    "personal_data": "Personal Data",
    "phone": "Phone",
    "age": "Age",
    "location": "Location",
    "download_cv": "Download CV",
    "edu_title": "Education and Experience",
    "edu_subtitle": "🎓 Education",
    "exp_subtitle": "💼 Experience",
    "projects_title": "PROJECTS",
    "view_project": "View Project",
    "contact_title": "CONTACT",
    "send_message": "Send Message"
  },
  es: {
    "nav_inicio": "INICIO",
    "nav_sobremi": "SOBRE MI",
    "nav_edu_exp": "EDUCACION/EXP",
    "nav_proyectos": "PROYECTOS",
    "nav_contacto": "CONTACTO",
    "hero_role": "Desarrollador",
    "about_title": "Sobre Mí",
    "about_text": "<span>Hola, soy Gonzalo Copes</span> un apasionado desarrollador de software y web con experiencia laboral y un enfoque en el aprendizaje continuo y la mejora constante. Mi objetivo es seguir creciendo como profesional y contribuir de manera exitosa a la empresa. Estoy en busqueda de oportunidades futuras y listo para enfrentar nuevos desafíos. ¡Gracias por visitar mi portafolio y conocer un poco más sobre mí!",
    "personal_data": "Datos Personales",
    "phone": "Telefono",
    "age": "Edad",
    "location": "Ubicacion",
    "download_cv": "Descargar CV",
    "edu_title": "Educación y Experiencia",
    "edu_subtitle": "🎓 Educación",
    "exp_subtitle": "💼 Experiencia",
    "projects_title": "PROYECTOS",
    "view_project": "Ver Proyecto",
    "contact_title": "CONTACTO",
    "send_message": "Enviar Mensaje"
  }
};

let currentLang = "es";

document.getElementById("language-toggle").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  document.getElementById("language-toggle").innerHTML =
    `<i class="fas fa-globe"></i> ${currentLang.toUpperCase()}`;
  updateLanguage();
});

function updateLanguage() {
  for (const key in translations[currentLang]) {
    const el = document.querySelector(`[data-i18n="${key}"]`);
    if (el) el.innerHTML = translations[currentLang][key];
  }
}
