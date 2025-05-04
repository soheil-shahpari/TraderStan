// بستن منوی همبرگری هنگام کلیک خارج از آن
document.addEventListener("click", function (e) {
  const menuToggle = document.getElementById("menuToggle");
  const menuCheck = document.getElementById("menu-check");
  if (menuCheck.checked && !menuToggle.contains(e.target) && !menuCheck.contains(e.target)) {
    menuCheck.checked = false;
  }
});

// نمایش فرم ثبت‌نام و اسکرول به آن
document.getElementById("triggerButton").addEventListener("click", () => {
  const form = document.getElementById("contentContainer");
  form.classList.add("show");
  const offset = form.getBoundingClientRect().top + window.scrollY - 300;
  window.scrollTo({ top: offset, behavior: "smooth" });
});

// مدیریت حالت تیره/روشن با ذخیره‌سازی در localStorage
const themeToggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// تغییر ظاهر عنوان، لوگو و رنگ هدر هنگام اسکرول
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = (scrollTop / docHeight) * 100;

  const title = document.getElementById("siteTitle");
  const logo = document.getElementById("header-logo");
  const header = document.querySelector(".main-header");

  title.style.opacity = percent < 55 ? 0 : 1;
  logo.style.opacity = percent < 45 ? 0 : 1;
  header.style.backgroundColor = percent < 50 ? "transparent" : "var(--bg-header)";
  


});







// تنظیم دستی وضعیت
const riskStatus = 'off'; // on یا off

const riskTitle = document.getElementById('risk-title');
const riskDesc = document.getElementById('risk-desc');
const riskMeter = document.getElementById('risk-meter');

if (riskStatus === 'on') {
  riskTitle.textContent = 'Risk On';
  riskDesc.textContent = 'Markets are optimistic. Risk assets are in demand.';
  riskMeter.classList.add('risk-on');
  riskMeter.classList.remove('risk-off');
} else {
  riskTitle.textContent = 'Risk Off';
  riskDesc.textContent = 'Markets are fearful. Safe-haven assets preferred.';
  riskMeter.classList.add('risk-off');
  riskMeter.classList.remove('risk-on');
}


