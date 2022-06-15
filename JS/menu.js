let ingreso = prompt(
    "Ingresa una opción \n 1-Hamburguesa con queso simple \n 2- Hamburguesa con queso doble \n 3-Hamburguesa con queso cuádruple \n 4-Hamburguesa completa \n Ingresa OK para seguir con tu pedido"
  );
  if (ingreso == "OK") alert("Gracias, que lo disfrutes");
  
  while (ingreso != "OK") {
    switch (ingreso) {
      case "1":
        alert("Has seleccionado la hamburguesa simple, en total serían $600");
        break;
      case "2":
        alert("Has seleccionado la hamburguesa doble, en total serían $700");
        break;
      case "3":
        alert("Has seleccionado la hamburguesa triple, en total serían $800");
        break;
      case "4":
        alert("Has seleccionado la hamburguesa cuádruple, en total serían $900");
        break;
  
      default:
        alert("Opción no válida");
        break;
    }
    ingreso = prompt(
        "Ingresa una opción \n 1-Hamburguesa con queso simple \n 2- Hamburguesa con queso doble \n 3-Hamburguesa con queso cuádruple \n 4-Hamburguesa completa \n Ingresa OK para seguir con tu pedido"
    );
    if (ingreso == "OK") alert("Gracias, que lo disfrutes");
  }

  let papas = prompt(
    "Ingresa una opción \n 1-papas chicas \n 2- papas grandes \n Ingresa OK para seguir con tu pedido"
  );
  if (papas == "OK") alert("Gracias, que lo disfrutes");
  
  while (papas != "OK") {
    switch (papas) {
      case "1":
        alert("Has seleccionado las papas chicas, en total serían $500");
        break;
      case "2":
        alert("Has seleccionado las papas grandes, en total serían $750");
        break;

      default:
        alert("Opción no válida");
        break;
    }
    papas= prompt(
       "Ingresa una opción \n 1-papas chicas \n 2- papas grandes \n Ingresa OK para seguir con tu pedido"
  );
    if (papas == "OK") alert("Gracias, que lo disfrutes");
  }

  let bebida = prompt(
    "Ingresa una opción \n 1-Agua \n 2- Coca-Cola \n 3- Sprite \n 4- Cerveza \n 5- Limonada \n Ingresa OK para finalizar con tu pedido"
  );
  if (bebida == "OK") alert("Gracias, que lo disfrutes");
  
  while (bebida != "OK") {
    switch (bebida) {
      case "1":
        alert("Has seleccionado agua, en total serían $300");
        break;
      case "2":
        alert("Has seleccionado Coca-cola, en total serían $450");
        break;
      case "3":
        alert("Has seleccionado Sprite, en total serían $450");
        break;
      case "4":
          alert("Has seleccionado cerveza, en total serían $600");
          break;
      case "5":
        alert("Has seleccionado limonada, en total serían $400");
        break;

      default:
        alert("Opción no válida");
        break;
    }
    bebida = prompt(
      "Ingresa una opción \n 1-Agua \n 2- Coca-Cola \n 3- Sprite \n 4- Cerveza \n 5- Limonada \n Ingresa OK para finalizar con tu pedido"
  );
    if (bebida == "OK") alert("Gracias, que lo disfrutes");
  }
  

  

const listaIngredientes = [];
let   cantidad = 5;
console.log(listaIngredientes);

do{

   let entrada = prompt ("crea tu hamburguesa perfecta, elige los ingredientes extra que deseas");
   listaIngredientes.push (entrada);
   console.log (listaIngredientes.length);

}while(listaIngredientes.length != cantidad)
const nuevaLista = listaIngredientes.concat (["Estos son los ingredientes extra que seleccionaste... ahora a dsfrutar! :)"]);

alert(nuevaLista.join("\n")); 

