const productos = [
  {
      "Id": 1,
      "Nombre": "Classic burguer",
      "Descripcion": "Doble medallón de 120g de carne vacuna, cheddar x4, lechuga, tomate, cebolla morada, pepinillos, salsa Thousand Island",
      "Precio": 1150,
      "Foto":"" ,
      "Categoria": "Comida"
  },

  {
      "Id": 2,
      "Nombre": "Cheese burger",
      "Descripcion": "Medallón de 120g de carne vacuna, cheddar x4",
      "Precio": 1100,
      "Foto": "",
      "Categoria": "Comida"
  },

  {
      "Id": 3,
      "Nombre": "Crispy burger",
      "Descripcion": "Doble medallón de 120g de carne vacuna, cheddar x4, bacon, cebolla crispy, alioli",
      "Precio": 1200,
      "Foto": "",
      "Categoria": "Comida"
      
  },

  {
      "Id": 4,
      "Nombre": "Mushroom burger",
      "Descripcion": "Doble medallón de 120g de carne vacuna, queso emmental x4, hongos salteados, cebolla caramelizada, queso azul",
      "Precio": 1200,
      "Foto": "",
      "Categoria": "Comida"
  }, 
      
  {
      "Id": 5,
      "Nombre": "Mexican burguer",
      "Descripcion": "Doble medallón de 120g de carne vacuna, cheddar x4, nachos, guacamole, salsa de cheddar",
      "Precio": 1200,
      "Foto": "",
      "Categoria": "Comida"
      
  },

  {
      "Id": 6,
      "Nombre": "Medallón extra",
      "Descripcion": "Medallón de 120g de carne vacuna",
      "Precio": 120,
      "Foto": "",
      "Categoria": "Comida"
  },

  {
      "Id": 7,
      "Nombre": "Vegan burger",
      "Descripcion": "Medallón isnot, cheddar x4, cebolla caramelizada, hongos, mayonesa vegana",
      "Precio": 1200,
      "Foto": "",
      "Categoria": "Comida"
  },

  {
      "Id": 8,
      "Nombre": "Papas chicas",
      "Descripcion": "Porción de papas para uno",
      "Precio": 500,
      "Foto": "",
      "Categoria": "Papasfritas"
  },

  {
      "Id": 9,
      "Nombre": "Papas grandes",
      "Descripcion": "Porción de papas para compartir",
      "Precio": 800,
      "Foto": "",
      "Categoria": "Papasfritas"
  },

  {
      "Id": 10,
      "Nombre": "Gaseosas",
      "Descripcion": "línea coca-cola",
      "Precio": 400,
      "Foto": "",
      "Categoria": "Bebidas"
  },

  {
      "Id": 11,
      "Nombre": "Agua mineral",
      "Descripcion": "línea coca-cola",
      "Precio": 350,
      "Foto": "",
      "Categoria": "Bebidas"
  },

  {
      "Id": 12,
      "Nombre": "Limonada",
      "Descripcion": "Limonada casera, con menta, jengibre y azucar",
      "Precio": 400,
      "Foto": "",
      "Categoria": "Bebidas"
  }
]

let carrito = []

//Ejemplo con ciclo usando map y reduce
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
} 