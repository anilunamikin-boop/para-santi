/*
 * PERSONALIZÁ TU PÁGINA ACÁ
 * Reemplazá el nombre, las fotos, canciones, razones, carta y mensajes.
 */
const CONFIG = {
  boyfriendName: 'SANTI',
  relationshipStart: '2026-07-15T06:48:00',
  youtubeVideoId: 'g4-93xNNKJI',

  // Agregá una entrada por foto. Guardá los archivos dentro de imagenes/.
  memories: [
    { image: 'imagenes/primera ft.jpg', caption: 'jeje', note: 'NUESTRO PRIMER RECUERDO' },
    { image: 'imagenes/foto super.jpg', caption: 'Así de tontoss', note: 'UN MOMENTO SIMPLE' },
    { image: 'imagenes/juntitos.jpeg', caption: 'Autistas forever', note: 'VOS Y YO' },
    { image: 'imagenes/yo aplastada.jpeg', caption: 'Me aplastaste', note: 'UN MOMENTO JEJEJE' },
  ],

  // Pegá un enlace oficial (Spotify, YouTube Music, etc.) en listenUrl.
  songs: [
    { title: 'Nuestra canción', artist: 'nsqk', reason: 'Porque cada vez que suena, me acuerdo de vos.', listenUrl: 'https://open.spotify.com/intl-es/track/4Zsk8bKl9FIvaDPBO464BI?si=049b428bac184147' },
    { title: 'En la que pienso en vos', artist: 'milo j', reason: 'Tiene algo de esos momentos que son solamente tuyos.', listenUrl: 'https://open.spotify.com/intl-es/track/2Yr4uOmBLMepYXQbhOVNTO?si=9929a352b5e246ee' },
    { title: 'te dedico', artist: 'enjambre', reason: 'La pondría de fondo para cualquier plan con vos.', listenUrl: 'https://open.spotify.com/intl-es/track/1v15LSVQiEsGm4FK8SH7rI?si=71e75c725e2f4ef8' }
  ],

  reasons: [
    'Tu forma de hacerme reír.',
    'Cómo hablás de las cosas que te gustan.',
    'Nuestros chistes malos.',
    'Los momentos estúpidos con vos.',
    'Me hacés sentir especial, y no solo de autista',
    'Te amo tanto.',
  ],

  secretMessages: [
    { button: 'Si estás triste ♡', title: 'No estás solo', message: 'Ojalá pudiera abrazarte ahora. Acordate de que estoy acá para vos, en los días fáciles y también en los que cuestan.' },
    { button: 'Si me extrañás', title: 'Yo también', message: 'Si pudiera, aparecería ahora mismo para darte un abrazo largo. Mientras tanto, guardate este pedacito de amor.' },
    { button: 'Si necesitás sonreír', title: 'Una misión', message: 'Pensá en uno de nuestros chistes malos. como por ejemplo, de que vamos a matar al vende medias... mi primer chiste malo con vos JAJA.' },
    { button: 'Si querés saber cuánto te quiero', title: 'Muchísimo', message: 'Más que todas las palabras que entran en esta página. Y eso que la hice solamente para vos.' },
  ],
};

const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function setBoyfriendName() {
  $('#boyfriend-name').textContent = CONFIG.boyfriendName;
  document.title = `Para vos ♡ — Chari y ${CONFIG.boyfriendName}`;
}

