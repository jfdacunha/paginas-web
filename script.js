// Casa do Poente — comportamento mínimo, sem dependências.

document.addEventListener('DOMContentLoaded', function () {
  // Reduz o header ao ficar transparente apenas sobre o hero.
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');
  if (header && hero && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        header.classList.toggle('is-solid', !entry.isIntersecting);
      });
    }, { threshold: 0.15 });
    observer.observe(hero);
  }

  // Pausa o vídeo de fundo quando a aba não está visível, para poupar bateria.
  var video = document.querySelector('.hero-media');
  if (video) {
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(function () {});
      }
    });
  }
});
