(() => {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-label', 'Loading');
  loader.innerHTML = '<span class="page-loader__spinner" aria-hidden="true"></span><span>Loading</span>';

  const install = () => {
    if (!document.body || document.querySelector('.page-loader')) return;
    document.body.append(loader);
    document.body.classList.add('page-loading');
  };

  if (document.body) install();
  else document.addEventListener('DOMContentLoaded', install, { once: true });

  const pending = new Set();
  const completedImages = new WeakMap();
  const completedBackgrounds = new Set();
  let scanQueued = false;
  let finished = false;

  const backgroundUrls = (value) => {
    const urls = [];
    const expression = /url\(["']?(.*?)["']?\)/g;
    let match;
    while ((match = expression.exec(value))) urls.push(match[1]);
    return urls;
  };

  const trackImage = (image) => {
    const url = image.currentSrc || image.src;
    if (!url || completedImages.get(image) === url || pending.has(image)) return;

    // Cached images may already be complete before their load event is observed.
    if (image.complete) {
      completedImages.set(image, url);
      return;
    }

    pending.add(image);
    const settle = () => {
      pending.delete(image);
      completedImages.set(image, url);
      scheduleScan();
    };
    image.addEventListener('load', settle, { once: true });
    image.addEventListener('error', settle, { once: true });
  };

  const trackBackground = (element) => {
    const value = getComputedStyle(element).backgroundImage;
    for (const url of backgroundUrls(value)) {
      if (!url || url.startsWith('data:') || url.startsWith('blob:')) continue;
      const key = `${element.dataset.loaderId || (element.dataset.loaderId = String(Math.random()))}:${url}`;
      if (completedBackgrounds.has(key) || pending.has(key)) continue;
      const image = new Image();
      pending.add(key);
      image.onload = image.onerror = () => {
        pending.delete(key);
        completedBackgrounds.add(key);
        scheduleScan();
      };
      image.src = url;
      if (image.complete) {
        pending.delete(key);
        completedBackgrounds.add(key);
      }
    }
  };

  const scan = () => {
    scanQueued = false;
    if (finished) return;
    document.querySelectorAll('img').forEach(trackImage);
    document.querySelectorAll('body *').forEach(trackBackground);
    if (document.readyState === 'complete') {
      document.body?.classList.remove('page-loading');
      if (!pending.size) {
        finished = true;
        loader.classList.add('page-loader--hidden');
        loader.addEventListener('transitionend', () => loader.remove(), { once: true });
        setTimeout(() => loader.remove(), 450);
      }
    }
  };

  function scheduleScan() {
    if (scanQueued || finished) return;
    scanQueued = true;
    requestAnimationFrame(scan);
  }

  const observer = new MutationObserver(scheduleScan);
  const start = () => {
    install();
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'srcset', 'style', 'class'] });
    window.addEventListener('load', scheduleScan, { once: true });
    scheduleScan();
  };
  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start, { once: true });
})();
