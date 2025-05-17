// ابتدا مسیر پایه رو محاسبه می‌کنیم
// count = تعداد سطوح زیرپوشه از root تا این صفحه
const depth = window.location.pathname
  .split('/')           // مثلا ['', 'pages','education','education.html']
  .filter(p => p)      // ['', 'pages','education','education.html'] → ['pages','education','education.html']
  .length - 1;          // 3 - 1 = 2 (دو زیرپوشه تا root)

const basePath = Array(depth).fill('..').join('/') + '/';  
// depth=2 → ['..','..'].join('/') + '/' → '../../'

// —————————————————————————————

// لودر اولیه
const loader   = document.getElementById("loader-wrapper");
const main     = document.getElementById("main-content");
const minLoadTime = 500;
const startTime   = Date.now();

window.addEventListener("load", () => {
  const elapsed = Date.now() - startTime;
  const delay   = Math.max(0, minLoadTime - elapsed);
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
      main.style.display   = "block";
    }, 500);
  }, delay);
});

// تابع loadHTML که Promise برمی‌گرداند
function loadHTML(id, file) {
  return fetch(file)
    .then(res  => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

// لود هدر و تایپ افکت
loadHTML('mainHeader', basePath + 'components/mainHeader/mainHeader.html')
.then(() => {
  const title = "TraderStan";
  const el    = document.getElementById("siteTitle");
  if (!el) {
    console.error("siteTitle پیدا نشد!");
    return;
  }
  let i = 0;
  (function typeIt() {
    if (i < title.length) {
      el.innerHTML += title.charAt(i++);
      setTimeout(typeIt, 100);
    }
  })();
});

// لود منو و فعال‌سازی دکمه دارک مود
loadHTML('menuHamburgeri', basePath + 'components/menuHamburgeri/menuHamburgeri.html')
.then(() => {
  const toggleBtn = document.getElementById('toggleBtn');
  const body      = document.body;
  if (!toggleBtn) {
    console.error('toggleBtn هنوز توی DOM نیست!');
    return;
  }
  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    body.classList.toggle('dark-mode');
  });
});

window.scrollTo(100)