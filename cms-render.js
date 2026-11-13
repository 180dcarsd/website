/* Fills the page from content/content.js. If content is missing, the HTML below stays as written. */
(function () {
  var C = window.CONTENT;
  if (!C) return;

  function e(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function url(u) {
    u = String(u || '').trim();
    return /^(https?:|mailto:|tel:|\.?\/|#)/i.test(u) ? e(u) : '';
  }
  function byClass(n) { return document.getElementsByClassName(n); }

  /* Publications (home + R&D) */
  var pw = document.getElementById('projWrap');
  if (pw && C.publications && C.publications.length) {
    pw.innerHTML = C.publications.map(function (p) {
      var btn = '<button>' + e(p.button || 'Explore') + "<i class='fas fa-external-link-alt'></i></button>";
      var act = p.link ? '<a target="_blank" href="' + url(p.link) + '">' + btn + '</a>' : btn;
      return '<div class="box ' + e(p.color || 'g1') + '">' +
        '<img alt="' + e(p.title) + '" src="' + url(p.image) + '">' +
        '<div class="report-text"><h3>' + e(p.tag) + '</h3><h2>' + e(p.title) + '</h2><p>' + e(p.text) + '</p>' + act + '</div></div>';
    }).join('\n');
  }

  /* Clients */
  var cw = byClass('client-wrap')[0];
  if (cw && C.clients && C.clients.length) {
    var old = cw.getElementsByClassName('wrap2');
    while (old.length) old[0].parentNode.removeChild(old[0]);
    var html = '';
    for (var i = 0; i < C.clients.length; i += 3) {
      html += '<div class="wrap2">' + C.clients.slice(i, i + 3).map(function (c) {
        return '<div class="l1 grad-' + e(c.color || 'blue') + '"><img alt="client-logo img" src="' + url(c.logo) + '">' +
          '<div class="text-client"><p>' + e(c.text) + '</p></div></div>';
      }).join('') + '</div>';
    }
    cw.insertAdjacentHTML('beforeend', html);
  }

  /* Events */
  var soon = byClass('coming-soon-R&D')[0];
  if (soon && byClass('carousel-section').length && C.events && C.events.length) {
    var anchor = soon.closest('section');
    var olds = document.querySelectorAll('section.home-blah, section.carousel-section');
    for (var k = 0; k < olds.length; k++) olds[k].parentNode.removeChild(olds[k]);
    var out = C.events.map(function (v, n) {
      var flip = n % 2 ? ' style="transform: scaleX(-1);"' : '';
      return '<section ' + (n ? '' : 'id="home" ') + 'class="home-blah" style="background-color:white;' + (n ? '' : ' min-height:60vh;') + '">' +
        '<img alt="event img" class="blah-img" src="' + url(v.banner) + '">' +
        '<div class="pattern"><img alt="event img"' + flip + ' src="./assets/img/ttttttttttt.png"></div></section>' +
        '<section class="carousel-section" style="padding:2rem;"><div class="ody-div">' +
        '<h1 style="font-size: 3rem;"><span style="color:#83bc3d;">' + e(v.titleGreen) + '</span>' + e(v.titleRest) + '</h1>' +
        '<p>' + e(v.text) + '</p></div><div class="carousel-container">' +
        '<button class="nav-btn prev" onclick="this.nextElementSibling.scrollBy({left: -300, behavior: \'smooth\'})">\u276E</button>' +
        '<div class="carousel">' + (v.images || []).map(function (s) {
          return '<div><div class="img"><img alt="event img" src="' + url(s) + '"></div></div>';
        }).join('') + '</div>' +
        '<button class="nav-btn next" onclick="this.previousElementSibling.scrollBy({left: 300, behavior: \'smooth\'})">\u276F</button>' +
        '</div></section>';
    }).join('');
    anchor.insertAdjacentHTML('beforebegin', out);
  }

  /* Footer / contact (every page that has one) */
  var S = C.site, fw = byClass('footer-wrap');
  if (S) for (var f = 0; f < fw.length; f++) {
    var r = fw[f], el;
    if (S.email && (el = r.querySelector('a[href^="mailto:"]'))) el.href = 'mailto:' + S.email;
    if (S.whatsapp && (el = r.querySelector('a[href*="whatsapp"]'))) el.href = S.whatsapp;
    if (S.instagram && (el = r.querySelector('a[href*="instagram"]'))) el.href = S.instagram;
    if (S.linkedin && (el = r.querySelector('a[href*="linkedin"]'))) el.href = S.linkedin;
    if (S.contactText && (el = r.querySelector('.f-div1 h3'))) el.textContent = S.contactText;
    if (S.mailText && (el = r.querySelector('.mail-div h4'))) el.textContent = S.mailText;
    if (S.newsletterText && (el = r.querySelector('.f-vert1 > p'))) el.textContent = S.newsletterText;
  }
})();
