fetch('https://TUDOMINIO/render/o/3000/participantes')
  .then(res => res.json())
  .then(data => {
    document.getElementById('participantes').innerHTML = data.map(p =>
      `<p>${p.nombre} (${p.tipo}) - ${p.correo}</p>`
    ).join('');
  });
function verAportes() {
  const nombre = document.getElementById('filtro').value;
  fetch(`https://paec-53s0.onrender.com/aportes?participante=${nombre}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('aportes').innerHTML = data.map(a =>
        `<p>${a.participante}: ${a.kilos_reciclados} kg, ${a.lugar_recoleccion}, ${a.fecha_entrega} ${a.hora_entrega}</p>`
      ).join('');
    });
}
