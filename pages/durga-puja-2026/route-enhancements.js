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
/* SHASHTHI_DESCRIPTION_FIX_V1 */
(function(){
  const descriptions={
    "Bagbazar Sarbojanin":"A historic North Kolkata puja known for its <strong>traditional and heritage character</strong>. For 2026, a reliable final theme or artist announcement has not been confirmed yet, so this stop is best approached for its old-school Puja atmosphere and cultural legacy.",
    "Jagat Mukherjee Park":"Celebrating its <strong>90th year in 2026</strong>, this North Kolkata puja has begun its preparations with Khuti Puja. The final 2026 theme and creative details are still awaiting reliable confirmation, making its milestone anniversary the key highlight for this visit.",
    "Kumortuli Sarbojanin":"One of Kumortuli's important <strong>heritage-style Durga Pujas</strong>, closely connected with the traditional artisan neighbourhood. Its distinctive <strong>Ashtadhatu Durga idol and Kathamo Puja tradition</strong> make this a particularly interesting stop for those wanting to experience the older traditions of Kolkata Puja.",
    "Kumortuli Park":"The 2026 presentation is based on <strong>“Gangotri to Ganga” (গঙ্গোত্রী থেকে গঙ্গা)</strong>, tracing the journey of the Ganga from its Himalayan origin towards the Bay of Bengal. The concept gives the pandal a strong connection with India's cultural and spiritual relationship with the river.",
    "Hatkhola Gosaipara Sarbojanin":"A neighbourhood puja in the historic North Kolkata belt. Reliable 2026 information about its final theme or creative team is not yet available, so the stop is included primarily for its <strong>local Puja atmosphere and place within the Kumortuli-Hatkhola circuit</strong>.",
    "Ahiritola Sarbojanin":"The 2026 presentation follows a <strong>Sabeki/traditional direction</strong>, with <strong>Manas Das</strong> handling the concept and creation, <strong>Subrata Mudha</strong> creating the idol and <strong>Soumen Chakraborty</strong> working on the lighting. Rather than forcing an unconfirmed theme title, the emphasis here is on its traditional artistic treatment.",
    "Ahiritola Jubak Brinda":"A long-running Ahiritola puja reaching its <strong>50th edition</strong>. The committee has continued preparations for 2026, but a reliable final theme or artist announcement has not yet been established, so this stop is best presented as part of the historic Ahiritola Puja circuit.",
    "Chorbagan Sarbojanin":"Celebrating its <strong>91st year</strong>, the 2026 presentation has officially unveiled the theme <strong>“Akal Bodhon”</strong>. The concept draws on the story and significance of Durga's untimely invocation, giving this historic North Kolkata puja a distinctly Bengali mythological and cultural character.",
    "Maniktala Chalta Bagan Lohapatty":"The 2026 theme is <strong>“Nishan - The Mark”</strong>, conceived by artist <strong>Aditi Chakraborty</strong>. Inspired by tattoo traditions such as those of the <strong>Ramnami community</strong>, the concept explores identity, faith and the marks people carry as expressions of belief and belonging. Special music has also been created by <strong>Pt. Vishwa Mohan Bhatt</strong>.",
    "Lalabagan Nabankur":"A well-known puja in the Maniktala area with a history of socially and environmentally conscious presentations. However, a sufficiently reliable <strong>final 2026 theme or artist announcement</strong> has not been found yet, so no specific creative claim is being attached to this year's pandal.",
    "Kashi Bose Lane":"For 2026, <strong>artist Anirban Das</strong> has been confirmed for the creative work. Recent preparation material uses the phrase <strong>“সৃষ্টি পুজো”</strong>, but it is not yet sufficiently clear whether this represents the final public theme or an early creative concept, so it is not presented here as a confirmed theme.",
    "Hatibagan Sarbojanin":"One of the recognisable traditional pujas of North Kolkata, with a <strong>heritage-oriented presentation</strong> rather than relying solely on a large thematic installation. A specific 2026 theme or artist has not been reliably confirmed, so the focus here remains on its traditional Puja character.",
    "Nalin Sarkar Street":"Celebrating its <strong>94th year</strong>, the 2026 theme is <strong>“Jalalipi” (জললিপি)</strong>. The name evokes the idea of <strong>writing or script formed in water</strong>, giving the presentation a poetic connection between water, memory and expression.",
    "North Tridhara":"A North Kolkata neighbourhood puja included in the Hatibagan circuit. Reliable information confirming a specific <strong>2026 theme or artist</strong> is not currently available, so this stop is kept intentionally general rather than attributing an unverified concept to the committee.",
    "Hatibagan Nabinpally":"A long-running Hatibagan-area puja that forms part of this traditional North Kolkata circuit. Current 2026 information confirms the Puja, but a reliable final theme or creative-team announcement has not been established, so the description stays focused on the neighbourhood Puja experience.",
    "Sovabazar Rajbari":"One of Kolkata's most significant <strong>heritage Durga Pujas</strong>, held at the historic Sovabazar Rajbari. For 2026, <strong>Jayanta Saha</strong> is handling the creative direction and <strong>Jagannath Saha</strong> is creating the idol. The main attraction here is the atmosphere and continuity of a centuries-old family Puja rather than a conventional theme-pandal concept."
  };
  function fix(){
    if(!/\/shashthi\.html$/i.test(location.pathname))return;
    document.querySelectorAll('.route-list > .route-step .route-card').forEach(function(card){
      if(card.classList.contains('route-lunch'))return;
      const title=card.querySelector('h3')?.textContent.trim();
      const description=descriptions[title];
      if(!description)return;
      card.classList.add('puja-pandal');
      let panel=card.querySelector('.puja-pandal-expansion');
      if(!panel){
        panel=document.createElement('div');
        panel.className='puja-pandal-expansion';
        panel.setAttribute('aria-hidden','true');
        const inner=document.createElement('div');
        const content=document.createElement('div');
        content.className='puja-pandal-expansion-content';
        inner.appendChild(content);
        panel.appendChild(inner);
        card.appendChild(panel);
      }
      let content=panel.querySelector('.puja-pandal-expansion-content');
      if(!content){
        content=document.createElement('div');
        content.className='puja-pandal-expansion-content';
        let inner=panel.querySelector(':scope > div');
        if(!inner){inner=document.createElement('div');panel.appendChild(inner);}
        inner.appendChild(content);
      }
      content.innerHTML=description;
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(fix,0);},{once:true});
  else setTimeout(fix,0);
})();

/* SAPTAMI_DESCRIPTION_FIX_V1 */
(function(){
  const descriptions={
    "Deshapriya Park":"Celebrating its <strong>89th year</strong>, the 2026 presentation takes the form of a <strong>fictional white-and-gold temple</strong>, featuring multiple spires, a grand staircase and classical architectural detailing. The idol is being created by <strong>Padma Shri Sanatan Rudra Pal</strong>, with a special lighting presentation planned to add to the visual experience.",
    "Tridhara Sammilani":"Known for blending tradition with contemporary artistic expression, the 2026 presentation is described as a <strong>fusion of sculptural work and modern lighting</strong>. The committee is continuing its distinctive South Kolkata style, though a reliable final theme title and artist credit have not yet been confirmed.",
    "Ballygunge Cultural Association":"Celebrating its <strong>76th year</strong>, the 2026 theme is <strong>“Yojon” (যোজন)</strong>, exploring the connections between people, generations, Bengali culture, art and the environment. <strong>Artist Sushanta Shivani Pal</strong> leads the creative vision, while the project also focuses strongly on sustainability through recycling festival materials and turning waste into reusable products.",
    "Samaj Sebi Sangha":"Celebrating its <strong>81st year</strong>, the Puja pays tribute to Uttam Kumar's birth centenary through <strong>“Mahapujoy Mahanayak”</strong>. The presentation recreates the nostalgia of <strong>1970s-80s Kolkata</strong>, bringing together film posters, photographs, memorabilia and stories from the legendary actor's life. <strong>Bishwanath Dey</strong> is the theme-maker, with the idol by <strong>Arighna Saha</strong>.",
    "Hindustan Park":"The 2026 presentation places the emphasis on <strong>Bengali craftsmanship and intricate handwork</strong>, continuing the area's reputation for detailed artistic installations. A reliable final theme title or artist credit has not yet been confirmed, so this description intentionally avoids carrying forward themes from previous years.",
    "Gariahat Hindustan Club":"A long-running Gariahat Puja with a history of traditional and colourful artistic presentations. For <strong>2026</strong>, no sufficiently reliable final theme or artist announcement has been found yet, so older theme information has deliberately not been carried forward.",
    "Singhi Park":"An established Gariahat Puja with a strong <strong>community and traditional identity</strong>. The committee is actively preparing for the 2026 festivities, but a reliable final theme or artist announcement has not yet been confirmed, so no unsupported creative details are being added.",
    "Ekdalia Evergreen":"Celebrating its <strong>84th year</strong>, the Puja retains its iconic <strong>Sabeki idol</strong> while taking inspiration from Gujarat's magnificent <strong>Somnath Temple</strong> for the 2026 pandal. The temple-inspired architecture provides the year's major visual attraction, while the traditional idol remains at the heart of the Puja."
  };
  function fix(){
    if(!/\/saptami\.html$/i.test(location.pathname))return;
    document.querySelectorAll('.route-list > .route-step .route-card').forEach(function(card){
      if(card.classList.contains('route-lunch'))return;
      const title=card.querySelector('h3')?.textContent.trim();
      const description=descriptions[title];
      if(!description)return;
      card.classList.add('puja-pandal');
      let panel=card.querySelector('.puja-pandal-expansion');
      if(!panel){
        panel=document.createElement('div');
        panel.className='puja-pandal-expansion';
        panel.setAttribute('aria-hidden','true');
        const inner=document.createElement('div');
        const content=document.createElement('div');
        content.className='puja-pandal-expansion-content';
        inner.appendChild(content);
        panel.appendChild(inner);
        card.appendChild(panel);
      }
      let content=panel.querySelector('.puja-pandal-expansion-content');
      if(!content){
        content=document.createElement('div');
        content.className='puja-pandal-expansion-content';
        let inner=panel.querySelector(':scope > div');
        if(!inner){inner=document.createElement('div');panel.appendChild(inner);}
        inner.appendChild(content);
      }
      content.innerHTML=description;
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(fix,0);},{once:true});
  else setTimeout(fix,0);
})();


/* NAVAMI_DESCRIPTION_FIX_V2 */
// validated helper - trigger application workflow
(function(){
  const descriptions={"Babubagan":"The 2026 preparations have begun with a <strong>renewed organising committee</strong>, following changes in the club's management. The Puja has a long-standing reputation for artistic and heritage-inspired presentations, but a reliable <strong>2026 theme and artist announcement is still awaited</strong>.","Selimpur Palli Sarbojanin":"A well-established South Kolkata community Puja with a history of traditional and artistic presentations. For <strong>2026</strong>, no sufficiently reliable theme or artist announcement has been found yet, so older creative details have deliberately not been carried forward.","Jodhpur Park":"Celebrating its <strong>75th year</strong>, the 2026 presentation is titled <strong>“Guptayan” (গুপ্তায়ন)</strong>, exploring the idea of something hidden or concealed beneath the surface. <strong>Biman Saha</strong> is credited with the planning and creation, with intriguing visual elements including a child, Durga's mask, lotus stems and an old Kolkata tram.","95 Palli Association":"A prominent South Kolkata Puja that continues its preparations for the 2026 festive season amid organisational and funding uncertainties affecting several large committees. A reliable final <strong>2026 theme and artist credit has not yet been confirmed</strong>, so no older theme information is being reused.","Karbagan":"The Puja is known for combining <strong>heritage character with detailed artistic craftsmanship</strong>. While current 2026 listings confirm its preparations, a reliable named theme or artist has not yet been established, and previous years' themes are intentionally excluded.","Pallishree":"An established community Puja in the Bidhannagar area. For <strong>2026</strong>, no sufficiently reliable theme or artist announcement has been found yet, so this description avoids carrying forward creative details from earlier editions.","Telengabagan":"Celebrating its <strong>61st year</strong>, the 2026 presentation is titled <strong>“Tilottama” (তিলোত্তমা)</strong>, drawing on the mythological celestial figure associated with extraordinary beauty and perfection. The idol is being created by <strong>Piyal Pal</strong>.","Surirbagan":"A neighbourhood Puja in the Bidhannagar area with an established community presence. A reliable <strong>2026 theme or artist announcement has not yet been confirmed</strong>, so no unsupported creative details are included here.","Sri Bhumi":"The 2026 presentation recreates the grandeur of Jaipur's iconic <strong>Hawa Mahal</strong>. The idol is being created by <strong>Pradip Rudrapal</strong>, while <strong>Gauri Decorators</strong> is handling the pandal execution. The architectural recreation is the central attraction of this year's presentation.","Natunpally Pradeep Sangha":"Known for its ambitious conceptual installations and collaborations with prominent artists over the years. For <strong>2026</strong>, however, a sufficiently reliable final theme or artist announcement has not been established, so historical themes and artist credits have not been carried forward.","Beliaghata 33 Palli":"Celebrating its <strong>25th year in 2026</strong>, the Puja continues its community celebrations in Beliaghata. A reliable final <strong>2026 theme and artist announcement is still awaited</strong>, so previous editions' creative concepts have not been presented as current information.","Sandhani Club":"A Beliaghata community Puja with a blend of <strong>traditional character and artistic craftsmanship</strong>. Current 2026 information confirms preparations, but a reliable named theme or artist has not yet been established.","IB Block":"An established Salt Lake Puja that is preparing for the 2026 festivities amid the funding and organisational challenges affecting several committees. The current information indicates that the <strong>2026 theme is still to be announced</strong>, so no previous year's theme is being reused.","FD Block":"The 2026 presentation is titled <strong>“Bindu” (বিন্দু)</strong>, with <strong>Prashanta Pal</strong> as the artist. The theme was announced during the committee's early 2026 preparations, making this one of Salt Lake's confirmed creative presentations for the year.","EC Block":"Celebrating its <strong>50th year</strong>, the Puja is taking an <strong>epic-inspired creative direction</strong> in 2026, with <strong>Samrat Bhattacharjee</strong> involved as the theme artist. The final named theme has not been reliably confirmed, so the description avoids assigning an unverified title.","AF Block":"An established Salt Lake community Puja. A reliable <strong>2026 theme or artist announcement has not yet been found</strong>, so older creative concepts have deliberately not been carried forward.","Newtown Sarbojonin":"The 2026 presentation is titled <strong>“Padma-bhushan”</strong>, with <strong>Rintu Das</strong> leading the artistic work. The lotus forms the central visual idea, with water, air, lotus buds and beehive-inspired elements incorporated into the installation. Five boats from Balagarh are being transformed into lotus-petal forms, with the largest rising to around <strong>45 feet</strong>.","Dum Dum Park Yubak Brinda":"Current 2026 reporting points towards a <strong>Santhal village-inspired presentation</strong>, celebrating elements of Santhal culture and artistic traditions. However, available sources contain conflicting information about the Puja's edition history, so these creative details should be treated as <strong>provisional until independently corroborated</strong>.","Dum Dum Park Sarbojanin":"The 2026 presentation is described in current Puja listings as having a <strong>traditional/Sabeki Ek-Chala character</strong>. A reliable named theme or artist has not yet been confirmed, so no older creative information is being presented as 2026 fact.","Dum Dum Park Bharat Chakra":"Celebrating its <strong>26th year</strong>, the 2026 presentation places emphasis on <strong>heritage, community and contemporary artistic expression</strong>. The committee's 2026 banner and Khuti Puja have already been publicised, although a formal named theme has not been reliably established.","Dum Dum Park Tarun Dal":"A long-running Dum Dum Park community Puja with a history of changing artistic presentations. For <strong>2026</strong>, no sufficiently reliable final theme or artist announcement has been found yet. This is kept separate from other nearby Tarun Sangha committees to avoid mixing their themes.","Dakshinpara":"A long-established Dum Dum Park-area Puja with a substantial history of artistic and socially conscious presentations. The committee's current 2026 material does not yet provide a reliable final theme or artist announcement, so previous concepts have not been carried forward.","Arjunpur Amra Sabai Club":"Known for ambitious conceptual and socially themed installations in previous years. For <strong>2026</strong>, the official theme has <strong>not yet been reliably announced</strong>, so older themes such as <em>Anyo-Desh</em> and <em>Ganadebata</em> are intentionally excluded."};
  function fix(){
    if(location.pathname.toLowerCase().endsWith('/navami.html')===false)return;
    document.querySelectorAll('.route-list > .route-step .route-card').forEach(function(card){
      if(card.classList.contains('route-lunch')||card.textContent.toUpperCase().includes('LUNCH'))return;
      const title=card.querySelector('h3')?.textContent.trim();
      const description=descriptions[title];
      if(!description)return;
      card.classList.add('puja-pandal');
      let panel=card.querySelector('.puja-pandal-expansion');
      if(!panel){panel=document.createElement('div');panel.className='puja-pandal-expansion';panel.setAttribute('aria-hidden','true');const inner=document.createElement('div');const content=document.createElement('div');content.className='puja-pandal-expansion-content';inner.appendChild(content);panel.appendChild(inner);card.appendChild(panel);}
      let content=panel.querySelector('.puja-pandal-expansion-content');
      if(!content){content=document.createElement('div');content.className='puja-pandal-expansion-content';let inner=panel.querySelector(':scope > div');if(!inner){inner=document.createElement('div');panel.appendChild(inner);}inner.appendChild(content);}
      content.innerHTML=description;
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(fix,0);},{once:true});else setTimeout(fix,0);
})();

/* NAVAMI_DESCRIPTION_FIX_V2 */
(function(){
  const descriptions={"Babubagan":"The 2026 preparations have begun with a <strong>renewed organising committee</strong>, following changes in the club's management. The Puja has a long-standing reputation for artistic and heritage-inspired presentations, but a reliable <strong>2026 theme and artist announcement is still awaited</strong>.","Selimpur Palli Sarbojanin":"A well-established South Kolkata community Puja with a history of traditional and artistic presentations. For <strong>2026</strong>, no sufficiently reliable theme or artist announcement has been found yet, so older creative details have deliberately not been carried forward.","Jodhpur Park":"Celebrating its <strong>75th year</strong>, the 2026 presentation is titled <strong>“Guptayan” (গুপ্তায়ন)</strong>, exploring the idea of something hidden or concealed beneath the surface. <strong>Biman Saha</strong> is credited with the planning and creation, with intriguing visual elements including a child, Durga's mask, lotus stems and an old Kolkata tram.","95 Palli Association":"A prominent South Kolkata Puja that continues its preparations for the 2026 festive season amid organisational and funding uncertainties affecting several large committees. A reliable final <strong>2026 theme and artist credit has not yet been confirmed</strong>, so no older theme information is being reused.","Karbagan":"The Puja is known for combining <strong>heritage character with detailed artistic craftsmanship</strong>. While current 2026 listings confirm its preparations, a reliable named theme or artist has not yet been established, and previous years' themes are intentionally excluded.","Pallishree":"An established community Puja in the Bidhannagar area. For <strong>2026</strong>, no sufficiently reliable theme or artist announcement has been found yet, so this description avoids carrying forward creative details from earlier editions.","Telengabagan":"Celebrating its <strong>61st year</strong>, the 2026 presentation is titled <strong>“Tilottama” (তিলোত্তমা)</strong>, drawing on the mythological celestial figure associated with extraordinary beauty and perfection. The idol is being created by <strong>Piyal Pal</strong>.","Surirbagan":"A neighbourhood Puja in the Bidhannagar area with an established community presence. A reliable <strong>2026 theme or artist announcement has not yet been confirmed</strong>, so no unsupported creative details are included here.","Sri Bhumi":"The 2026 presentation recreates the grandeur of Jaipur's iconic <strong>Hawa Mahal</strong>. The idol is being created by <strong>Pradip Rudrapal</strong>, while <strong>Gauri Decorators</strong> is handling the pandal execution. The architectural recreation is the central attraction of this year's presentation.","Natunpally Pradeep Sangha":"Known for its ambitious conceptual installations and collaborations with prominent artists over the years. For <strong>2026</strong>, however, a sufficiently reliable final theme or artist announcement has not been established, so historical themes and artist credits have not been carried forward.","Beliaghata 33 Palli":"Celebrating its <strong>25th year in 2026</strong>, the Puja continues its community celebrations in Beliaghata. A reliable final <strong>2026 theme and artist announcement is still awaited</strong>, so previous editions' creative concepts have not been presented as current information.","Sandhani Club":"A Beliaghata community Puja with a blend of <strong>traditional character and artistic craftsmanship</strong>. Current 2026 information confirms preparations, but a reliable named theme or artist has not yet been established.","IB Block":"An established Salt Lake Puja that is preparing for the 2026 festivities amid the funding and organisational challenges affecting several committees. The current information indicates that the <strong>2026 theme is still to be announced</strong>, so no previous year's theme is being reused.","FD Block":"The 2026 presentation is titled <strong>“Bindu” (বিন্দু)</strong>, with <strong>Prashanta Pal</strong> as the artist. The theme was announced during the committee's early 2026 preparations, making this one of Salt Lake's confirmed creative presentations for the year.","EC Block":"Celebrating its <strong>50th year</strong>, the Puja is taking an <strong>epic-inspired creative direction</strong> in 2026, with <strong>Samrat Bhattacharjee</strong> involved as the theme artist. The final named theme has not been reliably confirmed, so the description avoids assigning an unverified title.","AF Block":"An established Salt Lake community Puja. A reliable <strong>2026 theme or artist announcement has not yet been found</strong>, so older creative concepts have deliberately not been carried forward.","Newtown Sarbojonin":"The 2026 presentation is titled <strong>“Padma-bhushan”</strong>, with <strong>Rintu Das</strong> leading the artistic work. The lotus forms the central visual idea, with water, air, lotus buds and beehive-inspired elements incorporated into the installation. Five boats from Balagarh are being transformed into lotus-petal forms, with the largest rising to around <strong>45 feet</strong>.","Dum Dum Park Yubak Brinda":"Current 2026 reporting points towards a <strong>Santhal village-inspired presentation</strong>, celebrating elements of Santhal culture and artistic traditions. However, available sources contain conflicting information about the Puja's edition history, so these creative details should be treated as <strong>provisional until independently corroborated</strong>.","Dum Dum Park Sarbojanin":"The 2026 presentation is described in current Puja listings as having a <strong>traditional/Sabeki Ek-Chala character</strong>. A reliable named theme or artist has not yet been confirmed, so no older creative information is being presented as 2026 fact.","Dum Dum Park Bharat Chakra":"Celebrating its <strong>26th year</strong>, the 2026 presentation places emphasis on <strong>heritage, community and contemporary artistic expression</strong>. The committee's 2026 banner and Khuti Puja have already been publicised, although a formal named theme has not been reliably established.","Dum Dum Park Tarun Dal":"A long-running Dum Dum Park community Puja with a history of changing artistic presentations. For <strong>2026</strong>, no sufficiently reliable final theme or artist announcement has been found yet. This is kept separate from other nearby Tarun Sangha committees to avoid mixing their themes.","Dakshinpara":"A long-established Dum Dum Park-area Puja with a substantial history of artistic and socially conscious presentations. The committee's current 2026 material does not yet provide a reliable final theme or artist announcement, so previous concepts have not been carried forward.","Arjunpur Amra Sabai Club":"Known for ambitious conceptual and socially themed installations in previous years. For <strong>2026</strong>, the official theme has <strong>not yet been reliably announced</strong>, so older themes such as <em>Anyo-Desh</em> and <em>Ganadebata</em> are intentionally excluded."};
  function fix(){
    if(location.pathname.toLowerCase().endsWith('/navami.html')===false)return;
    document.querySelectorAll('.route-list > .route-step .route-card').forEach(function(card){
      if(card.classList.contains('route-lunch')||card.textContent.toUpperCase().includes('LUNCH'))return;
      const title=card.querySelector('h3')?.textContent.trim();
      const description=descriptions[title];
      if(!description)return;
      card.classList.add('puja-pandal');
      let panel=card.querySelector('.puja-pandal-expansion');
      if(!panel){panel=document.createElement('div');panel.className='puja-pandal-expansion';panel.setAttribute('aria-hidden','true');const inner=document.createElement('div');const content=document.createElement('div');content.className='puja-pandal-expansion-content';inner.appendChild(content);panel.appendChild(inner);card.appendChild(panel);}
      let content=panel.querySelector('.puja-pandal-expansion-content');
      if(!content){content=document.createElement('div');content.className='puja-pandal-expansion-content';let inner=panel.querySelector(':scope > div');if(!inner){inner=document.createElement('div');panel.appendChild(inner);}inner.appendChild(content);}
      content.innerHTML=description;
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(fix,0);},{once:true});else setTimeout(fix,0);
})();

/* NAVAMI_DESCRIPTION_FIX_V2 */
(function(){
  const descriptions={"Babubagan":"The 2026 preparations have begun with a <strong>renewed organising committee</strong>, following changes in the club's management. The Puja has a long-standing reputation for artistic and heritage-inspired presentations, but a reliable <strong>2026 theme and artist announcement is still awaited</strong>.","Selimpur Palli Sarbojanin":"A well-established South Kolkata community Puja with a history of traditional and artistic presentations. For <strong>2026</strong>, no sufficiently reliable theme or artist announcement has been found yet, so older creative details have deliberately not been carried forward.","Jodhpur Park":"Celebrating its <strong>75th year</strong>, the 2026 presentation is titled <strong>“Guptayan” (গুপ্তায়ন)</strong>, exploring the idea of something hidden or concealed beneath the surface. <strong>Biman Saha</strong> is credited with the planning and creation, with intriguing visual elements including a child, Durga's mask, lotus stems and an old Kolkata tram.","95 Palli Association":"A prominent South Kolkata Puja that continues its preparations for the 2026 festive season amid organisational and funding uncertainties affecting several large committees. A reliable final <strong>2026 theme and artist credit has not yet been confirmed</strong>, so no older theme information is being reused.","Karbagan":"The Puja is known for combining <strong>heritage character with detailed artistic craftsmanship</strong>. While current 2026 listings confirm its preparations, a reliable named theme or artist has not yet been established, and previous years' themes are intentionally excluded.","Pallishree":"An established community Puja in the Bidhannagar area. For <strong>2026</strong>, no sufficiently reliable theme or artist announcement has been found yet, so this description avoids carrying forward creative details from earlier editions.","Telengabagan":"Celebrating its <strong>61st year</strong>, the 2026 presentation is titled <strong>“Tilottama” (তিলোত্তমা)</strong>, drawing on the mythological celestial figure associated with extraordinary beauty and perfection. The idol is being created by <strong>Piyal Pal</strong>.","Surirbagan":"A neighbourhood Puja in the Bidhannagar area with an established community presence. A reliable <strong>2026 theme or artist announcement has not yet been confirmed</strong>, so no unsupported creative details are included here.","Sri Bhumi":"The 2026 presentation recreates the grandeur of Jaipur's iconic <strong>Hawa Mahal</strong>. The idol is being created by <strong>Pradip Rudrapal</strong>, while <strong>Gauri Decorators</strong> is handling the pandal execution. The architectural recreation is the central attraction of this year's presentation.","Natunpally Pradeep Sangha":"Known for its ambitious conceptual installations and collaborations with prominent artists over the years. For <strong>2026</strong>, however, a sufficiently reliable final theme or artist announcement has not been established, so historical themes and artist credits have not been carried forward.","Beliaghata 33 Palli":"Celebrating its <strong>25th year in 2026</strong>, the Puja continues its community celebrations in Beliaghata. A reliable final <strong>2026 theme and artist announcement is still awaited</strong>, so previous editions' creative concepts have not been presented as current information.","Sandhani Club":"A Beliaghata community Puja with a blend of <strong>traditional character and artistic craftsmanship</strong>. Current 2026 information confirms preparations, but a reliable named theme or artist has not yet been established.","IB Block":"An established Salt Lake Puja that is preparing for the 2026 festivities amid the funding and organisational challenges affecting several committees. The current information indicates that the <strong>2026 theme is still to be announced</strong>, so no previous year's theme is being reused.","FD Block":"The 2026 presentation is titled <strong>“Bindu” (বিন্দু)</strong>, with <strong>Prashanta Pal</strong> as the artist. The theme was announced during the committee's early 2026 preparations, making this one of Salt Lake's confirmed creative presentations for the year.","EC Block":"Celebrating its <strong>50th year</strong>, the Puja is taking an <strong>epic-inspired creative direction</strong> in 2026, with <strong>Samrat Bhattacharjee</strong> involved as the theme artist. The final named theme has not been reliably confirmed, so the description avoids assigning an unverified title.","AF Block":"An established Salt Lake community Puja. A reliable <strong>2026 theme or artist announcement has not yet been found</strong>, so older creative concepts have deliberately not been carried forward.","Newtown Sarbojonin":"The 2026 presentation is titled <strong>“Padma-bhushan”</strong>, with <strong>Rintu Das</strong> leading the artistic work. The lotus forms the central visual idea, with water, air, lotus buds and beehive-inspired elements incorporated into the installation. Five boats from Balagarh are being transformed into lotus-petal forms, with the largest rising to around <strong>45 feet</strong>.","Dum Dum Park Yubak Brinda":"Current 2026 reporting points towards a <strong>Santhal village-inspired presentation</strong>, celebrating elements of Santhal culture and artistic traditions. However, available sources contain conflicting information about the Puja's edition history, so these creative details should be treated as <strong>provisional until independently corroborated</strong>.","Dum Dum Park Sarbojanin":"The 2026 presentation is described in current Puja listings as having a <strong>traditional/Sabeki Ek-Chala character</strong>. A reliable named theme or artist has not yet been confirmed, so no older creative information is being presented as 2026 fact.","Dum Dum Park Bharat Chakra":"Celebrating its <strong>26th year</strong>, the 2026 presentation places emphasis on <strong>heritage, community and contemporary artistic expression</strong>. The committee's 2026 banner and Khuti Puja have already been publicised, although a formal named theme has not been reliably established.","Dum Dum Park Tarun Dal":"A long-running Dum Dum Park community Puja with a history of changing artistic presentations. For <strong>2026</strong>, no sufficiently reliable final theme or artist announcement has been found yet. This is kept separate from other nearby Tarun Sangha committees to avoid mixing their themes.","Dakshinpara":"A long-established Dum Dum Park-area Puja with a substantial history of artistic and socially conscious presentations. The committee's current 2026 material does not yet provide a reliable final theme or artist announcement, so previous concepts have not been carried forward.","Arjunpur Amra Sabai Club":"Known for ambitious conceptual and socially themed installations in previous years. For <strong>2026</strong>, the official theme has <strong>not yet been reliably announced</strong>, so older themes such as <em>Anyo-Desh</em> and <em>Ganadebata</em> are intentionally excluded."};
  function fix(){
    if(location.pathname.toLowerCase().endsWith('/navami.html')===false)return;
    document.querySelectorAll('.route-list > .route-step .route-card').forEach(function(card){
      if(card.classList.contains('route-lunch')||card.textContent.toUpperCase().includes('LUNCH'))return;
      const title=card.querySelector('h3')?.textContent.trim();
      const description=descriptions[title];
      if(!description)return;
      card.classList.add('puja-pandal');
      let panel=card.querySelector('.puja-pandal-expansion');
      if(!panel){panel=document.createElement('div');panel.className='puja-pandal-expansion';panel.setAttribute('aria-hidden','true');const inner=document.createElement('div');const content=document.createElement('div');content.className='puja-pandal-expansion-content';inner.appendChild(content);panel.appendChild(inner);card.appendChild(panel);}
      let content=panel.querySelector('.puja-pandal-expansion-content');
      if(!content){content=document.createElement('div');content.className='puja-pandal-expansion-content';let inner=panel.querySelector(':scope > div');if(!inner){inner=document.createElement('div');panel.appendChild(inner);}inner.appendChild(content);}
      content.innerHTML=description;
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(fix,0);},{once:true});else setTimeout(fix,0);
})();
