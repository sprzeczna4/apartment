
// Hamburger menu toggle
const hamburger=document.querySelector('.hamburger');
const menu=document.getElementById('menu');
if(hamburger&&menu){
  hamburger.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded',open?'true':'false');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  }));
}

// Lightbox (only active where gallery exists)
const galleryImgs=document.querySelectorAll('.gallery img');
const lightbox=document.getElementById('lightbox');
if(lightbox){
  const lbImg=lightbox.querySelector('img');
  const closeBtn=lightbox.querySelector('.lightbox__close');
  galleryImgs.forEach(img=>img.addEventListener('click',()=>{
    lbImg.src=img.src;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  }));
  const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')};
  closeBtn.addEventListener('click',close);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox) close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape') close();});
}
