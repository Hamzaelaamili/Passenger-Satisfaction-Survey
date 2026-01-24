// ---------------- TRANSLATIONS ----------------
const translations = {
  en: {
    select_language: "Select Your Language",
    welcome_title: "Welcome to Al Hoceima Airport!",
    welcome_text: "We value your feedback. Please take a moment to complete our survey.",
    start: "Start Survey",
    title: "Passenger Satisfaction Survey",
    subtitle: "Al Hoceima – Cherif Al Idrissi Airport",
    intro: "Your opinion matters to us. This survey helps improve airport services.",
    confidential_title: "Confidentiality notice:",
    confidential_text: " All responses are anonymous and used only for service improvement.",
    q1: "Overall airport services",
    q2: "Cleanliness of terminal facilities",
    q3: "Courtesy and professionalism of staff",
    comments: "Comments or suggestions",
    email: "Email (optional)",
    excellent: "Excellent",
    good: "Good",
    average: "Average",
    poor: "Poor",
    submit: "Submit Feedback",
    footer: "© Al Hoceima Airport – Airports of Morocco (ONDA)",
    comment_placeholder: "Please share your experience or suggestions..."
  },

  fr: {
    select_language: "Choisissez votre langue",
    welcome_title: "Bienvenue à l’aéroport d’Al Hoceima !",
    welcome_text: "Votre avis est important pour nous. Merci de remplir ce questionnaire.",
    start: "Commencer",
    title: "Enquête de satisfaction des passagers",
    subtitle: "Aéroport Al Hoceima – Cherif Al Idrissi",
    intro: "Votre opinion nous aide à améliorer la qualité de nos services.",
    confidential_title: "Avis de confidentialité :",
    confidential_text: " Toutes les réponses sont anonymes.",
    q1: "Services globaux de l’aéroport",
    q2: "Propreté des installations",
    q3: "Professionnalisme du personnel",
    comments: "Commentaires ou suggestions",
    email: "Email (optionnel)",
    excellent: "Excellent",
    good: "Bon",
    average: "Moyen",
    poor: "Mauvais",
    submit: "Envoyer",
    footer: "© Aéroport Al Hoceima – ONDA",
    comment_placeholder: "Partagez votre expérience..."
  },

  ar: {
    select_language: "اختر اللغة",
    welcome_title: "مرحبًا بكم في مطار الحسيمة",
    welcome_text: "رأيكم يهمنا، المرجو تخصيص لحظات لملء هذا الاستبيان.",
    start: "ابدأ",
    title: "استبيان رضا المسافرين",
    subtitle: "مطار الحسيمة – الشريف الإدريسي",
    intro: "رأيك يساعدنا على تحسين جودة الخدمات.",
    confidential_title: "إشعار الخصوصية:",
    confidential_text: " جميع الإجابات سرية.",
    q1: "الخدمات العامة بالمطار",
    q2: "نظافة المرافق",
    q3: "احترافية الموظفين",
    comments: "ملاحظات أو اقتراحات",
    email: "البريد الإلكتروني (اختياري)",
    excellent: "ممتاز",
    good: "جيد",
    average: "متوسط",
    poor: "ضعيف",
    submit: "إرسال",
    footer: "© مطار الحسيمة – المكتب الوطني للمطارات",
    comment_placeholder: "شاركنا رأيك..."
  }
};

// ---------------- APPLY TRANSLATIONS ----------------
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
}

// ---------------- POPUP CONTROL ----------------
function showLanguagePopup() {
  document.getElementById("language-popup").classList.add("show");
}

function hideLanguagePopup() {
  document.getElementById("language-popup").classList.remove("show");
}

function showWelcomePopup() {
  const welcomePopup = document.getElementById("welcome-popup");
  // small delay for smooth transition
  setTimeout(() => welcomePopup.classList.add("show"), 300);
}

function closePopup() {
  document.getElementById("welcome-popup").classList.remove("show");
}

// ---------------- LANGUAGE SELECTION ----------------
function setLanguage(lang) {
  applyLanguage(lang);   // Apply chosen language
  hideLanguagePopup();   // Hide language popup
  showWelcomePopup();    // Show welcome popup
}

// ---------------- ON PAGE LOAD ----------------
window.addEventListener("DOMContentLoaded", () => {
  // Always show language popup first
  showLanguagePopup();
});
