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

  // Route presentation helpers used by the Durga Puja itinerary pages.
  const walkTimes={56:1,83:2,100:2,120:3,160:4,170:3,230:5,250:5,270:6,280:6,290:6,300:6,350:7,400:8,450:9,500:10,550:11,600:12,650:13,700:14,800:16,850:17,950:19,1000:20,1100:22,1200:24,1300:26,1400:28,1500:30,1600:32,1700:34,1800:36};
  const walking=(distance)=>`🚶 ${distance} m · ⏱️ ${walkTimes[distance]||Math.round(distance/50)} min`;

  document.querySelectorAll('.route-card p').forEach(p=>{
    p.innerHTML=p.innerHTML.replace(/(?:Walk|walk) about (\d+) m/g,(m,d)=>walking(+d))
      .replace(/About (\d+) m/g,(m,d)=>walking(+d))
      .replace(/about (\d+) m/g,(m,d)=>walking(+d));
  });

  const maps={
    common:{
      'Bali Halt Bus Stand':'https://www.google.com/maps/search/?api=1&query=Bali+Halt+Bus+Stand',
      'Dakshineswar Metro Station':'https://www.google.com/maps/search/?api=1&query=Dakshineswar+Metro+Station',
      'Belgachia Metro Station':'https://www.google.com/maps/search/?api=1&query=Belgachia+Metro+Station',
      'Rabindra Sarobar Metro':'https://www.google.com/maps/search/?api=1&query=Rabindra+Sarobar+Metro+Station',
      'Jatin Das Park Metro Station':'https://www.google.com/maps/search/?api=1&query=Jatin+Das+Park+Metro+Station',
      'Central Metro Station':'https://www.google.com/maps/search/?api=1&query=Central+Metro+Station+Kolkata',
      'Sealdah':'https://www.google.com/maps/search/?api=1&query=Sealdah+Station',
      'Bali Halt':'https://www.google.com/maps/search/?api=1&query=Bali+Halt+Station'
    },
    'panchami.html':{
      'Ballygunge Junction':'https://www.google.com/maps/search/?api=1&query=Ballygunge+Junction',
      'Talbagan Bus Stop':'https://maps.app.goo.gl/KjpHQW6yn8xtdDAD9',
      'Gariahat More':'https://www.google.com/maps/search/?api=1&query=Gariahat+More+Kolkata',
      'Garia Market':'https://www.google.com/maps/search/?api=1&query=Garia+Market+Kolkata',
      'Geetanjali Metro Station':'https://maps.app.goo.gl/pZT8BTLL9mtKjbVf6',
      'Netaji Metro Station':'https://www.google.com/maps/search/?api=1&query=Netaji+Metro+Station+Kolkata',
      'Karunamoyee Bus Stand':'https://maps.app.goo.gl/ryWgej7uVh75DBxN8',
      'Behala Chowrasta':'https://www.google.com/maps/search/?api=1&query=Behala+Chowrasta',
      'Sakherbazar Bus Stand':'https://maps.app.goo.gl/LJYzKoLHV5rEiM4n9',
      'Panchanantala':'https://www.google.com/maps/search/?api=1&query=Panchanantala+Kolkata',
      'Thakurpukur Metro':'https://maps.app.goo.gl/9hRJ6ZDZaMFJLyTu5',
      'Behala Bazar':'https://www.google.com/maps/search/?api=1&query=Behala+Bazar+Metro+Station',
      'Behala Thana Bus Stand':'https://maps.app.goo.gl/6daq8KGtdbHMPfCE9'
    },
    'shashthi.html':{
      'Sonarpur Station':'https://www.google.com/maps/search/?api=1&query=Sonarpur+Station',
      'Bagbazar Puja area':'https://maps.app.goo.gl/5tL5FGYAmodbtzb28'
    },
    'saptami.html':{
      'Bali Station':'https://www.google.com/maps/search/?api=1&query=Bali+Station+Howrah',
      'Howrah Station':'https://www.google.com/maps/search/?api=1&query=Howrah+Station',
      'Rashbehari Crossing':'https://www.google.com/maps/search/?api=1&query=Rashbehari+Crossing+Kolkata',
      'Ballygunge Station':'https://www.google.com/maps/search/?api=1&query=Ballygunge+Station'
    },
    'navami.html':{
      'Bali Halt':'https://www.google.com/maps/search/?api=1&query=Bali+Halt+Station',
      'Sealdah':'https://www.google.com/maps/search/?api=1&query=Sealdah+Station',
      'Dhakuria':'https://www.google.com/maps/search/?api=1&query=Dhakuria+Station',
      'Lake Gardens Station':'https://maps.app.goo.gl/jE9Pxd8CnMRx7sdcA',
      'Bidhannagar Road':'https://www.google.com/maps/search/?api=1&query=Bidhannagar+Road+Station',
      'Laketown Bus Stand':'https://maps.app.goo.gl/pniXaxVn8pNiRQ6ZA',
      'Dum Dum Park':'https://www.google.com/maps/search/?api=1&query=Dum+Dum+Park+Kolkata',
      'Mrinalini Bus Stop':'https://maps.app.goo.gl/CPuoMtMUArKN1iij8'
    }
  };

  const page=location.pathname.split('/').pop();
  const pageMaps={...maps.common,...(maps[page]||{})};
  const hyperlinkLocations=(element)=>{
    let html=element.innerHTML;
    Object.entries(pageMaps).sort((a,b)=>b[0].length-a[0].length).forEach(([name,url])=>{
      const marker=`data-map-location="${name}"`;
      if(html.includes(marker))return;
      html=html.split(name).join(`<a class="route-location" target="_blank" rel="noopener" href="${url}" ${marker}>${name}</a>`);
    });
    element.innerHTML=html;
  };
  document.querySelectorAll('.route-transport').forEach(hyperlinkLocations);

  // The instruction attached to the final pandal is actually the onward journey.
  // Keep it consistently as a separate Transfer step.
  const lastStep=[...document.querySelectorAll('.route-step')].pop();
  if(lastStep){
    const p=lastStep.querySelector('.route-card p');
    if(p && /Then\s/i.test(p.textContent)){
      const parts=p.textContent.split(/Then\s/i);
      p.textContent=parts[0].trim();
      const transfer=document.createElement('li');
      transfer.className='route-transport';
      transfer.innerHTML='<strong>Transfer:</strong> '+parts.slice(1).join('Then ').trim();
      lastStep.parentNode.insertBefore(transfer,lastStep.nextSibling);
      transfer.innerHTML=transfer.innerHTML.replace(/(?:Walk|walk) about (\d+) m/g,(m,d)=>walking(+d));
      hyperlinkLocations(transfer);
    }
  }
});