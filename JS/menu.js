//desafío DOM
const productos = [
  {
      "Id": 1,
      "Nombre": "Classic burguer",
      "Descripcion": "Doble medallón de 120g de carne vacuna, cheddar x4, lechuga, tomate, cebolla morada, pepinillos, salsa Thousand Island",
      "Precio": 1150,
      "Foto":"https://lh5.googleusercontent.com/p/AF1QipMeYiD23AXzl7rQKmUKLQq31KeMSBTOLRL5LVWo=w650-h441-k-no",
      "Categoria": "Comida"
  },

  {
      "Id": 2,
      "Nombre": "Cheese burger",
      "Descripcion": "Medallón de 120g de carne vacuna, cheddar x4",
      "Precio": 1100,
      "Foto": "https://images.rappi.com.ar/products/65f6ed98-c40a-4b3e-b7ad-2349da370a9f-1604070925374.jpeg",
      "Categoria": "Comida"
  },

  {
      "Id": 3,
      "Nombre": "Crispy burger",
      "Descripcion": "Doble medallón de 120g de carne vacuna, cheddar x4, bacon, cebolla crispy, alioli",
      "Precio": 1200,
      "Foto": "https://images.deliveryhero.io/image/pedidosya/products/26893560-e3ef4182-2e9e-422a-87ec-76178aefcd49.jpeg?quality=90&width=248",
      "Categoria": "Comida"
      
  },

  {
      "Id": 4,
      "Nombre": "Mushroom burger",
      "Descripcion": "Doble medallón de 120g de carne vacuna, queso emmental x4, hongos salteados, cebolla caramelizada, queso azul",
      "Precio": 1200,
      "Foto": "https://images.rappi.com.ar/products/e44d7d61-7ecd-4057-93dc-a4e539e792e8-1604070727032.jpeg",
      "Categoria": "Comida"
  }, 
      
  {
      "Id": 5,
      "Nombre": "Mexican burguer",
      "Descripcion": "Doble medallón de 120g de carne vacuna, cheddar x4, nachos, guacamole, salsa de cheddar",
      "Precio": 1200,
      "Foto": "https://images.deliveryhero.io/image/pedidosya/products/26893567-1ed1f6a6-b435-40cb-a549-d06603233c01.jpeg?quality=90&width=248",
      "Categoria": "Comida"
      
  },

  {
      "Id": 6,
      "Nombre": "Medallón extra",
      "Descripcion": "Medallón de 120g de carne vacuna",
      "Precio": 120,
      "Foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_2xKYIcNMBNOOH9nxOiIE3T9ny3fz62bWQ&usqp=CAU",
      "Categoria": "Comida"
  },

  {
      "Id": 7,
      "Nombre": "Vegan burger",
      "Descripcion": "Medallón isnot, cheddar x4, cebolla caramelizada, hongos, mayonesa vegana",
      "Precio": 1200,
      "Foto": "https://images.rappi.com.ar/products/2160117-1619275619488.png",
      "Categoria": "Comida"
  },

  {
      "Id": 8,
      "Nombre": "Papas chicas",
      "Descripcion": "Porción de papas",
      "Precio": 500,
      "Foto": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/12/la-racion-de-papas-fritas-que-debes-consumir-diario.jpg",
      "Categoria": "Papasfritas"
  },

  {
      "Id": 9,
      "Nombre": "Papas grandes",
      "Descripcion": "Porción de papas para compartir",
      "Precio": 800,
      "Foto": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/12/la-racion-de-papas-fritas-que-debes-consumir-diario.jpg",
      "Categoria": "Papasfritas"
  },

  {
      "Id": 10,
      "Nombre": "Gaseosas",
      "Descripcion": "línea coca-cola",
      "Precio": 400,
      "Foto": "https://www.parrillalosviejos.com.ar/138-large_default/gaseosa-linea-coca-cola-500-ml.jpg",
      "Categoria": "Bebidas"
  },

  {
      "Id": 11,
      "Nombre": "Agua mineral",
      "Descripcion": "línea coca-cola",
      "Precio": 350,
      "Foto": "http://infokioscos.com.ar/wp-content/uploads22/Bonaqua-botella.png",
      "Categoria": "Bebidas"
  },

  {
      "Id": 12,
      "Nombre": "Limonada",
      "Descripcion": "Limonada casera, con menta, jengibre y azucar",
      "Precio": 400,
      "Foto": "https://www.ifeelgood.com.ar/img/articulos/limonada_con_curcuma_imagen1.jpg",
      "Categoria": "Bebidas"
  }
]

