const boton = document.querySelector('#boton-importante');

botonImportante.addEventListener("click", function() {
    boton.textContent = "¡Aplicado!";
    boton.style.backgroundColor = green;
    boton.disabled = true;
});
