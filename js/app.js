document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();
  const links=[...document.querySelectorAll('.desktop-nav a')];
  const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const activate=()=>{let current='home';for(const s of sections){if(window.scrollY>=s.offsetTop-130)current=s.id}links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))};
  window.addEventListener('scroll',activate,{passive:true}); activate();

  // Website-wide month abbreviation convention: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec.
  const monthAbbreviations={January:'Jan',February:'Feb',March:'Mar',April:'Apr',May:'May',June:'Jun',July:'Jul',August:'Aug',September:'Sep',October:'Oct',November:'Nov',December:'Dec'};
  const replaceMonths=(root)=>{
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      if(node.parentElement?.closest('script,style,noscript'))return;
      let text=node.nodeValue;
      Object.entries(monthAbbreviations).forEach(([full,short])=>{
        text=text.replace(new RegExp(`\\b${full}\\b`,'g'),short);
      });
      node.nodeValue=text;
    });
  };
  replaceMonths(document.body);
});
