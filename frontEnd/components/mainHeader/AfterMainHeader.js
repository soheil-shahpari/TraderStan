const getTitle = document.getElementById("siteTitle");
const title    = "Trader"+"Stan";
if (!getTitle) {
   console.error("siteTitle پیدا نشد!");
} else {
   setTimeout(function(){
      let i = 0;
      (function typeIt() {
         if (i < title.length) {
            getTitle.innerHTML += title.charAt(i++);
            setTimeout(typeIt, 75.0);
         }
      })();
   },500);
}
//==============================================//
const showShadow = document.getElementById("mainHeader");
window.addEventListener("scroll", function () {
   if (window.scrollY === 0) {
      showShadow.classList.remove("boxShadow");
   } else {
      showShadow.classList.add("boxShadow");
   }
});