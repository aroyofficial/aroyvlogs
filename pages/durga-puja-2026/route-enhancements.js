document.addEventListener('DOMContentLoaded',()=>{
  const startPujaAudio=()=>{let audio=document.getElementById('durga-puja-bgm');if(!audio){audio=document.createElement('audio');audio.id='durga-puja-bgm';audio.src='Durga_Puja_BGM.mp3';audio.loop=true;audio.preload='auto';audio.setAttribute('aria-hidden','true');audio.style.display='none';document.body.appendChild(audio);}audio.play().catch(()=>{});return audio;};
  const pujaAudio=startPujaAudio();
  ['pointerdown','keydown','touchstart'].forEach(eventName=>document.addEventListener(eventName,()=>{pujaAudio.play().catch(()=>{});},{once:true,passive:true}));

  const walkingTimes={'56 m':'1 min','83 m':'2 min','100 m':'2 min','120 m':'3 min','160 m':'4 min','170 m':'3 min','230 m':'5 min','250 m':'5 min','270 m':'6 min','280 m':'6 min','290 m':'6 min','300 m':'6 min','350 m':'7 min','400 m':'8 min','450 m':'9 min','500 m':'10 min','550 m':'11 min','600 m':'12 min','650 m':'13 min','700 m':'14 min','800 m':'16 min','850 m':'17 min','950 m':'19 min','1000 m':'20 min','1100 m':'22 min','1200 m':'24 min','1300 m':'26 min','1400 m':'28 min','1500 m':'30 min','1600 m':'32 min','1700 m':'34 min','1800 m':'36 min'};
  const stationLinks={'Rabindra Sarobar Metro Station':'https://maps.app.goo.gl/ZH7pYZcyvU91bF8p9','Sealdah Junction':'https://maps.app.goo.gl/nHU3NUAYAF9BQLRw7','Sealdah Station':'https://maps.app.goo.gl/nHU3NUAYAF9BQLRw7','Bally Halt Bus Stand':'https://maps.app.goo.gl/J5ifckG9UcgqdjUx5','Bally Halt Station':'https://maps.app.goo.gl/eHXzG5rCpnBP2Bkj9','Bally Bus Stand':'https://maps.app.goo.gl/J5ifckG9UcgqdjUx5','Sonarpur Junction':'https://maps.app.goo.gl/8LoWVUE9gNdAG7dBA','Bally Station':'https://maps.app.goo.gl/uavYxSJbuMhwrJTH6','Howrah Junction':'https://maps.app.goo.gl/fodueEJVNw71SCuZ9','Howrah Station':'https://maps.app.goo.gl/fodueEJVNw71SCuZ9','Dakshineswar Metro Station':'https://maps.app.goo.gl/Js23zEn73stkXVMA7','Dakshineswar Metro':'https://maps.app.goo.gl/Js23zEn73stkXVMA7','Belgachia Metro Station':'https://maps.app.goo.gl/yzzGTjmfzijSw2z96','Belgachia Metro':'https://maps.app.goo.gl/yzzGTjmfzijSw2z96','Belgachia Bus Stop':'https://maps.app.goo.gl/ZwAb1n2Sh52tzW7T6','Tala Station':'https://maps.app.goo.gl/A1sk3FKThgpj1QnA9','Jatin Das Park Metro Station':'https://maps.app.goo.gl/3DniZCdEKh9JUmtF6','Central Metro Station':'https://maps.app.goo.gl/aMYEVWf1b4WvzhTQ6','Central Metro':'https://maps.app.goo.gl/aMYEVWf1b4WvzhTQ6','Ballygunge Junction':'https://maps.app.goo.gl/3T5teHvzyBGbnfkT8','Talbagan Bus Stop':'https://maps.app.goo.gl/KjpHQW6yn8xtdDAD9','Garia Market':'https://maps.app.goo.gl/aeV5yVRKjwQeasz47','Geetanjali Metro Station':'https://maps.app.goo.gl/pZT8BTLL9mtKjbVf6','Netaji Metro Station':'https://maps.app.goo.gl/pyqDdBBH5ySF8sfH9','Karunamoyee Bus Stand':'https://maps.app.goo.gl/ryWgej7uVh75DBxN8','Behala Chowrasta':'https://maps.app.goo.gl/G3KxDAS23jkZFd3z5','Sakherbazar Bus Stand':'https://maps.app.goo.gl/LJYzKoLHV5rEiM4n9','Panchanantala':'https://maps.app.goo.gl/PQnk3ih1JVzAyTrUA','Thakurpukur Metro Station':'https://maps.app.goo.gl/9hRJ6ZDZaMFJLyTu5','Behala Bazar Metro Station':'https://maps.app.goo.gl/RWm2uvHLiuy55wQV7','Behala Thana Bus Stand':'https://maps.app.goo.gl/6daq8KGtdbHMPfCE9','Ballygunge Station':'https://maps.app.goo.gl/RcZAx4MhPK5gpNwf6','Dhakuria Station':'https://maps.app.goo.gl/55iT2wCF17BtKBP7A','Lake Gardens Station':'https://maps.app.goo.gl/jE9Pxd8CnMRx7sdcA','Bidhannagar Road Station':'https://maps.app.goo.gl/hstyw78otaNe7CjA8','Laketown Bus Stand':'https://maps.app.goo.gl/pniXaxVn8pNiRQ6ZA','Dum Dum Park':'https://maps.app.goo.gl/hukCxwu5YcUxVXEW6','Mrinalini Bus Stop':'https://maps.app.goo.gl/rL6FX2WohW6G5CnB6','Gariahat More':'https://www.google.com/maps/search/?api=1&query=Gariahat+More+Kolkata','Rashbehari Crossing':'https://www.google.com/maps/search/?api=1&query=Rashbehari+Crossing+Kolkata'};
  const formatDistance=(value,unit)=>{const metres=unit.toLowerCase()==='km'?Math.round(parseFloat(value)*1000):parseInt(value,10);return `🚶 ${metres} m · ⏱️ ${walkingTimes[metres+' m']||(Math.round(metres/50)+' min')}`;};
  const enhanceWalking=text=>text.replace(/(?:🚶\s*)?(?:Walk\s+)?(?:about\s+)?(\d+(?:\.\d+)?)\s*(km|m)(?:\s*·\s*⏱️?\s*\d+\s*min)?/gi,(_,v,u)=>formatDistance(v,u));
  const replaceBally=root=>{const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];while(w.nextNode())nodes.push(w.currentNode);nodes.forEach(n=>n.nodeValue=n.nodeValue.replace(/\bBali\b/g,'Bally'));};
  const abbreviateMonths=root=>{const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];while(w.nextNode())nodes.push(w.currentNode);nodes.forEach(n=>{n.nodeValue=n.nodeValue.replace(/January/g,'Jan').replace(/February/g,'Feb').replace(/March/g,'Mar').replace(/April/g,'Apr').replace(/May/g,'May').replace(/June/g,'Jun').replace(/July/g,'Jul').replace(/August/g,'Aug').replace(/September/g,'Sep').replace(/October/g,'Oct').replace(/November/g,'Nov').replace(/December/g,'Dec');});};

  document.querySelectorAll('.route-step').forEach(step=>{const card=step.querySelector('.route-card');if(!card)return;if(card.classList.contains('route-lunch')||/\bLUNCH\b/i.test(card.textContent)){const n=step.querySelector('.route-number');if(n)n.remove();step.classList.add('route-lunch-step');const meta=card.querySelector('.route-meta');if(meta)meta.textContent='🍴 LUNCH';if(/Allen Kitchen/i.test(card.textContent)){const p=card.querySelector('p');if(p)p.textContent='Lunch stop. 🚶 230 m · ⏱️ 5 min from Hazra Park.';}}});
  const lunchStyle=document.createElement('style');lunchStyle.textContent='.route-step.route-lunch-step{display:block;margin-left:66px;position:relative}.route-step.route-lunch-step:before{content:"🍴";position:absolute;left:-66px;top:8px;width:48px;height:48px;border-radius:50%;background:var(--ink);color:#fff;display:grid;place-items:center;font-size:18px;z-index:1;box-shadow:0 0 0 7px var(--paper)}.route-step.route-lunch-step .route-card{width:100%;}.route-step.route-lunch-step .route-top{align-items:flex-start;}@media(max-width:575.98px){.route-step.route-lunch-step{margin-left:52px}.route-step.route-lunch-step:before{left:-52px;width:40px;height:40px;font-size:16px}.route-step.route-lunch-step .route-top{flex-direction:column}.route-step.route-lunch-step .map-btn{width:100%;justify-content:center}}';document.head.appendChild(lunchStyle);

  document.querySelectorAll('.route-list').forEach(list=>{const steps=[...list.querySelectorAll(':scope > .route-step')];const last=steps[steps.length-1];if(!last)return;const p=last.querySelector('.route-card p');if(!p)return;const raw=p.textContent.trim();const marker=raw.search(/\bThen\s+/i);if(marker>-1){const visit=raw.slice(0,marker).trim().replace(/[.]$/,'');const transfer=raw.slice(marker).trim().replace(/^Then\s+/i,'');p.textContent=visit?visit+'.':'';const li=document.createElement('li');li.className='route-transport';li.innerHTML='<strong>Transfer:</strong> '+transfer;last.after(li);}});

  document.querySelectorAll('.route-list').forEach(list=>{const steps=[...list.querySelectorAll(':scope > .route-step')];let previous='';let number=1;steps.forEach(step=>{const card=step.querySelector('.route-card');if(!card)return;const title=card.querySelector('h3')?.textContent.trim();const p=card.querySelector('p');const isLunch=step.classList.contains('route-lunch-step')||/\bLUNCH\b/i.test(card.textContent);if(isLunch){if(title==='Allen Kitchen'&&p)p.textContent='Lunch stop. 🚶 230 m · ⏱️ 5 min from Hazra Park.';}else{let n=step.querySelector('.route-number');if(!n){n=document.createElement('span');n.className='route-number';step.insertBefore(n,step.firstChild);}n.textContent=String(number).padStart(2,'0');number++;}if(p&&!isLunch){let text=p.textContent.trim();if(previous&&/\b(?:Walk|🚶|About)\b/i.test(text)&&!/\bfrom\b/i.test(text))text=text.replace(/\.$/,'')+' from '+previous+'.';p.textContent=enhanceWalking(text);}if(title&&!isLunch)previous=title;});});
  document.querySelectorAll('.route-transport').forEach(el=>{el.innerHTML=enhanceWalking(el.innerHTML);});

  const setupChaturthiAdditions=()=>{
    if(!/\/chaturthi\.html$/i.test(location.pathname))return;
    const steps=[...document.querySelectorAll('.route-list > .route-step')];
    if(steps.length<2)return;
    const first=steps[0].querySelector('.route-card');
    const second=steps[1].querySelector('.route-card');
    if(!first||!second)return;
    if(first.dataset.chaturthiAdjusted==='true')return;
    first.dataset.chaturthiAdjusted='true';
    first.querySelector('h3').textContent='Belgachia Sadharon Durgotsav';
    first.querySelector('.map-btn')?.setAttribute('href','https://maps.app.goo.gl/XpS9m7eLPHJJWsir8');
    const firstP=first.querySelector('.route-top p');
    if(firstP)firstP.textContent='🚶 550 m · ⏱️ 11 min from Belgachia Metro Station.';
    const secondP=second.querySelector('.route-top p');
    if(secondP)secondP.textContent='🚶 400 m · ⏱️ 8 min from Belgachia Sadharon Durgotsav.';

    const existingTransfer=second.closest('.route-step')?.nextElementSibling;
    if(existingTransfer?.classList.contains('route-transport')){
      existingTransfer.innerHTML='<strong>Transfer:</strong> 🚶 550 m · ⏱️ 11 min to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/A1sk3FKThgpj1QnA9">Tala Station</a> → then take an auto/bus to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/yzzGTjmfzijSw2z96">Belgachia Metro Station</a> → take a metro to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/ZH7pYZcyvU91bF8p9">Rabindra Sarobar Metro Station</a>.';
    }

    const newStep=document.createElement('li');
    newStep.className='route-step';
    newStep.innerHTML='<span class="route-number">03</span><div class="route-card puja-pandal" data-serial="03" aria-expanded="false"><div class="route-top"><div><div class="route-meta">NORTH KOLKATA</div><h3>Tala Barowari</h3><p>🚶 550 m · ⏱️ 11 min from Tala Station.</p></div><div class="route-actions"><a class="map-btn" target="_blank" rel="noopener" href="https://maps.app.goo.gl/xGHonjh9uTQdS6B59">Google Maps ↗</a><a class="map-btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/toilets/@22.60717,88.37605,17z?entry=ttu">Toilets ↗</a></div></div><div class="puja-pandal-expansion" aria-hidden="true"><div><div class="puja-pandal-expansion-content">Tap this card to expand. Detailed pandal notes can be placed here later.</div></div></div></div>';
    if(existingTransfer)existingTransfer.before(newStep);else second.closest('.route-step').after(newStep);

    const talaTransfer=document.createElement('li');
    talaTransfer.className='route-transport';
    talaTransfer.dataset.chaturthiTalaTransfer='true';
    talaTransfer.innerHTML='<strong>Transfer:</strong> 🚶 200 m · ⏱️ 4 min to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/AyvrBcS9uCJjdVZw8">Tala Park Circus Maidan</a> → Then take an auto to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/A1sk3FKThgpj1QnA9">Tala Station</a>.';
    newStep.before(talaTransfer);

    const mudialiStep=[...document.querySelectorAll('.route-list > .route-step')].find(step=>step.querySelector('.route-card h3')?.textContent.trim()==='Mudiali Club');
    const shibStep=[...document.querySelectorAll('.route-list > .route-step')].find(step=>step.querySelector('.route-card h3')?.textContent.trim()==='Shib Mandir Sarbojonin');
    if(mudialiStep && !document.querySelector('[data-chaturthi-tricone="true"]')){
      const triconeStep=document.createElement('li');
      triconeStep.className='route-step';
      triconeStep.innerHTML='<span class="route-number">04</span><div class="route-card puja-pandal" data-chaturthi-tricone="true" aria-expanded="false"><div class="route-top"><div><div class="route-meta">SOUTH KOLKATA</div><h3>Tricone Park</h3><p>🚶 600 m · ⏱️ 12 min from Mudiali Club.</p></div><div class="route-actions"><a class="map-btn" target="_blank" rel="noopener" href="https://maps.app.goo.gl/KdY5rTzjFfFjTg9r9">Google Maps ↗</a><a class="map-btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/toilets+near+Tricone+Park,+Kolkata?entry=ttu">Toilets ↗</a></div></div><div class="puja-pandal-expansion" aria-hidden="true"><div><div class="puja-pandal-expansion-content">Tap this card to expand. Detailed pandal notes can be placed here later.</div></div></div></div>';
      (shibStep||mudialiStep).after(triconeStep);
      const triconeTransfer=document.createElement('li');
      triconeTransfer.className='route-transport';
      triconeTransfer.dataset.chaturthiTriconeTransfer='true';
      triconeTransfer.innerHTML='<strong>Transfer:</strong> 🚶 290 m · ⏱️ 5 mins to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/5MvJnw32sjB3Uh8Y7">Tollygunge PS</a> → Then take a bus to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/eovQE6JT1o9CP8jp7">New Alipore Petrol Pump</a>.';
      triconeStep.after(triconeTransfer);
    }

    const chaturthiSteps=[...document.querySelectorAll('.route-list > .route-step')];
    const suruchiStep=chaturthiSteps.find(step=>step.querySelector('.route-card h3')?.textContent.trim()==='Suruchi Sangha');
    const chetlaStep=chaturthiSteps.find(step=>step.querySelector('.route-card h3')?.textContent.trim()==='Chetla Agrani');
    if(suruchiStep){
      const suruchiP=suruchiStep.querySelector('.route-card .route-top p');
      if(suruchiP)suruchiP.textContent='🚶 120 m · ⏱️ 3 min from New Alipore Petrol Pump.';
      if(!document.querySelector('[data-chaturthi-suruchi-transfer="true"]')){
        const suruchiTransfer=document.createElement('li');
        suruchiTransfer.className='route-transport';
        suruchiTransfer.dataset.chaturthiSuruchiTransfer='true';
        suruchiTransfer.innerHTML='<strong>Transfer:</strong> 🚶 210 m · ⏱️ 5 mins to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/9GBxKXYNRruMef2j9">Bankim Mukherjee Sarani</a> → Then take a bus to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/cMwWYHMpwiR2EMMm7">Chetla</a>.';
        suruchiStep.after(suruchiTransfer);
      }
    }
    if(chetlaStep){
      const chetlaP=chetlaStep.querySelector('.route-card .route-top p');
      if(chetlaP)chetlaP.textContent='🚶 200 m · ⏱️ 4 min from Chetla.';
    }

    const aliporeStep=chaturthiSteps.find(step=>step.querySelector('.route-card h3')?.textContent.trim()==='Alipore Sarbojonin');
    const nepalStep=chaturthiSteps.find(step=>step.querySelector('.route-card h3')?.textContent.trim()==='Nepal Bhattacharjee Street Club');
    if(aliporeStep && !document.querySelector('[data-chaturthi-alipore-transfer="true"]')){
      const aliporeTransfer=document.createElement('li');
      aliporeTransfer.className='route-transport';
      aliporeTransfer.dataset.chaturthiAliporeTransfer='true';
      aliporeTransfer.innerHTML='<strong>Transfer:</strong> 🚶 140 m · ⏱️ 3 min to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/gMDQdMpQeGo2BYB76">Alipore Chetla Crossing</a> → Then take a bus to <a class="route-location-link" target="_blank" rel="noopener" href="https://maps.app.goo.gl/5yjU1pxGtQZqwDni7">Keoratala Samshan</a>.';
      aliporeStep.after(aliporeTransfer);
    }
    if(nepalStep){
      const nepalP=nepalStep.querySelector('.route-card .route-top p');
      if(nepalP)nepalP.textContent='🚶 170 m · ⏱️ 4 mins from Keoratala Shamshan Bus Stop.';
    }

    const cards=[...document.querySelectorAll('.route-list > .route-step .route-card')];
    let serial=1;
    cards.forEach(card=>{if(card.classList.contains('route-lunch')||/\bLUNCH\b/i.test(card.textContent))return;card.classList.add('puja-pandal');card.dataset.serial=String(serial).padStart(2,'0');const n=card.parentElement.querySelector('.route-number');if(n)n.textContent=String(serial).padStart(2,'0');serial++;});
  };

  const setupPandalExpansions=()=>{
    if(/\/chaturthi\.html$/i.test(location.pathname))return;
    const style=document.createElement('style');
    style.textContent='.puja-pandal{cursor:pointer;transition:box-shadow .2s ease,transform .2s ease}.puja-pandal:hover{box-shadow:0 10px 30px rgba(0,0,0,.08);transform:translateY(-1px)}.puja-pandal[aria-expanded="true"]{box-shadow:0 10px 30px rgba(0,0,0,.1)}.puja-pandal-expansion{display:grid;grid-template-rows:0fr;transition:grid-template-rows .25s ease;margin-top:0}.puja-pandal-expansion.is-open{grid-template-rows:1fr;margin-top:14px}.puja-pandal-expansion>div{overflow:hidden}.puja-pandal-expansion-content{padding:0;border-top:1px solid var(--line);color:var(--muted);font-size:14px;line-height:1.6}.puja-pandal-expansion.is-open .puja-pandal-expansion-content{padding-top:14px}.puja-pandal .route-actions{position:relative;z-index:2}.puja-pandal .route-actions a{cursor:pointer}';
    document.head.appendChild(style);
    let serial=1;
    document.querySelectorAll('.route-step .route-card').forEach(card=>{
      if(card.classList.contains('route-lunch')||/\bLUNCH\b/i.test(card.textContent))return;
      card.classList.add('puja-pandal');
      card.dataset.serial=String(serial).padStart(2,'0');
      card.setAttribute('aria-expanded','false');
      const panel=document.createElement('div');
      panel.className='puja-pandal-expansion';
      panel.setAttribute('aria-hidden','true');
      panel.innerHTML='<div><div class="puja-pandal-expansion-content">Tap this card to expand. Detailed pandal notes can be placed here later.</div></div>';
      card.appendChild(panel);
      card.addEventListener('click',event=>{
        if(event.target.closest('a'))return;
        const open=card.getAttribute('aria-expanded')==='true';
        document.querySelectorAll('.puja-pandal[aria-expanded="true"]').forEach(other=>{
          if(other===card)return;
          other.setAttribute('aria-expanded','false');
          const otherPanel=other.querySelector('.puja-pandal-expansion');
          if(otherPanel){otherPanel.classList.remove('is-open');otherPanel.setAttribute('aria-hidden','true');}
        });
        card.setAttribute('aria-expanded',String(!open));
        panel.classList.toggle('is-open',!open);
        panel.setAttribute('aria-hidden',String(open));
      });
      serial++;
    });
  };

  const linkLocations=root=>{Object.entries(stationLinks).forEach(([name,url])=>{const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];while(w.nextNode())nodes.push(w.currentNode);nodes.forEach(node=>{if(!node.nodeValue.includes(name)||node.parentElement.closest('a')||node.parentElement.closest('.route-card')||node.parentElement.closest('.route-summary'))return;const parts=node.nodeValue.split(name),frag=document.createDocumentFragment();parts.forEach((part,i)=>{if(i){const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';a.textContent=name;a.className='route-location-link';frag.appendChild(a);}if(part)frag.appendChild(document.createTextNode(part));});node.parentNode.replaceChild(frag,node);});});};

  replaceBally(document.body);linkLocations(document.body);abbreviateMonths(document.body);setupChaturthiAdditions();setupPandalExpansions();
  document.querySelectorAll('.route-summary strong').forEach(e=>{if(/route workflow/i.test(e.textContent))e.textContent='Itinerary:';});

  if(/\/panchami\.html$/i.test(location.pathname)){
    document.querySelectorAll('.route-list').forEach(list=>{
      if(list.dataset.pujaPanelsBound==='true')return;
      list.dataset.pujaPanelsBound='true';
      list.addEventListener('click',e=>{
        const card=e.target.closest('.route-card.puja-pandal');
        if(!card||!list.contains(card)||e.target.closest('a'))return;
        const panel=card.querySelector('.puja-pandal-expansion');
        if(!panel)return;
        e.stopPropagation();
        const open=card.getAttribute('aria-expanded')==='true';
        list.querySelectorAll('.route-card.puja-pandal[aria-expanded="true"]').forEach(other=>{
          if(other===card)return;
          other.setAttribute('aria-expanded','false');
          const op=other.querySelector('.puja-pandal-expansion');
          if(op){op.classList.remove('is-open');op.setAttribute('aria-hidden','true');}
        });
        card.setAttribute('aria-expanded',String(!open));
        panel.classList.toggle('is-open',!open);
        panel.setAttribute('aria-hidden',String(open));
      },true);
    });
  }
});