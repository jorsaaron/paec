fetch(window.location.origin + '/participantes')
  .then(res => res.json())
  .then(data => {
    document.getElementById('participantes').innerHTML = data.map(p =>
      `<p>${p.nombre} (${p.tipo}) - ${p.correo}</p>`
    ).join('');
  });

function verAportes() {
  const nom = document.getElementById('filtro').value;
  fetch(window.location.origin + '/aportes?participante=' + nom)
    .then(res => res.json())
    .then(data => {
      document.getElementById('aportes').innerHTML = data.map(a =>
        `<p>${a.participante}: ${a.kilos_reciclados} kg — ${a.lugar_recoleccion}, ${a.fecha_entrega} ${a.hora_entrega}</p>`
      ).join('');
    });
}