function updateCounter() {
  const start = new Date(CONFIG.relationshipStart).getTime();
  const elapsed = Math.max(0, Date.now() - start);
  const totalSeconds = Math.floor(elapsed / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  $('#days').textContent = days.toLocaleString('es-AR');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#minutes').textContent = String(minutes).padStart(2, '0');
  $('#seconds').textContent = String(seconds).padStart(2, '0');
}

function renderMemories() {
  const grid = $('#memory-grid');
  grid.innerHTML = CONFIG.memories.map((memory, index) => `
    <article class="memory-card">
      <div class="memory-photo">
        <div class="memory-fallback" aria-hidden="true"><div><span>♡</span>SUMÁ TU FOTO</div></div>
        <img src="${escapeHTML(memory.image)}" alt="${escapeHTML(memory.caption)}" loading="lazy">
      </div>
      <p class="memory-caption">${escapeHTML(memory.caption)}<small>${escapeHTML(memory.note || `RECUERDO ${String(index + 1).padStart(2, '0')}`)}</small></p>
    </article>`).join('');

  grid.querySelectorAll('img').forEach((image) => {
    const fallback = image.previousElementSibling;
    const showFallback = () => { image.hidden = true; fallback.hidden = false; };
    fallback.hidden = true;
    image.addEventListener('error', showFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) showFallback();
  });
}

function renderSongs() {
  $('#song-grid').innerHTML = CONFIG.songs.map((song, index) => {
    const hasLink = Boolean(song.listenUrl && song.listenUrl.trim());
    const link = hasLink
      ? `<a class="listen-link" href="${escapeHTML(song.listenUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Escuchar ${escapeHTML(song.title)} en otra pestaña">↗</a>`
      : '<span class="listen-link" aria-disabled="true" title="Agregá un enlace en script.js">↗</span>';
    return `<article class="song-card"><div class="song-cover" aria-hidden="true">${String(index + 1).padStart(2, '0')}<span>♡</span></div><div><h3 class="song-title">${escapeHTML(song.title)}</h3><span class="song-artist">${escapeHTML(song.artist)}</span><p class="song-reason">${escapeHTML(song.reason)}</p></div>${link}</article>`;
  }).join('');
}

function renderReasons() {
  $('#reasons-grid').innerHTML = CONFIG.reasons.map((reason, index) => `
    <article class="reason-card"><span class="reason-number">${String(index + 1).padStart(2, '0')} / ♡</span><p>${escapeHTML(reason)}</p></article>`).join('');
}

function setupSecrets() {
  const buttons = $('#secret-buttons');
  const modal = $('#message-modal');
  const closeModal = () => modal.close();
  buttons.innerHTML = CONFIG.secretMessages.map((item, index) => `
    <button class="secret-button" type="button" data-message-index="${index}">${escapeHTML(item.button)}</button>`).join('');
  buttons.addEventListener('click', (event) => {
    const button = event.target.closest('[data-message-index]');
    if (!button) return;
    const message = CONFIG.secretMessages[Number(button.dataset.messageIndex)];
    $('#modal-title').textContent = message.title;
    $('#modal-message').textContent = message.message;
    modal.showModal();
    $('#modal-close').focus();
  });
  $('#modal-close').addEventListener('click', closeModal);
  $('#modal-done').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
}

function setupVideo() {
  const id = CONFIG.youtubeVideoId.trim();
  if (!id) return;
  // Formato de inserción oficial; no reproduce hasta que la persona lo inicia.
  $('#youtube-player').src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`;
  $('#youtube-player').hidden = false;
  $('#video-placeholder').hidden = true;
}

function setupEntry() {
  const intro = $('#intro');
  $('#enter-button').addEventListener('click', () => {
    $('#main-content').hidden = false;
    document.body.classList.remove('intro-active');
    intro.classList.add('is-leaving');
    window.setTimeout(() => intro.remove(), 700);
    window.setTimeout(() => document.querySelectorAll('.reveal').forEach((item) => observer?.observe(item)), 50);
  });
}

let observer;
function setupReveals() {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
    return;
  }
  observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  if (!$('#main-content').hidden) document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
}

function setupFloatingHearts() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = $('#hearts-layer');
  const addHeart = () => {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = Math.random() > .25 ? '♡' : '✦';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${10 + Math.random() * 12}px`;
    heart.style.setProperty('--duration', `${12 + Math.random() * 7}s`);
    heart.style.setProperty('--drift', `${Math.round(Math.random() * 90 - 45)}px`);
    layer.append(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  };
  window.setInterval(addHeart, 1900);
}

setBoyfriendName();
renderMemories();
renderSongs();
renderReasons();
setupSecrets();
setupVideo();
updateCounter();
window.setInterval(updateCounter, 1000);
setupEntry();
setupReveals();
setupFloatingHearts();
