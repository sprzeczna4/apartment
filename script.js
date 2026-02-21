
(function(){
  const init = () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    if(!hamburger || !menu) return;
    const setExpanded = (open) => hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    hamburger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      setExpanded(open);
    }, {passive:true});
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      setExpanded(false);
    }, {passive:true}));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { menu.classList.remove('open'); setExpanded(false); }
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
