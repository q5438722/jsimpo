
try {
  if (location.search.indexOf('?pc') !== 0 && /Android|Windows Phone|iPhone|iPod/i.test(navigator.userAgent)) {
    window.location.href = 'https://xw.qq.com?f=qqcom';
  }
} catch (e) {}
