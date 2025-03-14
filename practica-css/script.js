document.addEventListener("DOMContentLoaded", function () {
    const categoriaElement = document.getElementById("categoria");
    const productos = document.querySelectorAll(".producto");
    const contadorElemento = document.getElementById("contador");
    let numero = 100;

    // Función para mostrar/ocultar productos basados en la categoría
    function actualizarProductos() {
        const categoriaSeleccionada = categoriaElement.value;

        for (let i = 0; i < productos.length; i++) {
            const producto = productos[i];
            if (categoriaSeleccionada === "todos" || producto.classList.contains(categoriaSeleccionada)) {
                producto.classList.add("mostrar");
            } else {
                producto.classList.remove("mostrar");
            }
        }
    }

    categoriaElement.addEventListener("change", actualizarProductos);

    // Contador
    const intervalo = setInterval(() => {
        if (numero >= 0) {
            contadorElemento.textContent = numero--;
        } else {
            clearInterval(intervalo);
        }
    }, 1000);

    actualizarProductos();
});
