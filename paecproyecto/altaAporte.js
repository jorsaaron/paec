document.getElementById('formAporte').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    participante: document.getElementById('participante').value,
    kilos_reciclados: parseFloat(document.getElementById('kilos').value),
    lugar_recoleccion: document.getElementById('lugar').value,
    fecha_entrega: document.getElementById('fecha').value,
    hora_entrega: document.getElementById('hora').value
  };
  await fetch('https://paec-53s0.onrender.com', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  alert('Aporte guardado');
});
