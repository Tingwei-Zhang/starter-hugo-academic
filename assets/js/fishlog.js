(function () {
  var root = document.querySelector('.fishlog');
  if (!root) return;

  var groups = Array.prototype.slice.call(root.querySelectorAll('.fishlog-group'));
  var chips = Array.prototype.slice.call(root.querySelectorAll('.fishlog-chip'));

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.getAttribute('data-filter');
      chips.forEach(function (c) {
        c.classList.toggle('is-active', c === chip);
      });
      groups.forEach(function (group) {
        group.hidden = filter !== '*' && group.getAttribute('data-location') !== filter;
      });
    });
  });

  var lightbox = document.querySelector('.fishlog-lightbox');
  if (!lightbox) return;

  var img = lightbox.querySelector('img');
  var lastFocused = null;
  var fields = {
    species: lightbox.querySelector('[data-lb-species]'),
    location: lightbox.querySelector('[data-lb-location]'),
    date: lightbox.querySelector('[data-lb-date]'),
    size: lightbox.querySelector('[data-lb-size]'),
    notes: lightbox.querySelector('[data-lb-notes]')
  };

  function open(card) {
    lastFocused = card;
    var full = card.getAttribute('data-full');
    if (full) {
      img.src = full;
      img.alt = card.getAttribute('data-species') || '';
      img.hidden = false;
    } else {
      img.removeAttribute('src');
      img.hidden = true;
    }
    fields.species.textContent = card.getAttribute('data-species') || '';
    fields.location.textContent = card.getAttribute('data-location') || '';
    fields.date.textContent = card.getAttribute('data-date') || '';
    fields.size.textContent = card.getAttribute('data-size') || '';
    fields.notes.textContent = card.getAttribute('data-notes') || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.fishlog-close').focus();
  }

  function close() {
    lightbox.hidden = true;
    img.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  root.addEventListener('click', function (e) {
    var card = e.target.closest('.fish-card');
    if (card) open(card);
  });

  root.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var card = e.target.closest('.fish-card');
    if (!card) return;
    e.preventDefault();
    open(card);
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.closest('.fishlog-close')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) close();
  });
})();
