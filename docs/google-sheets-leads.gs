// Dossi · recibe los pedidos de piloto de la web y los guarda en esta hoja.
// Pegar en Extensiones → Apps Script, luego Implementar → Aplicación web (acceso: Cualquier usuario).
const COLUMNS = ['ts', 'name', 'org', 'email', 'where', 'cases', 'lang'];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
  let data = {};
  try { data = JSON.parse(e.postData.contents); } catch (err) { data = e.parameter || {}; }
  sheet.appendRow(COLUMNS.map(c => String(data[c] || '').slice(0, 300)));
  // Aviso por correo al dueño de la hoja (opcional: borra estas 2 líneas si no lo quieres)
  MailApp.sendEmail(Session.getEffectiveUser().getEmail(), 'Nuevo pedido de piloto Dossi: ' + (data.org || ''),
    COLUMNS.map(c => c + ': ' + (data[c] || '')).join('\n'));
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
