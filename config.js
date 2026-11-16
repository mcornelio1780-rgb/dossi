/* =====================================================================
   DOSSI · CONFIGURACIÓN ÚNICA DEL SITIO
   Es el ÚNICO archivo que tienes que editar cuando tengas tus links.
   Edítalo en GitHub (lápiz ✏️ → "Commit changes") y Vercel publica solo.
   Si un valor queda vacío (""), la web sigue funcionando normal:
   - Botones de compra sin link  → llevan a la app (prueba gratis) o al formulario.
   - Formulario sin endpoint     → abre el correo de contacto con los datos.
   ===================================================================== */
window.DOSSI_CONFIG = {
  // Correo de contacto que aparece en la web y recibe los pedidos de piloto
  contactEmail: "manyosa@limly.io",

  // Nombre legal de tu LLC para el pie de página (déjalo "" para no mostrarlo)
  companyName: "",

  // Links de checkout de Polar (Products → ⋯ → Checkout link). Pega la URL completa.
  checkout: {
    file:  "",   // Expediente Listo  · $19
    renew: "",   // Renovación        · $29/año
    pilot: ""    // Piloto            · $149
  },

  // Opcional: URL que guarda los pedidos de piloto (Google Sheets, Formspree, Web3Forms…)
  // Ver docs/GUARDAR-LEADS.md. Vacío = se abre el correo.
  formEndpoint: "",

  // MVP: cobro dentro de la app. Déjalo en false hasta tener códigos de desbloqueo.
  paywall: false,
  unlockHashes: [],

  // Rutas internas (no cambiar)
  appUrl: "/app",
  homeUrl: "/"
};
