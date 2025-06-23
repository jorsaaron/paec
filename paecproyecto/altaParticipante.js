document.getElementById('formParticipante').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    nombre: document.getElementById('nombre').value,
    tipo: document.getElementById('tipo').value,
    correo: document.getElementById('correo').value,
    telefono: document.getElementById('telefono').value
  };
  await fetch('https://paec-53s0.onrender.com', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  alert('Participante guardado');
});
