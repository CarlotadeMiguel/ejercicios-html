document.addEventListener('DOMContentLoaded', () => {
    const categoriaElement = document.querySelectorAll('input[name="filter"]');
    const productos = document.querySelectorAll('.producto');
    const contadorElemento = document.getElementById('contador');
    const arrayProductos = [
        { nombre: 'Producto 1', id: '0', precio: 19.99, moneda: '€' },
        { nombre: 'Producto 2', id: '1', precio: 29.99, moneda: '€' },
        { nombre: 'Producto 3', id: '2', precio: 9.99, moneda: '€' },
        { nombre: 'Producto 4', id: '3', precio: 19.99, moneda: '€' },
        { nombre: 'Producto 5', id: '4', precio: 19.99, moneda: '€' },
        { nombre: 'Producto 6', id: '5', precio: 49.99, moneda: '€' }
    ];

    let count = 0;
    let totalPrecio = 0;
    let numero = 100;

    // Función para actualizar productos según categoría
    const actualizarProductos = (categoria) => {
        productos.forEach(producto => {
            producto.classList.toggle('mostrar', categoria === 'todos' || producto.classList.contains(categoria));
        });
    };

    // Agrega evento a los filtros de categoría
    categoriaElement.forEach(categoria => categoria.addEventListener('change', (event) => actualizarProductos(event.target.value)));

    // Función para actualizar contador
    const actualizarContador = () => {
        if (numero >= 0) {
            contadorElemento.textContent = numero--;
            setTimeout(actualizarContador, 60000); // Simplificado
        }
    };

    // Función para mostrar/ocultar carrito
    mostrarCarrito = () => {
        const botonCarrito = document.getElementById('botonCarrito');
        const tarjetaCarrito = document.getElementById('tarjetaCarrito');
        tarjetaCarrito.classList.toggle('animation');
        botonCarrito.innerText = botonCarrito.innerText.includes('Mostrar') ? 'Ocultar carrito' : 'Mostrar carrito';
    };

    // Función para agregar productos al carrito
    addLi = (id) => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const b = document.createElement('button');
        const contenido = `Nombre: ${arrayProductos[id].nombre} - Precio: ${arrayProductos[id].precio}${arrayProductos[id].moneda}`;
        const textId = `carrito${count}`;
        li.id = textId;
        b.id = count;
        b.onclick = () => {
            document.getElementById(textId).remove();
            actualizarPrecio(-arrayProductos[id].precio)
        }
        b.textContent = 'Eliminar';
        p.textContent = contenido;
        document.getElementById('lista-carrito').appendChild(li).appendChild(p).appendChild(b);
        actualizarPrecio(arrayProductos[id].precio);
        count++;
    };

    // Función para actualizar precio total
    const actualizarPrecio = (precio) => {
        const textoTotal = document.getElementById('total');
        totalPrecio += precio;
        totalPrecio < 0 ? totalPrecio = 0 : totalPrecio;
        textoTotal.innerText = `Total: ${totalPrecio.toFixed(2)}€`;
    };

    // Inicializar funciones
    actualizarPrecio(0);
    actualizarContador();
    actualizarProductos('todos');
});
