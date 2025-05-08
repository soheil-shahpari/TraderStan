const translations = {
  fa: {
    triggerButton: 'ثبت نام',
    home: 'خانه',
    fxmarketHours: 'ساعت های بازار فارکس',
    education: 'آموزش',
    calendar: 'تقویم اقتصادی',
    contact: 'تماس با ما',
    forUs: 'درباره ما',
    login: 'ورود',
    email: 'ایمیل',
    footerText: 'تمامی حقوق محفوظ است © || تریدرستان',
  },
  en: {
    triggerButton: 'Sign Up',
    home: 'Home',
    fxmarketHours: 'Forex Market Hours',
    education: 'Education',
    calendar: 'Economic Calendar',
    contact: 'Contact Us',
    forUs: 'About Us',
    login: 'Login',
    email: 'Email',
    password:'Password',
    forgotPassword:'Forgot Password',
    footerText: 'All rights reserved © || TraderStan',
    
  }
};

// اجرای تغییر زبان
function updateLanguage(lang) {
  const t = translations[lang];
  document.getElementById("siteTitle").textContent = t.siteTitle;
  document.getElementById("triggerButton").textContent = t.triggerButton;
  document.getElementById("home").textContent = t.home;
  document.getElementById("fxmarketHours").textContent = t.fxmarketHours;
  document.getElementById("education").textContent = t.education;
  document.getElementById("calendar").textContent = t.calendar;
  document.getElementById("contact").textContent = t.contact;
  document.getElementById("forUs").textContent = t.forUs;
  document.getElementById("login").textContent = t.login;
  document.getElementById("email").textContent = t.email;
  document.getElementById("password").textContent = t.password;
  document.getElementById("forgotPassword").textContent = t.forgotPassword;
  document.getElementById("footerText").textContent = t.footerText;

  document.body.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

// مقدار اولیه از localStorage
const languageSelect = document.getElementById("languageSelect");
const savedLang = localStorage.getItem("lang") || "fa";
languageSelect.value = savedLang;
updateLanguage(savedLang);

// تغییر زبان با سلکت
languageSelect.addEventListener("change", () => {
  updateLanguage(languageSelect.value);
});
