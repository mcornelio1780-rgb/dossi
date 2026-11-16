# Guardar los pedidos de piloto gratis (sin Firebase ni Supabase)

La web **no necesita base de datos ni login para funcionar**. La app procesa todo en el navegador del usuario.
Lo único que vale la pena guardar ahora son los pedidos del formulario «Pedir piloto». Mientras no configures nada,
el formulario abre el correo con los datos dirigidos a manyosa@limly.io: no se pierde nada.

## Opción recomendada: Google Sheets (gratis, 10 minutos, sin tarjeta)

Cada pedido llega como una fila nueva en una hoja de cálculo.

1. Crea una hoja nueva en Google Sheets. Llámala «Dossi · Leads».
2. Menú **Extensiones → Apps Script**.
3. Borra lo que aparece y pega el contenido de `docs/google-sheets-leads.gs`. Guarda (icono de disquete).
4. Botón **Implementar → Nueva implementación**.
   - Tipo (engranaje): **Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier usuario**.
5. Pulsa **Implementar**, autoriza con tu cuenta de Google (aparece un aviso de «app no verificada»: es tu propio script; pulsa *Configuración avanzada → Ir a…*).
6. Copia la **URL de la aplicación web** (termina en `/exec`).
7. En GitHub abre `config.js`, pega esa URL en `formEndpoint: ""` y guarda. Vercel se actualiza solo en 1 minuto.

## Otras opciones gratuitas

| Servicio | Plan gratis | Cuándo usarlo |
| --- | --- | --- |
| Google Sheets + Apps Script | Sin límite práctico para este volumen | **Ahora.** Lo más simple |
| Web3Forms / Formspree | ~250 / 50 envíos al mes, llegan al correo | Si no quieres tocar Google |
| Firebase (plan Spark) | Firestore 1 GB, 50.000 lecturas al día, login incluido | Cuando haya cuentas de usuario |
| Supabase (plan Free) | Postgres 500 MB, login incluido; se pausa tras 7 días sin uso | Igual que Firebase |
| Appwrite Cloud / Neon | Planes gratis con base de datos | Alternativas si las anteriores no convencen |

## ¿Y Firebase?

No lo necesitas para lanzar: hoy no hay cuentas ni login. Puedes dejarlo sin activar. Cuando quieras que las personas
guarden sus expedientes en la nube o inicien sesión, se integra en una versión siguiente.
Las «reglas de seguridad» de Firestore se pegan en la consola de Firebase → **Firestore Database → pestaña Reglas** → Publicar.