const productosLista = document.getElementById('productos')

const nuevoarray = productos.find(producto => producto.Id === 1)
console.log(nuevoarray) 
const renderCard = () => {
    let productosPanelVista = ''
    productos.forEach(producto => {
        {
            productosPanelVista += `<div class="col-12 mb-2 col-md-4 col-sm-4 ">
                <div class="card">
                    <div class="card-body">
                        <img id="fotoProducto" src="${producto.Foto}" widht=200px height=200px  >
                        <h5 id="tituloProducto">${producto.Nombre}</h5>
                        <p id="descripcionProducto">${producto.Descripcion}</p>
                        <p id="precioProducto">$${producto.Precio}</p>
                        <button id="btncompra" data-id="${producto.Id}"  name="btnComprar" class="btn btn-success">Comprar</button>
                    </div>
                </div>
            </div>`
        }
        
    });
    document.getElementById('productos').innerHTML = productosPanelVista
}

renderCard() 


let btnAgregar = document.getElementById('btncompra')
        
        btnAgregar.addEventListener('click',()=>{
            alert ("agregado al carrito")
        })


/* Desafío funciones de orden superior

let carrito = []


const agregarProductoCarrito = (id) => {
  let productoEncontrado = productos.find(producto => producto.Id === id)
  let productoCarrito = carrito.find(producto => producto.Id === id)
  if (productoCarrito === undefined) {
      alert("el producto " + productoEncontrado.Nombre + " fue agregado a su carrito")
      carrito.push({
          Cantidad: 1,
          ...productoEncontrado
      })
  } else {
      const prodIndex = carrito.findIndex((prod => prod.Id === id))
      carrito[prodIndex].Cantidad = carrito[prodIndex].Cantidad + 1
      carrito[prodIndex].Precio = carrito[prodIndex].Precio + productoEncontrado.Precio
  }
}


let nombre = prompt("ingrese su nombre")

const saludar = (nombre) => {
  alert("Bienvenido: " + nombre)
}
saludar(nombre)

while (nombre !== "salir") {
  let idProducto = Number(prompt("Ingrese el numero producto que desea comprar:" + "\n" + productos.map((producto) => ` \n ${producto.Id} - ${producto.Nombre}`)))
  agregarProductoCarrito(idProducto)
  let opcion = prompt("si desea seguir comprando, introduzca: si" + "\n" + "para finalizar introduzca: salir")
  if (opcion === "si") {
      idProducto = Number(prompt("Ingrese el numero producto que desea comprar:" + "\n" + productos.map((producto) => ` \n ${producto.Id} - ${producto.Nombre}`)))
      agregarProductoCarrito(idProducto)
      opcion = prompt("si desea seguir comprando, introduzca: si" + "\n" + "para finalizar introduzca: salir")
  }
  if (opcion === "salir") {
      alert("gracias por su compra. Su recibo es: " +
          "Productos :" + "\n" +
          "\n" + carrito.map((producto) => producto.Cantidad > 3
              ? ` \n Cantidad: ${producto.Cantidad} - Nombre: ${producto.Nombre} - Precio:${(producto.Precio - producto.Precio * 0.3)}`
              : ` \n Cantidad: ${producto.Cantidad} - Nombre: ${producto.Nombre} - Precio: ${producto.Precio}`)
          + "\n" +
          "Precio Total: " + carrito.reduce((acc, { Precio }) => acc + Precio, 0))
      break
  }
} */