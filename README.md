# Dossi · sitio web (landing + app)

Sitio estático en 4 idiomas (español, inglés, portugués, francés). No necesita servidor, base de datos ni login.
Funciona completo aunque todavía no tengas los links de pago: los botones de compra llevan a la prueba gratis o al formulario, sin avisos de «modo de prueba».

## Qué hay en la carpeta

| Archivo | Para qué |
| --- | --- |
| `index.html` | Landing (dominio principal `/`) |
| `app.html` | MVP: arma el expediente (`/app`, demo en `/app#demo`) |
| `gracias.html` | Página después del pago (`/gracias`) |
| `legal.html` | Privacidad y términos (`/legal`) |
| `config.js` | **El único archivo que editas**: correo, links de Polar, formulario |
| `vercel.json` | URLs limpias y cabeceras de seguridad |
| `docs/` | Guías: guardar leads gratis en Google Sheets |

## Paso 1 · Subir a GitHub (sin instalar nada)

1. Entra a github.com → **New repository** → nombre `dossi-web` → Private o Public → **Create repository**.
2. En la pantalla del repo vacío, pulsa **uploading an existing file**.
3. Descomprime el zip en tu Mac y **arrastra el contenido de la carpeta** (no la carpeta en sí: `index.html` debe quedar en la raíz).
   La carpeta `docs` se arrastra igual. Si no aparece `.gitignore`, no pasa nada.
4. **Commit changes**.

## Paso 2 · Publicar en Vercel (plan Hobby gratis)

1. vercel.com → **Add New → Project** → importa `dossi-web` desde GitHub.
2. Framework Preset: **Other**. No toques Build Command ni Output Directory.
3. **Deploy**. En un minuto tienes una URL tipo `https://dossi-web.vercel.app`.
4. Desde ahora, cada cambio que guardes en GitHub se publica solo.

## Paso 3 · Crear los checkout links en Polar (ya con la web publicada)

En Polar: **Products → (producto) → ⋯ → Create Checkout Link**.

- **Success URL** (es opcional; si la dejas vacía, Polar muestra su propia página de confirmación):
  `https://TU-DOMINIO/gracias?checkout_id={CHECKOUT_ID}`
- **Return URL** (opcional, botón «volver»): `https://TU-DOMINIO/`

Crea uno por producto: $19 Expediente, $29 Renovación, $149 Piloto.

## Paso 4 · Pegar los links

En GitHub abre `config.js` → icono del lápiz ✏️ → pega cada link entre las comillas → **Commit changes**:

```js
checkout: {
  file:  "https://buy.polar.sh/polar_cl_…",
  renew: "https://buy.polar.sh/polar_cl_…",
  pilot: "https://buy.polar.sh/polar_cl_…"
},
```

Vercel publica el cambio en ~1 minuto. No hace falta un zip nuevo.

## Opcional

- Guardar pedidos de piloto en Google Sheets: `docs/GUARDAR-LEADS.md`.
- Nombre de tu LLC en el pie: `companyName` en `config.js`.
- Dominio propio: Vercel → Project → Settings → Domains.
- Cobrar dentro de la app con códigos: `paywall: true` y `unlockHashes` en `config.js` (pedir los códigos a Claude).

## Notas técnicas

- Librerías por CDN (Tesseract.js, pdf.js, jsPDF, SheetJS): necesita internet; los documentos del usuario nunca salen de su navegador.
- Contacto: manyosa@limly.io (cambiable en `config.js`).
