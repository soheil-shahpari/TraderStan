//=======================================================//
const depth = window.location.pathname                   //
.split('/')                                              //
.filter(p => p)                                          //
.length - 1;                                             //
const basePath = Array(depth).fill('..').join('/') + '/';// 
//=======================================================//
//======================= لودر اولیه ========================= 
const loader      = document.getElementById("loader-wrapper");
const main        = document.getElementById("main-content");
const minLoadTime = 0;
const startTime   = Date.now();

window.addEventListener("load", () => {
   const elapsed              = Date.now() - startTime;
   const delay                = Math.max(0, minLoadTime - elapsed);
   setTimeout(() => {
      loader.classList.add("fade-out");
      setTimeout(() => {
         loader.style.display = "none";
         main.style.display   = "block";
      }, 500);
   }, delay);
});
//=======================================================//
function loadHTML(id, file) {
   return fetch(file)
   .then(res  => res.text())
   .then(html => {
      document.getElementById(id).innerHTML = html;
   });
}
//=======================================================//
//======================= هدر اصلی  ======================== 
loadHTML('mainHeader', basePath + 'components/mainHeader/mainHeader.html')
.then(() => {
   const script = document.createElement('script');
   script.src   = basePath + 'components/mainHeader/AfterMainHeader.js';
   document.body.appendChild(script);
});
//===================== منوی همبرگری  ======================= 
loadHTML('menuHamburgeri', basePath + 'components/menuHamburgeri/menuHamburgeri.html')
.then(() => {
   const script = document.createElement('script');
   script.src   = basePath + 'components/menuHamburgeri/AfterMenuHamburgeri.js';
   document.body.appendChild(script);
});

