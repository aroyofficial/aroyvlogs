document.addEventListener('DOMContentLoaded',()=>{
  if(!/\/shashthi\.html$/i.test(location.pathname))return;
  document.addEventListener('click',e=>{
    const card=e.target.closest('.route-card.puja-pandal');
    if(!card||e.target.closest('a'))return;
    const panel=card.querySelector('.puja-pandal-expansion');
    if(!panel)return;
    e.preventDefault();
    e.stopPropagation();
    const open=card.getAttribute('aria-expanded')==='true';
    document.querySelectorAll('.route-card.puja-pandal[aria-expanded="true"]').forEach(other=>{
      if(other===card)return;
      other.setAttribute('aria-expanded','false');
      const otherPanel=other.querySelector('.puja-pandal-expansion');
      if(otherPanel){otherPanel.classList.remove('is-open');otherPanel.setAttribute('aria-hidden','true');}
    });
    card.setAttribute('aria-expanded',String(!open));
    panel.classList.toggle('is-open',!open);
    panel.setAttribute('aria-hidden',String(open));
  },true);
});
