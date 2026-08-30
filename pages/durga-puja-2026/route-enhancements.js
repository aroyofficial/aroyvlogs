document.addEventListener('DOMContentLoaded', () => {
  const walkingTimes = {'56 m':'1 min','83 m':'2 min','100 m':'2 min','120 m':'3 min','160 m':'4 min','170 m':'3 min','230 m':'5 min','250 m':'5 min','270 m':'6 min','280 m':'6 min','290 m':'6 min','300 m':'6 min','350 m':'7 min','400 m':'8 min','450 m':'9 min','500 m':'10 min','550 m':'11 min','600 m':'12 min','650 m':'13 min','700 m':'14 min','800 m':'16 min','850 m':'17 min','950 m':'19 min','1000 m':'20 min','1100 m':'22 min','1200 m':'24 min','1300 m':'26 min','1400 m':'28 min','1500 m':'30 min','1600 m':'32 min','1700 m':'34 min','1800 m':'36 min'};
  const stationLinks = {
    'Dakshineswar Metro Station':'https://maps.app.goo.gl/Js23zEn73stkXVMA7','Belgachia Metro Station':'https://maps.app.goo.gl/yzzGTjmfzijSw2z96','Rabindra Sarobar Metro Station':'https://maps.app.goo.gl/aAAmDGwidVZ5sjVH7','Jatin Das Park Metro Station':'https://maps.app.goo.gl/3DniZCdEKh9JUmtF6','Central Metro Station':'https://maps.app.goo.gl/aMYEVWf1b4WvzhTQ6','Sealdah Station':'https://maps.app.goo.gl/JnsxgvCh8b7W1t8B6','Ballygunge Junction':'https://maps.app.goo.gl/3T5teHvzyBGbnfkT8','Talbagan Bus Stop':'https://maps.app.goo.gl/KjpHQW6yn8xtdDAD9','Garia Market':'https://maps.app.goo.gl/aeV5yVRKjwQeasz47','Geetanjali Metro Station':'https://maps.app.goo.gl/pZT8BTLL9mtKjbVf6','Netaji Metro Station':'https://maps.app.goo.gl/pyqDdBBH5ySF8sfH9','Karunamoyee Bus Stand':'https://maps.app.goo.gl/ryWgej7uVh75DBxN8','Behala Chowrasta':'https://maps.app.goo.gl/G3KxDAS23jkZFd3z5','Sakherbazar Bus Stand':'https://maps.app.goo.gl/LJYzKoLHV5rEiM4n9','Panchanantala':'https://maps.app.goo.gl/PQnk3ih1JVzAyTrUA','Thakurpukur Metro Station':'https://maps.app.goo.gl/9hRJ6ZDZaMFJLyTu5','Behala Bazar Metro Station':'https://maps.app.goo.gl/RWm2uvHLiuy55wQV7','Behala Thana Bus Stand':'https://maps.app.goo.gl/6daq8KGtdbHMPfCE9','Bally Station':'https://maps.app.goo.gl/Js23zEn73stkXVMA7','Howrah Station':'https://maps.app.goo.gl/yLuoC1C7TRnwBiDD7','Rashbehari Crossing':'https://maps.app.goo.gl/yLuoC1C7TRnwBiDD7','Ballygunge Station':'https://maps.app.goo.gl/RcZAx4MhPK5gpNwf6','Dhakuria Station':'https://maps.app.goo.gl/55iT2wCF17BtKBP7A','Lake Gardens Station':'https://maps.app.goo.gl/jE9Pxd8CnMRx7sdcA','Bidhannagar Road Station':'https://maps.app.goo.gl/hstyw78otaNe7CjA8','Laketown Bus Stand':'https://maps.app.goo.gl/pniXaxVn8pNiRQ6ZA','Dum Dum Park':'https://maps.app.goo.gl/hukCxwu5YcUxVXEW6'};
  const formatDistance = (value, unit) => { const metres = unit.toLowerCase() === 'km' ? Math.round(parseFloat(value) * 1000) : parseInt(value,10); return `🚶 ${metres} m · ⏱️ ${walkingTimes[metres+' m'] || Math.round(metres/50)+' min'}`; };
  const enhanceWalking = text => text.replace(/(?:Walk\s+)?(?:about\s+)?(\d+(?:\.\d+)?)\s*(km|m)/gi, (_,value,unit) => formatDistance(value,unit));

  // Use Bally consistently across the entire Puja section.
  const replaceBali = root => { const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode); nodes.forEach(n=>{ n.nodeValue=n.nodeValue.replace(/\bBali\b/g,'Bally'); }); };

  // Lunch is a route event, not a numbered pandal stop.
  document.querySelectorAll('.route-step').forEach(step => {
    const card=step.querySelector('.route-card');
    if (!card) return;
    if (card.classList.contains('route-lunch') || /\bLUNCH\b/i.test(card.textContent)) {
      const number=step.querySelector('.route-number');
      if (number) { number.textContent='🍴'; number.classList.add('route-lunch-icon'); }
      const meta=card.querySelector('.route-meta'); if (meta) meta.textContent='🍴 LUNCH';
    }
  });

  // The instruction at the end of each day's final pandal is the onward transfer.
  document.querySelectorAll('.route-list').forEach(list => {
    const steps=[...list.querySelectorAll(':scope > .route-step')];
    const last=steps[steps.length-1];
    if (!last) return;
    const p=last.querySelector('.route-card p');
    if (!p) return;
    const raw=p.textContent.trim();
    const marker=raw.search(/\bThen\s+/i);
    if (marker > -1) {
      const visit=raw.slice(0,marker).trim().replace(/[.]$/,'');
      const transfer=raw.slice(marker).trim();
      p.textContent=visit ? visit+'.' : '';
      const li=document.createElement('li'); li.className='route-transport'; li.innerHTML='<strong>Transfer:</strong> '+transfer.replace(/^Then\s+/i,'');
      last.after(li);
    }
  });

  document.querySelectorAll('.route-card p').forEach(p=>{ p.textContent=enhanceWalking(p.textContent); });
  document.querySelectorAll('.route-transport').forEach(el=>{ el.innerHTML=enhanceWalking(el.innerHTML); });

  // Make non-pandal transport locations directly clickable.
  const linkStations = root => {
    Object.entries(stationLinks).forEach(([name,url])=>{
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node=>{
        if(!node.nodeValue.includes(name) || node.parentElement.closest('a')) return;
        const parts=node.nodeValue.split(name); const frag=document.createDocumentFragment();
        parts.forEach((part,i)=>{ if(i){ const a=document.createElement('a'); a.href=url; a.target='_blank'; a.rel='noopener'; a.textContent=name; a.className='route-location-link'; frag.appendChild(a); } if(part) frag.appendChild(document.createTextNode(part)); });
        node.parentNode.replaceChild(frag,node);
      });
    });
  };
  replaceBali(document.body); linkStations(document.body);
});
