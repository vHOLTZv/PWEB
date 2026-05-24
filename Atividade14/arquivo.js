// Selecionando os elementos do HTML pelos seus IDs
const campoTexto = document.getElementById('textoInput');
const btnMaiuscula = document.getElementById('btnMaiuscula');
const btnMinuscula = document.getElementById('btnMinuscula');

btnMaiuscula.addEventListener('click', function() {
    campoTexto.value = campoTexto.value.toUpperCase();
});
btnMinuscula.addEventListener('click', function() {
    campoTexto.value = campoTexto.value.toLowerCase();
});
