const dscc = require('dscc');

const drawViz = (data) => {
  const container = document.getElementById('viz');
  const rows = data.tables.DEFAULT;

  if (!rows || rows.length === 0) {
    container.innerHTML = '<p>No data available</p>';
    return;
  }

  let html = '<table border="1" cellpadding="4" cellspacing="0">';
  html += '<thead><tr>';

  // Create headers
  Object.keys(rows[0]).forEach((key) => {
    html += `<th>${key}</th>`;
  });

  html += '</tr></thead><tbody>';

  // Add rows
  rows.forEach((row) => {
    html += '<tr>';
    Object.values(row).forEach((cell) => {
      html += `<td>${cell}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  container.innerHTML = html;
};

// Register the draw function
dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });
