document.addEventListener('DOMContentLoaded', () => {
    const categoriaElement = document.querySelectorAll('input[name="filter"]');
    const productos = document.querySelectorAll('.producto');
    const contadorElemento = document.getElementById('contador');

    let numero = 100;

    const actualizarProductos = (categoria) => {
        productos.forEach(producto => {
            producto.classList.toggle('mostrar', categoria === 'todos' || producto.classList.contains(categoria));
        });
    };

    categoriaElement.forEach(categoria => categoria.addEventListener('change', (event) => actualizarProductos(event.target.value)));

    const actualizarContador = () => {
        if (numero >= 0) {
            contadorElemento.textContent = numero--;
            setTimeout(() => requestAnimationFrame(actualizarContador), 60000);
        }
    };

    mostrarCarrito = () => {
        const botonCarrito = document.getElementById('botonCarrito');
        const tarjetaCarrito = document.getElementById('tarjetaCarrito');
        tarjetaCarrito.classList.toggle('animation');

        botonCarrito.innerText = botonCarrito.innerText.includes('Mostrar') ? 'Ocultar carrito' : 'Mostrar carrito';
    }

    actualizarContador();
    actualizarProductos('todos');
});
