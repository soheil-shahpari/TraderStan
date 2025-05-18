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