/* ==========================================================================
   jquery-interactions.js
   Skill bar animations, timeline accordion, smooth scroll, contact form bridge
   ========================================================================== */

$(function () {

  /* ── Smooth nav scroll ───────────────────────────────────────────────── */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 40 }, 600);
    }
  });

  /* ── Animated skill bars on scroll ───────────────────────────────────── */
  function animateBarsInView() {
    $('.skill-bar:not(.done)').each(function () {
      var $bar = $(this);
      var top = $bar.offset().top;
      var fold = $(window).scrollTop() + $(window).height() - 80;
      if (top < fold) {
        var pct = parseInt($bar.data('level'), 10) || 0;
        $bar.find('.fill').animate({ width: pct + '%' }, 1100, 'swing');
        $bar.find('.lvl').each(function () {
          var $l = $(this);
          $({ n: 0 }).animate({ n: pct }, {
            duration: 1100,
            step: function (now) { $l.text(Math.round(now) + '%'); }
          });
        });
        $bar.addClass('done');
      }
    });
  }
  var ticking = false;
  $(window).on('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        animateBarsInView();
        ticking = false;
      });
      ticking = true;
    }
  });
  $(window).on('resize', animateBarsInView);
  animateBarsInView();

  /* ── Timeline accordion ──────────────────────────────────────────────── */
  $(document).on('click', '.tl-item .tl-head', function () {
    var $item = $(this).closest('.tl-item');
    var wasOpen = $item.hasClass('open');
    $('.tl-item').removeClass('open').find('.tl-body').slideUp(280);
    if (!wasOpen) {
      $item.addClass('open').find('.tl-body').slideDown(320);
    }
  });
  // open the most recent (first) by default
  $('.tl-item').first().addClass('open').find('.tl-body').show();

  /* ── Contact form validation (bridge — also re-applied by React) ─────── */
  window.validateContactForm = function (data) {
    var errors = {};
    if (!data.name || !data.name.trim()) errors.name = 'Name required.';
    if (!data.email || !data.email.trim()) errors.email = 'Email required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = 'Invalid email format.';
    if (!data.message || data.message.trim().length < 10)
      errors.message = 'Message too short (min 10 chars).';
    return errors;
  };

  /* ── Live clock in topbar ────────────────────────────────────────────── */
  function tick() {
    var d = new Date();
    var h = String(d.getUTCHours()+1).padStart(2, '0');
    var m = String(d.getUTCMinutes()).padStart(2, '0');
    var s = String(d.getUTCSeconds()).padStart(2, '0');
    $('#clock').text(h + ':' + m + ':' + s + ' UTC+1');
  }
  setInterval(tick, 1000); tick();

  /* ── Hero entrance fade for side panel ───────────────────────────────── */
  $('.hero-side, .hero-foot, .hero-marquee').css({ opacity: 0 }).each(function (i) {
    $(this).delay(400 + i * 150).animate({ opacity: 1 }, 600);
  });

});
