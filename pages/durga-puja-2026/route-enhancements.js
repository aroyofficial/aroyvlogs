document.addEventListener('DOMContentLoaded', () => {
  const walkingTimes = {
    '56 m':'1 min','83 m':'2 min','100 m':'2 min','120 m':'3 min','160 m':'4 min','170 m':'3 min','230 m':'5 min','250 m':'5 min','270 m':'6 min','280 m':'6 min','290 m':'6 min','300 m':'6 min','350 m':'7 min','400 m':'8 min','450 m':'9 min','500 m':'10 min','550 m':'11 min','600 m':'12 min','650 m':'13 min','700 m':'14 min','800 m':'16 min','850 m':'17 min','950 m':'19 min','1000 m':'20 min','1100 m':'22 min','1200 m':'24 min','1300 m':'26 min','1400 m':'28 min','1500 m':'30 min','1600 m':'32 min','1700 m':'34 min','1800 m':'36 min'
  };

  document.querySelectorAll('.route-card p').forEach(p => {
    let text = p.textContent;
    text = text.replace(/Walk about (\d+(?:\.\d+)?) km/g, (_, km) => {
      const metres = Math.round(parseFloat(km) * 1000);
      return `🚶 ${metres} m · ⏱️ ${walkingTimes[metres + ' m'] || Math.round(metres / 50) + ' min'}`;
    });
    text = text.replace(/Walk about (\d+) m/g, (_, metres) => {
      return `🚶 ${metres} m · ⏱️ ${walkingTimes[metres + ' m'] || Math.round(parseInt(metres, 10) / 50) + ' min'}`;
    });
    p.textContent = text;
  });

  document.querySelectorAll('.route-transport').forEach(el => {
    let html = el.innerHTML;
    html = html.replace(/Walk about (\d+(?:\.\d+)?) km/g, (_, km) => {
      const metres = Math.round(parseFloat(km) * 1000);
      return `🚶 ${metres} m · ⏱️ ${walkingTimes[metres + ' m'] || Math.round(metres / 50) + ' min'}`;
    });
    html = html.replace(/Walk about (\d+) m/g, (_, metres) => {
      return `🚶 ${metres} m · ⏱️ ${walkingTimes[metres + ' m'] || Math.round(parseInt(metres, 10) / 50) + ' min'}`;
    });
    el.innerHTML = html;
  });
});
