# Para vos ♡ — la página de Chari

Una página romántica hecha con HTML, CSS y JavaScript sin frameworks ni dependencias. No hace falta instalar nada para verla.

## 1. Abrir la página

Abrí `index.html` con doble clic en el Finder, o usá la extensión Live Preview / Live Server si ya tenés una instalada. Google Fonts necesita conexión a internet; si no hay conexión, se usan fuentes alternativas incluidas en el sistema.

## 2. Personalizar el nombre y la fecha

Abrí `script.js` y buscá el objeto `CONFIG` al principio:

- `boyfriendName`: reemplazá `[NOMBRE DE MI NOVIO]` por su nombre o apodo.
- `relationshipStart`: dejá la fecha `2026-08-15` o cambiala si necesitás corregirla. El contador muestra días, horas, minutos y segundos desde esa fecha. Si la fecha todavía no llegó, queda en cero hasta entonces.

## 3. Poner sus fotos

1. Copiá tus fotos dentro de la carpeta `imagenes/` (por ejemplo, `recuerdo-01.jpg`).
2. En `script.js`, agregá o reemplazá objetos en `CONFIG.memories`, indicando el nombre exacto de cada archivo, el texto `caption` y una nota opcional.
3. Usá rutas relativas como `imagenes/recuerdo-01.jpg`. Si una imagen falta, se verá un recuadro decorativo en su lugar.

## 4. Armar la lista de canciones

En `CONFIG.songs`, editá `title`, `artist` y `reason`. Pegá en `listenUrl` un enlace de escucha oficial, por ejemplo de Spotify o YouTube. Sin enlace, el botón queda inactivo. La página no descarga ni reproduce música automáticamente.

## 5. Escribir tu carta

En `index.html`, buscá la sección de la carta y reemplazá el texto entre corchetes por el tuyo. Podés cambiar también el saludo y la firma de esa carta.

## 6. Agregar el video

En `script.js`, pegá el **ID** del video de YouTube en `youtubeVideoId`. Es la parte que aparece después de `v=` en una dirección del estilo `youtube.com/watch?v=ID`. La página construye un reproductor de privacidad mejorada y no lo reproduce automáticamente. Dejá la variable vacía para mostrar el espacio de invitación.

## 7. Sumar razones y mensajes secretos

- Agregá frases a la lista `CONFIG.reasons` en `script.js`.
- Modificá `button`, `title` y `message` dentro de `CONFIG.secretMessages` para editar los botones y lo que aparece en cada ventana.
- La carta final, la frase romántica y los textos visibles se pueden modificar directamente en `index.html`.

## Archivos

- `index.html`: contenido y estructura.
- `style.css`: paleta, tipografías, animaciones y adaptación a pantallas.
- `script.js`: contador y listas fáciles de editar.
- `imagenes/`: tus fotografías.

La página respeta la preferencia del dispositivo por reducir movimiento y funciona en pantallas de escritorio y celulares.
