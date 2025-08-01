// LS already exposes dscc globally; do NOT use require()
// Grab the tableTransform helper
const { subscribeToData, tableTransform } = dscc;

function drawViz(data, element) {
  const rows = data.tables.DEFAULT || [];
  if (rows.length === 0) {
    element.innerHTML = '<p>No data available</p>';
    return;
  }

  // Build HTML
  let html = '<table border="1" cellpadding="4" cellspacing="0">';
  html += '<thead><tr>';
  Object.keys(rows[0]).forEach(key => {
    html += `<th>${key}</th>`;
  });
  html += '</tr></thead><tbody>';
  rows.forEach(row => {
    html += '<tr>';
    Object.values(row).forEach(cell => {
      html += `<td>${cell}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';

  // Write into the container LS gave us
  element.innerHTML = html;
}

// Register with DSCC
subscribeToData(drawViz, { transform: tableTransform });
