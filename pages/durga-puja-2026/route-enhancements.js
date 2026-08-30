document.addEventListener('DOMContentLoaded', () => {
  const walkingTimes = {'56 m':'1 min','83 m':'2 min','100 m':'2 min','120 m':'3 min','160 m':'4 min','170 m':'3 min','230 m':'5 min','250 m':'5 min','270 m':'6 min','280 m':'6 min','290 m':'6 min','300 m':'6 min','350 m':'7 min','400 m':'8 min','450 m':'9 min','500 m':'10 min','550 m':'11 min','600 m':'12 min','650 m':'13 min','700 m':'14 min','800 m':'16 min','850 m':'17 min','950 m':'19 min','1000 m':'20 min','1100 m':'22 min','1200 m':'24 min','1300 m':'26 min','1400 m':'28 min','1500 m':'30 min','1600 m':'32 min','1700 m':'34 min','1800 m':'36 min'};
  const stationLinks = {
    'Jatin Das Park Metro Station':'https://maps.app.goo.gl/3DniZCdEKh9JUmtF6',
    'Geetanjali Metro Station':'https://maps.app.goo.gl/pZT8BTLL9mtKjbVf6',
    'Karunamoyee Bus Stand':'https://maps.app.goo.gl/ryWgej7uVh75DBxN8',
    'Sakherbazar Bus Stand':'https://maps.app.goo.gl/LJYzKoLHV5rEiM4n9',
    'Thakurpukur Metro Station':'https://maps.app.goo.gl/9hRJ6ZDZaMFJLyTu5',
    'Behala Thana Bus Stand':'https://maps.app.goo.gl/6daq8KGtdbHMPfCE9',
    'Lake Gardens Station':'https://maps.app.goo.gl/jE9Pxd8CnMRx7sdcA',
    'Laketown Bus Stand':'https://maps.app.goo.gl/pniXaxVn8pNiRQ6ZA'
  };
  const formatDistance = (value, unit) => {
    const metres = unit === 'km' ? Math.round(parseFloat(value) * 1000) : parseInt(value, 10);
    return `🚶 ${metres} m · ⏱️ ${walkingTimes[metres + ' m'] || Math.round(metres / 50) + ' min'}`;
  };
  const enhanceWalking = text => text
    .replace(/(?:Walk )?about (\d+(?:\.\d+)?) (km|m)/gi, (_, value, unit) => formatDistance(value, unit))
    .replace(/about (\d+(?:\.\d+)?) (km|m)/gi, (_, value, unit) => formatDistance(value, unit));
  const linkStations = root => {
    Object.entries(stationLinks).forEach(([name, url]) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => {
        if (!node.nodeValue.includes(name) || node.parentElement.closest('a')) return;
        const parts = node.nodeValue.split(name);
        const frag = document.createDocumentFragment();
        parts.forEach((part, i) => {
          if (i) { const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = name; a.className = 'route-location-link'; frag.appendChild(a); }
          if (part) frag.appendChild(document.createTextNode(part));
        });
        node.parentNode.replaceChild(frag, node);
      });
    });
  };
  document.querySelectorAll('.route-card p').forEach(p => { p.textContent = enhanceWalking(p.textContent); });
  document.querySelectorAll('.route-transport').forEach(el => { el.innerHTML = enhanceWalking(el.innerHTML); });
  linkStations(document.body);
});
